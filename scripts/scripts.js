const clickMeButton = document.querySelector(".click-me");

function handleclickMeButton (event) {
    console.log(event.target)
    alert("Hello! I regret all my life choices!!");
    // clickMeButton.removeEventListener("click", handleclickMeButton );
  }

  clickMeButton.addEventListener("click", handleclickMeButton, {once:true} );
//   clickMeButton.removeEventListener("click", handleclickMeButton,);

  function changeBGcolour ()
  {
    document.body.classList.add("pink");
    // document.body.style.backgroundColor = "pink";
  }

  clickMeButton.addEventListener("click", changeBGcolour);

function changeText(){
    if (clickMeButton.textContent === "Clicked")
    clickMeButton.textContent = "Click Me!";
    else if (clickMeButton.textContent === "Click Me!")
    clickMeButton.textContent = "Clicked";
}

  clickMeButton.addEventListener("click", changeText);

function createAddButton ()
{
    const purpButton = document.createElement("button");
    purpButton.textContent = "Purple";
    purpButton.addEventListener("mouseover", ChangeBGGGreen)
    purpButton.classList.add ("green-background");
    document.body.appendChild(purpButton)

}
clickMeButton.addEventListener("click",createAddButton)

function createAddPara()
{
    const para = document.createElement("p")
    para.textContent = "My para"
    para.addEventListener("mouseover", ChangeBGGGreen)
    document.body.appendChild (para)
}

createAddButton.addEventListener ("click", changeText);

function ChangeBGGGreen(event)
{
    event.target.classList.add("green-background")   
}

