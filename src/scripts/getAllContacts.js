import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    const readStartArray = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(readStartArray);
};

console.log(await getAllContacts());
