import CryptoJS from 'crypto-js';

// Derive the key from the hash
function deriveKeyFromHash(hash: string): CryptoJS.lib.WordArray {
    // Use the first 32 characters of the hash as the key
    return CryptoJS.enc.Hex.parse(hash.substring(0, 32));
}

// Decrypt the message
export const DecryptMessage = (encryptedText: string, hash: string) : string => {
    const iv = CryptoJS.enc.Hex.parse(encryptedText.substr(0,32))
    const cypherText = CryptoJS.enc.Hex.parse(encryptedText.substr(32))
    const key = deriveKeyFromHash(hash);

    // @ts-ignore !!!!!!!! IMPORTANT IF YOU USE TYPESCRIPT COMPILER
    const decrypted = CryptoJS.AES.decrypt({ciphertext: cypherText}, key, {
        mode: CryptoJS.mode.CBC,
        iv: iv
    })
    return decrypted.toString(CryptoJS.enc.Utf8)
}
