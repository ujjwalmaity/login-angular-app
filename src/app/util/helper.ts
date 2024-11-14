export class Helper {
    // Api Url
    public static baseUrl: string = 'https://uatapi.ysil.in/';
    public static urlLogin: string = `${this.baseUrl}cust/user/authentication`;
    public static urlProfile: string = `${this.baseUrl}profile/details`;
    public static urlMostActive: string = `${this.baseUrl}quote/mostactive/NSE/NIFTY 50`;

    // Local Storage Key
    public static lStorageToken: string = 'token';

    // Helper Method
    static isUserLoggedIn(): boolean {
        const token = localStorage.getItem(Helper.lStorageToken);
        if (token != null) {
            return true;
        } else {
            return false;
        }
    }
}
