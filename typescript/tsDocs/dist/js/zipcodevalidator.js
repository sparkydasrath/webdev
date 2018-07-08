export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator {
    /**
     *
     * @param s {string}
     */
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
