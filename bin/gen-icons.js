import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import generateIconsMap from './generate-icons-map.js';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const destinationDir = path.resolve(path.basename(__dirname), '../src/components/icons/');
const coreDestinationDir = path.resolve(path.basename(__dirname), '../src/components/icon/');

console.log('Generating Icons...\n');
console.log(`Current directory ${process.cwd()}`);
console.log(`Destination directory ${destinationDir}`);
console.log('');

deleteExistingIcons();
generateIcons();
generateIndexFile();
generateGlyphMapFile();

function generateGlyphMapFile() {
  console.log(`Generating glyph map...`);
  const template = loadGlyphMapTemplate();
  const unionParts = [];
  const files = [];
  const imports = [];
  generateIconsMap.forEach((glyphName, iconString) => {
    imports.push(glyphName);
    files.push(`   ['${iconString}', ${glyphName}],`);
    unionParts.push(`'${iconString}'`);
  });
  const content = template
    // @ts-ignore
    .replaceAll('__ICON_GLYPH_LIST__', files.join('\n'))
    .replaceAll('__ICON_LABEL_DISCRIMINATED_UNION__', '\n  | ' + unionParts.join('\n  | ') + '\n')
    .replaceAll('__ICON_NAMES_LIST__', '  ' + unionParts.join(',\n  '))
    .replaceAll(
      '__ICON_GLYPH_IMPORTS__',
      '  ' + imports
        .filter((item, pos) => imports.indexOf(item) == pos)
        .join(',\n  ')
    );

  const indexFile = path.resolve(coreDestinationDir, 'icon-glyph-map.ts');
  fs.writeFileSync(indexFile, content);
}

function generateIndexFile() {
  console.log(`Generating index file...`);
  const files = [];
  generateIconsMap.forEach((_, iconString) => {
    files.push(iconFileNameNoExtension(iconString));
  });
  const content = files
    .map((file) => `export * from './${file}';`)
    .join('\n');

  const indexFile = path.resolve(destinationDir, 'index.ts');
  fs.writeFileSync(indexFile, content);
}

function generateIcons() {
  console.log(`Generating icons`);
  const template = loadIconTemplate();
  generateIconsMap.forEach((faName, iconString) => {
    console.log(`${iconString.padEnd(15)} => ${faName}`);
    const content = template
      // @ts-ignore
      .replaceAll('__ICON_NAME_PASCAL_CASE__', iconStringToPascalCase(iconString))
      // @ts-ignore
      .replaceAll('__ICON_GLYPH_NAME__', faName);
    const destinationFile = path.resolve(destinationDir, iconFileName(iconString));

    fs.writeFileSync(destinationFile, content);
  });
}


function iconFileNameNoExtension(iconString) {
  return `icon-${iconString}.component`;
}

function iconFileName(iconString) {
  return iconFileNameNoExtension(iconString) + '.tsx';
}

function iconStringToPascalCase(iconString) {
  return iconString.split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
}

function loadIconTemplate() {
  const filename = path.resolve(path.basename(__dirname), './generate-icons-templates/icon-template.tsx');
  return fs.readFileSync(filename, 'utf8');
}

function loadGlyphMapTemplate() {
  const filename = path.resolve(path.basename(__dirname), './generate-icons-templates/icon-glyph-map.ts');
  return fs.readFileSync(filename, 'utf8');
}

function deleteExistingIcons() {
  console.log(`Deleting existing icon files from ${destinationDir}`);
  fs.readdirSync(destinationDir)
    .filter((filename) => iconFilenamePattern().test(filename))
    .map((filename) => `${destinationDir}/${filename}`)
    .forEach((filename) => fs.unlinkSync(filename));
  console.log('');
}

function iconFilenamePattern() {
  return new RegExp(/^icon-([a-z0-9-]+)?([a-z0-9]+)\.component\.tsx$/);
}
