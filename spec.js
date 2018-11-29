"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('protractor with typescript typings', () => {
    beforeEach(() => {
        protractor_1.browser.get('http://www.angularjs.org');
    });
    it('should greet the named user', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('yourName')).sendKeys('Julie');
        let greeting = yield protractor_1.element(protractor_1.by.binding('yourName')).isPresent();
        let result = true;
        // expect(greeting.getText()).toEqual('Hello Julie!');
        expect(greeting).toEqual(result);
    }));
    it('should list todos', function () {
        let todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });
});
