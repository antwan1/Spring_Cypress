//utility.ts
export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of environment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://spring.co.uk/discover"; //return desired url
        else if (envi == 'staging')
            return "http://localhost:3000/discover";
        else if (envi == 'qa')
            return "https://web-qa.spring.co.uk/discover";
    }
}

export default Utility;