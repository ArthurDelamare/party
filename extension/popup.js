let createPartyButton = document.getElementById("createParty");
let joinPartyButton = document.getElementById("joinParty");

createPartyButton.addEventListener("click", async () =>  {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setCreateParty,
  });
});

joinPartyButton.addEventListener("click", async () =>  {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setJoinParty,
  });
});

function setCreateParty() {
  createParty();
}

function setJoinParty() {
  joinParty();
}
