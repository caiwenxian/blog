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

     // music.search();
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
 
 music.search = function () {
     const keywords = '海阔天空'
     const type = 1
     const limit = 30
     const data = 's=' + keywords + '&limit=' + limit + '&type=' + type + '&offset=0'
     http.create_netease('/api/search/pc/', 'POST', data)
         .then(function (result){
         console.log(JSON.parse(result).result.songs[0].mp3Url)
             assert(JSON.parse(result).result.songs[0].name === '海阔天空')
             // done()
         })
     .catch(function (err){
         console.log('error:', err)
         // done(err)
     })
 }