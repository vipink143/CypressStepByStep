describe("Verify login 1",()=>{ // Multiple test scenarios


    it("Valid username and password", function(){ // Multiple test cases

        cy.visit("https://nucleus.stanzaliving.com/login")
        cy.get(".login-mobile").type("2675545555")
        cy.get("button[type='submit']")

    })
})

describe("Verify login 2",()=>{ // Multiple test scenarios


    it("Valid username and password", function(){ // Multiple test cases

        cy.log("Vipin")

    })
})