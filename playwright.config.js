// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config= ({
  testDir: './tests',
  reporter : 'html',
  timeout : 20000,
  expect: {
    timeout: 5000, 
    Worker: 7,  
   
  },

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        screenshot: 'on',
        video: 'on', //retain-on-failure and off
        trace: 'on'
      }
    },

    // {
    //   name: 'edge',
    //   use: {
    //     browserName: 'chromium',
    //     channel: 'msedge',   
    //     headless: false,
    //     screenshot: 'on',
    //     video: 'on', //retain-on-failure and off
    //     trace: 'on'
    //   }
    // }
  ]

  
  
});

module.exports=config



