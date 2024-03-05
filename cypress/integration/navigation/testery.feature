Feature: Microsoft

  Scenario: User Navigates to Testery.com
    Given I navigate to "https://testery.com"
    Then wait for 2 seconds
    Then the page title is 'Testery: modern test orchestration'