import {Feed, FeedPost} from "../../router/feed/typings";
import {Item} from "rss-parser";
import findByKeys from "../utils/find-by-keys";
import parseFeedCategory from "./utils/parse-category";
import checkPostType from "./utils/check-post-type";

const authorKeys = ['creator', 'author'];
const previewKeys = ['url'];

function convertFeedPost(item: Item, feed: Feed, index: number): FeedPost {
    const preview = findByKeys(item, previewKeys) || item.link || '';
    const type = checkPostType(preview);

    const data: FeedPost = {
        title: item.title || (feed.title ? feed.title + ' post ' + index : 'Post ' + index),
        type,
        // TODO if date not found, set current date
        date: item.isoDate || item.pubDate || new Date().toISOString(),
        description: item.contentSnippet || item.content || '',
        preview: type === 'text' ? '' : preview,
        link: item.link || feed.feedUrl,
        author: findByKeys(item, authorKeys),
        // if array item is object, get first string
        categories: parseFeedCategory(item.categories).slice(0, 5),
    };

    return data;
}

export default convertFeedPost;
