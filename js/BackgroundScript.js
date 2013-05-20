updateContext();

function searchwbtext(info, tab) {
    var chromeurl = "search.html?q=CTEXT";
    chrome.windows.create({ url: chromeurl.replace("CTEXT", info.selectionText), type: "popup", height: 555, width: 295 });
}

function updateContext() {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create({ title: "Search selected text on Warez-BB", contexts: ["selection"], onclick: searchwbtext });
}
