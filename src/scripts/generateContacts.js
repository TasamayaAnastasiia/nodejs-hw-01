import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const startData = await fs.readFile(PATH_DB, 'utf8');
        const jsonData = JSON.parse(startData);

        for(let i = 0; i < number; i++) {
            jsonData.push(createFakeContact());
        }
        const updateData = JSON.stringify(jsonData);
        await fs.writeFile(PATH_DB, updateData, 'utf8');
    } catch(error) {
        console.log(`Error text: ${error}`);
    }

};

await generateContacts(5);
