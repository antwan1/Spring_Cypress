Feature: Test guest user sign up

@suite("Regression")
@regression 
Scenario Outline: To test that guest user is able to sign up successfully
Given I navigate to the spring home page
When I click on menu icon
And I click on Sign Up button on the screen
Then I should be navigated to auth0 origin and sign up successfully with valid credentials
And I should write the email address in the file


