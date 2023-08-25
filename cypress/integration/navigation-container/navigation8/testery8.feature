Feature: Google

  @web
  Scenario: Setup Step
    Given I navigate to "https://dev.testery.io"
    Then I print text "I am setting stuff up"

  @web
  Scenario: Setup Step 2
    Given I navigate to "https://dev.testery.io"
    Then I print text "I am setting stuff up too"

  @web
  Scenario: Teardown Step
    Given I navigate to "https://dev.testery.io"
    Then I print text "I am doing the teardown process"
