export default function createDateDefaults<
    O extends { created_at: Date; updated_at: Date }
>(document: O, now = new Date()) {
    return Object.assign(document, { created_at: now, updated_at: now });
}
