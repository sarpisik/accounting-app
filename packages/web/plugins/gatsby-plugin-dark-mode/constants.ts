export const ENVIRONMENT = { browser: 'BROWSER', server: 'SERVER' } as const;

export type EnvironmentType = typeof ENVIRONMENT[keyof typeof ENVIRONMENT];
