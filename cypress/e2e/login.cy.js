import { loginPage } from "./pages/LoginPage";

//describe block is where you specify your test case
describe("testing the login functionality spec", () => {
  //it block is where you specify your test condition
  it("verify that the Quales library app loads successfully", () => {
    loginPage.openQualesApp();
    loginPage.confirmTheLoginPageInformationDisplays();
  });

  it("verify that after a user inputs the right username, password and click the login button, they can login to the app", () => {
    loginPage.openQualesApp();
    loginPage.typeCorrectEmailAddressAndPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmUserIsLoggedIn()
  });
});
