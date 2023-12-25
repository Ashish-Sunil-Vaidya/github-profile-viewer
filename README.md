v2: Readme

# GitHub Profile Viewer v2
![image](https://github.com/Ashish-Sunil-Vaidya/github-profile-viewer/assets/115164587/549fcfa8-3ca6-4cef-8385-2da2dfc07f08)


This is the second version of the GitHub Profile Viewer, now built with React and TypeScript. It allows you to view GitHub profiles and repositories by entering a GitHub personal access token (PAT).

## New Features

- TypeScript: The project has been migrated to TypeScript for better type safety and developer experience.
- Vite: The project now uses Vite for a faster and leaner development experience.
- Tailwind CSS: The project now uses Tailwind CSS for more efficient styling.
- Context API: The project now uses React's Context API for state management, making it easier to manage global state.

## Components

- [`StarterPage`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fpages%2FStarterPage.tsx%22%2C%22StarterPage%22%5D "src/pages/StarterPage.tsx"): This component is the landing page where you enter your GitHub PAT. It also provides instructions on how to generate a PAT if you don't have one.
- [`ProfilePage`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fpages%2FProfilePage.tsx%22%2C%22ProfilePage%22%5D "src/pages/ProfilePage.tsx"): This component displays the profile and repositories of the authenticated user. It uses the `ApiContext` to access the user and repository data.
- [`Repositories`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fcomponents%2FRepositories.tsx%22%2C%22Repositories%22%5D "src/components/Repositories.tsx"): This component displays a list of repositories. It receives the repository data as props from the `ProfilePage` component.

## Styles

- [`index.css`](command:_github.copilot.openSymbolInFile?%5B%22src%2Findex.css%22%2C%22index.css%22%5D "src/index.css"): This file contains the global styles for the application.
- Tailwind CSS: Component-specific styles are defined using Tailwind CSS utility classes directly in the JSX code.

## Setup

1. Clone the repository
2. Install the dependencies using `yarn install`
3. Start the development server using `yarn dev`

## Requirements

- Node.js
- Yarn
- A GitHub personal access token

## Note

This project is built with React, TypeScript, and uses the GitHub API to fetch data. It requires a GitHub personal access token to authenticate with the GitHub API. Please ensure you have a valid token before using this application.
