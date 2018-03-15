

var publish = {};

publish.init = function () {

};

publish.vm = new Vue({
    el: '#vue-content',
    data: {
        articleContent: ''
    },
    methods: {
        publish: function () {
            publish.vm.articleContent = editor.txt.html();
            publish.vm.articleContent = publish.vm.articleContent.replace("<pre><code>", "<pre class=layui-code>");
            publish.vm.articleContent = publish.vm.articleContent.replace("</code></pre>", "</pre>");
            var url = '/knowledge/publish';
            var data = {
                content: publish.vm.articleContent
            };
            http.post(url, data, function (result) {

                if (result.code !== 0) {
                    layer.msg("发布失败");
                    return;
                }
                layer.msg("发布成功");
                // music.vm.list = result;
            });
        },
        saveDraft: function () {
            publish.vm.articleContent = editor.txt.html();

            var url = '/knowledge/draft';
            var data = {
                content: publish.vm.articleContent
            };
            http.post(url, data, function (result) {

                if (result.code !== 0) {
                    layer.msg("保存失败");
                    return;
                }
                layer.msg("保存成功");
                // music.vm.list = result;
            });
        },
        preview: function () {

            publish.vm.articleContent = editor.txt.html();
            publish.vm.articleContent = publish.vm.articleContent.replace("<pre><code>", "<pre class='layui-code'>");
            publish.vm.articleContent = publish.vm.articleContent.replace("</code></pre>", "</pre>");
            // publish.vm.articleContent.replace("pre/>", "<pre class='layui-code'");
            layer.open({
                type: 1,
                area: ['1200px', '750px'],
                offset: '70px',
                title: '预览',
                shadeClose: true,
                content: $('#preview'),
                success: function () {

                    layui.use('code', function(){

                        layui.code(); //
                    });
                }
            });
        }

    }
});