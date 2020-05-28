function deepString(data: { [key: string]: any }): string {
    for (const k in data) {
        if (typeof data[k] === 'string') {
            return data[k];
        } else {
            if (typeof data[k] === 'object') {
                return deepString(data[k]);
            }
        }
    }

    return data[0];
}

export default deepString;
