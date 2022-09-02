const capabilities = {
	platform: "windows 10",
	browserName: "chrome",
	version: "latest",
	resolution: "1280x800",
	visual: true,
	console: true,
	name: "Test 1", // name of the test
	build: "NodeJS build", // name of the build
	terminal: true,
	headless: true,
};

module.exports = {
	capabilities,
};
