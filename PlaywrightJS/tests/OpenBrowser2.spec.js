import { test, expect } from '@playwright/test';

test ("Open yahoo.com", async({page})=>{

    await page.goto("https://google.com")

    await page.waitForTimeout(3000)

    await page.locator("//div[text()='Accept all']").click()
//    await page.getByText("Mail").click

    await page.pause()

})

