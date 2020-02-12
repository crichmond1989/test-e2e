import { By, Key, until } from "selenium-webdriver";

import driver from "./driver";

describe("happy", () => {
  beforeEach(async () => {
    await driver.get("https://www.google.com");
  });

  after(async () => {
    await driver.close();
  });

  it("finds title", async () => {
    await driver.findElement(By.css("input[title='Search']")).sendKeys("test", Key.ENTER);
    await driver.wait(until.titleIs("test - Google Search"), 1000);
  });

  it("has results", async () => {
    await driver.findElement(By.css("input[title='Search']")).sendKeys("test", Key.ENTER);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#resultStats"))), 1000);
  });
});
