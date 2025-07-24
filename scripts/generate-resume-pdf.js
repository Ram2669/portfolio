const puppeteer = require('puppeteer');
const path = require('path');

async function generateResumePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load the HTML resume
  const htmlPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_Resume.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Generate PDF
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
  
  await browser.close();
  console.log('Resume PDF generated successfully!');
}

generateResumePDF().catch(console.error);
