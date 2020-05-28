import deepString from "../../utils/deep-string";

function parseFeedCategory(data: any): string[] {
    if (data && Array.isArray(data)) {
        if (typeof data[0] === 'string') {
            return data;
        }else {
            return data.map(deepString);
        }
    } else {
        return [];
    }
}

export default parseFeedCategory;
