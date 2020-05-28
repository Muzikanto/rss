function findByKeys(data: { [key: string]: any }, keys: string[]): string | undefined {
    for (const k in data) {
        if (keys.indexOf(k) > -1) {
            return data[k];
        } else {
            if (typeof data[k] === 'object') {
                return findByKeys(data[k], keys);
            }
        }
    }

    return undefined;
}

export default findByKeys;
