import React from 'react';
import useStore from "@muzikanto/observable/useStore";
import feedStore from "../../store/feed/store";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FeedHeader from "./blocks/FeedHeader/FeedHeader";
import FeedLayout from "./blocks/FeedLayout/FeedLayout";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
    },
}));

function Feed() {
    const classes = useStyles();

    const feed = useStore(feedStore, (state) => state.data);

    return (
        <div className={classes.paper}>
            {feed ? <FeedHeader title={feed.title}/> : <Skeleton/>}
            {feed ? <FeedLayout items={feed.posts}/> : (
                <Grid container spacing={2} justify="center" style={{marginTop: 25}}>
                    {
                        new Array(3).fill(0).map((_, i) => (
                            <Grid item key={'skelet-post-' + i}>
                                <Skeleton variant="rect" style={{width: 345, height: 350}}/>
                            </Grid>
                        ))
                    }
                </Grid>
            )}
        </div>
    )
}

export default React.memo(Feed);
