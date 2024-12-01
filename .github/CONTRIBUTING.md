# Introduction to Contributing

Contribution is the heart of open-source projects. This project welcomes contributions from everyone. This document will guide you through the process of contributing to this project. To do that, we have some guidelines and a [Code of Conduct](./CODE_OF_CONDUCT.md) that we ask you to follow.

## Recommended Communication Style

1. Always leave screenshots or code snippets to help explain your point.
2. Always leave a detailed description in the pull request. Forget ambiguity.
3. Always review your code before submitting a pull request. Run locally and test it before requesting a review.
4. Always communicate in the GitHub Repository. Whether in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone stay on the same page.

## Issues

* If you wish to work on an open issue, please ask for it to be assigned to you.
* If you find a bug, or have a feature request, please open an issue. You can also open a discussion if you have any questions or suggestions.
* If you contribute to the project for the first time, you can search for issues with `good first issue` or `bug` labels in the repository.
>[!NOTE]
> **Please only self-assign a good first issue one time**.
> Maintainers may remove you from the assignees and not accept your pull request if you choose to proceed.

## Commits

* Always use the present tense ("Add feature" not "Added feature", or "Adding feature").
* Always use the imperative mood ("Move cursor to..." not "Moves cursor to...").
* We recommend using the [Conventional Commits][commitsGuidelinesLink] pattern to make it easier to understand the changes made in the project. (e.g. `feat: add new feature`, `fix: correct a bug`, `docs: update README.md`).

  >[!NOTE]
  > We will add [husky][huskyReference] and [commitlint][commitlintReference] to the project in the future to enforce this pattern.
  > We will add a changelog generator in the future.

[commitlintReference]: https://commitlint.js.org/
[huskyReference]: https://typicode.github.io/husky/
[commitsGuidelinesLink]: https://www.conventionalcommits.org/en/v1.0.0/

* Always reference the issue number in the commit message. (e.g. `feat: add new feature #123`). (If there is no issue, create one first).
* Always keep the commits as small as possible. If you have a large commit, try to split it into smaller commits.

## Pull Requests

We actively welcome your pull requests. However, you must ensure that you are assigned to an existing issue before working on changes, and you need to link your work to the issue in your PR form.

---
1. Fork the repository, then clone it to your local machine.
2. Creating a new branch is a must. Before working on your changes, create a new branch from the default branch. Name your branch with something descriptive of your work, i.e., `feat-sidePanel` or `fix/broken-links`.
3. The code must be tested locally before submitting a pull request. If you are adding a new feature, make sure to add tests for it. (We will add a test suite in the future).
4. If you make visual changes, include screenshots or gifs in your pull request.
5. If you improve the existing code, make sure to run the tests and ensure that the code is working as expected and talk about the improvements in the pull request description.
6. We use a **template for the pull request**. Please fill out the template with the necessary information.

## Code Review

The pull request will be reviewed by the maintainers. We will provide feedback on your code and suggest changes if necessary. We may ask you to make changes to your code before merging it. We will also provide feedback on the design, coding style, and testing.

## License

By contributing to the Foca AI project, you agree that your contributions will be licensed under the [MIT License](../LICENSE).