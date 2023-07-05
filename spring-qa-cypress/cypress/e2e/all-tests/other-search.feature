Feature: Validate Search Functionality

  @all-tests
  Scenario Outline: Validate I can do a search for OTHER brands and get the appropriate results
    Given I navigate to the spring home page
    When I enter <brand> in the search and press enter
    Then the <brand> device models should be returned

    Examples:
      | brand     |
      | Xiaomi    |
      | Huawei    |
      # | Nokia     | 🔔 The brand Nokia has been removed 
      | Google    |
      | Sony      |
      | Motorola  |
      | Oppo      |
      | OnePlus   |
      | Honor     |
      | Cat       |
      | Microsoft |
      | Lenovo    |
      | Canon     |
      | Panasonic |
      | Fujifilm  |
      | Olympus   |
      | Leica     |
      | Dji       |

  @all-tests
  Scenario Outline: Validate I can search for OTHER specific device model types
    Given I navigate to the spring home page
    When User enters <device> in the search and press enter
    Then the <device> should equate the to the device searched

    Examples:
      | device    |
      | Poco      |
      | DualShock |
      | Hero8     |