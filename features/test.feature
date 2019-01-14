Feature: Test
  As a user

  Scenario: First Scenario
    Given I'm on bbc page
    When I accept privacy and cookies agreement
    Then I can't see cookies policy bar

  Scenario: Second Scenario
    Given I'm on bbc page
    Then I can see privacy policy bar

