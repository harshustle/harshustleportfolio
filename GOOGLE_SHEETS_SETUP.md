# How to Connect Contact Form to Google Sheets

Follow these steps to collect data from your website form directly into a Google Sheet.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
2. Name it something like "Website Leads".
3. In the first row, add headers for your data:
   - Cell A1: `Date`
   - Cell B1: `Email`
   - Cell C1: `Phone`
   - Cell D1: `Service`
   - Cell E1: `Business Info`

4. **Create a second sheet (tab)** at the bottom named `Sheet2`.
5. In the first row of `Sheet2`, add headers:
   - Cell A1: `Date`
   - Cell B1: `Name`
   - Cell C1: `Email`
   - Cell D1: `Company`
   - Cell E1: `Budget`
   - Cell F1: `Message`

## Step 2: Create the Google Apps Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any code in the `Code.js` file and paste the following:

```javascript
var DEFAULT_SHEET = "Sheet1";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    
    // Parse the incoming data
    var postData = JSON.parse(e.postData.contents);
    
    // Determine which sheet to use (default to Sheet1 if not specified)
    var targetSheetName = postData.sheetName || DEFAULT_SHEET;
    var sheet = doc.getSheetByName(targetSheetName);

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'Sheet not found: ' + targetSheetName }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    var newRow = headers.map(function(header) {
      if (header === 'Date') return new Date();
      
      var key = header.toLowerCase().replace(/\s/g, ''); // Normalize header (e.g., "Business Info" -> "businessinfo")
      
      // Match incoming data keys to normalized headers
      // Common mapping attempts:
      if (key === 'email') return postData.email || "";
      if (key === 'phone') return postData.phone || "";
      if (key === 'service') return postData.service || "";
      if (key === 'businessinfo') return postData.businessInfo || "";
      if (key === 'name') return postData.name || "";
      if (key === 'company') return postData.company || "";
      if (key === 'budget') return postData.budget || "";
      if (key === 'message') return postData.message || "";
      
      return "";
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}

function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    SpreadsheetApp.getUi().alert("Sheet named '" + SHEET_NAME + "' not found.");
    return;
  }
  
  // Create headers if missing
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Email", "Phone", "Service", "Business Info"]);
  }
}
```

3. Save the project (disk icon or Ctrl+S).

## Step 3: Deploy as Web App
1. Click on the blue **Deploy** button (top right) > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Description: "Contact Form"
4. **Execute as**: `Me` (your email).
5. **Who has access**: `Anyone` (IMPORTANT).
6. Click **Deploy**.
7. Authorization will be required. Click "Review permissions", choose your account, click "Advanced", and "Go to (Project Name) (unsafe)" (it is safe, it's your code).
8. Copy the **Web App URL** generated. It looks like `https://script.google.com/macros/s/.../exec`.

## Step 4: Update Your Website Code
1. Open your project and find `src/pages/Home.jsx`.
2. Locate the `submitToGoogleSheets` function (or the variable where the URL is stored).
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with the URL you just copied.
