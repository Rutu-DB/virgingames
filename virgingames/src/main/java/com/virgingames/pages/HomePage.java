package com.virgingames.pages;

import com.cucumber.listener.Reporter;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());
    @FindBy(xpath = "//span//a[contains(text(),'Login')]")
    WebElement _loginLink;
    //This method clicks on Login Link
    public void clickOnLoginLink() {
      //  Reporter.addStepLog("Click On Login Link" + _loginLink.toString() + "<br>");
        log.info("Click on Login Link " + _loginLink.toString());
        clickOnElement(_loginLink);
    }


}
