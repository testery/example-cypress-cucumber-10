Feature: Microsoft

  Scenario: User Navigates to Microsoft
    Given I navigate to "https://testery.com"
    Then wait for 2 seconds
    Then the page title is 'Testery: modern test orchestration'