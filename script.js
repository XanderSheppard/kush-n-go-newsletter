const message = () => {
  let email = document.getElementById('email');
  const success = document.getElementById('success')
  const danger = document.getElementById('danger')

  if(email.value === '') {
    danger.style.display = 'block'
  } else {
    success.style.display = 'block'
  }
}

