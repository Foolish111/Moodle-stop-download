# Clean Moodle Links on Click

## Overview

This is a Tampermonkey userscript designed for the Moodle platform of **Université Paris Cité**. It removes the `forcedownload=1` parameter from file download links, allowing documents (such as PDFs) to be opened directly in the browser instead of being forcibly downloaded.

If you're using Moodle from a different university, you can easily adapt the script by changing the domain at the top of the script.

## Features

- Detects and intercepts clicks on Moodle file links containing `forcedownload=1`.
- Automatically cleans the link to remove this parameter.
- Opens the cleaned link in a new tab, allowing documents to be viewed directly.

## Compatibility

- ✅ Tested and confirmed working with [moodle.u-paris.fr](https://moodle.u-paris.fr/)
- ⚠️ To use it with a different university's Moodle platform, **modify the `@match` line** accordingly.

## How to Use

1. Install [Tampermonkey](https://www.tampermonkey.net/) (or a compatible userscript manager) in your browser.
2. Create a new script in Tampermonkey.
3. Paste the code below into the editor.
4. Save and enable the script.
