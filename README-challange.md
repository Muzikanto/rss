# Full Stack Developer - Challenge

We are a small team at RSS.app dedicated to creating the best product at generating RSS feeds (XML and JSON formats) from any source or website and provide it to users via API, Widgets or RSS feeds. In order to achieve this correctly, one of our requirements is to be able to parse any type of RSS feed in XML format.

To demonstrate your programming abilities, please complete the exercise below.

Once completed, please share your repository (Github, Gitlab, GitBucket, etc.) with us and we will follow up with you right after.

## Backend

- Create an RSS parser in Node.JS that will be able to parse the feed from a given URL and transform it into JSON

- Any RSS URL can be passed via get request /api/feed?url=https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

- The JSON feed will be returned from the get request. An example of the JSON structure could be as the following:

```
feed:
 id
 name
 title
 description
 xmlUrl
 category
 keywords
 normalizedUrl
 siteName
 siteIcon
 hasDates
 hasImages
 hasAuthor
 etc...
 posts:
   id
   title
   link
   description
   plainDescription
   author
   site
   category
   keywords
   image
   date
   videos
   hasHtml
   hasVideo
   etc...
```

- Examples of RSS feed URLs:

  - https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
  - https://techcrunch.com/feed/
  - https://wordpress.org/news/feed/
  - https://www.youtube.com/feeds/videos.xml?channel_id=UCbmNph6atAoGfqLoCL_duAg
  - https://www.rospotrebnadzor.ru/region/rss/rss.php?rss=y

- If some of the fields are missing in the RSS feed, can you get them from somewhere else? (Bonus)

## Frontend

- Use JS (React, Web-Components, Vue, Angular, etc.) to pass RSS feed URL to the backend above and display them on the frontend as one feed, sorted by dates if possible

#### Example of the feed

![Example of the feed](https://github.com/RSSapp/interview/blob/master/feed-example.png)
