const userInfoForm = document.getElementById('user-info-form')
const userName = document.getElementById('user-info-name')
const userSurname = document.getElementById('user-info-surname')
const userEmail = document.getElementById('user-info-email')

const contentUsers = document.getElementById('content-users')
const userInfo = document.getElementById('user-info')
const userInfoTitle = document.getElementById('user-info-title')
const userInfoButton = document.getElementById('user-info-button')

contentUsers.addEventListener('click', (e) => {
  if(e.target.classList.contains('button--edit')) {
    userInfoTitle.textContent = 'Update User'
    userName.value = e.target.parentElement.children[ 0 ].textContent
    userSurname.value = e.target.parentElement.children[ 1 ].textContent
    userEmail.value = e.target.parentElement.children[ 2 ].textContent
    userInfoButton.textContent = 'Update User'
    userInfoForm.action = `/update-user/${ e.target.parentElement.dataset.id }`
  } else if(e.target.classList.contains('button--delete')) {
    fetch(`/delete-user/${ e.target.parentElement.dataset.id }`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        if(data.ok) location.reload()
      })
  }
})

userInfo.addEventListener('click', (e) => {
  if(e.target.classList.contains('button--cancel')) {
    userInfoTitle.textContent = 'New User'
    userInfoButton.textContent = 'Add User'
    userInfoForm.action = '/add-user'
    userName.value = ''
    userSurname.value = ''
    userEmail.value = ''
  }
})

userInfoForm.addEventListener('submit', e => {
  e.preventDefault()
  if(userName.value.trim() != '' && userSurname.value.trim() != '' && userEmail.value.trim() != '') e.target.submit()
})
