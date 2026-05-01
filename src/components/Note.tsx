import "../App.css"

function Note(){
    return (
        <>
            <div>
                <h1>Note</h1>
                <p>Note goes here</p>
                <button onClick={sendMessageToActiveTab}>Add Note to Highlighted Section</button>
            </div>
        </>
    )
}

export default Note

async function sendMessageToActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if (!tab || !tab.id){
    console.error("Tab error");
    return;
  }
  const response = await chrome.tabs.sendMessage(tab.id, {type: "Highlight"});
  console.log(response);

}