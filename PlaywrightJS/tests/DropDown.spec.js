import { test, expect } from '@playwright/test';

test ("Open https://www.amazon.co.uk/ and use drop down", async({page})=>{

    await page.goto("https://www.amazon.co.uk/")

    await page.locator("//input[@value='Accept']").click()

    await page.locator("#searchDropdownBox").selectOption({label:"Audible Audiobooks"})

    const dropdownlist = await page.locator("#searchDropdownBox").textContent()

    console.log(dropdownlist)

    const dropdowncount = await page.$$("#searchDropdownBox option")

    console.log(dropdowncount.length)

    expect(dropdownlist.includes("Deals")).toBeTruthy()

    //expect(dropdownlist.includes("Deals")).toBeFalsy()

    expect(dropdownlist.includes("Dealsto")).toBeFalsy()

    await page.locator("//input[@id='twotabsearchtextbox']").fill("Game of Thrones")

    await page.locator("#nav-search-submit-button").click()

    await page.locator("//span[text()='English']").click()

    await page.pause()

})