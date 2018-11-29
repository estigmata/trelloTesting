"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Home {
    navigateTo() {
        protractor_1.browser.waitForAngularEnabled(false);
        return protractor_1.browser.get('https://trello.com/');
    }
    getButtonLogin() {
        return protractor_1.element(protractor_1.by.linkText('Log In')).getText();
    }
}
exports.Home = Home;
