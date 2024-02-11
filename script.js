(function () {
  emailjs.init("giddVKzMxcKqbfYgM");
})();

function showMessage(response) {
  if (response === "No") {
      const noButton = document.getElementById("no-button");
      const container = document.querySelector(".container");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;

      noButton.style.position = "absolute";

      document.getElementsByClassName("image")[0].src = "images/gun.gif";

      // Generate random coordinates 
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";

      document.getElementById("question").textContent =
          "Ema don't worry about that missclick. You can choose again:";
      document.getElementById("name").style.display = "none";
  }

  if (response === "Yes") {
      document.getElementById("name").remove();
      document.getElementById("no-button").remove();

      // Update text content, show message, and change image source to "dance.gif"
      const yesMessage = document.getElementById("question");
      yesMessage.textContent = "OKAAY LETS GOOOO. Please call me so we can arrange the details!";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";
      document.getElementsByClassName("image")[0].src = "images/dance.gif";
      document.getElementById("yesButton").remove();

      sendMessage();
  }
}

function sendMessage() {
  emailjs.send("dinodinovski123", "template_dn80yhh", {
      to_name: "Recipient Name", 
      message: "Your message here" 
  }).then(function (response) {
      console.log("Email sent successfully", response);
  }, function (error) {
      console.log("Email sending failed", error);
  });
}
