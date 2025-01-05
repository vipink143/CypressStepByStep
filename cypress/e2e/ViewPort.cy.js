describe("View post sizing",function()
{
    it("different screen size", function()
{
    cy.viewport("iphone-x")
    cy.visit("https://www.blazedemo.com/");
    cy.wait(10000)
})

it("taking value from config file", function()
{
    
    cy.visit("https://www.blazedemo.com/");
})


})