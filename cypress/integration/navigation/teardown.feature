Feature: Teardown

  @AfterTesteryRun
  Scenario: Extended Teardown Step
    Given I navigate to "https://www.google.com"
    Then wait for 20 seconds
