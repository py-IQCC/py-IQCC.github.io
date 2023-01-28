// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    //button.innerText = "Copy";
		button.className = "fa fa-clipboard";
    //block.appendChild(button);
		block.insertBefore(button, block.firstChild); // Add button before the text

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
	button.className = "fa fa-check";

  setTimeout(() => {
    button.className = "fa fa-clipboard";
  }, 1000);
}
