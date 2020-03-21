const {danger, warn, } = require('danger')

const pr = danger.github.pr

// No PR is too small to include a description of why you made a change
if (pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}

// No changelog entry
const hasChangelog = danger.git.modified_files.includes("CHANGELOG.md")
const isTrivial = (pr.body + pr.title).includes("#trivial")

if (!hasChangelog && !isTrivial) {
  warn("Please add a changelog entry for your changes.")
}

if (hasChangelog && !isTrivial) {
  const changelogChanges = danger.git.modified_files.find("CHANGELOG.md")
  console.log('hi')
}

if (pr.author_association !== 'OWNER' && pr.maintainer_can_modify === false) {
  warn('Please [let maintainers modify your pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so they can help fix any issue.')
}