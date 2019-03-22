function flatten(data) {
    let result = {};
    const loop = (cur, prop) => {
        if (typeof cur !== 'object' || Array.isArray(cur)) {
            result[prop] = cur;
        } else {
            let isEmpty = true;
            for (let p in cur) {
                isEmpty = false;
                loop(cur[p], p);
            }
            if (isEmpty && prop) result[prop] = {};
        }
    }
    loop(data, "");
    return result;
}