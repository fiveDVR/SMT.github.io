
// Shows a temporary message banner/ribbon for a few seconds, or
// a permanent error message on top of the canvas if type=='error'.
// If type=='warning', a yellow highlight color is used.
// Modify or remove this function to customize the visually presented
// way that non-critical warnings and error messages are presented to the
// user.


var buildUrl = "Build";
var loaderUrl = buildUrl + "/SMTCopyBuild.loader.js";
var config = {
    dataUrl: buildUrl + "/SMTCopyBuild.data",
    frameworkUrl: buildUrl + "/SMTCopyBuild.framework.js",
    codeUrl: buildUrl + "/SMTCopyBuild.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "SMT",
    productVersion: "0.1",
};

// By default Unity keeps WebGL canvas render target size matched with
// the DOM size of the canvas element (scaled by window.devicePixelRatio)
// Set this to false if you want to decouple this synchronization from
// happening inside the engine, and you would instead like to size up
// the canvas DOM size and WebGL render target sizes yourself.
// config.matchWebGLToCanvasSize = false;

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.className = "unity-mobile";
    // Avoid draining fillrate performance on mobile devices,
    // and default/override low DPI mode on mobile browsers.
    config.devicePixelRatio = window.devicePixelRatio;
}


loadingBar.style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    })
        .then((unityInstance) => {
            unityGame = unityInstance;
            loadingBar.style.display = "none";
        })
        .catch((message) => {
            alert(message);
        });
};
document.body.appendChild(script);
