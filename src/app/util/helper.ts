export class Helper {
    // Api Url
    public static baseUrl: string = 'https://uatapi.ysil.in/';
    public static urlLogin: string = `${this.baseUrl}cust/user/authentication`;

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
