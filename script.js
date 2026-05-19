const map = {
  k: "क",
  g: "ग",
  a: "अ"
};

const box = document.getElementById("box");

box.addEventListener("input", function () {

  let text = box.value;

  let lastChar = text[text.length - 1];

  if (map[lastChar]) {

    box.value =
      text.slice(0, -1) + map[lastChar];

  }

});