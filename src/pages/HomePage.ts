
import {assert} from "chai";
import {MyDriver} from "./DriverWrapper";

export class HomePage{
    private myDriver:MyDriver
    private url: string

    constructor(url:string,browser:string) {
        this.url = url
        this.myDriver = new MyDriver(browser)
    }
    async goToHomePage() {
        await this.myDriver.goToPage(this.url)
    }

    async checkLogIn() {
        let userName = await this.myDriver.locateByID('navbar_username')
        let password = await this.myDriver.locateByID('navbar_password')
        let button = await this.myDriver.locateByCss('input.login-btn')
        await userName.sendKeys("4ndr0id")
        await password.sendKeys("Pi77aPi3")
        await this.myDriver.click(button)

        let checkUser = await this.myDriver.locateByCss('span.log_in6',9000)

        assert.equal(await checkUser.getText(),"4ndr0id","Error LogIn")

    }

    async close() {
        await this.myDriver.close()
    }

    async logOut() {
        // let preference = await this.driver.wait(until.elementLocated(By.('img.setopo.initial.loading')))


    }

    async getAllCategories() {
        let elementsList = await this.myDriver.getAllElementByID("c_cat10")
        let checkSize:Boolean = false
        if(elementsList.length == 10){
            checkSize= true
        }
        assert.isTrue(checkSize,"There is a wrong number of categories expected: "+10+" actual: "+elementsList.length+"\n")
    }
}
