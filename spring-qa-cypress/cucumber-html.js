const report = require('multiple-cucumber-html-reporter');
let date = new Date();
const formattedCurrentDate = date.toJSON().slice(0,10);

report.generate({
    jsonDir: "cypress/reports/cucumber-json/",
    reportPath: "cypress/reports/cucumber-html-multi-report/",
    theme: 'bootstrap',
    displayDuration: true,
    displayReportTime: true,
    ignoreBadJsonFile: true,
    hideMetadata: true,
    // metadata:{
    //     // device: "Local test machine",
    //     platform:{
    //         name: "macOS Monterey",
    //     },
    //     Execution_Date: formattedCurrentDate

    // },
    pageTitle: "E2E Regression Tests",
});
