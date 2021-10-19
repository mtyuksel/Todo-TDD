/* globals gauge*/
"use strict";
const path = require('path');
const { assert } = require('chai');

const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    screenshot,
    click,
    listItem,  
    into,
    textBox,
} = require('taiko');

const headless = process.env.headless_chrome.toLowerCase() === 'true';

const baseURL = "http://localhost:8080"

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Given Empty ToDo list", async function() {
	await goto(baseURL);
});

step("When I write <task> to textBox and click to add button", async function(task) {
    await write(task, into(textBox("Enter a Task...")));
    click("Add Task")
});

step("Then I should see item <task> in ToDo list", async function(task) {
    let isExists = await listItem(task).exists(); 
    assert.isTrue(isExists)
});