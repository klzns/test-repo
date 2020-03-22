const {danger, warn, message } = require('danger')
const { keepachangelog } = require('danger-plugin-keepachangelog')

const pr = danger.github.pr

if (pr.user.type === 'Bot') {
  warn('Skipping Danger checks: author of PR its a bot.')
  return
}

// No PR is too small to include a description of why you made a change
if (pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}

keepachangelog()

// Add helpful message
if (pr.author_association !== 'OWNER' && pr.maintainer_can_modify === false) {
  message('Please consider [letting maintainers modify your pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so they can help fix any issue.')
}