import {Home} from "../pages/home.po";

describe('Trello\'s Home page testing', () => {
  let page: Home;

  beforeEach(() => {
    page = new Home();
  });

  it('When user acces trello app he should see the default home page', async () => {
    await page.navigateTo();
    expect(await page.getButtonLogin()).toEqual('Log In');
  });
});
