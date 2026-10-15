const assert = require("node:assert/strict");
const { run, selectEntry } = require("../src/transform");

const items = [
  { id: "tech-one", category_key: "technology" },
  { id: "tech-two", category_key: "technology" },
  { id: "nature-one", category_key: "nature" },
];

function input(category = "all", histories = {}) {
  return {
    items,
    trmnl: {
      plugin_settings: { custom_fields_values: { category } },
      state: { histories },
    },
  };
}

const first = selectEntry(input(), 0);
assert.equal(first.selectedEntry.id, "tech-one");
assert.deepEqual(first.histories.all, ["tech-one"]);

const second = selectEntry(input("all", first.histories), 0);
assert.equal(second.selectedEntry.id, "tech-two");
assert.deepEqual(second.histories.all, ["tech-one", "tech-two"]);

const third = selectEntry(input("all", second.histories), 0);
assert.equal(third.selectedEntry.id, "nature-one");

const reset = selectEntry(input("all", third.histories), 0);
assert.equal(reset.selectedEntry.id, "tech-one");
assert.deepEqual(reset.histories.all, ["tech-one"]);

const filtered = selectEntry(input("technology", { technology: ["tech-one"] }), 0);
assert.equal(filtered.selectedEntry.id, "tech-two");
assert.deepEqual(filtered.histories.technology, ["tech-one", "tech-two"]);

const fallback = selectEntry(input("unknown"), 0.999);
assert.equal(fallback.selectedEntry.id, "nature-one");

const stale = selectEntry(input("all", { all: ["removed", "tech-one", "tech-one"] }), 0);
assert.equal(stale.selectedEntry.id, "tech-two");
assert.deepEqual(stale.histories.all, ["tech-one", "tech-two"]);

const empty = selectEntry({ items: [] });
assert.equal(empty.selectedEntry, null);
assert.deepEqual(empty.histories, {});

async function testServerless() {
  const output = await run(input("nature"));
  assert.equal(output.selected_entry.id, "nature-one");
  assert.deepEqual(output.trmnl_state.histories.nature, ["nature-one"]);
  assert.equal(output.items, undefined, "Do not send full catalogue to Liquid");

  const originalFetch = global.fetch;
  try {
    const largeItems = Array.from({ length: 300 }, (_, index) => ({
      id: "tech-" + index, category_key: "technology", name: "Tech " + index,
      epitaph: "x".repeat(1000), source_url: "https://example.com/source",
    }));
    assert.ok(Buffer.byteLength(JSON.stringify({ items: largeItems })) > 100_000);
    let requests = 0;
    global.fetch = async (url) => {
      requests += 1;
      assert.match(url, /\/data\/trmnl\.json$/);
      return { ok: true, json: async () => ({ items: largeItems }) };
    };
    const pollInput = {
      catalogue_version: 1,
      trmnl: {
        plugin_settings: { custom_fields_values: { category: "technology" } },
        state: { histories: { technology: ["tech-0"] } },
      },
    };
    const selected = await run(pollInput);
    assert.equal(requests, 1);
    assert.notEqual(selected.selected_entry.id, "tech-0");
    assert.equal(selected.selected_entry.source_url, undefined);
    assert.equal(selected.items, undefined);
    assert.ok(Buffer.byteLength(JSON.stringify(selected)) < 5_000);

    global.fetch = async () => ({ ok: false, status: 503 });
    await assert.rejects(run(pollInput), /HTTP 503/, "Failure must not erase rotation history");
  } finally {
    global.fetch = originalFetch;
  }
  console.log("Saved State rotation and compact Serverless payload tests passed.");
}
testServerless().catch((error) => { console.error(error); process.exitCode = 1; });
