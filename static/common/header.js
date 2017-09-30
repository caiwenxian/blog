// $(function() {
    document.writeln("<script src=\'/blog/static/plugins/jquery/jquery.min.js\'></script>");
    document.writeln("<script src=\'/blog/static/plugins/layui/layui.js\'></script>");
    document.writeln("<script src=\'/blog/static/plugins/vue/vue.min.js\'></script>");
    document.writeln("<link rel=\'stylesheet\' href=\'/blog/static/plugins/layui/css/layui.css\'>");
    document.writeln("<script>");
    document.writeln("    layui.use([\'layer\', \'element\'], function() {");
    document.writeln("    });");
    document.writeln("</script>");
    document.writeln("");
    document.writeln("<ul class=\'layui-nav\' lay-filter=\'\'>");
    document.writeln("  <li class=\'layui-nav-item\'><a href=\'\'>最新活动</a></li>");
    document.writeln("  <li class=\'layui-nav-item layui-this\'><a href=\'\'>产品</a></li>");
    document.writeln("  <li class=\'layui-nav-item\'><a href=\'\'>大数据</a></li>");
    document.writeln("  <li class=\'layui-nav-item\'>");
    document.writeln("    <a href=\'javascript:;\'>解决方案</a>");
    document.writeln("    <dl class=\'layui-nav-child\'> <!-- 二级菜单 -->");
    document.writeln("      <dd><a href=\'\'>移动模块</a></dd>");
    document.writeln("      <dd><a href=\'\'>后台模版</a></dd>");
    document.writeln("      <dd><a href=\'\'>电商平台</a></dd>");
    document.writeln("    </dl>");
    document.writeln("  </li>");
    document.writeln("  <li class=\'layui-nav-item\'><a href=\'\'>社区</a></li>");
    document.writeln("</ul>");
// })