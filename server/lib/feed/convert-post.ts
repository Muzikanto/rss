import {Feed, FeedPost} from "../../router/feed/typings";
import {Item} from "rss-parser";
import findByKeys from "../utils/find-by-keys";
import parseFeedCategory from "./utils/parse-category";

const authorKeys = ['creator', 'author'];
const previewKeys = ['url'];

function convertFeedPost(item: Item, feed: Feed, index: number): FeedPost {
    return {
        title: item.title || (feed.title ? feed.title + ' post ' + index : 'Post ' + index),
        // TODO if date not found, set current date
        date: item.isoDate || item.pubDate || new Date().toISOString(),
        description: item.contentSnippet || item.content || '',
        preview: findByKeys(item, previewKeys) || '',
        link: item.link || feed.feedUrl,
        author: findByKeys(item, authorKeys),
        // if array item is object, get first string
        categories: parseFeedCategory(item.categories).slice(0, 5),
    } as any;
}

export default convertFeedPost;
