describe("Verify End to End Test of Budget Web App", function() {

    beforeEach(() => {
        cy.signupAndLogin("automationUserOne", "@Test123", "automationUserTwo", "@Test1234")

    })

    // const userType = new Map([
    //     ["automationUserOne", "@Test123"],
    //     ["automationUserTwo", "@Test1234"]
    // ]);
    //     for (const [key, value] of userType.entries()) {
    //         it(`SignUp as ${key}`, () => {
    //             cy.visit('/signup');
    //             cy.get("input[type='username']").type(key)
    //             cy.get(".sc-pVTFL.fpjaXA").eq(1).type(value)
    //             cy.get(".sc-pVTFL.fpjaXA").eq(2).type(value)
    //             cy.get(".sc-kDTinF.bzvhtv").click()
    //             // cy.visit("/login")
    //             // cy.get("input[type='username']").type("automationUserOne")
    //             // cy.get("input[type='password']").type("@Test123")
    //             // cy.get(".sc-kDTinF.bzvhtv").click()
    //     });
    // }

    it("Create a budget", () => {
        cy.visit("/lists")
        // task 
        cy.log("Test")
        cy.get(".sc-pVTFL.fpjaXA").type("Salary")
        cy.get(".sc-kDTinF.iOwzpW").click()
        cy.get(".sc-eCImPb.bnYItG").click()
        cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type("Food expense")
        cy.get("select").select("Food and Drinks").should("have.value", "Food")
        cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type("5000")
        cy.get(".sc-kDTinF.iOwzpW").click()

    })


})

export {}



// test data creation
// 