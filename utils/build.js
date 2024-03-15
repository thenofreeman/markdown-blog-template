const INDEX = `${__dirname}/../index.html`;
const PAGES = `${__dirname}/../pages/`;
const BUILD = `${__dirname}/../docs/`;

const fs = require('fs');
const path = require('path');
const marked = require('./lib/marked-node');
const highlight = require('./lib/highlight-node');
const checkBox = require('./lib/checkBox');

marked.setOptions({
    langPrefix: '',
    highlight: function(code) {
        return highlight.highlightAuto(code).value;
    },
});

// Get index.html text
const index = fs.readFileSync(INDEX, 'utf8');

const generate = (file, parent='') => {

    if (parent != '')
        if (!fs.existsSync(BUILD+parent)) 
            fs.mkdirSync(BUILD+parent);

    // Get markdown text
    const markdownText = fs.readFileSync(PAGES + parent + file, 'utf8');

    // Convert markdown to html
    const content = marked(markdownText);
    
    // Replace index dev script with page content
    let output = index.replace('<script type="module" src="./utils/dev.js"></script>', content);

    // Replace title with content of first <h1> tag
    const newTitle = output.match(/>(.*?)<\/h1>/)[1] || null;
    if (newTitle) output = output.replace(/<title>(.*?)<\/title>/, `<title>${newTitle}</title>`);

    // Replace 'docs/assets' links with 'assets'
    output = output.replace(/docs\/assets/g, 'assets');

    // Replace local '?' dev links with built '.html'
    output = output.replace(/href="\?(.*?)"/g, 'href="$1.html"')
    
    // Output built html to build folder
    const outputFile = file.replace('.md', '.html');
    fs.writeFileSync(BUILD + parent + outputFile, output);

    checkBox(`${outputFile} built`, true);

}

// scrape pages folder for markdown files
const markdown = fs.readdirSync(PAGES);
markdown.forEach(file => {
    checkBox(`building ${file}...`);

    if (path.extname(file) != '.md') {
        parent = file+'/';

        const markdown = fs.readdirSync(PAGES+parent);

        markdown.forEach(child => {
            generate(child, parent);        
        });
    } else {
        generate(file);
    }
});