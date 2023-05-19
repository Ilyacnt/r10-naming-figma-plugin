const fs = require('fs').promises;
const path = require('path');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVhg2LMdoUSell\nPjXUvTAkYPs9pfDejPc4l4Aj6m3HgbyrXKfBLresutC8qU7lGEUbvIwxJfhvQsSS\n9H5R7Q1lmB+QR+5UR6TqgHIBh/GY7Bn2FiqoshEVF5yIqty3QcZicvR1NXKbYs0Z\n1CuB/lgrvqWx5jcuknwkPJ14NsfSnDys4/aNzUlH5vzBiGHN3JuzKaGzkXo8q5/6\nqJTNJxCrTl3XTyEiHZK5kn6IV54+BiptOY4kfWuI4gNc3untJ4fCyyEW5k3OZs8F\nMLVeLoc3rKXV6UCFu5YVS+Kju+3JbfTfnWTfnC0hyqY50mXzChcX7qJ1lMZAWyFL\n2GTHFnpxAgMBAAECggEANV1XyLRYo+32DETgSM9QtyLa3+U3fjOefPEWSEOolK5m\n1DAnyAcQRjX5gdFRw72NVhmJMyZhgRMflHfRE1Iq4TuEFff4R22ReL9J3vqWJelK\nMsAHANriHJKmX1zOpWlltsiyspF9V3r5ti0aA5bo++PdvwjBvVzEdH0GwRr11Xuc\nNjPNb+eYlPqqayOk1LlgdcLeJkgRMdwT4jfy9cfZYbYvPioDrgwHkB3DwgE4fmQc\nVQvc1x1Mi6uMA9TMYgJmDFEQF2f46re1NkQKAmLomoA53QTwYUnYtgY/VtAQgH1Q\nemo3z5F49yu9dq4XonxGJ72JMwWoYSTXHA5fytUwLQKBgQD4OodkfuWu5vRt7m/L\nvh9gIhW6px3F3c1haVeyQ+zBq7+8mkEPQIZ0oxqX63sEgrsNY7+4EmmblbonSyDY\nrr417HI9cZQhw0WrvSUxB5oMqZRRHZAMNEhtdHSHjrYEoIS0lwKKJMcyn6acDrxp\nBAGdKl4XNDsM92r5mBSQfgDVTQKBgQDcNV/8wP6wJUMjNuO+QkAmi/c2Rrwp1+Ei\nzxIjKhsDBqzkqqotF11FWsypaD3H80bZ09wT0MBoHpK2QmxtVAPMEo7qBesWGb25\nL0asoN5SE3PpD2B0QkkggsFJ/YONOd8+q5FqIFRg1ClOBXD4bWM4GZ8MkrdVoFXD\nOrjpFMzXtQKBgCwFBRmXP1gC8PnFvOGet6WupbfSBv+d09wgeELOtN+re3cQy9TO\nlol8myyxv8EPBejb9ZXI/h1vMfHh6tNCOc0KP0ASMjjCjkpkYoINXQ49zGWOHotr\ngiSW8EtRzYmIhcAYv4SL/R9HHJ60JklhQoACkWkABDDKd5gHli4BilhJAoGBAIi+\nmGnDiyTlLsjaWBiY2W9WcWCCEmzFgyfzgKbXiciaR5kEJgM0RBZCaV81vU/CUZgJ\nCNxBQIonmiGWI/DMQENkrtzCahbiSz+JDRE8IHLFY7AxfUsUsoZ+y/rfc+aqLmij\nb/yAMQWkGjY6CMosW3XF60+KeFCy7S7780HCSeYVAoGAQpbwqUfLk5YOo3U5jXSW\nNPCpEIeZqyK+dysEqK4Aq3PWJFvIziYkggz64YU5cSQHH9vb3/3I1hZoL55zn2bX\n5EyEQkuQDLzNuyRl67W0IJ96qQ0dLuUsB3JPJqozy4wLVUnVns6F6nrAsE8sHRp3\nRGBjBr0vyyPZtBAQsXdsGJc=\n-----END PRIVATE KEY-----\n";
const CREDENTIALS = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}


async function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    range: 'Class Data!A2:E',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  console.log('Name, Major:');
  rows.forEach((row) => {
    // Print columns A and E, which correspond to indices 0 and 4.
    console.log(`${row[0]}, ${row[4]}`);
  });
}

authorize().then(listMajors).catch(console.error);