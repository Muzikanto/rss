const fs = require('fs');

function saveLocal(filename: string, content: object) {
    fs.writeFileSync(filename, JSON.stringify(content, null, 2), {encoding: 'utf-8'});
}

export default saveLocal;
