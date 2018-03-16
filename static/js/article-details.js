var details = {};

details.init = function () {

    details.vm.getArticle();
};

details.vm = new Vue({
    el: '#vue-content',
    data: {
        article: {
            id: '1521184640100-64c2ce91-2f64-4e52-af06-f618af4e0ae1',


        }

    },
    methods: {
        getArticle: function () {
            var vm = details.vm;
            var url = '/knowledge/article/' + vm.article.id;
            var data = null;
            http.get(url, data, function (result) {

                if (result.code !== 0) {
                    layer.msg("获取文章失败");
                    return;
                }
                vm.article = result.data;

            });
        },
        commitComment: function () {
            layer.msg('暂不可评论', {offset: '200px'});
            return;
        }
    },
    filters: {
        date: function (value, fmt) {
            if (null === value) {
                return null;
            }
            return new Date(value).Format(fmt);
        }
    }
});