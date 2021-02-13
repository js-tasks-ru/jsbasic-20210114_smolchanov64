function hideSelf() {
  let button = document.querySelector('.hide-self-button');  
  if (!button) return;
  button.onclick = (e) => (e.target.hidden = true);
}
