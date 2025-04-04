# File Explorer App for BrightHR

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [The project](#the-project)
  - [Expected behaviour](#expected-behaviour)
  - [Links](#links)
- [Built with](#built-with)
- [Continued development](#continued-development)
- [How to run the application](#how-to-run-the-application)

### Screenshot

![Mobile design preview for the File Explorer app](./public/assets/mobile-preview.PNG)
![Desktop design preview for the File Explorer app](./public/assets/desktop-preview.PNG)

### The Project

The project has been developed with a Mobile first and Test Driven Development approach.

- View the optimal layout for the app depending on their device's screen size
- View the mobile BrightHR logo on mobile devices and Desktop logo on larger devices
- For each file show at least: File type, Name, Date added
- Allow a user to open a folder to see it’s contents
- Filter by filename

### Expected Behaviour

- View the optimal layout for the app depending on their device's screen size
  - Regardless of the user device, the web app should display the content in the correct order without any out of bound or
    not proportionate content.
- View the mobile BrightHR logo on mobile devices and Desktop logo on larger devices
  - If the user is on a mobile screen, the logo should be the symbolic mobile screen one. If the user is using any larger devices, the user should see the Desktop version.
- For each file show at least: File type, Name, Date added
- Allow a user to open a folder to see it’s contents
- Filter by filename
- The user should be able to filter only files by name. If the query is invalid, the user should see a no results found to prompt the user. Also, there should be a button/icon to allow the user to clear the query.

### Links

- Solution URL: [Github](https://github.com/bilanoo/files-explorer-brhr)
- Live Site URL: [File Explorer by BrightHR](https://file-explorer-by-brighthr-bk.netlify.app/)

### Built with

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/docs/getting-started)

### Continued development

To enhance the application, additional filtering options—by name, size, and date—would be implemented using a structured approach:

1. Dropdown Implementation – Add a dropdown to select the filter type, defaulting to `All`.

2. Filtering by `Size` – Implement an onChange handler to update the `filteredData` array and set the `isFiltered` flag when filtering by size.

3. Filtering by `Date` – Extend the filtering logic to handle date-based filtering once size filtering is fully tested.

4. Filtering by `Name` – Implement name-based filtering following thorough testing of previous filters.

5. `All` Selection – Ensure selecting `All` resets the data to its original state by clearing filters and restoring the full dataset.

6. Code Optimization – Refactor the filtering logic into a utility function for cleaner, more maintainable code.

This step-by-step approach ensures functionality is built incrementally and tested thoroughly before optimization.

### How to run the application

Please on a terminal use the following command: `npm install` and then run `npm run dev`. Also the node version used is 22.14.0.
