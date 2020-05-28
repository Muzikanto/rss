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

export interface MediaCardData {
    title: string;
    date: string;
    preview: string;
    link: string;
    description: string;
}

export interface MediaCardProps extends MediaCardData {
    className?: string;
}

function MediaCard(props: MediaCardProps) {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, props.className)}>
            <CardHeader
                avatar={
                    <Avatar aria-label="logo" className={classes.avatar}>
                        {props.title.slice(0, 1)}
                    </Avatar>
                }
                title={props.title}
                subheader={new Date(props.date).toLocaleDateString()}
            />
            <CardMedia
                className={classes.media}
                image={props.preview}
                title={props.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default React.memo(MediaCard);
