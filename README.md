#  goit-react-hw-03-phonebook

This is homework for the React components lifecycle.

This task is based on the previous one ("**goit-react-hw-02-phonebook**"), which may be found [here](https://github.com/oleksandr-romashko/goit-react-hw-02-phonebook).

## Live page

The live page for this repository can be viewed at [GitHub Pages](https://oleksandr-romashko.github.io/goit-react-hw-03-phonebook/).

## Local build and run

  1. Make sure you have an LTS version of Node.js installed on your computer. [Download and install](https://nodejs.org/en/) if needed.
  1. Install the project's base dependencies with the `npm install` command.
  1. Start development mode by running the `npm start` command.
  2. Go to [localhost:3000](http://localhost:3000/) (may vary) in your browser. This page will automatically reload after saving changes to the project files.

## Task Acceptance Criteria

[React project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md) is used as a starting point for the application (more information about how to start-up with such a project may be found at the template repo description or [here in a Readme file](./README.en.md)).

  * The `goit-react-hw-03-phonebook` repository is created.
  * When submitting homework, there are two links: to the source files and the live pages of each assignment on `GitHub Pages'.
  * The component state stores the minimum required set of data, the rest is calculated.
  * There are no errors or warnings in the console when running application code.
  * Each component has a separate folder with the React-component file and styles file.
  * The `propTypes` are described for all components.
  * Everything that a component expects in the form of props is passed to it when it is called.
  * Component names are clear and descriptive.
  * The JS code is clean and clear, `Prettier` is used.
  * Styling is done by `CSS modules` or `Styled Components`.

## Task - Contact Book

Take your solution from the previous homework assignment and add storage of the phonebook contacts in `localStorage`. Use lifecycle methods.

  * When you add and delete a contact, the contacts are stored in the local storage.
  * When the application is loaded, contacts, if any, are read from the local storage and are written to the state.


<u>Solution example:</u>

A search field that you can use to filter your contacts.

<p align="center">
  <img max-width="960" src="./assets/tasks/step-3.gif" alt="step-1 interface example component preview">
</p>

Denies the user the ability to add contacts whose names are already in the phonebook. If tries to do so, alert with a warning is printed.

<p align="center">
  <img max-width="960" src="./assets/tasks/step-5.png" alt="step-1 interface example component preview">
</p>

Allows the user to delete previously saved contacts.

<p align="center">
  <img max-width="960" src="./assets/tasks/step-6.gif" alt="step-1 interface example component preview">
</p>