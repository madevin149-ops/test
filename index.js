document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".profile-card").classList.add("animate-fade");
});

const audio = new Audio(
  "https://downloads.kadle.workers.dev/batate/1aP1HCu5GRVNTUcxV1%2B33vCxVUCr4twKUv%2Bq4Z0iXUtB0%2FX9Vr3VJSVR7b%2Ffir78dfGHww9h2YOoVOVeRMtsfk6d%2BfMkbtBQrIfDdJK%2BeGj6w8KLbEhS4aoqQq%2BhbFUy%2BHGE4wV%2Fx2FetmEl9jgM%2FDdY1mKEhRJpbk9gt5V9cVDozcs1%2B0frqOmdZhTtnOin7YOuSp3KbGyxLsoCM0pB%2BQ3%2Ftlsli3ypITkOjV9F5lWqzexBbebxdDHIrcJADaSx0h0nFR3G5xmy"
);

function changeImage(isHover) {
  const image = document.getElementById("profile-pic");
  image.src = isHover
    ? "https://i.ibb.co/Vpcjvmd6/hovered-Picture.png"
    : "https://i.ibb.co/zh6zGzsv/profile-Picture.png";
  const nameElement = document.getElementById("name");
  nameElement.textContent = !isHover ? "Shahrukh Khan" : "Hakla Shahrukh";
  if (isHover) {
    audio.play();
  } else {
    audio.pause();
  }
  document.getElementById("track").textContent = !isHover
    ? "Cheif Executive Officer"
    : "Chief Brainrot Officer";

  document.getElementById("description").textContent = !isHover
    ? "Visionary Chief Executive Officer with a proven track record of leading organizations toward sustainable growth and innovation. Skilled in strategic planning, operational leadership, and building high-performing teams. Committed to driving long-term value for stakeholders through purpose-driven leadership and continuous improvement."
    : "Strategic and creatively unhinged Chief Brainrot Officer with a relentless drive for chaotic innovation and meme-fueled ideation. Known for navigating complex problems with wildly unnecessary overthinking and turning late-night rabbit holes into questionable breakthroughs. Passionate about cultivating a culture of controlled chaos.";
}
