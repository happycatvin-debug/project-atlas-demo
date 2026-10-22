import test from "node:test";
import assert from "node:assert/strict";
import { shouldRefreshToken } from "../src/auth.js";

test("refreshes once when the access token has expired", () => {
  assert.equal(shouldRefreshToken(401, 0), true);
});

test("does not retry an expired token more than once", () => {
  assert.equal(shouldRefreshToken(401, 1), false);
});

test("does not refresh for forbidden requests", () => {
  assert.equal(shouldRefreshToken(403, 0), false);
});
