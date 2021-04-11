
const fs = require("fs-extra");
const path = require("path");
const https = require("https");
const { exec } = require("child_process");

const packageJson = require("../package.json");

const scripts = `"start": "webpack-dev-server --mode=development --open --hot",
"build": "webpack --mode=production"`;

const babel = `"babel": ${JSON.stringify(packageJson.babel)}`;

const getDeps = (deps) =>
  Object.entries(deps)
    .map((dep) => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, " ")
    .replace(/^/g, "")
    // exclude the dependency only used in this file, nor relevant to the boilerplate
    .replace(/fs-extra[^\s]+/g, "");

console.log("Initializing project..");

// create folder and initialize npm
exec(
  `mkdir ${process.argv[2]} && cd ${process.argv[2]} && npm init -f`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`Everything was fine, then it wasn't:
    ${initErr}`);
      return;
    }
    const packageJSON = `${process.argv[2]}/package.json`;
    // replace the default scripts
    fs.readFile(packageJSON, (err, file) => {
      if (err) throw err;
      const data = file
        .toString()
        .replace(
          '"test": "echo \\"Error: no test specified\\" && exit 1"',
          scripts
        )
        .replace('"keywords": []', babel);
      fs.writeFile(packageJSON, data, (err2) => err2 || true);
    });

    const filesToCopy = ["webpack.config.js"];

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`)).pipe(
        fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`)
      );
    }

    // npm will remove the .gitignore file when the package is installed, therefore it cannot be copied, locally and needs to be downloaded. Use your raw .gitignore once you pushed your code to GitHub.
    https.get(
      "https://raw.githubusercontent.com/Nikhil-Kumaran/reactjs-boilerplate/master/.gitignore",
      (res) => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", (data) => {
          body += data;
        });
        res.on("end", () => {
          fs.writeFile(
            `${process.argv[2]}/.gitignore`,
            body,
            { encoding: "utf-8" },
            (err) => {
              if (err) throw err;
            }
          );
        });
      }
    );

    console.log("npm init -- done\n");

    // installing dependencies
    console.log("Installing deps -- it might take a few minutes..");
    const devDeps = getDeps(packageJson.devDependencies);
    const deps = getDeps(packageJson.dependencies);
    exec(
      `cd ${process.argv[2]} && git init && node -v && npm -v && npm i -D ${devDeps} && npm i -S ${deps}`,
      (npmErr, npmStdout, npmStderr) => {
        if (npmErr) {
          console.error(`Some error while installing dependencies
      ${npmErr}`);
          return;
        }
        console.log(npmStdout);
        console.log("Dependencies installed");

        console.log("Copying additional files..");
        // copy additional source files
        fs.copy(path.join(__dirname, "../src"), `${process.argv[2]}/src`)
          .then(() =>
            console.log(
              `All done!\n\nYour project is now ready\n\nUse the below command to run the app.\n\ncd ${process.argv[2]}\nnpm start`
            )
          )
          .catch((err) => console.error(err));
      }
    );
  }
);
