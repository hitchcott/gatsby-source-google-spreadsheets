import uuidv5 from 'uuid/v5';

const seedConstant = uuidv5('gsheet', '2972963f-2fcf-4567-9237-c09a2b436541');
export const hash = (str: string) => uuidv5(str, seedConstant);
