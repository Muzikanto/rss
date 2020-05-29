import {Output} from "rss-parser";

const Parser = require('rss-parser');

async function parseFeed(url: string): Promise<Output> {
    let parser = new Parser({
        headers: {
            'Content-type': 'text/html; charset="utf-8"',
        },
        customFields: {
            feed: [],
            item: ['url', 'media:content'],
        }
    });

    return parser.parseURL(url);
}

export default parseFeed;
