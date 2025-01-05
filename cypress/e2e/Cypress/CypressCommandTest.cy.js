

describe("cypress command",()=>{

    let url="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    it("command cypress",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 

       
        // cy.pause()
        //     cy.log("Vipin");

        // selector hub
        //  chropath
        /// promises
        

    })
})