RC BRICK SHOP Order Picker v0.9.3

What's new in v0.9.3
--------------------
- Restored the original blue sorting-bin / green-check icon supplied by the user.
- Replaced the 192 px and 512 px installed-app icons with the exact supplied files.
- Updated the legacy 256 px icon asset to match the restored artwork.
- Updated all versioned icon URLs and the service-worker cache key to ensure
  browsers fetch the new graphics instead of the previous red-brick icon.
- Kept the v0.9.2 Management-style layout and all picking/packing functionality.
- No JavaScript workflow logic, storage keys, or order handling was changed.

INSTALL / UPDATE
----------------
1. Back up the published Order Picker folder if you want a rollback.
2. Upload/replace ALL files from this ZIP in the same web folder as the current app.
   Keep the same URL and origin to preserve locally saved picking progress.
3. Reopen/refresh the online app to activate the updated cache.
4. If the installed macOS app still shows the old red icon, remove its old
   app/Dock shortcut and install it again from the SAME URL; then re-pin it.

Files in this ZIP are at the root, ready to upload as-is.
