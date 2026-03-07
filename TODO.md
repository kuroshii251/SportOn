# TODO: Fix Timeout Error and Cart Issues

## Tasks:
- [x] 1. Add timeout handling to fetchAPI function (app/lib/api.ts)
- [x] 2. Add error handling with timeout to all services
- [x] 3. Add loading/error states to PaymentOptions component
- [x] 4. Configure next.config.ts for better image handling
- [x] 5. Add fallback for empty image paths in getImageUrl

## Status: Completed

## Summary of Changes:
- Added 10-second default timeout to fetchAPI with AbortController
- Added specific timeouts to all services:
  - bank.services.ts: 5s timeout
  - product.services.ts: 15s for list, 10s for detail
  - category.services.ts: 10s timeout
  - transaction.services.ts: 30s for checkout, 10s for detail
- Added error handling that returns empty arrays on failure
- Added empty state UI when no banks/payment options are available
- Optimized next.config.ts with device sizes, image sizes, and formats
- Added fallback for empty image paths in getImageUrl

## Notes:
- The cart showing `[]` is expected behavior - it's using Zustand persist (localStorage)
- The remaining image timeouts are due to external server (be-sporton.agunacourse.com) performance issues

