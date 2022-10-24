Feature: Google

  @web
  @BeforeTesteryRun
  Scenario: Setup Step
    Given I navigate to "https://dev.testery.io"
    Then I print text "I am setting stuff up"

  @web
  @BeforeTesteryRun
  Scenario: Setup Step 2
    Given I navigate to "https://dev.testery.io"
    Then I print text "I am setting stuff up too"

  @web
  @AfterTesteryRun
  Scenario: Teardown Step
    Given I navigate to "https://dev.testery.io"
    Then I print text "I am doing the teardown process"
