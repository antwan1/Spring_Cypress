/// <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";
import search_brand from "../page_objects/search_po"

const brandSearch = new search_brand();

Then(`the {} device models should be returned`, (brand) =>{
    brandSearch.searchByBrand(brand)
})
Then(`the appropriate error message should be displayed with the name of device type {}`, (error) =>{
    brandSearch.invalidSearchError(error)
})
Then(`the {} should equate the to the device searched`, (device) =>{
    brandSearch.deviceSearchResults(device)
})