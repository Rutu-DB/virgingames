package com.virgingames.stepDefs;

import com.virgingames.pages.HomePage;
import com.virgingames.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @Given("^I am on Virgin Games Homepage$")
    public void iAmOnVirginGamesHomepage() {
    }
    //This method clicks on Login Link
    @And("^I click on Login Link$")
    public void iClickOnLoginLink() {
        homePage.clickOnLoginLink();
    }
    //This method sends emailId provided on feature file
    @And("^I enter valid email Id as \"([^\"]*)\" in email addres" +
            "s field$")
    public void iEnterValidEmailIdAsInEmailAddressField(String email) {
        loginPage.sendEmailId(email);

    }

    //This method sends password provided on feature file
    @And("^I enter valid password  as \"([^\"]*)\" in password field$")
    public void iEnterValidPasswordAsInPasswordField(String pwd) {
        loginPage.sendPassword(pwd);
    }

    // This method clicks on Login Button
    @When("^I click on Login Button$")
    public void iClickOnLoginButton() {
        loginPage.clickOnLoginBtn();
    }

    // This method asserts True when Login is successfull using valid credentials
    @Then("^I should Login successfully using valid credentials$")
    public void iShouldLoginSuccessfullyUsingValidCredentials() {
        loginPage.navigateToVerificationPage();
    }


    @And("^I enter invalid email Id as \"([^\"]*)\" in email address field$")
    public void iEnterInvalidEmailIdAsInEmailAddressField(String email)  {
        loginPage.sendEmailId(email);

    }

    @And("^I enter invalid password  as \"([^\"]*)\" in password field$")
    public void iEnterInvalidPasswordAsInPasswordField(String pwd)  {
        loginPage.sendPassword(pwd);
    }

    @Then("^I should not be able Login successfully$")
    public void iShouldNotBeAbleLoginSuccessfully() {
        loginPage.invalidLogin();
    }
}
