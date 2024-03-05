Feature: Microsoft

  Scenario: User Navigates to Testery App
    Given I navigate to "https://testery.app"
    Then wait for 2 seconds
    Then the page title is 'Testery - Login'