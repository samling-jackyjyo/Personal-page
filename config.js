//可变化的
const siteConfig = {
    pageTitle: "土拨鼠的窝",
    logoText: "土拨鼠的窝",
    welcomeMessage: "淡定",
    quote: "Endless desire can never bring satisfaction, but only distress.",
    quoteAuthor: "— Epicurus",
    navLinks: [
        { text: "博客", url: "https://cfblog.yohagirl.pp.ua/" },
        { text: "AI", url: "https://chat.667778889.xyz/" },
        { text: "导航", url: "https://homarr.01011205.xyz/board" },
        { text: "邮箱", url: "https://web-mail.0808888.xyz/" },
        { text: "PDF", url: "https://pdf.01011205.xyz/?lang=zh_CN" }，
        { text: "翻译", url: "https://libre.667778889.xyz/" }，
        { text: "IT Tools", url: "https://ittools.01011205.xyz/" }，
        { text: "图床", url: "https://img.yohaman.pp.ua/" }
        { text: "磁力搜索", url: "https://bt.yoha.us.kg/" }
    ],
    footerLinks: [
        { text: "YouTube", url: "https://www.youtube.com" },
        { text: "Twitter", url: "https://www.twitter.com" },
        { text: "Email", url: "samling@20100804.xyz" }
    ]
};

window.onload = function() {
    document.title = siteConfig.pageTitle;

    document.querySelector('.logo').innerHTML = siteConfig.logoText;
    document.querySelector('.welcome').innerHTML = siteConfig.welcomeMessage;
    document.querySelector('.quote').innerHTML = `"${siteConfig.quote}" <br> - ${siteConfig.quoteAuthor}`;

    updateDateTime();
    setInterval(updateTime, 1000);

    const navContainer = document.querySelector('.nav-buttons');
    siteConfig.navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.text;
        anchor.target = "_blank";
        navContainer.appendChild(anchor);
    });

    const footerContainer = document.querySelector('.footer');
    siteConfig.footerLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.text;
        anchor.target = "_blank";
        footerContainer.appendChild(anchor);
    });
};

function updateTime() {
    const clockElement = document.querySelector('.clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function updateDateTime() {
    const dateTimeElement = document.querySelector('.date-time-weather');
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要+1
    const date = String(now.getDate()).padStart(2, '0');
    const day = now.getDay();
    const dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const formattedDate = `${year}年${month}月${date}日 ${dayNames[day]}`;

    const weatherInfo = ``;
    dateTimeElement.innerHTML = `${formattedDate} <br> ${weatherInfo}`;

    updateTime();
}
