#### Introduction
This is a cypress sandbox.

#### What Is Cypress?
The Cypress development team has written a very detailed description [here](https://docs.cypress.io/guides/overview/why-cypress.html), but I would like to highlight a few items in particular:

Cypress is a front end testing tool that was developed for the express purpose of making it easier for developers and QA engineers to set up, write, run, and debug tests.

Key features include:
- Automatic Waiting: Cypress automatically waits for commands and assertions, removing the need for waits and sleeps.
- Debuggability: Debug directly from the test runner GUI.
- Screenshots and Videos: Cypress is able to save screenshots and/or video on failure right of the box.

#### How To Run The Tests
1. Clone repo
2. `cd cypress`
3. `npm install`
4. `./node_modules/.bin/cypress open` (GUI) or `./node_modules/.bin/cypress run` (CLI)
