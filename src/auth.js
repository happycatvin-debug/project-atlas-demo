/**
 * Returns true when a request should refresh its access token and retry once.
 * Known bug: expired tokens return 401, but this implementation checks 403.
 */
export function shouldRefreshToken(status, retryCount) {
  return status === 403 && retryCount === 0;
}
