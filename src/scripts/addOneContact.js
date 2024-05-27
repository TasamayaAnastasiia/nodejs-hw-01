import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const startData = await fs.readFile(PATH_DB, 'utf8');
        const jsonData = JSON.parse(startData);

        jsonData.push(createFakeContact());
        const updateData = JSON.stringify(jsonData);

        await fs.writeFile(PATH_DB, updateData, 'utf8');
    } catch(error) {
        console.log(`Error text: ${error}`);
    }
};

await addOneContact();
