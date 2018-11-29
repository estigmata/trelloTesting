"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        './test/e2e/specs/*.spec.js'
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true
};
