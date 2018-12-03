import {browser, by, element} from 'protractor';

export class Dashboard {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://trello.com/nestorotondo/boards');
  }

  getMemberInitials() {
    return element(by.css('span.member-initials')).getText();
  }
}
