document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');
    const pageContainer = document.querySelector('.page-container');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
        pageContainer.classList.toggle('sidebar-closed');
        menuIcon.classList.toggle('sidebar-closed');
    });

    // 点击侧边栏外的区域关闭侧边栏
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove('open');
            pageContainer.classList.remove('sidebar-open');
        }
    });
});

function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "var(--sidebar-width)") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "var(--sidebar-width)";
    }
}

// 在页面加载时初始化侧边栏状态
window.onload = function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "var(--sidebar-width)";
};