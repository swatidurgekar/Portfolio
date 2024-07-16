export function displayDialogue(text, onDisplayEnd) {
  const dialogueUi = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");
  console.log("dialogueui", dialogueUi);
  dialogueUi.style.display = "block";

  let index = 0;
  let currentText = "";
  let intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 5);

  let closeBtn = document.getElementById("close");

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUi.style.display = "none";
    dialogue.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener(onCloseBtnClick);
  }

  closeBtn.addEventListener("click", onCloseBtnClick);
}

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
    return;
  }
  k.camScale(k.vec2(1.5));
}
