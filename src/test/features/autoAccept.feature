Feature: Autoaccept price test

  Background:
    Given User navigates to the practice application
    Given User click on the my account link
    And User enter the username as "fdjqa0802"
    And User enter the password as "Password1"
    When User click on the login button
    And User select 'Football' as sport
     And User select 'game'
     When User click on bet price
     And User enter price for the bets

  @autoAccept
  Scenario: Autoaccept price checkbox
    And User select price checkbox
    #And User 
    #Then User should see the records
