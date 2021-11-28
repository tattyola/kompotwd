const Page = require('./page');

class ProfilePage extends Page {
    get avatar() {return $('[alt="avatarIcon"]');}
}

module.exports = new ProfilePage();
