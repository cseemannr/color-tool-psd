main();

console.log(colorjoe);

function main() {
  var val = document.getElementById("rgbValue");
  var hVal = document.getElementById("hslaValue");

  colorjoe.registerExtra("text", function (p, joe, o) {
    e(p, o.text ? o.text : "text");
  });

  function e(parent, text) {
    var elem = document.createElement("div");
    elem.innerHTML = text;
    parent.appendChild(elem);
  }

  colorjoe
    .hsl("hslPicker", "#113c38", [
      "alpha",
      "currentColor",
      [
        "fields",
        {
          space: "RGB",
          limit: 255,
        },
      ],
      [
        "fields",
        {
          space: "HSLA",
          limit: 100,
        },
      ],
      [
        "fields",
        {
          space: "CMYKA",
          limit: 100,
        },
      ],
      "hex",
    ])
    .on("change", function (c) {
      hVal.innerHTML = "Alpha: " + c.alpha().toFixed(2);
    })
    .update();

  document.getElementById("showPicker").onclick = function (e) {
    e.preventDefault();

    cj.show();
  };
}
