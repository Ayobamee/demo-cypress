class LoginPage {
  pageElements = {
    loadApp: () => cy.visit("https://academy.quales.tech/login"),
    logintext: () => cy.contains("Login"),
    emailText: () => cy.get("#EmailAddress"),
    emailAddressInputField: () => cy.get('[data-testid="EmailAddress"]'),
    passwordInputField: () => cy.get('[data-testid="Password"]'),
    loginBtn: () => cy.get(".MuiButton-contained"),
    ayobamiText: () => cy.contains("Ayobami"),
    loginSuccessfulMsg: () => cy.contains("Login Successful"),
  };
  //method to visit the quales base url
  openQualesApp() {
    this.pageElements.loadApp();
  }
  confirmTheLoginPageInformationDisplays() {
    this.pageElements.logintext().should("be.visible");
    this.pageElements.emailText().should("be.visible");
  }

  typeCorrectEmailAddressAndPassword() {
    const correctEmailAddress = "ay@mail.com";
    const correctPassword = "pass1234";
    this.pageElements.emailAddressInputField().type(correctEmailAddress);
    this.pageElements.passwordInputField().type(correctPassword);
  }

  clickLoginBtn() {
    this.pageElements.loginBtn().click();
  }

  confirmUserIsLoggedIn() {
    this.pageElements.ayobamiText().should("be.visible");
    this.pageElements.loginSuccessfulMsg().should("be.visible");
  }
}

export const loginPage = new LoginPage();
