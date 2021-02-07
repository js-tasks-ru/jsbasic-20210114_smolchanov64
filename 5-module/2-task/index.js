function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  if (!button) return;
  button.onclick = function() {
    let text = document.getElementById('text');
    text.hidden = !text.hidden;
  }
}
