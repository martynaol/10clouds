beforeEach(()=> {
    cy.viewport('macbook-16');
    cy.visit(`https://10clouds.com`)
});

describe('Careers Page', () =>{

    it('Should find only one "QA Automation Engineer" role', ()=> {
        cy.contains('Careers').click();
        cy.url().should('include', '/careers/' );
        cy.get('[href="/careers/QA-Automation-Engineer"]')
            .then((element) => {
                expect(element).to.contain("QA Automation Engineer");
                expect(element.length).to.be.eq(1);
            });
    });

    it('Should returns result that contains "Automation" in title', ()=> {
        cy.contains('Careers').click();
        cy.url().should('include', '/careers/' );
        cy.get('#search-job').type('Automation');
        cy.get('#job-offers-section')
            .find('.job-offer__title').each((element) => {
                expect(element).to.contain("Automation");
        });
    });
});
