/* --- textarea Adjustments --- */
const textareas = document.querySelectorAll("textarea");
textareas.forEach((textarea) => {
	let length0 = textarea.value.split(/\n/g).length;
	textarea.style.height = length0 + 1.5 + 'em';
	textarea.addEventListener('input', function () {
		textarea.style.height = 'auto';
		textarea.style.height = textarea.scrollHeight + length0 + 'px';
	});
});

	












/* ---------- Copy and Run Code Blocks ---------- */
let blocks = document.querySelectorAll("pre");
blocks.forEach((block) => {
	
	/* --- Copy Code --- */
  if (navigator.clipboard) {
    let copyCodeButton = document.createElement("button");
		copyCodeButton.id = "copyCodeButton";

		copyCodeButton.className = "fa fa-clone";
		block.insertBefore(copyCodeButton, block.firstChild);

    copyCodeButton.addEventListener("click", async () => {
      await copyCode(block, copyCodeButton);
    });
  };

	async function copyCode(block, copyCodeButton) {
  	let code = block.querySelector("code textarea").value;
		navigator.clipboard.writeText(code);
		copyCodeButton.className = "fa fa-check";
  	setTimeout(() => {
    	copyCodeButton.className = "fa fa-clone";
  	}, 1000);
	};


	
	/* --- Python Code Compiler --- */
	if (block.querySelector("code textarea")) {
		let runCodeButton = document.createElement("button");
		runCodeButton.id = "runCodeButton";
		runCodeButton.className = "fa fa-play";
		block.insertBefore(runCodeButton, block.firstChild);
		runCodeButton.addEventListener("click", async () => {
			await runCode(block, runCodeButton);
		});
	};
	
	async function runCode(block, runCodeButton) {
		/* create elements for each block */
		var iframewrapper = document.getElementById("iframewrapper");
		if (iframewrapper) {
			iframewrapper.parentNode.removeChild(iframewrapper);
			iframewrapper.removeAttribute("id");
		};
		var iframewrapper = document.createElement("div");
		iframewrapper.id="iframewrapper";
		iframewrapper.className += " iframewrapper";
		iframewrapper.style.width = block.offsetWidth + "px";
		let textareaCode = block.querySelector("code textarea");
		
		block.parentNode.insertBefore(iframewrapper, block.nextSibling);
		
		var text = textareaCode.value;
		var ifr = document.getElementById("iframeResult");
		if (ifr) {
			ifr.parentNode.removeChild(ifr);
			ifr.removeAttribute("id");
		};
		var ifr = document.createElement("iframe");
		ifr.setAttribute("id", "iframeResult");
		ifr.setAttribute("name", "iframeResult");
		document.getElementById("iframewrapper").appendChild(ifr);
		document.getElementById("code").value = text;
		document.getElementById("codeForm").action = "https://try.w3schools.com/try_python.php?x=" + Math.random();
		document.getElementById('codeForm').method = "post";
		document.getElementById('codeForm').acceptCharset = "utf-8";
		document.getElementById('codeForm').target = "iframeResult";
		document.getElementById("codeForm").submit();
	};

});


