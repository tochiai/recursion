// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    if (obj === null) {
        return "null";
    } else if(typeof(obj) === "object") {
        if(Array.isArray(obj)) {
            var arrString = "[";
            for (var i = 0; i < obj.length; i++) {
                arrString += stringifyJSON(obj[i]) + ",";
            }
            arrString += "]";
            arrString = arrString.replace(",]", "]");
            return arrString;
        } else {
            var objString = "{";
            for (var key in obj) {
                // skip function and undefined values
                if(typeof(obj[key]) !== "function" && obj[key] !== undefined) {
                    objString += '\"' + key + '\":' + stringifyJSON(obj[key]) + ",";
                }
            }
            objString += "}";
            objString = objString.replace(',}', '}');
            return objString;
        }
    } else if(typeof(obj) === "string") {
        return '\"' + obj + '\"';
    } else if(obj === undefined) {
        return "";
    } else if (typeof(obj) === 'function') {
        return "";
    } else {
        // obj has to be number or boolean
        return obj.toString();
    }
};
