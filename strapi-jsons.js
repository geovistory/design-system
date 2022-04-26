const fs = require('fs')

const componentsRootPath = __dirname + '/web-components/src/components';
const componentsDestPath = __dirname + '/../cms/src/components/gv';
const pageSchemaPath = __dirname + '/../cms/src/api/page/content-types/page/schema.json'


console.log('===========================================')
console.log('===   EXTRACTING COMPONENTS TO STRAPI   ===')
console.log('===========================================')



// if gv folder does not exists create it
if (!fs.existsSync(componentsDestPath)) fs.mkdirSync(componentsDestPath);

// clean the folder
const toRemove = getFiles(componentsDestPath);
toRemove.forEach(path => fs.unlinkSync(path))

// fetch all *.strapi.json files names
const allFiles = getFiles(componentsRootPath).filter(p => p.indexOf('.strapi.json') != -1)

// load the schema of Page builder so that we can update it with new components
const schema = JSON.parse(fs.readFileSync(pageSchemaPath, 'utf8'))


// copy the files to the right place with the right name
allFiles.forEach(json_path => {
    const fileName_from = json_path.substring(json_path.lastIndexOf('/') + 1);
    const fileName_dest = componentsDestPath + '/' + fileName_from.replace('.strapi', '')

    // copy the json file at the right place, with the right name
    fs.copyFileSync(json_path, fileName_dest)

    // check if the component is added, if not, add it
    const content = 'gv.' + fileName_from.replace('.strapi.json', '')
    if (schema.attributes?.body?.components?.indexOf(content) == -1)
        schema.attributes?.body?.components?.push(content)

    console.log('Component extracted: ' + fileName_from.replace('.strapi.json', ''))
})

// write the schema of Page builder so that he new component are taken
if (fs.existsSync(pageSchemaPath)) fs.unlinkSync(pageSchemaPath)
fs.writeFileSync(pageSchemaPath, JSON.stringify(schema, null, 2))


// get all files in path (recursively)
function getFiles(path) {
    const files = []
    fs.readdirSync(path).forEach(file => {
        const fullPath = path + '/' + file;
        if (fs.statSync(fullPath).isDirectory()) files.push(...getFiles(fullPath));
        else files.push(fullPath);
    })

    return files;
}