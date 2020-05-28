import createStore from "@muzikanto/observable/createStore";
import {Feed} from "../../../server/router/feed/typings";
import getFeed from "./actions/getFeed";

export interface FeedState {
    data: Feed | null;
    error: string | null;
    loading: boolean;
}

// @muzikanto/observable its my package :)
const feedStore = createStore<FeedState>({
    data: null,
    error: null,
    loading: false,
});

feedStore.on(getFeed.done, function (state, payload) {
    return ({...state, data: payload})
});
feedStore.on(getFeed.fail, function (state, payload) {
    return ({...state, error: payload.message})
});
feedStore.on(getFeed.loading, function (state, payload) {
    return ({...state, data: payload ? null : state.data, loading: payload})
});

export default feedStore;
