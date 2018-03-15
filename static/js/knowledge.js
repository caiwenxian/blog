

var article = {};

article.init = function () {

    article.vm.listArticle();
};

article.vm = new Vue({
    el: '#vue-content',
    data: {
        article: {
            list: null,
            page: 1,
            totalSize: 0,
            current: null,
            searchKeyWord: null

        }

    },
    methods: {
        listArticle: function () {
            var vm = article.vm;
            var url = '/knowledge/articles/' + vm.article.page;
            var data = {
                title:  vm.article.searchKeyWord
            };
            http.get(url, data, function (result) {

                if (result.code !== 0) {
                    layer.msg("获取文章列表失败");
                    return;
                }
                vm.article.list = result.data.data;

            });
        },



    }
});