import React from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from 'clsx';
import {FeedPost} from "../../../server/router/feed/typings";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
}), {name: 'TextCard'});

export interface TextCardData {
    feed: FeedPost
}

export interface TextCardProps extends TextCardData {
    className?: string;
}

function TextCard(props: TextCardProps) {
    const classes = useStyles();
    const feed = props.feed;

    return (
        <Card className={clsx(classes.root, props.className)}>
            <CardContent>
                <Typography variant="h5" color="textSecondary" component="p">
                    {feed.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {feed.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default React.memo(TextCard);
