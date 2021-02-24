// 获取所有的分类
async function loadCate() {
    let data = await axios.get('/categoryTable');
    // 动态创建分类标签追加
    let liHtml = ``;
    data.forEach((item) => {
        let { name, cateId } = item
        liHtml += `<li><a href="/cate.html?tagID=${cateId}">${name}</a></li>`
    })
    $('#wrapCate').html(liHtml);
}

function searchParam(url) {
    let search = location.search.slice(1) || '';
    let params = {};
    search && search.split('&').forEach(v => {
        let [key, value] = v.split('=')
        params[key] = decodeURIComponent(value)
    })
    return params;
}