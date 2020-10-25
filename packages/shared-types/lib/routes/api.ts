export abstract class Api {
    path: string;

    constructor(subPath: string) {
        this.path = '/api'.concat(subPath);
    }
}

export abstract class V1 extends Api {
    constructor(subPath: string) {
        super('/v1'.concat(subPath));
    }
}

export class UserPath extends V1 {
    constructor() {
        super('/users');
    }
}

export class SessionPath extends V1 {
    constructor() {
        super('/session');
    }
}