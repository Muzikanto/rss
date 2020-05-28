function prepareFeedName(url: string) {
    return url.replace(/[^0-9a-zA-Z]+/g, '')
}

export default prepareFeedName;
