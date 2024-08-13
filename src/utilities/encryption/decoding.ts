import CryptoJS from 'crypto-js';

// Derive the key from the hash
function deriveKeyFromHash(hash: string): CryptoJS.lib.WordArray {
    // Use the first 32 characters of the hash as the key
    return CryptoJS.enc.Hex.parse(hash.substring(0, 32));
}

// Decrypt the message
export const DecryptMessage = (encryptedText: string, hash: string) : string => {
    debugger;
    const key = deriveKeyFromHash(hash);
    const encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedText);
    const iv = CryptoJS.lib.WordArray.create(encryptedHexStr.words.slice(0, 4)); // first 16 bytes
    const ciphertext = CryptoJS.lib.WordArray.create(encryptedHexStr.words.slice(4));

    // Create a CipherParams object
    const cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: ciphertext,
        iv: iv,
    });

    const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
        iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.NoPadding
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
}