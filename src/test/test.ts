import {HomePage} from "../pages/HomePage";

describe("Checkin fxp", () => {
    const homePage = new HomePage("https://www.fxp.co.il/loginpage.php","chrome" );
    before("Before",  () => {

    })
    it("checking fxp is loading ", async () => {
        await homePage.goToHomePage()
        await homePage.checkLogIn()
        await homePage.getAllCategories()
    })
    after("After", async () => {
        // homePage.logOut()
        await homePage.close()
    })
})