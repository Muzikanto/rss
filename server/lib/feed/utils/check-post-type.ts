import {FeedPostType} from "../../../router/feed/typings";

const videos = ['.mp4'];
const images = ['.jpg', '.png', '.jpeg'];

function checkPostType(link?: string): FeedPostType {
    if (!link) {
        return 'text';
    }

    if (link.indexOf('v=') > -1) {
        return 'video'
    }

    for(const str of videos) {
        if (link.endsWith(str)) {
            return 'video';
        }
    }

    for(const str of images) {
        if (link.endsWith(str)) {
            return 'image';
        }
    }

    return 'text';
}

export default checkPostType;
