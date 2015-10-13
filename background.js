chrome.omnibox.onInputEntered.addListener(function (text) {
	var createProperties = {
		url : "https://groups.google.com/forum/#!search/"
		 + encodeURIComponent(text)
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Search Google Groups for the query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});
