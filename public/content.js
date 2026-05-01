//const { send } = require("vite");
console.log("Testing")

function HighlightSection(){
    //var textSelected: Selection|null = null
    var rangeTextSelected
    var highlightTags = document.createElement("span");
    highlightTags.className = "highlight"

    var textSelected = window.getSelection();
    if (textSelected != null){
        try{
            rangeTextSelected = textSelected.getRangeAt(0)
            console.log("Highlighted Text: " + textSelected.toString())
            rangeTextSelected.surroundContents(highlightTags)
            textSelected.removeAllRanges()
            return;
        }
        catch(e){
            console.log("Error: " + e)
        }
        
    }
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "Highlight"){
        HighlightSection()
    }
})