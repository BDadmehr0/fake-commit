# Fake Commit

This project simulates a series of Git commits over a span of time. It uses the `simple-git` library to interact with Git, `jsonfile` to write data to a JSON file, and `moment` for date manipulation. The script generates random dates and commits a JSON file with those dates.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

To set up this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BDadmehr0/fake-commit
   cd fake-commit
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

3. **Initialize a Git repository (if not already initialized):**
   ```bash
   git init
   ```

## Usage

You can adjust the number of commits by changing the parameter in the `makeCommits` function call at the bottom of the script.

### Example

To make 312 commits:
```javascript
makeCommits(312);
```

### Running the Script

To run the script, execute:
```bash
node index.js
```

## Important Notes

- Ensure that you have Git installed and properly configured on your system.
- The script will create a `data.json` file in the same directory.
- Each commit will include a date that is randomly generated within the last year.
- Commits will be pushed to the remote repository once all specified commits have been made.
