// var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");
var input = document.querySelectorAll("input");
var colorCodes = document.querySelectorAll(".color-code");

var colorPicker = new iro.ColorPicker("#picker", {
  width: 200,
  borderWidth: 2,
  padding: 4,
  borderColor: "#fff",
  layout: [
    {
      component: iro.ui.Wheel,
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "hue",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "value",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "saturation",
      },
    },

    {
      component: iro.ui.Slider,
      options: {
        sliderType: "red",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "green",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "blue",
      },
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: "kelvin",
      },
    },
  ],
});

colorPicker.on(["color:init", "color:change"], function (color) {
  hexInput.value = color.hexString;
  hexInput.style.backgroundColor = color.hexString;

  document.getElementById("color01").value = color.rgbString;

  if (color.value > 50) {
    hexInput.style.color = "#000";
  } else {
    hexInput.style.color = "#fff";
  }
});

hexInput.addEventListener("change", function () {
  colorPicker.color.hexString = this.value;
});

colorCodes.forEach((code) => {
  code.addEventListener("click", function (e) {
    var codeTarget = e.target;
    var text = codeTarget.innerText;

    navigator.clipboard.writeText(text);
  });
});
