import {HomePage} from "../pages/HomePage";

describe("Suite", () => {
    const homePage = new HomePage("https://www.fxp.co.il/loginpage.php","chrome" );
    before("Before", async () => {
    })
    it("Open google and verify it is opened", async () => {
        await homePage.goToHomePage()
        await homePage.checkLogIn()
        await homePage.getAllCategories()
    })
    after("After", async () => {
        // homePage.logOut()
        await homePage.close()
    })
})