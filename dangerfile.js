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
  warn(`Thanks for your contribution!
  We follow [keepachangelog](https://keepachangelog.com/) standards.

  Please, change the file \`CHANGELOG.md\` adding a small summary of your changes under the \`[Unreleased]\` section. Example:

  \`\`\`diff
  ## [Unreleased]

  + ### Fixed
  + - Issue with image sizing in the SKU Selector.
  \`\`\`

  Possible types of changes:
  - \`Added\` for new features.
  - \`Changed\` for changes in existing functionality.
  - \`Deprecated\` for soon-to-be removed features.
  - \`Removed\` for now removed features.
  - \`Fixed\` for any bug fixes.
  - \`Security\` in case of vulnerabilities.
  `)
}

// Check if the version was added as one of the CHANGELOG.md changes
function getAddedChangelogLines() {
  return danger.git.diffForFile('CHANGELOG.md')
    .then((result) => {
      return result.diff
        .split('\n')
        .filter((line) => line.indexOf('+') === 0)
        .map((line) => line.slice(1))
    })
}

const newVersionLine = /## \[[0-9]/
function findWrongChangelogEntries(changelog) {
  return changelog.find((line) => newVersionLine.test(line))
}

if (hasChangelog && !isTrivial) {
  getAddedChangelogLines()
    .then(result => {
      const wrongLine = findWrongChangelogEntries(result)
      if (wrongLine) {
        fail(`Please remove the line \`${wrongLine}\` from \`CHANGELOG.md\`\nThis will be automatically added once this PR is merged.`)
      }
    })
}

// Add helpful message
if (pr.author_association !== 'OWNER' && pr.maintainer_can_modify === false) {
  message('Please consider [letting maintainers modify your pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so they can help fix any issue.')
}