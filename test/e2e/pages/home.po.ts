import {browser, by, element} from "protractor";

export class Home {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://trello.com/');
  }

  getButtonLogin() {
    return element(by.linkText('Log In')).getText();
  }
}
