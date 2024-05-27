import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const startData = await fs.readFile(PATH_DB, 'utf8');
        const jsonData = JSON.parse(startData);
        const amountCntacts = jsonData.length;

        if(amountCntacts !== 0) {
            const cleanArray = JSON.stringify([]);
            await fs.writeFile(PATH_DB, cleanArray, 'utf8');
        } else {
            console.log('Array does not have elements');
        }
    } catch {
        console.log('Error');
    }
};

await removeAllContacts();
