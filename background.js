chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "linkedinSearch",
      title: "Search LinkedIn for \"%s\"",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "linkedinSearch") {
      const selectedText = info.selectionText;
      const query = encodeURIComponent(selectedText);
      const url = `https://www.linkedin.com/search/results/all/?keywords=${query}`;
      chrome.tabs.create({ url });
    }
  });