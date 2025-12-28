# Google Sheets Integration Guide - ADDITION FOR PAYMENT MODAL

You mentioned you already have logic working for Sheet 1 and Sheet 2. **You do NOT need to change that code.**

You only need to **ADD** an `else if` block to your existing script to handle the new "Sheet3" data coming from the payment modal.

## What to Add to Your Script

Simply find your existing logic (likely checking for `sheetName` or defaulting to Sheet1) and add this condition:

```javascript
  // ... your existing code for Sheet 2 ...

  else if (data.sheetName === "Sheet3") {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet3");
    if (!sheet) {
        // Create Sheet3 if it doesn't exist
        sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Sheet3");
        // Optional: Add headers if new
        sheet.appendRow(["Timestamp", "Name", "Phone", "Service Name"]);
    }
    
    // Append the specific variables for the Payment Modal
    sheet.appendRow([
      new Date(),       // Timestamp
      data.name,        // Name entered in modal
      data.phone,       // Phone entered in modal
      data.serviceName  // Service/Plan title
    ]);
  }
  
  // ... remainder of your script ...
```

## Summary of Data Sent for Sheet 3
The website is sending this JSON payload:
```json
{
  "name": "User Name",
  "phone": "User Phone",
  "serviceName": "Service Title",
  "sheetName": "Sheet3"
}
```
