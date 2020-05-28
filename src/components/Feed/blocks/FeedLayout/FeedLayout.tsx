import React from 'react';
import Grid from "@material-ui/core/Grid";
import MediaCard, {MediaCardData} from "../../../MediaCard/MediaCard";
import TextCard, {TextCardData} from "../../../TextCard/TextCard";

export interface FeedLayoutProps {
    items: Array<TextCardData & { preview?: undefined } | MediaCardData>;
}

function FeedLayout(props: FeedLayoutProps) {
    return (
        <Grid container spacing={2} justify="center">
            {
                props.items.map(function (el, i) {
                    return (
                        <Grid item key={el.title + i}>
                            {
                                el.preview ?
                                    <MediaCard  {...el} /> :
                                    <TextCard {...el}/>
                            }
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default FeedLayout;
