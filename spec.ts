import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user', async () => {
    await element(by.model('yourName')).sendKeys('Julie');
    let greeting = await element(by.binding('yourName')).isPresent();
    let result = true;
    // expect(greeting.getText()).toEqual('Hello Julie!');
    expect(greeting).toEqual(result);
  });

  it('should list todos', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
});
