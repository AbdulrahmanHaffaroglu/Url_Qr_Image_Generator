/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import qr from 'qr-image';
import { input } from '@inquirer/prompts';

const userUrl = await input({ message: 'Enter your url here: ' });

try{
    var qr_svg = qr.image(userUrl, { type: 'png'});
    qr_svg.pipe(fs.createWriteStream('my_qr.png'));
    fs.writeFileSync("my_url.txt", userUrl, "utf-8");
}catch (e){
    console.log("error: " + e);
}