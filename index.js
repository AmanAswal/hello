window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector ('.visual');
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3",
    "#e31461"
  ];
//Lets get going with the sounds
pads.forEach((pad,index) =>{
  pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
  });
});

//Create a function that creates bubbles
const createBubbles = (index) => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = "jump 1.5s ease";
  bubble.addEventListener('animationend', function(){
    visual.removeChild(this);
  })
}
});
