package com.virgingames.pages;

import com.cucumber.listener.Reporter;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());
    @FindBy(xpath = "//input[@id='field-username']")
    WebElement _userNameField;
    @FindBy(xpath = "//input[@id='field-password']")
    WebElement _passwordField;
    @FindBy(xpath = "//li[@class='field-item field-item-button']//button")
    WebElement _loginButton;
    @FindBy(xpath = "//h1[contains(text(),'Confirm your identity')]")
    WebElement _actualLoginMessage;
    @FindBy(xpath = "//div[contains(text(),'Please try again, your username/email or password ')]")
    WebElement _invalidLoginMessage;


    //This method clicks on the User Name Field and sends emailID
    public void sendEmailId(String email) {
   // Reporter.addStepLog("Send a valid emailId " + _userNameField.toString() + "<br>");
        log.info("Send a valid emailId" + _userNameField.toString());
        clickOnElement(_userNameField);
        sendTextToElement(_userNameField, email);
    }

    //This method clicks and send password to Password Field
    public void sendPassword(String pwd) {
     //   Reporter.addStepLog("Send a password " + _passwordField.toString() + "<br>");
        log.info("Send password " + _passwordField.toString());
        clickOnElement(_passwordField);
        sendTextToElement(_passwordField, pwd);
    }

    //This method clicks on Login Button
    public void clickOnLoginBtn() {
       // Reporter.addStepLog("Click on Login Button " + _loginButton.toString() + "<br>");
        log.info("Click on Login Button " + _loginButton.toString());
        clickOnElement(_loginButton);
    }

    //This method verifies user successfully Navigates to Verification Page
    public void navigateToVerificationPage() {
       // Reporter.addStepLog("verify user is on Verification Page " + _actualLoginMessage.toString() + "<br>");
        log.info("Verify user is on Verification Page " + _actualLoginMessage.toString());
        Assert.assertEquals(_actualLoginMessage, "Confirm your identity");
    }

    //This method verifies user Cannot Login Using invalid credentials
    public void invalidLogin() {
        //Reporter.addStepLog("verify invalid Login Message " + _invalidLoginMessage.toString() + "<br>");
        log.info("Verify invalid Login Message " + _invalidLoginMessage.toString());
        String actual = "Please try again, your username/email or password ";
        Assert.assertEquals(actual,_invalidLoginMessage);
    }
}

