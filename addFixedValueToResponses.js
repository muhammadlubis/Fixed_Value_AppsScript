function addFixedValueToResponses() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  const fixedValue = "Yes"; // Change this to your desired fixed string/number
  const columnToInsert = 2; // Column B (change as needed)

  // Check if there are responses (skip header row)
  if (lastRow > 1) {
    // Insert fixed value in the specified column for each new response
    sheet.getRange(lastRow, columnToInsert).setValue(fixedValue);
  }
}