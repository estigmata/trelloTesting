import {Login} from '../pages/login.po';
import {Dashboard} from '../pages/dashboard.po';

describe('Trello\' Login page testing', () => {
  let page: Login;
  let boards: Dashboard;

  beforeEach(() => {
    page = new Login();
    boards = new Dashboard();
  });

  it('When user click on Login button from home page he should see he login page', async () => {
    await page.navigateTo();
    expect(await page.getTitlePage()).toEqual('Log in to Trello');
  });

  it('When user fill his credentials into login page he should see his board page', async () => {
    await page.navigateTo();
    await page.tryToLogin();
    console.log(await page.getCurrentPage());
    /* await boards.navigateTo();
    expect(await boards.getMemberInitials()).toEqual('NO'); */
  });
});
