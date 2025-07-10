
const { Given, When, Then } = require('@cucumber/cucumber')
const { CareerPortal } = require('../career-portal/careerportal')
const testdata = JSON.parse(JSON.stringify(require("../testdata/inputfile.json")));

const career = new CareerPortal()



Given('lets open the rahulshettyacademy portal', async () => {
  await career.open(testdata.URLLink);
  console.log('Url Opened !');
});

When('lets login with username and password', async () => {
  await career.login(testdata.username, testdata.password)
});

Then('User click on Sign In button', async () => {
  await career.portalloginButton()
});