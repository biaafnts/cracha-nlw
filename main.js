const socialMediaLinks = {
  github: 'rocketoof',
  instagram: 'rocket_oof',
  twitter: 'rocket_oof'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      myBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLoging.textContent = data.login
    })
}

getGitHubProfileInfos()
