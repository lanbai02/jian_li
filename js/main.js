// 1. 获取左侧所有导航项（按顺序）
const leftItems = document.querySelectorAll('.backleft > div');
// 2. 获取右侧所有内容面板（按顺序，与左侧一一对应）
const rightPanels = document.querySelectorAll('.backright > div');

// 3. 给每个左侧导航绑定点击事件
leftItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        // 3.1 先移除所有右侧面板的 active 类（全部隐藏）
        rightPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        // 3.2 再给当前索引对应的面板加上 active 类（显示它）
        rightPanels[index].classList.add('active');
    });
});