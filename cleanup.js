import fs from 'fs';
import path from 'path';


const directoryPath = './src'; // Adjust this to your project's source directory

const stripInlineStyles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      stripInlineStyles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');

      // Remove all `className` attributes
      content = content.replace(/className=["'][^"']*["']/g, '');

      // Remove all `style` attributes
      content = content.replace(/style={{[^}]*}}/g, '');

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Processed: ${filePath}`);
    }
  });
};

stripInlineStyles(directoryPath);
