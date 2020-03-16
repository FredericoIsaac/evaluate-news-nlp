import { urlValidator } from "../src/client/js/urlValidator";

describe(urlValidator, () => {
    test("it should return false if the url does not start with http:// or https://", () => {
        expect(urlValidator('www.google.com')).toBe(false);
    });
    test("it should return true if the url starts with http://", () => {
        expect(urlValidator('http://www.google.com')).toBe(true);
    });
    test("it should return true if the url starts with https://", () => {
        expect(urlValidator('https://www.google.com')).toBe(true);
    });
    test("it should return true if the url starts with http:// but does not include www.", () => {
        expect(urlValidator('https://google.com')).toBe(true);
    });
    test("it should return true if the url starts with https:// but does not include www.", () => {
        expect(urlValidator('https://google.com')).toBe(true);
    });
});