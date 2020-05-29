// @ts-ignore
import parseFeeds from "./lib/feed/parse-feed";
import saveFeed from "./lib/feed/utils/save-feed";
import convertRawFeed from "./lib/feed/convert-feed";

const url1 = 'https://techcrunch.com/feed/';
const url2 = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';
const url3 = 'https://wordpress.org/news/feed/';
const url4 = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCbmNph6atAoGfqLoCL_duAg';
const url5 = 'https://www.rospotrebnadzor.ru/region/rss/rss.php?rss=y';

const arr = [
    url1, url2, url3, url4, url5,
];

arr.forEach((url) => {
    parseFeeds(url).then(data => {
       const feed = convertRawFeed(data, url);

       saveFeed(url, feed);
    }).catch(console.log)
});

