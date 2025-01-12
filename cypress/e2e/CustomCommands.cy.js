
describe("custom commands",()=>{
   // locator="[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']"

    it("custom commands with login",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginOrange("Admin","admin123")
        
        let z="Dashboard"
        cy.validateLocator("[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").then((x)=>{
           let y= x.text()
           expect(y).to.equal(z)
        })

        cy.containValue('Dashboard');




    })


    
})