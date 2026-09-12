(() => {
  "use strict";

  const subtitleIds = {
    Digit1: "1", // Английские
    Digit2: "2", // Русские
    Digit3: "3", // Двойные
    Digit4: "4", // Выкл.
    Numpad1: "1",
    Numpad2: "2",
    Numpad3: "3",
    Numpad4: "4",
  };

  window.addEventListener("keydown", (event) => {
    const id = subtitleIds[event.code];
    if (!id || event.repeat || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    const target = event.target;
    if (target instanceof Element && target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) {
      return;
    }

    const option = document.querySelector(`#oframeplayer3js pjsdiv[f2id="${id}"]`);
    if (!option) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    option.click();
  }, true);
})();
