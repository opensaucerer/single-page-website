var tat = document.getElementById("to-top");

window.addEventListener("scroll", (toTop) => {
  if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    tat.style.display = "initial";
  } else {
    tat.style.display = "none";
  }
});
