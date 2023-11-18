// Define the data for the links
const links = [
  { href: '#', text: '音乐开发平台' },
  { href: '#', text: '云村交易所' },
  { href: '#', text: 'Amped Studio' },
  { href: '#', text: 'X Studio虚拟歌手' },
  { href: '#', text: '用户认证' },
  { href: '#', text: '音乐交易平台' },
  { href: '#', text: '云推歌' },
  { href: '#', text: '赞赏' }
];

// Create the ul element
const ulElement = document.getElementById('enter');
links.forEach(link => {
  const liElement = document.createElement('li');
  const aElement = document.createElement('a');
  aElement.href = link.href;
  const spanElement = document.createElement('span');
  spanElement.textContent = link.text;
  liElement.appendChild(aElement);
  liElement.appendChild(spanElement);
  ulElement.appendChild(liElement);
});

// Create the music-link element
const musicLinkElement = document.getElementById('music-link');
const musicLinks = ['服务条款', '隐私政策', '儿童隐私政策', '版权投诉', '投资者关系', '广告合作', '联系我们'];
musicLinks.forEach(linkText => {
  const aElement = document.createElement('a');
  aElement.href = '#';
  aElement.textContent = linkText;
  musicLinkElement.appendChild(aElement);
});
