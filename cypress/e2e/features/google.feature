Feature: Google

  @web
  @hasDuplicate
  Scenario: User Navigates to Google
    Given I navigate to "https://www.google.com"
    Then the page title is 'Google'

  @web
  @duplicate
  Scenario: User Navigates to Google
    Given I navigate to "https://www.google.com"
    Then the page title is 'Google Bogus'

  @web
  @willFail
  Scenario: User Navigates to Google with failure
    Given I navigate to "https://www.google.com"
    Then the page title is 'Google Bad'

  @web
  Scenario: Sample Test That Is Flaky
    When I perform a flaky test action

  @web
  Scenario Outline: Navigating to several sites
    Given I navigate to '<site>'
    Then the page title is '<title>'

    Examples:
      | site                    | title                                             |
      | https://www.apple.com/  | Apple                                             |
      | https://www.testery.com/  | This is Great!                                             |
      | https://duckduckgo.com/ | DuckDuckGo - Protection. Privacy. Peace of mind.  |
