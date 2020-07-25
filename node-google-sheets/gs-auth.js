const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
let practionerDbId = '1L1_VUbuNvWgjXond_LuBN5_TQVsKHNIQkPHBTOxKVGo';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';



/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */

function authorize(credentials, specialty, callback, resolve, reject) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback, resolve, reject);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client, specialty, resolve, reject);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback, resolve, reject) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) {
                return console.error('Error while trying to retrieve access token', err);
            }
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getProviders(auth, specialty, resolve, reject) {
    let providerResult = [];

    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
        spreadsheetId: practionerDbId,
        range: "'" + specialty + "'" + "!A2:T300",
    }, (err, res) => {
        if (err) {
            reject('The API returned an error: ' + err);
            return console.log('The API returned an error: ' + err);
        }
        const rows = res.data.values;
        if (rows.length) {
            // rows is an array of rows
            rows.map((row) => {
                providerResult.push({
                    name: row[0],//"0",
                    type: row[1],//"1",
                    phone: row[2],//"2",
                    address: row[4],//"4",
                    zone: row[3],//"3",
                    practice: row[10],//"10",
                    website: row[11],//"11",
                    url: row[11],//"11",
                    pricing: row[12],//"12",
                    waitTime: row[13],//"13",
                    therapyProvided: row[14],//"14",
                    communicationStyle: row[15],//"15"
                })
            });
        } else {
            console.log('No data found.');
        }
        resolve(providerResult);
        return providerResult;
    });
}
async function getSheetsProviders(specialty) {
    // Load client secrets from a local file.
    return new Promise(function(resolve, reject) {
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Sheets API.
            authorize(JSON.parse(content), specialty, getProviders, resolve, reject);
        });
    });



}
module.exports = {
    getSheetsProviders : getSheetsProviders
}