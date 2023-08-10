Feature: Microsoft

  Scenario: User Navigates to Microsoft
    Given I navigate to "https://www.microsoft.com/en-us"
    Then wait for 2400 seconds
    Then the page title is 'Microsoft – Cloud, Computers, Apps & Gaming'