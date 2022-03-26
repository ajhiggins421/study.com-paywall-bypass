const hiddenContent = document.querySelectorAll(".hidden");
const fadedContent = document.querySelectorAll(".faded-content");
const articleCutoffDiv = document.querySelectorAll(".article-cutoff-div");
const payWall = document.querySelectorAll(".paywall-inner");
const videoPaywall = document.querySelector("#videoPaywall");
const headerTitle = document.querySelector(".headerTitle");
const message = document.createElement("h1");

message.textContent = "UNBLOCKED";
message.style.cssText = "color: red; font-size: 16px;";
articleCutoffDiv.forEach(content => content.remove());
payWall.forEach(content => content.remove());
fadedContent.forEach(content => content.classList = "text");
hiddenContent.forEach(content => content.classList = "text");
videoPaywall.remove();
headerTitle.appendChild(message);