// https://dev.to/k0d3d/unit-testing-for-gatsby-using-jest-typescript-and-react-testing-library-i7p
const path = require('path');

module.exports = {
    setupFilesAfterEnv: [
        // https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
        path.resolve(__dirname, './jest-configs/setup-test-env.js'),
    ],
    transform: {
        // // "^.+\\.(tsx?|jsx?)$": "ts-jest",
        // '\\.svg': '<rootDir>/jest-configs/__mocks__/svgTransform.js',
        '^.+\\.(tsx?|jsx?)$': `<rootDir>/jest-configs/jest-preprocess.js`,
    },
    moduleNameMapper: {
        // "\\.svg": `./jest-configs/__mocks__/file-mocks.js`,
        // '\\.svg': `<rootDir>/jest-configs/__mocks__/svgTransform.js`,
        'typeface-*': 'identity-obj-proxy',
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        // '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    collectCoverage: false,
    coverageReporters: ['lcov', 'text', 'html'],
};
