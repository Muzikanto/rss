import {NextPage} from "next";
import getFeed from "../store/feed/actions/getFeed";
import React from "react";
import Feed from "../components/Feed/Feed";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const links = [
    'https://techcrunch.com/feed/',
    'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    'https://wordpress.org/news/feed/',
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCbmNph6atAoGfqLoCL_duAg',
    'https://www.rospotrebnadzor.ru/region/rss/rss.php?rss=y'
];

const IndexPage: NextPage = function () {
    React.useEffect(function () {
        getFeed({url: 'https://techcrunch.com/feed/'}).then(console.log);
    }, []);

    return (
        <Container>
            <Toolbar>
                <Select
                    defaultValue={links[0]}
                    onChange={(e) => {
                        getFeed({url: e.target.value as string}).then(console.log)
                    }}
                    variant="outlined"
                    style={{width: '100%'}}
                >
                    {
                        links.map((url, i) => (
                            <MenuItem key={'test-link-' + i} value={url}>{url}</MenuItem>
                        ))
                    }
                </Select>
            </Toolbar>
            <Feed/>
        </Container>
    );
};

export default IndexPage;
