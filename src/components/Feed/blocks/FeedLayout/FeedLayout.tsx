import React from 'react';
import Grid from "@material-ui/core/Grid";
import MediaCard from "../../../MediaCard/MediaCard";
import TextCard from "../../../TextCard/TextCard";
import {FeedPost, FeedPostType} from "../../../../../server/router/feed/typings";

export interface FeedLayoutProps {
    items: FeedPost[];
}

const RenderMap: { [k in FeedPostType]: React.ElementType<{ feed: FeedPost }> } = {
    text: TextCard,
    image: MediaCard,
    video: MediaCard,
};

function FeedLayout(props: FeedLayoutProps) {
    return (
        <Grid container spacing={2} justify="center">
            {
                props.items.map(function (el, i) {
                    const PostComponent = RenderMap[el.type];

                    return (
                        <Grid item key={el.title + i}>
                            <PostComponent feed={el}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default FeedLayout;
