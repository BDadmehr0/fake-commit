import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const git = simpleGit();

const makeCommits = async (n) => {
    if (n === 0) {
        await git.push();
        return;
    }

    const x = random.int(0, 54);
    const y = random.int(0, 6);
    const date = moment().subtract(1, "year").add(1, "day").add(x, "weeks").add(y, "days").toISOString();

    const data = { date };
    console.log(date);

    try {
        await jsonfile.writeFile(path, data);
        await git.add(path);
        await git.commit(date, { '--date': date });
        await makeCommits(n - 1);
    } catch (error) {
        console.error("Error during commit process:", error);
    }
};

// Usage example
makeCommits(312);

