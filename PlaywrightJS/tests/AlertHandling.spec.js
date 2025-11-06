import { test, expect } from '@playwright/test';


test("Open TestAutomation Website and simpleAlert",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.on('dialog',async dialog =>{

    await page.waitForTimeout(4000)

    await dialog.accept()
})

await page.locator("#alertBtn").click()

})

test("Open TestAutomation Website and ConfirmationAlert",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.on('dialog',async dialog =>{

    await page.waitForTimeout(4000)

    await dialog.accept()
})

await page.locator("#confirmBtn").click()

})

test("Open TestAutomation Website and ConfirmationAlertCancel",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.on('dialog',async dialog =>{

    await page.waitForTimeout(4000)

    await dialog.dismiss()
})

await page.locator("#confirmBtn").click()

})

test("Open TestAutomation Website and PromptAlert",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.on('dialog',async dialog =>{

    await page.waitForTimeout(4000)

    //await dialog.dismiss()

    await dialog.accept("Testing")
})

await page.locator("#promptBtn").click()

})