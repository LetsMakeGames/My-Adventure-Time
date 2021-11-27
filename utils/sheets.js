const { google } = require('googleapis');

    // Google Auth Object for Google Sheets
    const auth = new google.auth.GoogleAuth({

        keyFile: "./keys/keys.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const authClientObject = auth.getClient();
    const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });
    const spreadsheetId = "1CYY-i4h0KZ6GbhuPJSunZGJ_0mAzZjiK7U81bodiZhs";

async function createRow() {

    await googleSheetsInstance.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "sheet1!A:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [["Testing 1", "William Barnes"]]
        }
    })
}

module.exports = {
    createRow: createRow,
}