var http = {};

http.get = function (url, data, callback) {
    $.ajax({
        url: url,
        data: data,
        async: false,
        success: function (result) {
            if (typeof callback == 'function') {
                callback(result);
            }
        }
    });
}