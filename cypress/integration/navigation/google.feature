Feature: Google

  @web
  @BeforeTesteryRun
  Scenario: Setup Step
    Given I navigate to "https://www.google.com"
    Then I print text "I am setting stuff up"

  @web
  @AfterTesteryRun
  Scenario: Teardown Step
    Given I navigate to "https://www.google.com"
    Then I print text "I am doing the teardown process"

  @web
  @hasDuplicate
  Scenario: User Navigates to Google
    Given I navigate to "https://www.google.com"
    Then the page title is 'Google'

  @web
  @duplicate
  Scenario: User Navigates to Google
    Given I navigate to "https://www.google.com"
    Then the page title is 'Google'

  @web
  @willFail
  Scenario: User Navigates to Google with failure
    Given I navigate to "https://www.google.com"
    Then the page title is 'Google Bad'

  @web
  Scenario Outline: Navigating to several sites
    Given I navigate to '<site>'
    Then the page title is '<title>'

    Examples:
      | site                    | title                              |
      | https://www.apple.com/  | Apple                              |
      | https://duckduckgo.com/ | DuckDuckGo — Privacy, simplified.  |
