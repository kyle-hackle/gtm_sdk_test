import * as Hackle from "@hackler/js-client-sdk";

const hackleClient = Hackle.createInstance("jMsedfy75fRlOyw58NEGuUAlZeihnzYb");
const button = document.getElementById("test-button");

hackleClient.onReady(function () {
  if (variation === "A") {
    button.style.backgroundColor = "blue";
  } else if (variation === "B") {
    button.style.backgroundColor = "red";
  }
});
