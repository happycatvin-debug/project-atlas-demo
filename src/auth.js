/**
 * Returns true when a request should refresh its access token and retry once.
 * Expired access tokens return 401 and may be refreshed once.
 */
export function shouldRefreshToken(status, retryCount) {
  return status === 401 && retryCount === 0;
}
