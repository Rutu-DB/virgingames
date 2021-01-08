@Smoke
Feature: Login Functionality
  Ensuring Login Functionality is working as per the requirement.

  Scenario: Verify User can Login successfully using valid credentials
    Given I am on Virgin Games Homepage
    And I click on Login Link
    And I enter valid email Id as "jo@gmail.com" in email address field
    And I enter valid password  as "welcome1" in password field
    When I click on Login Button
    Then I should Login successfully using valid credentials

  Scenario Outline:Verify User cannot Login using invalid emailID
    Given I am on Virgin Games Homepage
    And I click on Login Link
    And I enter invalid email Id as "<email>" in email address field
    And I enter invalid password  as "<password>" in password field
    When I click on Login Button
    Then I should not be able Login successfully
    Examples:
      | email            | password   |
      | jo@gmail.com.com | welcome1   |
      | jo@gmail.com     | welcome500 |
      |                  | welcome1   |
      | jo@gmail.com     |            |
      |                  |            |
      | £%"**%@gmail.com | welcome1   |