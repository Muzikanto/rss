import {Item} from "rss-parser";
import saveLocal from "../../storage/save-local";
import {resolve, join} from 'path';
import * as fs from 'fs';

const dir = resolve('public/feed');
const getUuid = require('uuid-by-string');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

function saveFeed(url: string, content: Item) {
    const fileName = getUuid(url);

    saveLocal(join(dir, fileName + '.json'), content);
}

export default saveFeed;
