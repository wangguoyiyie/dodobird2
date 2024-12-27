
// 获取 HTML 容器
const container = document.getElementById('game-list');

// 遍历配置表并生成 HTML
Object.entries(configTable).forEach(([id, item]) => {
  // 创建外层 div
  const colDiv = document.createElement('div');
  colDiv.className = 'col-lg-3 col-sm-6';

  // 创建 item div
  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';

  // 动态生成内容
  itemDiv.innerHTML = `
    <a href="details.html?id=${id}"><img src="${item.logo}" alt="${item.name}"></a>
    <h4>${item.name}<br><span>${item.title}</span></h4>`;
	
	
	
	//<ul>
    //  <li><i class="fa fa-star"></i> ${item.star}</li>
    //  <li><i class="fa fa-download"></i> ${item.downsize}</li>
    //</ul>

  // 将 itemDiv 添加到 colDiv
  colDiv.appendChild(itemDiv);

  // 将 colDiv 添加到容器
  container.appendChild(colDiv);

  
});

	
	
	
	
	
