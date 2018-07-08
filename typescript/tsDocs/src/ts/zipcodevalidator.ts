import { StringValidator } from "./validation";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    /**
     * 
     * @param s {string}
     */
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}