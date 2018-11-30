import {Home} from "../pages/home.po";

describe('Trello\'s Home page testing', () => {
  let page: Home;
  let logInURL = 'login?returnUrl=%2F';
  let buttonLogin = `a[href*="/${logInURL}"]`;

  beforeEach(() => {
    page = new Home();
  });

  it('When user acces trello app he should see the default home page', async () => {
    await page.navigateTo();
    expect(await page.getButton(buttonLogin).isDisplayed()).toBe(true);
  });

  it('When user click on login button he should see the login page', async () => {
    await page.navigateTo();
    await page.getButton(buttonLogin).click();
    expect(await page.getCurrentPage()).toContain(logInURL);
  });
});
