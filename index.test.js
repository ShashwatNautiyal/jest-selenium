const { Builder, Key } = require("selenium-webdriver");
const { getElementByXpath, getElementByCss } = require("./helpers");
const { capabilities } = require("./capabilities");
const rootURL = "https://todomvc.com/examples/react/#/";
let driver;

const USERNAME = "";
const ACCESS_KEY = "";
const GRID_HOST = "hub.lambdatest.com/wd/hub";
const GRID_URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@" + GRID_HOST;

describe("test", () => {
  beforeAll(async () => {
    driver = new Builder().usingServer(GRID_URL).withCapabilities(capabilities).build();

    await driver.get(rootURL);
  });

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  it("add first todo", async () => {
    await driver.get(rootURL);
    const input = "This is first todo";
    const newTodoInput = await getElementByCss(driver, ".new-todo");

    await newTodoInput.click();

    await newTodoInput.clear();
    await newTodoInput.sendKeys(input);
    await newTodoInput.sendKeys(Key.ENTER);

    const outputTodo = await getElementByXpath(
      driver,
      "/html/body/section/div/section/ul/li/div/label"
    );

    const output = await outputTodo.getText();
    expect(output).toEqual(input);
  });

  it("add second todo", async () => {
    await driver.get(rootURL);

    const input = "This is second todo";
    const newTodoInput = await getElementByCss(driver, ".new-todo");

    await newTodoInput.click();

    await newTodoInput.clear();
    await newTodoInput.sendKeys(input);
    await newTodoInput.sendKeys(Key.ENTER);

    const outputTodo = await getElementByXpath(
      driver,
      "/html/body/section/div/section/ul/li[2]/div/label"
    );

    const output = await outputTodo.getText();
    expect(npm run test).toEqual(input);
  });
});
