@green
Feature: Testery

  @willFail @testery
  Scenario: User Navigates to TÆstery 1
    Given I navigate to "https://blog.testery.io"
    Then the page title contains 'Testery test change'

  @testery
  Scenario: User Navigates to TÆstery Blog
    Given I navigate to "https://blog.testery.io"
    Then the page title contains 'Testery Blog'
