/**
 * music模块 js
 */

 var music = {};

 music.init = function () {
     common.changeNav(3);
     // music.getContent();
     music.vm.getMusicList();
     //初始化播放器
     $( 'audio' ).audioPlayer();
 }
 music.vm = new Vue({
    el: '.vue-content',
    data: {
        list: null
    },
    /* created: function () {
      this.getMusicList();
      },*/
    methods: {
        /**获取文件列表*/
        getMusicList: function () {
            var url = '/blog/database/music-list.json'
            http.get(url, null, function (result) {
                music.vm.list = result;
            });
        }
    }
 });

 music.getContent = function () {
     var url = '/blog/database/music.json';
     var data = null;
     http.get(url, data, function (result) {
         console.log(result)
     })
 }