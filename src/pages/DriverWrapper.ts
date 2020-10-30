import {Builder, By, ThenableWebDriver, until, WebElement} from "selenium-webdriver";
import "chromedriver"
import "iedriver"


export class MyDriver{
    driver: ThenableWebDriver
    constructor(browser:string) {
        this.driver = new Builder().forBrowser(browser).build();

    }
    async goToPage(url) {
        await this.driver.get(url)
    }

    async locateByID(id:string):Promise<WebElement> {
        let locator = await this.driver.wait(until.elementLocated(By.id(id)))
        return locator
    }

    async click(clickAble:WebElement) {
        clickAble.click()
    }

    async close() {
        await this.driver.quit()
    }

    async locateByCss(css: string,timeOut:number=1000) {
        let locator = await this.driver.wait(until.elementLocated(By.css(css)),timeOut)
        return locator
    }

    async getAllElementByID(cCat: string):Promise<Array<String>> {
        let li = await this.driver.findElement(By.css('#'+cCat));
        let actualList = await li.findElements(By.tagName('li'));
        let categoryNameList:Array<String> = []
        for(let webElement of actualList){
            let categoryText = await webElement.findElement(By.tagName("h3"))
            categoryNameList.push(await categoryText.getText())
        }
        return categoryNameList
    }
}