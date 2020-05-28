import axios from 'axios';
import {GetFeedRequest, GetFeedResponse} from "../../../../server/router/feed/get";
import CONFIG from "../../../config";

const getFeedHandler = (params: GetFeedRequest) =>
    axios.get<GetFeedResponse>(`${CONFIG.api}/feed`, {params});

export default getFeedHandler;
