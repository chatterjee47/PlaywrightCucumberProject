// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
      headless: false
    }
  }
});