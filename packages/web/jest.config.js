// https://dev.to/k0d3d/unit-testing-for-gatsby-using-jest-typescript-and-react-testing-library-i7p
const path = require('path');

module.exports = {
    collectCoverage: false,
    coverageReporters: ['lcov', 'text', 'html'],
    globals: {
        __PATH_PREFIX__: ``,
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`, // '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
        // "\\.svg": `./jest-configs/__mocks__/file-mocks.js`,
        // '\\.svg': `<rootDir>/jest-configs/__mocks__/svgTransform.js`,
        'typeface-*': 'identity-obj-proxy',
    },
    setupFiles: [`<rootDir>/jest-configs/loadershim.js`],
    setupFilesAfterEnv: [
        // https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
        path.resolve(__dirname, './jest-configs/setup-test-env.js'),
    ],
    testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
    testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx)$',
    transform: {
        // // "^.+\\.(tsx?|jsx?)$": "ts-jest",
        // '\\.svg': '<rootDir>/jest-configs/__mocks__/svgTransform.js',
        '^.+\\.(tsx?|jsx?)$': `<rootDir>/jest-configs/jest-preprocess.js`,
    },
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
};
