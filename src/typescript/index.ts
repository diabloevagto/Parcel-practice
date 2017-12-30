const framework = document.querySelector('#tsapp')

function getText(): string {
  return 'Hello, TypeScript!'
}

window.addEventListener('load', () => {
  framework.innerHTML = getText();
})
