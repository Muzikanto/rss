import {Item} from "rss-parser";
import saveLocal from "../../storage/save-local";
import {resolve, join} from 'path';
import * as fs from 'fs';

const dir = resolve('public/feed');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

function saveFeed(fileName: string, content: Item) {
    saveLocal(join(dir, fileName + '.json'), content);
}

export default saveFeed;
