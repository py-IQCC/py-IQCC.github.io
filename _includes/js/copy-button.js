let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  if (navigator.clipboard) {
    let button = document.createElement("button");
    button.id = 'copyCodeButton';

		button.className = "fa fa-clone";
		block.insertBefore(button, block.firstChild);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

	button.className = "fa fa-check";

  setTimeout(() => {
    button.className = "fa fa-clone";
  }, 1000);
}
