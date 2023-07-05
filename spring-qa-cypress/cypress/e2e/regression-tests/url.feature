Feature: Validate website urls

  @suite("Regression")
  @regression
  Scenario Outline: Validate various urls
    When  I enter sitemap <url> in the url field then I should get a response code of <response_code>

    Examples:
      | url                                                 | response_code |
      | https://web-qa.spring.co.uk/discover                | 200           |
      | https://web-qa.spring.co.uk/does-not-exist          | 404           |
      # | https://web-qa.spring.co.uk/discover/does-not-exist | 404           |
