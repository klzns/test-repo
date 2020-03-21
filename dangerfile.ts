const {danger, warn} = require('danger')

// No PR is too small to include a description of why you made a change
if (danger.github && danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}

const hasChangelog = danger.git.modified_files.includes("CHANGELOG.md")
const isTrivial = danger.github && (danger.github.pr.body + danger.github.pr.title).includes("#trivial")

if (!hasChangelog && !isTrivial) {
  warn("Please add a changelog entry for your changes.")
}

if (hasChangelog && !isTrivial) {
  const changelogChanges = danger.git.modified_files.find("CHANGELOG.md")
  console.log('hi')
}

if (danger.github && danger.github.pr.maintainer_can_modify === false) {
  warn('Please [let maintainers modify your pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so they can help fix any issue.')
}