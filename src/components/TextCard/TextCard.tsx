import React from 'react';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
}), {name: 'TextCard'});

export interface TextCardData {
    title: string;
    date: string;
    link: string;
    description: string;
}

export interface TextCardProps extends TextCardData {
    className?: string;
}

function TextCard(props: TextCardProps) {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, props.className)}>
            <CardContent>
                <Typography variant="h5" color="textSecondary" component="p">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default React.memo(TextCard);
