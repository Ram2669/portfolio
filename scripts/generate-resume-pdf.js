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

  // Generate Professional Resume PDF
  const professionalHtmlPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_Professional_Resume.html');
  if (fs.existsSync(professionalHtmlPath)) {
    await page.goto(`file://${professionalHtmlPath}`, { waitUntil: 'networkidle0' });

    const professionalPdfPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_Professional_Resume.pdf');
    await page.pdf({
      path: professionalPdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.4in',
        right: '0.5in',
        bottom: '0.4in',
        left: '0.5in'
      }
    });
    console.log('Professional Resume PDF generated successfully!');
  }

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

// Also generate Word documents
async function generateWordDocuments() {
  const { execSync } = require('child_process');
  try {
    console.log('Generating Word documents...');
    execSync('node scripts/generate-resume-docx.js', { stdio: 'inherit' });
    console.log('Word documents generated successfully!');
  } catch (error) {
    console.error('Error generating Word documents:', error);
  }
}

// Run both PDF and Word generation
async function generateAllFormats() {
  await generateResumePDF();
  await generateWordDocuments();
}

generateAllFormats().catch(console.error);
