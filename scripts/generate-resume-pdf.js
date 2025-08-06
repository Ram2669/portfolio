const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateResumePDF() {
  console.log('Starting PDF generation...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Generate ATS Resume PDF
  const atsHtmlPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_ATS_Resume.html');
  if (fs.existsSync(atsHtmlPath)) {
    await page.goto(`file://${atsHtmlPath}`, { waitUntil: 'networkidle0' });

    const atsPdfPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_ATS_Resume.pdf');
    await page.pdf({
      path: atsPdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.3in',
        right: '0.5in',
        bottom: '0.3in',
        left: '0.5in'
      }
    });
    console.log('ATS Resume PDF generated successfully!');
  }

  // Generate regular resume PDF
  const htmlPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_Resume.html');
  if (fs.existsSync(htmlPath)) {
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    const pdfPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_Resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });
    console.log('Regular Resume PDF generated successfully!');
  }

  await browser.close();
}

generateResumePDF().catch(console.error);
