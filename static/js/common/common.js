var common = {};

/**改变导航栏样式*/
common.changeNav = function (index) {
    $('.nav-ul li').eq(index).addClass('layui-this').siblings().removeClass('layui-this');
}