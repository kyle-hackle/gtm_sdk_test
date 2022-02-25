import * as Hackle from "@hackler/js-client-sdk";

const hackleClient = Hackle.createInstance("odrWk72cBX0tc2mHi3pHsz9VOPiOfuvQ");
const button = document.getElementById("test-button");

hackleClient.onReady(function () {
  const variation = hackleClient.variation(5);

  if (variation === "A") {
    button.style.backgroundColor = "blue";
  } else if (variation === "B") {
    button.style.backgroundColor = "red";
  }

  button.addEventListener("click", () => {
    hackleClient.track("sdk_test");
  });
});
