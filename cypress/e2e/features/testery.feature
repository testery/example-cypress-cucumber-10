@green
Feature: Testery

  @willFail @testery
  Scenario: User Navigates to Testery
    Given I navigate to "https://blog.testery.io"
    Then the page title contains 'Testery test change one'

  @testery
  Scenario: User Navigates to Testery Blog
    Given I navigate to "https://blog.testery.io"
    Then the page title contains 'Testery Blog'
