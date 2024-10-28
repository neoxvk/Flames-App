//Animation for the Button

document.getElementById("animateBtn").addEventListener("click", function () {
  if(document.getElementById("name1").value === "" || document.getElementById("name2").value === ""){
    alert("Please enter both names.")
  }
  else{
    this.querySelector("span").textContent = "Uncovering your fate!";
    this.classList.add("animate");
    setTimeout(()=>{
this.querySelector("span").textContent = "Magic's Happening....";
    },1000)
    

    //Resetthe animation after 3 seconds
    setTimeout(() => {
      calculateFLAMES();

      this.querySelector("span").textContent = "Try Again?";
      this.classList.remove("animate")
    }, 3000);

  }
  
});



function calculateFLAMES() {
  // Get the two names from input and do the pre-processing (lowercase + remove spaces)
  let name1 = document
    .getElementById("name1")
    .value.toLowerCase()
    .replace(/ /g, "");
  let name2 = document
    .getElementById("name2")
    .value.toLowerCase()
    .replace(/ /g, "");

  //If any name is empty Alert the user
  if (name1 === "" || name2 === "") {
    alert("Please enter both names.");
    return;
  }

  //Let's add both the names and check for repeated characters
  let comninedNames = name1 + name2;
  for (let letter of comninedNames) {
    if (name1.includes(letter) && name2.includes(letter)) {
      name1 = name1.replace(letter, "");
      name2 = name2.replace(letter, "");
    }
  }

  //Get uniqueLettersCount
  const uniqueLetters = name1 + name2;
  const uniqueLettersCount = uniqueLetters.length;
  const flames = [
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemies",
    "Siblings",
  ];

  //Find the index now!
  const resultIndex = uniqueLettersCount % flames.length;
  const result =
    flames[resultIndex === 0 ? flames.length - 1 : resultIndex - 1];

  //Display the result
  let resultElement = document.getElementById("result");
  resultElement.textContent = `You got ${result}`;

  console.log(name1 + name2);
}
