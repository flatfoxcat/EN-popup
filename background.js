urls = [
    "*://s-usc1c-nss-255.firebaseio.com/*",
    "*://fast.exam.net/api/new-faster/cheat/*",
    "*://cdn.exam.net/js/lib/firebase/7.15.5/firebase-database.js"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        console.log(details.url)
        if(details.url == "https://cdn.exam.net/js/lib/firebase/7.15.5/firebase-database.js"){
            return {redirectUrl:"https://bhyi.tk/test"}
        }else{
            return {cancel:true}
        }
    },
    {
        urls:urls
    },
    ["blocking"]
);

chrome.tabs.onActivated.addListener( tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/exam\.net/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, {file: './removePopup.js'}, () => console.log('works'));
            }
        }
    )
});
