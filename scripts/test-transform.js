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

const empty = run({ items: [] });
assert.equal(empty.selected_entry, null);
assert.deepEqual(empty.trmnl_state, { histories: {} });

const output = run(input("nature"));
assert.equal(output.selected_entry.id, "nature-one");
assert.deepEqual(output.trmnl_state.histories.nature, ["nature-one"]);

console.log("Saved State transform tests passed.");
