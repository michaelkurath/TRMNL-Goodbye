#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const candidatePath = path.join(process.cwd(), "data", "candidates.json");
const livePath = path.join(process.cwd(), "data", "trmnl.json");
const payload = JSON.parse(fs.readFileSync(candidatePath, "utf8"));
const live = JSON.parse(fs.readFileSync(livePath, "utf8"));
const required = [
  "id", "name", "lifespan", "end_year", "category", "category_key",
  "status", "epitaph", "why", "afterlife", "source_name", "source_url", "note"
];
const reviewKeys = ["fact_check", "text_review", "image_review", "final_approval"];
const reviewStates = new Set(["not_started", "pending", "approved", "needs_changes", "rejected"]);
const allowedCategories = new Set(["technology", "internet", "transport", "nature", "everyday"]);
const liveIds = new Set(live.items.map((item) => item.id));
const candidateIds = new Set();
const errors = [];

if (!Array.isArray(payload.candidates)) {
  errors.push("candidates must be an array");
} else {
  payload.candidates.forEach((item, index) => {
    const label = `candidates[${index}]`;
    required.forEach((key) => {
      if (typeof item[key] !== "string" || item[key].trim() === "") {
        errors.push(`${label}.${key} must be a non-empty string`);
      }
    });

    if (candidateIds.has(item.id)) errors.push(`${label}.id is duplicated: ${item.id}`);
    if (liveIds.has(item.id)) errors.push(`${label}.id already exists in the live catalogue: ${item.id}`);
    candidateIds.add(item.id);

    if (!allowedCategories.has(item.category_key)) {
      errors.push(`${label}.category_key is unsupported: ${item.category_key}`);
    }

    try {
      const url = new URL(item.source_url);
      if (url.protocol !== "https:") errors.push(`${label}.source_url must use HTTPS`);
    } catch {
      errors.push(`${label}.source_url is invalid`);
    }

    if ("image_url" in item || "image_url_standard" in item || "image_url_wide" in item || "image_alt" in item) {
      errors.push(`${label} must not contain image fields before image review begins`);
    }

    if (!item.review || typeof item.review !== "object") {
      errors.push(`${label}.review must be an object`);
    } else {
      reviewKeys.forEach((key) => {
        if (!reviewStates.has(item.review[key])) {
          errors.push(`${label}.review.${key} has an invalid state`);
        }
      });
      if (item.review.final_approval === "approved") {
        ["fact_check", "text_review", "image_review"].forEach((key) => {
          if (item.review[key] !== "approved") {
            errors.push(`${label}.review.final_approval cannot be approved before ${key}`);
          }
        });
      }
    }

    if (item.epitaph.length > 125) errors.push(`${label}.epitaph exceeds 125 characters`);
    if (item.why.length > 160) errors.push(`${label}.why exceeds 160 characters`);
    if (item.afterlife.length > 150) errors.push(`${label}.afterlife exceeds 150 characters`);
  });
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${payload.candidates.length} GOODBYE candidates.`);
