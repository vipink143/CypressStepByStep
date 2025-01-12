



describe("origin test",()=>{


    beforeEach("test origin",()=>{

        cy.visit("https://demo3x.opencartreports.com/admin/index.php?route=common/login")
       // cy.wait(3000);
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("[type='submit']").click();

        cy.get(".parent.collapsed >i").eq(3).click();
        cy.wait(3000)
        cy.get('#collapse4 > :nth-child(1) > a').click();

        // find table structure
    })

    it("get all the data present in the table",()=>{

        cy.get(".table.table-bordered.table-hover >tbody>tr").each(($elR,index,$rows)=>{
            cy.wrap($elR).within(()=>{
                cy.get("td").each(($elC,index,$list)=>{
                    cy.log($elC.text())
                })
            })
        })

    })

    it("Paginatuon handling",()=>{
        // first get the all the pages( total no.of pages)
        // find the fisrt and last element index--> get the text and extract
// find total of pages
       /* let totalPages
        cy.get(".col-sm-6.text-right").then((ele)=>{

          let myText=  ele.text() // Showing 1 to 20 of 25 (2 Pages)
         // we want to capture only 2 page (2)
         // find the fisrt element--> find the  index of opening brackets ( and then use +1
         // find the last element----> find index of pages and then use -1

         totalPages=myText.substring((myText.indexOf("(")+1, myText.indexOf("pages")-1)) // get the total no.of pages
         cy.log("total no.of pages in the tables======>" +totalPages);


        })
        */
        // lets take total no of pages==2
         let totalPages=2;
         for(let p=1;p<=totalPages;p++)
         {
            // before clicking we have to check
            if (totalPages>1)
            {
                cy.log("Getting current active page : " +p);
               // cy.get("ul[class='pagination'] >li:nth-child(2)") // 2 is hard coded value- we will customise use this ( "+p+"" )
                cy.get("ul[class='pagination'] >li:nth-child("+p+")").click('{force: true}')
                cy.wait(3000)

                cy.get(".table.table-bordered.table-hover >tbody>tr").each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(3)").then((e)=>{
                            let emailText=e.text();
                            cy.log(emailText);
                        })
                    })
                })
            }
         }

    })


    it.only("Check numbers rows & columns", ()=>{

        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','20')
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length','8')
    
    })


})

