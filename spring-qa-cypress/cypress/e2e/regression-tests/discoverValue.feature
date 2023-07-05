Feature: As a guest user, I want to discover the value of my device

    @suite("Regression")
    @regression 
    Scenario Outline: Guest user answering storage, question and brand new question
        Given I navigate to the spring home page
        # Currently this discovers the iphone 14 pro max
        When I select device from the device selection page <modelType>
        And I answer the storage question with the answer: <storage>
        And I answer the network question with the answer: <network>
        And I answer the brand new question with the answer: <brandNew>
        And I answer that they have removed passcodes from their device: <passcodes>
        And I click I got it on the pop up box <modal>
        Then I should see the device quotation modal

        Examples:
            | modelType | storage | network | brandNew | passcodes | modal      |
            | iPhone 14 | 256GB   | No      | Yes      | Yes       | Ok, got it |