import { test, expect } from '@playwright/test';

// test("Open iFrame and enter text",async({page})=>{
// await page.goto("https://practice.expandtesting.com/iframe")

// const noOfFrames = await page.frames()

// console.log(noOfFrames.length)

// const imageFrame =  await page.frame("mce_0_ifr")

// await imageFrame.locator("//body[@id='tinymce']").fill("Great Job")

// await page.pause()



// })

test("Open iFrame and enter text",async({page})=>{
await page.goto("https://practice.expandtesting.com/iframe")

const noOfFrames = await page.frames()

console.log(noOfFrames.length)

const imageFrame1 =  await page.frame("email-subscribe")

await imageFrame1.locator("//input[@id='email']").fill("test@gmail.com")

await imageFrame1.locator("//button[@id='btn-subscribe']").click()

await page.pause()



})

