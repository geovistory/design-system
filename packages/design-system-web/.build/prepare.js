const fs = require('fs');
const path = require('path');

// create a temporary file to make the build process work
// the file will be replaced by stencil build
// but without it, stencil build fails on startup
const fileContent = 'export namespace Components {}\nexport namespace JSX {}\n';
fs.writeFileSync(path.join(__dirname,'../src/components-all.d.ts'), fileContent);