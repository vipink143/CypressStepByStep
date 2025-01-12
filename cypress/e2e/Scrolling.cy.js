describe("handling scrolling",()=>{

    it('handling scroll into view command',()=>{

        cy.visit("https://toponwardticket.com/dummy-ticket/?gad_source=1&gclid=CjwKCAiAhP67BhAVEiwA2E_9g8xYUylL6CqvOCLqfGuxr1Pe-YeXQFA3p8_WS4OWD4Ng9x_7ll0U7BoCRCoQAvD_BwE");
        cy.get("[value='Contact']").scrollIntoView({duration:10000});
    })

    it.only('handling scrollTo Command',()=>{

        cy.visit("https://www.browserstack.com/dg/browser-automation-testing-tool?gad_source=1&gclid=CjwKCAiAhP67BhAVEiwA2E_9gwJfZfFbn_jpu0bO2AJkbVDIyFA-3jHKuxL94kEqwqBeFzgiowIsSRoCT74QAvD_BwE&utm_campaign=Search-NB-Global-Automate-Micro-Journey&utm_campaigncode=Browsers-Automation+1007785&utm_content=700459462296&utm_medium=cpc&utm_platform=paidads&utm_source=google&utm_term=e+web%20browser%20automation%20testing");
       
        cy.scrollTo('bottom',{duration:5000}).contains("Privacy Policy")
        cy.scrollTo('top',{duration:5000}).contains(" Demo-it in action! ")

       // cy
        //.scrollTo('center',{ ensureScrollable: false })

        //cy.scrollTo('center').contains('Demo Automate Now!').click();

    })
})