const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const args = process.argv;
let folder = undefined;
let name = undefined;

args.forEach((param) => {
  if (param.includes("folder")) {
    folder = param.split("=")[1];
  }
});

if (!args[args.length - 1].includes("=")) {
  name = args[args.length - 1];
} else {
  throw Error("Component name is needed.");
}

//EXECUTE GENERATE-REACT-CLI
console.log("Executing cli...");
exec(`npx generate-react-cli component ${name} --type=${folder}`, () => {
  const pathToComponent = path.join(__dirname, `./src/components/${folder}/${name}`);
  const pathToStoriesFolder = path.join(__dirname, `./src/stories/${folder}`);

  const cssDir = `${pathToComponent}/scss`;
  const typesDir = `${pathToComponent}/types`;
  const testsDir = `${pathToComponent}/tests`;

  const oldCss = `${pathToComponent}/${name}.scss`;
  const newCss = `${pathToComponent}/scss/${name}.scss`;
  const newStory = `${pathToStoriesFolder}/${name}.stories.tsx`;
  const newTypes = `${typesDir}/model.ts`;

  //const storyTemplate =

  if (!fs.existsSync(cssDir) && !fs.existsSync(typesDir)) {
    //CREATE SCSS DIR
    console.log("Create scss dir...");
    fs.mkdirSync(cssDir, { recursive: true });
    //CREATE TYPES DIR
    console.log("Create types dir...");
    fs.mkdirSync(typesDir, { recursive: true });
    //CREATE TESTS DIR
    console.log("Create tests dir...");
    fs.mkdirSync(testsDir, { recursive: true });
    //MAKE MODEL FILE
    console.log("Make model file...");
    fs.writeFile(newTypes, `export type ${name}Props={}`, () => {});
    //MOVE FILES
    console.log("Move css files...");
    fs.renameSync(oldCss, newCss, (err) => {
      if (err) console.log(err);
    });
    //CREATE STORIES FILE

    //fs.readFile()
    console.log("Make story file...");
    fs.writeFile(newStory, "", () => {});
  } else {
    console.log("Files already exists.");
  }
});
