const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateResumePDF() {
  console.log('Starting PDF generation...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600 });
  await page.setDefaultNavigationTimeout(30000);
  await page.setDefaultTimeout(30000);

  // Generate Professional Resume PDF
  const professionalHtmlPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_Professional_Resume.html');
  if (fs.existsSync(professionalHtmlPath)) {
    const htmlContent = fs.readFileSync(professionalHtmlPath, 'utf8');
    await page.setContent(htmlContent, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 2000));

    const professionalPdfPath = path.join(__dirname, '../public/Ram_Gopal_Pampana_Professional_Resume.pdf');
    await page.pdf({
      path: professionalPdfPath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: false,
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
    const atsHtmlContent = fs.readFileSync(atsHtmlPath, 'utf8');
    await page.setContent(atsHtmlContent, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 2000));

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
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    await page.setContent(htmlContent, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 2000));

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

  // Generate new professional resume PDF
  const newResumeHtmlPath = path.join(__dirname, '../public/Pampana_Siva_Surya_Ram_Gopal_Resume.html');
  if (fs.existsSync(newResumeHtmlPath)) {
    const newResumeHtmlContent = fs.readFileSync(newResumeHtmlPath, 'utf8');
    await page.setContent(newResumeHtmlContent, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 2000));

    const newResumePdfPath = path.join(__dirname, '../public/Pampana_Siva_Surya_Ram_Gopal_Resume.pdf');
    await page.pdf({
      path: newResumePdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });
    console.log('New Professional Resume PDF generated successfully!');
  }

  // Generate 2025 professional resume PDF
  const resume2025HtmlPath = path.join(__dirname, '../public/Pampana_Siva_Surya_Ram_Gopal_Resume_2025.html');
  if (fs.existsSync(resume2025HtmlPath)) {
    const resume2025HtmlContent = fs.readFileSync(resume2025HtmlPath, 'utf8');
    await page.setContent(resume2025HtmlContent, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 2000));

    const resume2025PdfPath = path.join(__dirname, '../public/Pampana_Siva_Surya_Ram_Gopal_Resume_2025.pdf');
    await page.pdf({
      path: resume2025PdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });
    console.log('2025 Professional Resume PDF generated successfully!');
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
