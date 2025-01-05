
describe("testing bstack website",()=>{

   it("bstack demo tesing",()=>{

    cy.visit("https://bstackdemo.com/signin")
    // select() use where the html tag start with select tag

    cy.get("[class=' css-1hwfws3']").eq(0).click();
    cy.get("#react-select-2-option-0-0").click();
   // cy.wait(4000)
    cy.get(".css-1hwfws3").eq(1).click()
    cy.get("#react-select-3-option-0-0").click()
    cy.get("#login-btn").click();

    // assertion
    let expText="demouser"
    cy.get(".username").then((textData)=>{
       let actText= textData.text();
       expect(expText).to.equal(actText);
    })

    cy.get(".shelf-item__buy-btn").eq(0).click()
    cy.wait(4000)
    // cy.get("buy-btn").scrollIntoView({duration:5000})
    // .click();
    cy.contains("Checkout").click()

    // user details page
    cy.get("#firstNameInput").type("Test")
    cy.get("#lastNameInput").type("User")
    cy.get("#addressLine1Input").type("Delhi Sadar Bazar, 110006")
    cy.get("#provinceInput").type("Delhi")
    cy.get("#postCodeInput").type("110030")
    cy.get("#checkout-shipping-continue").click();

    cy.get("#confirmation-message").should('contain','Your Order has been successfully placed.');
    cy.get("#downloadpdf").click()





   }) 


})