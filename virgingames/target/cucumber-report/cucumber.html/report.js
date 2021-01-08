$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Functionality",
  "description": "Ensuring Login Functionality is working as per the requirement.",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 6504591800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User can Login successfully using valid credentials",
  "description": "",
  "id": "login-functionality;verify-user-can-login-successfully-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter valid email Id as \"jo@gmail.com\" in email address field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid password  as \"welcome1\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should Login successfully using valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 103001300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 3220569100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jo@gmail.com",
      "offset": 27
    }
  ],
  "location": "LoginStepDef.iEnterValidEmailIdAsInEmailAddressField(String)"
});
formatter.result({
  "duration": 20115681800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3496a9e601a1d047221c935545bb40dd\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.virgingames.pages.LoginPage.sendEmailId(LoginPage.java:30)\r\n\tat com.virgingames.stepDefs.LoginStepDef.iEnterValidEmailIdAsInEmailAddressField(LoginStepDef.java:27)\r\n\tat ✽.And I enter valid email Id as \"jo@gmail.com\" in email address field(src/test/java/resources/featurefile/Login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcome1",
      "offset": 28
    }
  ],
  "location": "LoginStepDef.iEnterValidPasswordAsInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iShouldLoginSuccessfullyUsingValidCredentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9443656700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid email Id as \"\u003cemail\u003e\" in email address field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password  as \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 21,
      "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;1"
    },
    {
      "cells": [
        "jo@gmail.com.com",
        "welcome1"
      ],
      "line": 22,
      "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;2"
    },
    {
      "cells": [
        "jo@gmail.com",
        "welcome500"
      ],
      "line": 23,
      "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;3"
    },
    {
      "cells": [
        "",
        "welcome1"
      ],
      "line": 24,
      "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;4"
    },
    {
      "cells": [
        "jo@gmail.com",
        ""
      ],
      "line": 25,
      "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;5"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 26,
      "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;6"
    },
    {
      "cells": [
        "£%\"**%@gmail.com",
        "welcome1"
      ],
      "line": 27,
      "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5597656600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid email Id as \"jo@gmail.com.com\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password  as \"welcome1\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 2514700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2878090300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jo@gmail.com.com",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(String)"
});
formatter.result({
  "duration": 20144436000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50467}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1ccf5a09d54ce58b06df22d7c8cfc1fb\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.virgingames.pages.LoginPage.sendEmailId(LoginPage.java:30)\r\n\tat com.virgingames.stepDefs.LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(LoginStepDef.java:52)\r\n\tat ✽.And I enter invalid email Id as \"jo@gmail.com.com\" in email address field(src/test/java/resources/featurefile/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcome1",
      "offset": 30
    }
  ],
  "location": "LoginStepDef.iEnterInvalidPasswordAsInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1145240800,
  "status": "passed"
});
formatter.before({
  "duration": 5551758400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid email Id as \"jo@gmail.com\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password  as \"welcome500\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 3182300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 3024336900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jo@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(String)"
});
formatter.result({
  "duration": 20102293000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50518}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8f0f2b332d1e9b74da1309e95f5046ac\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.virgingames.pages.LoginPage.sendEmailId(LoginPage.java:30)\r\n\tat com.virgingames.stepDefs.LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(LoginStepDef.java:52)\r\n\tat ✽.And I enter invalid email Id as \"jo@gmail.com\" in email address field(src/test/java/resources/featurefile/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcome500",
      "offset": 30
    }
  ],
  "location": "LoginStepDef.iEnterInvalidPasswordAsInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12937691800,
  "status": "passed"
});
formatter.before({
  "duration": 5945921400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid email Id as \"\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password  as \"welcome1\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 1490500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2191102500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(String)"
});
formatter.result({
  "duration": 20100886000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50569}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b1dbb75a68b533fb44290f8cdb53d39c\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.virgingames.pages.LoginPage.sendEmailId(LoginPage.java:30)\r\n\tat com.virgingames.stepDefs.LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(LoginStepDef.java:52)\r\n\tat ✽.And I enter invalid email Id as \"\" in email address field(src/test/java/resources/featurefile/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "welcome1",
      "offset": 30
    }
  ],
  "location": "LoginStepDef.iEnterInvalidPasswordAsInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 976301600,
  "status": "passed"
});
formatter.before({
  "duration": 5912032400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid email Id as \"jo@gmail.com\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password  as \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 1684400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2982168100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jo@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(String)"
});
formatter.result({
  "duration": 20050246200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50644}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c779036fb6e0e58a92124754eac6c2bb\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.virgingames.pages.LoginPage.sendEmailId(LoginPage.java:30)\r\n\tat com.virgingames.stepDefs.LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(LoginStepDef.java:52)\r\n\tat ✽.And I enter invalid email Id as \"jo@gmail.com\" in email address field(src/test/java/resources/featurefile/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "LoginStepDef.iEnterInvalidPasswordAsInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22730465400,
  "error_message": "java.lang.RuntimeException: Unexpected result for screenshot command: null\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:304)\r\n\tat com.virgingames.utility.Utility.getScreenshot(Utility.java:277)\r\n\tat com.virgingames.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 5472488200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid email Id as \"\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password  as \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 1799500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 3426938900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(String)"
});
formatter.result({
  "duration": 20487180200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@id\u003d\u0027field-username\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.virgingames.pages.LoginPage.sendEmailId(LoginPage.java:30)\r\n\tat com.virgingames.stepDefs.LoginStepDef.iEnterInvalidEmailIdAsInEmailAddressField(LoginStepDef.java:52)\r\n\tat ✽.And I enter invalid email Id as \"\" in email address field(src/test/java/resources/featurefile/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "LoginStepDef.iEnterInvalidPasswordAsInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12199994800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50674}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7ccb3713b525cea8d23c5064cacb39e1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.virgingames.utility.Utility.getScreenshot(Utility.java:277)\r\n\tat com.virgingames.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 5543782300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-functionality;verify-user-cannot-login-using-invalid-emailid;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Virgin Games Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter invalid email Id as \"£%\"**%@gmail.com\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password  as \"welcome1\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 2969600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2863004800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "welcome1",
      "offset": 30
    }
  ],
  "location": "LoginStepDef.iEnterInvalidPasswordAsInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 838965800,
  "status": "passed"
});
});