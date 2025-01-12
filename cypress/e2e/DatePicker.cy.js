



describe('Date Picker Validation and Selection', () => {
    it('should validate and select a date from the date picker', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
  
      cy.get('#datepicker').click(); // Click to open the date picker
      //cy.wait(5000)
  
      cy.get('#datepicker')
        .should('have.value', '') // Assuming it starts empty, adjust if needed
         // Ensure it's not pre-filled
        // cy.wait(5000)
  
      cy.get('.ui-datepicker-calendar')
        .find('a')
        .contains('15') // Select the 15th day
        .click();
       // cy.wait(5000)
      cy.get('#datepicker')
        .should('have.value', '01/15/2025'); 



        cy.get("[name='SelectedDate']").click();
        cy.wait(3000)
      //  cy.get('.ui-datepicker-calendar').click()
        cy.get(".ui-datepicker-month")
        .select('May').wait(3000) // Select the 25th day
       

        cy.get(".ui-state-default")
        .find('a').eq(24)
        .contains('25') // Select the 15th day
        .click();
        cy.wait(5000)

        cy.get('#txtDate')
        .should('have.value', '25/01/2025'); 

    });

    
  });