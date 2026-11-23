RC BRICK SHOP Order Picker & Packer v0.9.4

WHAT'S NEW
- Upload a ZIP containing three CSVs: eBay Paid & Shipped, Brick Owl orders, and Brick Owl order items. Nested folder paths and macOS ZIP metadata are ignored.
- Also supports an individual eBay CSV as in v0.9.3.
- Pick all items together, sorted by your inventory bin; vertical EBAY / BRICK OWL marketplace markers distinguish each item.
- PACK mode displays Brick Owl Order Number instead of unreliable scientific-notation tracking; each Brick Owl order is always its own package. eBay tracking consolidation remains unchanged.
- Brick Owl quantities and lots are validated against the orders report; the ZIP is rejected if any order does not reconcile, rather than allowing incorrect package completion.
- Stores picking/packing progress locally per uploaded report file.
- ZIP extraction is local/offline (bundled JSZip 3.10.1).

INSTALL / UPDATE
1. Keep a backup of your prior hosted Order Picker folder.
2. Replace ALL files in the current hosted folder, including jszip.min.js.
3. Refresh the PWA/app. The service worker cache version has been updated.
4. Upload the 3-report ZIP (or an eBay CSV).

Note: Brick Owl Personal Note is treated as inventory-bin location. For mixed batches, any mismatch or missing bin causes import to stop with a clear message.
