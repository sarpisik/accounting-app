import { compare } from 'bcrypt';

export default function compareHashPass(
    pass: string,
    hashedPass: string
): Promise<boolean> {
    return compare(pass, hashedPass);
}
