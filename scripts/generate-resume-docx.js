const fs = require('fs');
const path = require('path');

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

      // Create Word-compatible HTML with proper Office XML namespace
      const wordCompatibleHtml = `
<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<meta name="ProgId" content="Word.Document">
<meta name="Generator" content="Microsoft Word 15">
<meta name="Originator" content="Microsoft Word 15">
<title>${resume.name}</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>90</w:Zoom>
<w:DoNotPromptForConvert/>
<w:DoNotShowRevisions/>
<w:DoNotPrintRevisions/>
<w:DisplayHorizontalDrawingGridEvery>0</w:DisplayHorizontalDrawingGridEvery>
<w:DisplayVerticalDrawingGridEvery>2</w:DisplayVerticalDrawingGridEvery>
<w:UseMarginsForDrawingGridOrigin/>
<w:ValidateAgainstSchemas/>
<w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
<w:IgnoreMixedContent>false</w:IgnoreMixedContent>
<w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
<w:Compatibility>
<w:BreakWrappedTables/>
<w:SnapToGridInCell/>
<w:WrapTextWithPunct/>
<w:UseAsianBreakRules/>
<w:DontGrowAutofit/>
<w:UseFELayout/>
</w:Compatibility>
</w:WordDocument>
</xml>
<![endif]-->
<style>
@page {
  size: 8.5in 11.0in;
  margin: 0.5in 0.5in 0.5in 0.5in;
  mso-header-margin: 0.5in;
  mso-footer-margin: 0.5in;
  mso-paper-source: 0;
}
body {
  font-family: Calibri, sans-serif;
  font-size: 11pt;
  line-height: 1.2;
  color: black;
  margin: 0;
  padding: 0;
}
.name {
  font-size: 18pt;
  font-weight: bold;
  color: #2E86AB;
  text-align: center;
  margin-bottom: 4pt;
}
.title {
  font-size: 12pt;
  color: #555555;
  text-align: center;
  margin-bottom: 6pt;
}
.contact-info {
  font-size: 10pt;
  text-align: center;
  margin-bottom: 12pt;
}
.section-title {
  font-size: 12pt;
  font-weight: bold;
  color: #2E86AB;
  text-transform: uppercase;
  border-bottom: 1pt solid #2E86AB;
  margin-bottom: 6pt;
  margin-top: 8pt;
  padding-bottom: 2pt;
}
.job-title, .project-title {
  font-weight: bold;
  font-size: 11pt;
  margin-bottom: 2pt;
}
.company {
  font-weight: bold;
  color: #2E86AB;
}
.date {
  font-weight: bold;
  color: #666666;
  font-size: 10pt;
  float: right;
}
.description ul {
  margin: 4pt 0;
  padding-left: 16pt;
}
.description li {
  margin-bottom: 2pt;
  font-size: 10pt;
}
.skill-category {
  margin-bottom: 6pt;
}
.skill-category strong {
  color: #2E86AB;
  font-size: 10pt;
}
.skill-list {
  font-size: 10pt;
}
.summary {
  font-size: 11pt;
  text-align: justify;
  margin-bottom: 12pt;
}
a {
  color: #2E86AB;
  text-decoration: none;
}
.cert-link {
  font-size: 9pt;
  color: #2E86AB;
}
.job-header {
  margin-bottom: 3pt;
  overflow: hidden;
}
.location {
  font-style: italic;
  color: #666666;
  font-size: 9pt;
}
</style>
</head>
${htmlContent.substring(htmlContent.indexOf('<body'))}
</html>
      `;

      // Save as .doc file (HTML format that Word can open natively)
      fs.writeFileSync(outputPath.replace('.docx', '.doc'), wordCompatibleHtml);

      console.log(`${resume.name} Word document generated successfully!`);

    } catch (error) {
      console.error(`Error generating ${resume.name} Word document:`, error);
    }
  }

  console.log('Word document generation completed!');
}

// Run the function
generateWordDocuments().catch(console.error);
