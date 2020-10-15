import { hash } from 'bcrypt';

const SALT = 10;

export default async function withHashPassword<O extends { password: string }>(
    doc: O
): Promise<O> {
    doc.password = await hash(doc.password, SALT);

    return doc;
}
