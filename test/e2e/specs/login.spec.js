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
const login_po_1 = require("../pages/login.po");
describe('Trello\' Login page testing', () => {
    let page;
    beforeEach(() => {
        page = new login_po_1.Login();
    });
    it('When user click on Login button from home page he should se the login page', () => __awaiter(this, void 0, void 0, function* () {
        yield page.navigateTo();
        expect(yield page.getTitlePage()).toEqual('Log in to Trello');
    }));
});
