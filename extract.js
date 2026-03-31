import fs from 'fs';
import pdfParse from 'pdf-parse/lib/pdf-parse.js';

async function extract() {
    try {
        let dataBuffer = fs.readFileSync('./cv_doc/CV_2026_Espaniol.pdf');
        let data = await pdfParse(dataBuffer);
        fs.mkdirSync('./src/data', { recursive: true });
        
        const content = `// Información extraída automáticamente del CV\nexport const cvDataText = \`${data.text.replace(/`/g, '\\`')}\`;\n`;
        fs.writeFileSync('./src/data/cvData.js', content);
        console.log('Extracción completada');
    } catch (err) {
        console.error('Error extrayendo CV:', err);
    }
}

extract();
