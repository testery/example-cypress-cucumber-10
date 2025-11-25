Feature: Long Running Tests

  @longRunning
  Scenario: Long Running Test
    When I run a 5 minute test with logging every 30 seconds
