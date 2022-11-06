AFRAME.registerComponent("markerhandler", {
  init: async function () {

    this.el.addEventListener("markerFound", () => {
      console.log("marker is found")
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost")
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var goodButton = document.getElementById("good-button");
    var badButton = document.getElementById("bad-button");

      // Handling Click Events
    badButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Bad Nutrients",
          text: "placeholder"
        });
      });

    goodButton.addEventListener("click", () => {
        swal({
          icon: "success",
          title: "Good Nutrients",
          text: "placeholder"
        });
      });
  },

  handleMarkerLost: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
