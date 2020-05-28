import {Output} from 'rss-parser';
import {Feed, FeedPost} from '../../router/feed/typings';
import convertFeedPost from "./convert-post";

function convertRawFeed(rawFeed: Output, feedUrl: string): Feed {
    const feed: Feed = {
        title: rawFeed.title || 'Feed',
        description: rawFeed.description || '',
        feedUrl,
        site: rawFeed.link || feedUrl,
        pubDate: rawFeed.pubDate,
        posts: [],
    };

    if (rawFeed.items) {
        const posts: FeedPost[] = rawFeed.items.map((el, i) => convertFeedPost(el, feed, i));

        feed.posts.push.apply(feed.posts, posts);
    }

    return feed;
}

export default convertRawFeed;
