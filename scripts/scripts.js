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
    document.body.appendChild(purpButton)

}

function createAddPara()
{
    const para = document.createElement("p")
    para.textContent = "My para"
    para.addEventListener("mouseover", ChangeBGGGreen)
    document.body.appendChild (para)
}

clickMeButton.addEventListener ("click", changeText);

function ChangeBGGGreen(event)
{
    event.target.classList.add("green-background")   
}

clickMeButton.addEventListener("click",createAddButton)
clickMeButton.addEventListener("click",createAddPara)

const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("mouseover", ChangeBGGGreen);

function changeParaCol (event){
    event.target.style.color = event.target.textContent;
}