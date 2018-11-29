"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Login {
    /* private credentials = {
      username: '',
      password: ''
    }; */
    navigateTo() {
        protractor_1.browser.waitForAngularEnabled(false);
        return protractor_1.browser.get('https://trello.com/login?returnUrl=%2F');
    }
    getTitlePage() {
        return protractor_1.element(protractor_1.by.css('h1')).getText();
    }
}
exports.Login = Login;
