document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();
    const serch = document.getElementById('form').word.value;
    document.getElementById('output').textContent = ` 「${serch}」の検索中...`
}

console.log('neko')
