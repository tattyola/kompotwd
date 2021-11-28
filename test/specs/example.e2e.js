const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('astrouskaya@yahoo.com', '123Green123');
        await expect (ProfilePage.avatar).toBeDisplayed();
    });
});


