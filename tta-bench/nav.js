document.addEventListener('DOMContentLoaded', function () {
    // 导航栏数据
    const navItems = [
        {
            text: 'Home 🏠',
            link: 'index.html'
        },
        {
            text: 'Leaderboard 🏆',
            link: 'leaderboard.html',
            dropdown: [
                { text: 'Text-to-Image Models', link: 'leaderboard.html' },
                { text: 'Text-to-Audio Models', link: 'leaderboard_bias.html' },
                { text: 'Text-to-Video Models', link: '#' },
                { text: 'Text-to-3D Models', link: '#' }
            ]
        },
        {
            text: 'Models 🎯',
            link: 'models.html'
        },
        {
            text: 'Samples 🎵',
            link: 'samples.html'
        }
    ];

    // 获取当前页面的文件名
    const currentPage = window.location.pathname.split('/').pop();

    // 获取导航栏容器
    const navContainer = document.querySelector('nav');

    // 清空现有导航
    navContainer.innerHTML = '';

    // 创建ul元素
    const ul = document.createElement('ul');

    // 生成导航项
    navItems.forEach(item => {
        const li = document.createElement('li');

        // 如果有下拉菜单，添加dropdown类
        if (item.dropdown) {
            li.className = 'dropdown';
        }

        // 创建主导航链接
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.text;

        // 如果是当前页面，添加active类
        // if (item.link === currentPage) {
        //     a.className = 'active';
        // }

        // 如果有下拉菜单，添加dropdown-toggle类
        if (item.dropdown) {
            a.className += ' dropdown-toggle';
        }

        li.appendChild(a);

        // 如果有下拉菜单，创建下拉菜单
        if (item.dropdown) {
            const dropdownUl = document.createElement('ul');
            dropdownUl.className = 'dropdown-menu';

            item.dropdown.forEach(dropdownItem => {
                const dropdownLi = document.createElement('li');
                const dropdownA = document.createElement('a');
                dropdownA.href = dropdownItem.link;
                dropdownA.textContent = dropdownItem.text;

                // 如果是当前页面，添加active类
                if (dropdownItem.link === currentPage) {
                    dropdownA.className = 'active';
                }

                dropdownLi.appendChild(dropdownA);
                dropdownUl.appendChild(dropdownLi);
            });

            li.appendChild(dropdownUl);
        }

        ul.appendChild(li);
    });

    // 将ul添加到导航容器
    navContainer.appendChild(ul);
}); 