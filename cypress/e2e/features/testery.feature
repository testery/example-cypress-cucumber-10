@green
Feature: Testery

<<<<<<< HEAD
  Scenario: User Navigates to Testery
    Given I navigate to "https://blog.testery.io"
=======
  @willFail @testery
  Scenario: User Navigates to TÆstery
    Given I navigate to "https://blog.testery.io"
    Then the page title contains 'Testery test change'

  @testery
  Scenario: User Navigates to TÆstery Blog
    Given I navigate to "https://blog.testery.io"
>>>>>>> 23bf403 (one change)
    Then the page title contains 'Testery Blog'
