// Class representing the CareerPortal page object
class CareerPortal {

  constructor() {
    //locators
    this.UserName = '#username';
    this.Password = '#password';
    this.loginButton = '#signInBtn';
    
  }

  

  async open(url) {
    await global.page.goto(url);
  }

  // Perform login using the provided username and password
  async login(username, password) {
    // Fill in the email and password fields
    await global.page.fill(this.UserName, username);
    await global.page.fill(this.Password, password);
  
  }

  async portalloginButton() {
     // Click the sign-up button to log in
    await global.page.click(this.loginButton);
  }
}

// Export the CareerPortal class for use in other modules
module.exports = {
  CareerPortal
};