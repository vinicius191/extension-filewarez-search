
function search() {
    var checkedvalue = $('input[type=radio]:checked').val();
    var item = document.getElementById('SearchWord').value;
    console.log(item);
    if (item != "") {
        var multipleValues = $("#multiple").val() || [];
        // var url = 'http://www.warez-bb.org/search.php?show_results=topics&search_fields=' + checkedvalue + '&search_forum=' + multipleValues.join(",") + '&search_terms=all&search_author=&search_keywords=' + item;
        var url = 'http://www.filewarez.tv/forum/search.php?do=process&searchthreadid=&query=' + item + '&sortby=lastpost&order=descending';
        chrome.tabs.create({ url: url, selected: true });
        self.close();
    }
    else {
        document.getElementById('fail').innerHTML = 'You have not typed a search word.';
    }
}

if (window.location.search.pathname == "search.html") {
    height = document.getElementById("content").offsetHeight;
    width = document.getElementById("content").offsetWidth;
    self.resizeTo(width + 20, height + 100);
}

function querySt(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i = 0; i < gy.length; i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}

$(document).ready(function () {
    document.getElementById("SearchWord").focus();
    $("#clickHide").hide();
    $("#clickShow").click(function () {
        $("#clickShow").hide();
        $("#clickHide").show();
        $("#selectOption").stop(true, true).slideDown();
    });

    $("#clickHide").click(function () {
        $("#clickHide").hide();
        $("#clickShow").show();
        $("#selectOption").stop(true, true).slideUp();
    });


    $("#SearchTable").width($("#multiple").width());

    $('#SearchWord').keyup(function (e) {
        if (e.keyCode == 13) {
            search();
        }
    });

    $("#SearchSubmit").click(function () {
        search();
    });

    //$("#SearchWord").val(querySt("q").replace(/%20/g, ' '));
});

