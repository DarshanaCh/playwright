Feature: Search Widget

  Background:
   # Given User navigates to the practice application
   # Given User click on the my account link
  @search
  Scenario: Search functionality check
    And User select search icon
    And User enter the search text as "Test"
    Then User should see the records