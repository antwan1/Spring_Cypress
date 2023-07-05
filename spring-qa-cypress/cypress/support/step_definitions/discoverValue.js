/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import discoverValue_po from "../page_objects/discoverValue_po";

const answers = new discoverValue_po();

Then("I answer the storage question with the answer: {}", (storage) => {
  answers.selectStorage(storage);
});

Then("I answer the network question with the answer: {}", (network) => {
  answers.selectNetwork(network);
});

When("I answer the brand new question with the answer: {}", (brandNew) => {
  answers.selectBrandNew(brandNew);
});

When(
  "I answer that they have removed passcodes from their device: {}",
  (passCode) => {
    answers.selectPassCode(passCode);
  }
);

Then("I click I got it on the pop up box {}", (modal) => {
  answers.accountSettingModel(modal);
});

Then("I should see the device quotation modal", () => {
  answers.deviceQuotationModal();
});
