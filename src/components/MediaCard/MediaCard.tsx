import React from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from 'clsx';
import red from "@material-ui/core/colors/red";
import {FeedPost} from "../../../server/router/feed/typings";
import ReactPlayer from 'react-player';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}), {name: 'MediaCard'});

export interface MediaCardProps {
    className?: string;
    feed: FeedPost;
}

function MediaCard(props: MediaCardProps) {
    const classes = useStyles();

    const feed = props.feed;

    return (
        <Card className={clsx(classes.root, props.className)}>
            <CardHeader
                avatar={
                    <Avatar aria-label="logo" className={classes.avatar}>
                        {feed.title.slice(0, 1)}
                    </Avatar>
                }
                title={feed.title}
                subheader={new Date(feed.date).toLocaleDateString()}
            />
            {
                feed.type === 'image' ?
                    <CardMedia
                        className={classes.media}
                        image={feed.preview}
                        title={feed.title}
                    /> :
                    <ReactPlayer
                        width={345}
                        height={195}
                        controls
                        url={feed.preview}
                    />
            }
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {feed.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default React.memo(MediaCard);
