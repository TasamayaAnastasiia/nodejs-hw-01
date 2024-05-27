import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    const readStartArray = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(readStartArray).length;
};

console.log(await countContacts());
