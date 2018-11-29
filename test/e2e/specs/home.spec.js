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
const home_po_1 = require("../pages/home.po");
describe('Trello\'s Home page testing', () => {
    let page;
    beforeEach(() => {
        page = new home_po_1.Home();
    });
    it('When user acces trello app he should see the default home page', () => __awaiter(this, void 0, void 0, function* () {
        yield page.navigateTo();
        expect(yield page.getButtonLogin()).toEqual('Log In');
    }));
});
