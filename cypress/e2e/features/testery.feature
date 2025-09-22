Feature: Testery

  @testery
  Scenario: User Navigates to TÆstery
    Given I navigate to "https://blog.testery.io"
    Then the page title contains 'Testery test change'
