/*
* Quote from https://github.com/PanJiaChen/vue-element-admin
* And add new compatibility
* @method formatDate
* @param time {String} 
* @param cFormat {String} the format you want to tranform
* @return {String} 
 */
 function formatDate(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }
    const format = cFormat || "y-m-d h:i:s";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        // 兼容IE
        time = time.replace(/-/g, "/")
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds()
    };
    const time_str = format.replace(/(y|m|d|h|i|s)+/g, (result, key) => {
        let value = formatObj[key];
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
    return time_str;
}

