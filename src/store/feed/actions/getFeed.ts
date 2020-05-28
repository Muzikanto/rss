import createEffect from "@muzikanto/observable/createEffect";
import {Feed} from "../../../../server/router/feed/typings";
import getFeedHandler from "../api/get-feed";

const getFeed = createEffect<{ url: string }, Feed | null>(async (params) => {
    try {
        const {data} = await getFeedHandler(params);

        return data.feed;
    } catch (e) {
        return null;
    }
});

export default getFeed;
