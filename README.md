# Controller Setup 🎮

> A task to setup input controllers by prompting for input responses.

The task will prompt for input and confirmation of up to four controller buttons, with one final screen prompting for a "trigger" signal. This trigger signal is typically important for MRI study applications and tasks, and is often sent by the MRI button box to signify a moment when data is captured. This can be used to synchronize task state with fMRI data capture.

## Getting Started 🚦

Before modifying or deploying the task, ensure that the Node.js version 16+ is installed on your system. Download Node.js [here](https://nodejs.org/en/). After installation, run `yarn` in the root directory of the repository. After a short period of time, all dependencies for the task will be configured and the task is ready to be modified or deployed.

## Commands 👨‍💻

A number of developer commands have been configured for ease of development. The `Yarn` package manager is used in this repository and should be used to run these commands.

- `clean`: Remove build and development artefacts that are temporary or not required. The list of directories and files to remove are specified in `gulpfile.js`.
- `build`: Create a deployment-ready build of the task. A single output file, `index.js` will be created in a `dist/` subdirectory.
- `lint`: Run the Prettier linting tool over the entire repository, correcting any styling issues.
- `start`: Start the development server and active build process. The task will be able to be previewed in the browser and will reload after each source code change.

## Contributions 👉

- Issues, bugs, or suggestions? File a new issue under the `Issues` tab.
- Reach out to [henry.burgess@wustl.edu](mailto:henry.burgess@wustl.edu).
