const clickMeButton = document.querySelector(".click-me");

function handleclickMeButton () {
    alert("Hello! I regret all my life choices!!");
    // clickMeButton.removeEventListener("click", handleclickMeButton );
  }

  clickMeButton.addEventListener("click", handleclickMeButton, {once:true} );
//   clickMeButton.removeEventListener("click", handleclickMeButton,);
  










