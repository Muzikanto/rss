import React from 'react';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

export interface FeedHeaderProps {
    title: string;
}

function FeedHeader(props: FeedHeaderProps) {
    return (
        <Toolbar style={{justifyContent: 'center'}}>
            <Typography variant="h4">{props.title}</Typography>
        </Toolbar>
    )
}

export default React.memo(FeedHeader);
