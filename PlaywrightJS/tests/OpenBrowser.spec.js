import { test, expect } from '@playwright/test';

test ("Open yahoo.com", async({page})=>{

    await page.goto("https://yahoo.com")

})

test ("Open gmail.com", async({page})=>{

    await page.goto("https://gmail.com")

})

//testing GIT 