import * as elements from "../gengine/index.js";

const createArray = (data) => typeof data === "object" && Object.keys(data).length ? [data] : [];
const objectToArray = (data) => Array.isArray(data) ? data : createArray(data);

export const jsx = (tag, attributes = {}) => {
    const preparedTag = tag(attributes);
    if (!preparedTag.gengineItem) {
        return jsx(elements[preparedTag.tagName], { ...preparedTag.attributes, children: preparedTag.children })
    }
    return {
        tagName: preparedTag.name,
        attributes: preparedTag.attributes || {},
        children: objectToArray(attributes.children) || [],
    };
};

export const jsxs = (tag, attributes = {}) => {
    const preparedTag = tag(attributes);
    if (!preparedTag.gengineItem) {
        return jsxs(elements[preparedTag.tagName], { ...preparedTag.attributes, children: preparedTag.children })
    }
    return {
        tagName: preparedTag.name,
        attributes: preparedTag.attributes || {},
        children: objectToArray(attributes.children) || [],
    };
};
