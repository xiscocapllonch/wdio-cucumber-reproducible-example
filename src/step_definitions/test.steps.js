const { When, Then, Given } = require('cucumber')
const expect = require('expect')

Given(/^I'm on bbc page$/, async function () {
    await browser.url('https://www.bbc.com')
    return browser.waitForExist('a[href="https://www.bbc.com"]')
})

When(/^I accept privacy and cookies agreement$/, async function () {
    await browser.waitForExist('#bbcprivacy-continue-button')
    await browser.click('#bbcprivacy-continue-button')
    await browser.waitForExist('#bbccookies-continue-button')
    return browser.click('#bbccookies-continue-button')
})

Then(/^I can't see cookies policy bar$/, async function () {
    const privacyVisible = await browser.isVisible('#bbcprivacy')
    const cookieVisible = await browser.isVisible('#bbccookies')
    expect(privacyVisible).toBe(false)
    expect(cookieVisible).toBe(false)
})

Then(/^I can see privacy policy bar$/, async function () {
    await browser.waitForExist('#bbcprivacy')
    const isVisible = await browser.isVisible('#bbcprivacy')
    expect(isVisible).toBe(true)
})
