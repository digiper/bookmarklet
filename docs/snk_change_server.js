/* ----------------------
 how to use

 1.下記をブックマークに追加
 javascript:(function(){var%20d=document;s=d.createElement('script');s.setAttribute('src','https://digiper.github.io/bookmarklet/snk_change_server.js');d.body.appendChild(s);})();

 2.sanko.ac.jp以下でブックマークを実行
 対応校: BA, 医療, RS, こども, ブライダル, スイーツ、辻調理以下

 ---------------------- */

(function(d){
    var l = d.location,
        dialog = d.createElement('dialog'),
        ul = d.createElement('ul'),
        btn = d.createElement('button'),
        server = ["sanko.ac.jp", "sankodev.digiper.com", "sankodev-test-nenji.digiper.com/", "sankodev-renewal.digiper.com"];

    function appendListItem(e, i, v) {
        var li = d.createElement('li'),
            a = d.createElement('a');

        var href = l.protocol + "//" + l.host.replace(/(.*)/, e) + l.pathname + l.search;
        a.textContent = href;
        a.setAttribute('href', href);
        li.appendChild(a);
        ul.appendChild(li);
    }

    function openListItem() {
        var listItems = dialog.querySelectorAll('ul > li > a');
        for (var i = listItems.length - 1; i >= 0; i--) {
            window.open(listItems[i].href);
        };
    }

    btn.textContent = '全てのページを開く';
    btn.setAttribute('style', 'margin-bottom: 1em;font-size: 1rem;cursor:pointer;');
    btn.addEventListener('click', openListItem, false);

    if (server) {
        server.forEach(appendListItem);
        dialog.appendChild(btn);
        dialog.appendChild(ul);
        d.body.appendChild(dialog);
        dialog.showModal();
    } else {
        dialog.textContent = 'URLの取得に失敗しました';
        d.body.appendChild(dialog);
        dialog.showModal();
    };

})(document);

