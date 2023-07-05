Feature: Validate Search Functionality

  @suite("Regression")
  @regression 
  Scenario Outline: Validate search functionality for popular brand name <brand>
    Given I navigate to the spring home page
    When I enter <brand> in the search and press enter
    Then the <brand> device models should be returned

    Examples:
      | brand   |
      | Apple   |
      | Samsung |

  @suite("Regression")
  @regression 
  Scenario Outline: Validate I can search for popular device model <device>
    Given I navigate to the spring home page
    When User enters <device> in the search and press enter
    Then the <device> should equate the to the device searched

    Examples:
      | device |
      | iPhone |
      | Galaxy |
      | Watch  |

  @suite("Regression")
  @regression
  Scenario Outline: Negative Test - Validate that user is displayed with the appropriate error message when searching for <failedSearch>

    Given I navigate to the spring home page
    When the user inputs the invalid search criteria ex - <failedSearch> and hits enter
    Then the appropriate error message should be displayed with the name of device type <failedSearch>

    Examples:
      | failedSearch |
      | xxx          |
      | Bosch        |
      | dot          |
