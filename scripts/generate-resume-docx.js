const fs = require('fs');
const path = require('path');
const HTMLtoDOCX = require('html-to-docx');

async function generateWordDocuments() {
  console.log('Starting Word document generation...');

  const resumes = [
    {
      file: 'Ram_Gopal_Pampana_Professional_Resume.html',
      output: 'Ram_Gopal_Pampana_Professional_Resume.docx',
      name: 'Professional Resume'
    },
    {
      file: 'Ram_Gopal_Pampana_ATS_Resume.html',
      output: 'Ram_Gopal_Pampana_ATS_Resume.docx',
      name: 'ATS Resume'
    },
    {
      file: 'Ram_Gopal_Pampana_Word_Resume.html',
      output: 'Ram_Gopal_Pampana_Word_Resume.docx',
      name: 'Word Resume'
    }
  ];

  for (const resume of resumes) {
    try {
      const htmlPath = path.join(__dirname, '..', 'public', resume.file);
      const outputPath = path.join(__dirname, '..', 'public', resume.output);

      // Check if HTML file exists
      if (!fs.existsSync(htmlPath)) {
        console.log(`HTML file not found: ${htmlPath}`);
        continue;
      }

      // Read HTML content
      let htmlContent = fs.readFileSync(htmlPath, 'utf8');

      // Clean HTML content for Word conversion
      htmlContent = htmlContent
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '') // Remove existing styles
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // Remove scripts
        .replace(/class="[^"]*"/gi, '') // Remove CSS classes
        .replace(/style="[^"]*"/gi, ''); // Remove inline styles

      // Convert HTML to DOCX
      const docxBuffer = await HTMLtoDOCX(htmlContent, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
        font: 'Calibri',
        fontSize: 22, // 11pt in half-points
        complexScriptFont: 'Calibri',
        lang: 'en-US',
        orientation: 'portrait',
        margins: {
          top: 720, // 0.5 inch in twips
          right: 720,
          bottom: 720,
          left: 720
        }
      });

      // Save the DOCX file
      fs.writeFileSync(outputPath, docxBuffer);

      console.log(`${resume.name} Word document generated successfully!`);

    } catch (error) {
      console.error(`Error generating ${resume.name} Word document:`, error);
    }
  }

  console.log('Word document generation completed!');
}

// Run the function
generateWordDocuments().catch(console.error);
