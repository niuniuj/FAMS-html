//JavaScript库插件
src = "https://cdn.bootcdn.net/ajax/libs/jquery/1.9.1/jquery.min.js"
src = "https://cdn.bootcdn.net/ajax/libs/fullPage.js/2.9.3/jquery.fullpage.min.js"

//页面滚动
$(function () {
    $("#root").fullpage();
});

// 副标题轮换
const subtitles = ["一个奇奇怪怪的服务器", "为斯卡蒂献上心脏", "博士,还不能休息哟!"];    // 这里添加副标题轮换内容
let currentIndex = 0;
let currentSubtitle = "";

function changeSubtitle() {
    const subtitleElement = document.getElementById('subtitle');
    // 删除当前文本
    if (currentSubtitle.length > 0) {
        currentSubtitle = currentSubtitle.slice(0, -1);
        subtitleElement.textContent = currentSubtitle;
        setTimeout(changeSubtitle, 100); // 每次删除一个字符后等待100毫秒
    } else {
        // 清空副标题文本
        subtitleElement.textContent = "";
        // 切换到下一个副标题
        currentIndex = (currentIndex + 1) % subtitles.length;
        currentSubtitle = subtitles[currentIndex];
        setTimeout(typeSubtitle, 100); // 开始逐个字符打出来
    }
}

function typeSubtitle() {
    const subtitleElement = document.getElementById('subtitle');
    // 打出一个字符
    if (currentSubtitle.length > 0) {
        subtitleElement.textContent += currentSubtitle[0];
        currentSubtitle = currentSubtitle.slice(1);
        setTimeout(typeSubtitle, 100); // 每次打出一个字符后等待100毫秒
    } else {
        // 副标题打完，等待3秒后再次轮换
        setTimeout(changeSubtitle, 3000);
    }
}

// 开始轮换
changeSubtitle();


// 我们是谁？—— 游戏图标滚动
const carouselContainer = document.getElementById('wegame');
const carouselItems = carouselContainer.getElementsByClassName('wegame_icon_item');

carouselContainer.addEventListener('animationiteration', function() {
    if (carouselContainer.scrollLeft <= carouselItems[0].offsetLeft) {
        const firstItem = carouselItems[0];
        carouselContainer.appendChild(firstItem);
        carouselContainer.scrollLeft = 0;
    }
});