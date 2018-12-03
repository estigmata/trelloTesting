import {browser, by, element} from 'protractor';
import {User} from '../../../config/user';

 export class Login {
     navigateTo() {
       browser.waitForAngularEnabled(false);
       return browser.get('https://trello.com/login?returnUrl=%2F');
     }

     getTitlePage() {
       return element(by.css('h1')).getText();
     }

     tryToLogin(user: any = new User()) {
       element(by.css('[name="user"]')).sendKeys(user.getUsername());
       element(by.css('[name="password"]')).sendKeys(user.getPassword());
       element(by.css('#login')).click();
     }

     getCurrentPage() {
       return browser.getCurrentUrl();
     }
 }
