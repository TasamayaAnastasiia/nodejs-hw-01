import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const rawData = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(rawData);

        const remainingContacts = contacts.filter(() => Math.random() >= 0.5);
        await fs.writeFile(PATH_DB, JSON.stringify(remainingContacts), 'utf8');

    } catch (error) {
        console.error('Error:', error);
    }
};

await thanos();
