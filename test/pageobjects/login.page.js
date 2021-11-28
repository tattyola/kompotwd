
const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() {return $('[qa-id="email"]');}
    get inputPassword() {return $('[qa-id="password"]');}
    get btnSubmit() {return $('.login-form-button');}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('user/login');
    }
}

module.exports = new LoginPage();
