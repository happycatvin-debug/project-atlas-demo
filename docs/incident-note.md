# Incident note: sessions end after token expiry

**Status:** Open  
**Severity:** Medium  
**Owner:** Leo Park

## Symptom

When an access token expires, the next request returns `401 Unauthorized`. The client does not refresh the token and the user sees a signed-out state.

## Reproduction

1. Sign in with a short-lived demo token.
2. Wait for the token to expire.
3. Open the launch board.
4. Observe a `401` response and no refresh attempt.

## Suspected cause

`shouldRefreshToken` checks for `403` instead of `401`.

## Expected fix

Refresh and retry once on `401`. Never retry `403`, and never retry more than once.
