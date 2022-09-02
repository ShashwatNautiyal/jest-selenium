const { By, until } = require("selenium-webdriver");

const defaultTimeout = 3000;

const getElementByCss = async (driver, name, timeout = defaultTimeout) => {
	const el = await driver.wait(until.elementLocated(By.css(name)), timeout);
	return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByXpath = async (driver, xpath, timeout = defaultTimeout) => {
	const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
	return await driver.wait(until.elementIsVisible(el), timeout);
};

module.exports = {
	getElementByXpath,
	getElementByCss,
};
