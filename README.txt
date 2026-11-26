RC BRICK SHOP Order Picker & Packer v0.9.7

WHAT'S NEW
- PICK mode tracks all lettered orders across the entire batch. Gray = not started, orange = in progress, green = all lots picked and ready to bag.
- An eight-second notification appears when the last lot is picked. Undo, reset, and re-import update the tracker; completion is not packing. The tracker is in the sidebar on wide screens and sticky above the picking list on narrow screens. No sound is enabled.
- Supports BrickLink ordercsv.csv (order header followed by item rows), alongside eBay and Brick Owl in a single ZIP.
- Brick Owl orders receive A, B, ... in oldest-first order using Iso Order Time (equal timestamps: order ID). BrickLink continues the same sequence after all Brick Owl orders, oldest Order Date first (US M/D/YYYY; ties: order sequence in report). Letters reset for a new batch; eBay does not receive letters. Z is followed by AA, AB, etc.
- BrickLink marketplace tags are tan/caramel; the same orange order-letter badges are used for both marketplaces in PICK and PACK.
- BrickLink My Remarks is the inventory bin, Qty is the physical quantity, and Inv ID is the lot identifier. BrickLink packages use the order number for confirmation and never merge with another marketplace or another BrickLink order.
- BrickLink totals are validated against Total Lots and Total Items; missing bins, invalid dates, duplicate order headers, malformed quantities, and mismatched totals stop import.
- BrickLink part images use the exported item number and a recognized color name, when available. Unrecognized colors/types fall back to no image.
- Existing eBay tracking consolidation and Brick Owl order grouping are preserved.

SUPPORTED IMPORTS
- A ZIP with eBay Paid & Shipped CSV, brickowl_orders.csv and brickowl_orderitems.csv, and ordercsv.csv. Any supported subset is allowed, provided Brick Owl reports are paired. Nested folders and macOS metadata are ignored; duplicate or unknown CSV reports are rejected.
- A standalone eBay or BrickLink CSV.
- All processing and progress storage remain local; JSZip 3.10.1 is bundled.

INSTALL / UPDATE
1. Back up the current hosted Order Picker folder and finish any active picking batch before switching reports.
2. Replace ALL files in the same hosted folder. Keep the existing hosting URL.
3. Refresh or reopen the installed app so its service worker can update.
4. Upload the same daily ZIP for the entire session. Progress is keyed to the uploaded file name and size, as in v0.9.5.

The separate BL/BO Label Creator has not been updated yet; do not use it to generate BrickLink labels until it supports the same shared assignment rules.
