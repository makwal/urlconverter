//Create context menu
urlFixer = chrome.contextMenus.create(
        {"title": "URL kopieren"},
        function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message)
            }
        }
    );
chrome.contextMenus.onClicked.addListener(contextMenuHandler);

// execute if item in context menu is clicked
function contextMenuHandler (info, tab) {
    if (info.menuItemId === urlFixer) {
        chrome.tabs.executeScript({
            file: "content.js"})
}
};