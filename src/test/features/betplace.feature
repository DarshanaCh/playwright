Feature: User BetPlacement test

  Background:
    Given User navigates to the practice application
    Given User click on the my account link
    And User enter the username as "fdjqa0802"
    And User enter the password as "Password1"
    When User click on the login button

  #  @ignore
  # Scenario: Bet should be placed successfully
  #   And User select 'Football' as sport
  #   And User select 'game'
  #   When User click on bet price
  #   #Then User should see the bets in betslip
  #   And User enter price for the bets
  #   Then User should be able to click on place bet
 @betplace
  Scenario: Bet should be placed successfully
    And User select the sport
    And User select 'game'
    When User click on bet price
    #Then User should see the bets in betslip
    And User enter price for the bets
    Then User should be able to click on place bet