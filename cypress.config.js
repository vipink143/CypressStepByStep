/// <reference types= "cypress" />
module.exports = {
  e2e: {
     watchForFileChanges:false ,
    pageLoadTimeout:60000,
    viewPortHeight:1024,
    viewPortWidtg:768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
