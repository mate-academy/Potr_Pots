function toggleText(index) {
  const textBox = document.getElementById(`text-${index}`);
  const linkButton = textBox.previousElementSibling;

  if (textBox.style.display === 'none' || textBox.style.display === '') {
    textBox.style.display = 'block';
    linkButton.classList.add('active');
  } else {
    textBox.style.display = 'none';
    linkButton.classList.remove('active');
  }
}
