// cypress/e2e/duckduckgo.ts
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import jwt_decode from "jwt-decode";

// const jwt_decode = require('jwt-decode');

// When("I visit duckduckgo.com", () => {
//   cy.visit("https://www.duckduckgo.com");
// });


Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});

When(`I authenticate via Auth0 api`, () => {
  let profile = null;
  let jwt = null;

  const client_id = Cypress.env("CLIENT_ID");
  const body = {
    grant_type: Cypress.env("GRANT_TYPE"),
    username: "indu1@yopmail.com",
    password: Cypress.env("PASSWORD"),
    scope: Cypress.env("SCOPE"),
    client_id,
    client_secret: Cypress.env("CLIENT_SECRET"),
  };

  cy.request({
    method: "POST",
    url: "https://login.spring.co.uk/oauth/token",
    body
  }).then((resBody) => {
    if("id_token" in resBody.body) {
      jwt = resBody.body.id_token

      if(jwt) {
        cy.request({
          method: "GET",
          url: 'https://api-qa.spring.co.uk/api/person/profile/',
          headers: {
            'Authorization': `JWT ${jwt}`
          }  
        }).then((profileRes) => {
          profile = profileRes.body
        })
      } else {
        console.warn("No JWT 😢")
        console.log(resBody)
      }

    } else {
      console.warn("No id_token returned from Auth0!")
      console.log(resBody)
    }

    // tokenBody = JSON.stringify(resBody.body);
    // cy.log(tokenBody);

    // const claims = jwt_decode(resBody.body.id_token)
    // const {
    //   nickname,
    //   name,
    //   picture,
    //   updated_at,
    //   email,
    //   email_verified,
    //   iss,
    //   aud,
    //   iat,
    //   exp,
    //   sub,
    // } = claims

    // const item = {

    //   Body:{
    //     ...tokenBody,
    //     decodedToken: {
    //       claims,
    //       user: {
    //         nickname,
    //         name,
    //         picture,
    //         updated_at,
    //         email,
    //         email_verified,
    //         exp,
    //         sub,
    //         aud,
    //         client_id,
    //       },

    //     },
      
    //   exiredAt: exp,

    //   }
    // }
    //"aud":"rOm0Rs3wzQxTYUs9dtoGlAZvF9O43Hdg"
    // cy.log(JSON.stringify(claims));

    // cy.log((item));
    // const auth0Token = JSON.stringify(item)
    // cy.log(auth0Token)
    window.sessionStorage.setItem('auth0Cypress', JSON.stringify({ jwt, profile }))
    cy.log(window.sessionStorage.getItem('auth0Cypress'))

    const auth0SessionData = JSON.parse(window.sessionStorage.getItem('auth0Cypress'))
    cy.log(auth0SessionData)

    // cy.visit("/" + "account/wallet")
    cy.visit("/" + "account/")
  });
});
