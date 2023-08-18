// Import the WebAssembly module
import * as wasm from "wasm-first-project";

// Get references to HTML elements
const imageInput = document.getElementById("imageInput");
const displayedImage = document.getElementById("outputImage");
var uint8Array;

// Event listener for when a new image is selected
imageInput.addEventListener("change", function(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

     // Read the selected image as a Data URL
      reader.onload = function(e) {
        displayedImage.src = e.target.result;

        // Convert Data URL to Uint8Array for processing
        uint8Array = dataUrlToUint8Array(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  });

// Convert Data URL to Uint8Array
function dataUrlToUint8Array(dataUrl) {
  const base64String = dataUrl.split(',')[1];
  const binaryString = window.atob(base64String);
  const length = binaryString.length;
  const another_uint8Array = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    another_uint8Array[i] = binaryString.charCodeAt(i);
  }

  return another_uint8Array;
}

// Function to convert a Uint8Array to Data URL
function uint8ArrayToDataUrl(uint8Array) {
  const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
  return "data:image/jpg;base64," + base64String;
}

// Event listeners for filter buttons

document.getElementById("sepiaButton").addEventListener("click", function() {
  if (wasm.sepia_image && uint8Array) {
    const modifiedArray = wasm.sepia_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("grayscaleButton").addEventListener("click", function() {
  if (wasm.grayscale_image && uint8Array) {
    const modifiedArray = wasm.grayscale_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("greenButton").addEventListener("click", function() {
  if (wasm.green_image && uint8Array) {
    const modifiedArray = wasm.green_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("redButton").addEventListener("click", function() {
  if (wasm.red_image && uint8Array) {
    const modifiedArray = wasm.red_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("blueButton").addEventListener("click", function() {
  if (wasm.blue_image && uint8Array) {
    const modifiedArray = wasm.blue_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("resetButton").addEventListener("click", function() {
  if (wasm.reset_image && uint8Array) {
    const modifiedArray = wasm.reset_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("blurButton").addEventListener("click", function() {
  if (wasm.blur_image && uint8Array) {
    const modifiedArray = wasm.blur_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("verticalButton").addEventListener("click", function() {
  if (wasm.vertical_image && uint8Array) {
    const modifiedArray = wasm.vertical_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});

document.getElementById("horizontalButton").addEventListener("click", function() {
  if (wasm.horizontal_image && uint8Array) {
    const modifiedArray = wasm.horizontal_image(uint8Array);
    const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
    displayedImage.src = modifiedDataUrl;
  }
});
