//JavaScript库插件
src = "https://cdn.bootcdn.net/ajax/libs/jquery/1.9.1/jquery.min.js"
src = "https://cdn.bootcdn.net/ajax/libs/fullPage.js/2.9.3/jquery.fullpage.min.js"

//标题检测显示
window.onload = function () {
    var originalTitle = document.title;
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
            document.title = 'FAMS';    //在线
        } else {
            document.title = '人呢?( ´•.• ` )';     //离线
        }
    }
    );
};