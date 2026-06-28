const fs = require('fs');
const path = require('path');

const creativesDir = path.join(__dirname, 'public', 'assets', 'CREATIVES');
const dataFile = path.join(__dirname, 'src', 'clientsData.js');

let clients = [];
let idCounter = 1;

if (fs.existsSync(creativesDir)) {
  const folders = fs.readdirSync(creativesDir).filter(f => fs.statSync(path.join(creativesDir, f)).isDirectory());
  
  folders.forEach(folder => {
    const clientPath = path.join(creativesDir, folder);
    const files = fs.readdirSync(clientPath).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
    
    files.forEach(file => {
      clients.push({
        id: idCounter++,
        client: folder,
        image: `/assets/CREATIVES/${folder}/${file}`
      });
    });
  });
}

const content = `export const clientsData = ${JSON.stringify(clients, null, 2)};\n`;
fs.writeFileSync(dataFile, content);
console.log('Clients data generated successfully at ' + dataFile);
