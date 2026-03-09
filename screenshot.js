import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: { width: 1440, height: 900 }
    });

    // Set dark mode preference
    await page.emulateMedia({ colorScheme: 'dark' });

    console.log('Navigating to local dev server...');
    await page.goto('http://localhost:5173/');

    console.log('Waiting for network idle...');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Give fonts some extra time to swap and render

    const screenshotPath = path.join(__dirname, 'portfolio_ss.png');
    console.log(`Saving screenshot to ${screenshotPath}...`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    console.log('Done!');
    await browser.close();
})();
