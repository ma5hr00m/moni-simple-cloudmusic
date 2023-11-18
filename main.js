const routes = {
  '': 'home.html',
  '#/manager': 'manager.html',
  '#/my': 'my.html',
};

const viewsPath = '/views/';
const appDiv = document.getElementById('app');

window.addEventListener('hashchange', routePage);

async function routePage() {
  const hash = location.hash;
  const route = routes[hash];

  try {
    const response = await fetch(viewsPath + route);
    if (response.ok) {
      const data = await response.text();
      appDiv.innerHTML = data;
    } else {
      throw new Error('404 Not Found');
    }
  } catch (error) {
    appDiv.innerHTML = `<h1>${error.message}</h1>`;
  }
}

routePage();

// Generate header tabs
function generateHeaderTabs() {
  const navMenu = document.getElementById('header-tabs');
  const menuItems = [
    { text: '发现音乐', href: '#' },
    { text: '我的音乐', href: '#/my' },
    { text: '关注', href: 'https://music.163.com/friend' },
    { text: '商城', href: 'https://music.163.com/store/product' },
    { text: '音乐人', href: 'https://music.163.com/musician/artist' },
    { text: '云推歌', href: 'https://music.163.com/st/ad-song' },
    { text: '下载客户端', href: 'https://music.163.com/download' },
  ];

  menuItems.forEach((menuItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = menuItem.href;
    a.textContent = menuItem.text;
    li.appendChild(a);
    navMenu.appendChild(li);
  });
}

generateHeaderTabs();

// Generate discover tabs
function generateDiscoverTabs() {
  const navMenu = document.getElementById('discover-tabs');
  const menuItems = [
    { text: '推荐', href: '#' },
    { text: '排行榜', href: 'https://music.163.com/discover/toplist' },
    { text: '歌单', href: 'https://music.163.com/discover/playlist' },
    { text: '主播电台', href: 'https://music.163.com/discover/djradio' },
    { text: '歌手', href: 'https://music.163.com/discover/artist' },
    { text: '新碟上架', href: 'https://music.163.com/discover/album' },
  ];

  menuItems.forEach((menuItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = menuItem.href;
    a.textContent = menuItem.text;
    li.appendChild(a);
    navMenu.appendChild(li);
  });
}

generateDiscoverTabs();

// Generate enter links
function generateEnterLinks() {
  const enterMenu = document.getElementById('enter');
  const enterItems = [
    { text: '音乐开发平台', href: '#' },
    { text: '云村交易所', href: '#' },
    { text: 'Amped Studio', href: '#' },
    { text: 'X Studio虚拟歌手', href: '#' },
    { text: '用户认证', href: '#' },
    { text: '音乐交易平台', href: '#' },
    { text: '云推歌', href: '#' },
    { text: '赞赏', href: '#' },
  ];

  enterItems.forEach((enterItem) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enterItem.href;
    const span = document.createElement('span');
    span.textContent = enterItem.text;
    li.appendChild(a);
    li.appendChild(span);
    enterMenu.appendChild(li);
  });
}

generateEnterLinks();

// Generate music links
function generateMusicLinks() {
  const musicLink = document.getElementById('music-link');
  const musicItems = [
    { text: '服务条款', href: '#' },
    { text: '隐私政策', href: '#' },
    { text: '儿童隐私政策', href: '#' },
    { text: '版权投诉', href: '#' },
    { text: '投资者关系', href: '#' },
    { text: '广告合作', href: '#' },
    { text: '联系我们', href: '#' },
  ];

  musicItems.forEach((musicItem) => {
    const a = document.createElement('a');
    a.href = musicItem.href;
    a.textContent = musicItem.text;
    musicLink.appendChild(a);
  });
}

generateMusicLinks();
