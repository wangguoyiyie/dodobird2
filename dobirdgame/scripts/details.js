//import configTable from './config.js';

// 获取URL中的ID
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id'); // 假设URL为: yoursite.com/details.html?id=1
//alert("1")
// 获取对应的配置内容
const itemData = configTable[itemId];

// 如果找到了对应的配置，更新页面内容
document.getElementById('bigname_txt').textContent = itemData.name;
document.getElementById('name_txt').textContent = itemData.name;
document.getElementById('title_txt').textContent = itemData.title;
document.getElementById('logo_img').src = itemData.logo;
document.getElementById('videopic_img').src = itemData.videopic;
document.getElementById('videourl_href').href = itemData.videourl;
document.getElementById('star2_txt').childNodes[1].nodeValue = itemData.star;
document.getElementById('downsize2_txt').childNodes[1].nodeValue = itemData.downsize;
document.getElementById('star_txt').childNodes[1].nodeValue = itemData.star;
document.getElementById('downsize2_txt').childNodes[1].nodeValue = itemData.downsize;
document.getElementById('disksize_txt').childNodes[1].nodeValue = itemData.disksize;
document.getElementById('type_txt').childNodes[1].nodeValue = itemData.type;
document.getElementById('pic1_img').src = itemData.pic1;
document.getElementById('pic2_img').src = itemData.pic2;
document.getElementById('pic3_img').src = itemData.pic3;
document.getElementById('description_txt').textContent = itemData.description;
document.getElementById('androidbtn').textContent = itemData.androidbtn;
document.getElementById('androidbtn').href = itemData.androidurl;
document.getElementById('iosbtn').textContent = itemData.iosbtn;
document.getElementById('iosbtn').href = itemData.iosurl;