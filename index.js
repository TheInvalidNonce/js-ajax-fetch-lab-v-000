function getIssues() {
  const repo = 'https://api.github.com/repos/TheInvalidNonce/javascript-fetch-lab/issues';

  fetch(`${repo}`)
    .then(resp => resp.json())
    .then(json => json.map(issue => showIssues(issue)))
}

function showIssues(issue) {
  $('#issues').append(`<h3>New Issue</h3><a href="${issue.html_url}">${issue.html_url}</a>`)
}

function createIssue() {
  const title = document.getElementById('title').value
  const text = $('body').value
  const issue = {title: title, body: text}

  fetch(`${repo}`, {
    method: 'post',
    headers: {
      Authorization: `${getToken()}`
    },
    body: JSON.stringify(issue)
  }).then(resp => resp.json())
    .then(json => console.log(json))
    .then(getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
