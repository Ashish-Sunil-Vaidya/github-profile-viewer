
# GitHub Profile Viewer
![image](https://github.com/Ashish-Sunil-Vaidya/github-profile-viewer/assets/115164587/e3f7a36f-f045-405f-b7c4-842024bd7617)

This project is a GitHub Profile Viewer built with React. It allows you to view GitHub profiles and repositories by entering a GitHub personal access token (PAT).

## Features

- View GitHub profiles and repositories
- Search by GitHub username
- View repository details such as name, description, language, stars, forks, license, open issues, and last updated date

## Components

- [`WelcomePage`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fcomponents%2FWelcomePage.jsx%22%2C%22WelcomePage%22%5D "src/components/WelcomePage.jsx"): This component is the landing page where you enter your GitHub PAT. It also provides instructions on how to generate a PAT if you don't have one.
- [`RepositorySection`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fcomponents%2FRepositorySection.jsx%22%2C%22RepositorySection%22%5D "src/components/RepositorySection.jsx"): This component displays a list of repositories. It uses the `GithubApiContext` to access the repository data.
- [`RepositoryContainer`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fcomponents%2FRepositoryContainer.jsx%22%2C%22RepositoryContainer%22%5D "src/components/RepositoryContainer.jsx"): This component displays the details of a single repository. It receives the repository data as props from the `RepositorySection` component.

## Styles

- [`welcomepage.css`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fstyles%2Fwelcomepage.css%22%2C%22welcomepage.css%22%5D "src/styles/welcomepage.css"): This file contains the styles for the `WelcomePage` component.
- [`repositorycontainer.css`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fstyles%2Frepositorycontainer.css%22%2C%22repositorycontainer.css%22%5D "src/styles/repositorycontainer.css"): This file contains the styles for the `RepositoryContainer` component.

## Setup

1. Clone the repository
2. Install the dependencies using `npm install` or `yarn install`
3. Start the development server using `npm start` or `yarn start`

## Requirements

- Node.js
- npm or Yarn
- A GitHub personal access token

## Note

This project is built with React and uses the GitHub API to fetch data. It requires a GitHub personal access token to authenticate with the GitHub API. Please ensure you have a valid token before using this application.
