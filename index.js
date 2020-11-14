const puppeteer = require('puppeteer-core');

(async () => {
  let browser;
  if (process.platform==='win32') {
    browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
  } else {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser'
    });
  }
  const page = await browser.newPage();
  await page.goto('https://google.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();