#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.join(process.cwd(), "data", "trmnl.json");
const payload = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const required = [
  "id", "exhibit", "name", "lifespan", "end_year", "category",
  "category_key", "status", "image_url", "image_url_standard", "image_url_wide", "image_alt", "epitaph", "why", "afterlife",
  "source_name", "source_url", "note"
];
const allowedCategories = new Set(["technology", "internet", "transport", "nature", "everyday"]);
const errors = [];
const ids = new Set();
const exhibits = new Set();

if (!Array.isArray(payload.items) || payload.items.length === 0) {
  errors.push("items must be a non-empty array");
} else {
  payload.items.forEach((item, index) => {
    const label = `items[${index}]`;
    required.forEach((key) => {
      if (typeof item[key] !== "string" || item[key].trim() === "") {
        errors.push(`${label}.${key} must be a non-empty string`);
      }
    });
    if (ids.has(item.id)) errors.push(`${label}.id is duplicated: ${item.id}`);
    if (exhibits.has(item.exhibit)) errors.push(`${label}.exhibit is duplicated: ${item.exhibit}`);
    ids.add(item.id);
    exhibits.add(item.exhibit);
    if (!allowedCategories.has(item.category_key)) {
      errors.push(`${label}.category_key is unsupported: ${item.category_key}`);
    }
    try {
      const url = new URL(item.source_url);
      if (url.protocol !== "https:") errors.push(`${label}.source_url must use HTTPS`);
    } catch {
      errors.push(`${label}.source_url is invalid`);
    }
    ["image_url", "image_url_standard", "image_url_wide"].forEach((key) => {
      try {
        const url = new URL(item[key]);
        if (url.protocol !== "https:") errors.push(`${label}.${key} must use HTTPS`);
      } catch {
        errors.push(`${label}.${key} is invalid`);
      }
    });
    if (item.epitaph.length > 125) errors.push(`${label}.epitaph exceeds 125 characters`);
    if (item.why.length > 160) errors.push(`${label}.why exceeds 160 characters`);
    if (item.afterlife.length > 150) errors.push(`${label}.afterlife exceeds 150 characters`);
  });
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${payload.items.length} GOODBYE entries.`);
