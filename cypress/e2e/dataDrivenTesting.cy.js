
describe("data driven testing",()=>{


    it("data driven test",()=>{

        cy.fixture("users").then((dataValue)=>{

            dataValue.forEach(dValue => {
                cy.log(dValue.id)
                cy.log(dValue.name)
                cy.log(dValue.email)
                cy.log(dValue.address1.location)
                
            });


        })
    })

})


// To find  single data from users file

// describe('Read value of id 3 from fixture', () => {
//     beforeEach(() => {
//       cy.fixture('users').as('usersData'); // Load the fixture file
//     });
  
//     it('Fetches the user with id 3', function () {
//       // Find the user with id 3
//       const user = this.usersData.find((user) => user.id === 1);
  
//       // Assertions or usage
//     //   expect(user).to.not.be.undefined;
//     //   expect(user.name).to.equal('Michael Brown');
//     //   expect(user.email).to.equal('michael.brown@example.com');
  
//       // Log the user details
//       cy.log('User with ID 3:', user);
//       cy.log(user.address1.location)
//     });
//   });


/*
describe('Read value of id 3 from fixture using forEach', () => {
    beforeEach(() => {
      cy.fixture('users').as('usersData'); // Load the fixture file
    });
  
    it('Fetches the user with id 3', function () {
      let userWithId3 = null;
  
      // Use forEach to iterate through the array
      this.usersData.forEach((user) => {
        if (user.id === 3) {
          userWithId3 = user;
        }
      });
  
      // Assertions or usage
      expect(userWithId3).to.not.be.null;
      expect(userWithId3.name).to.equal('Michael Brown');
      expect(userWithId3.email).to.equal('michael.brown@example.com');
  
      // Log the user details
      cy.log('User with ID 3:', userWithId3);
    });
  });
  
  */