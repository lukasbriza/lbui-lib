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
console.log(name, folder);
exec(`npx generate-react-cli component ${name} --type=${folder}`, () => {
  const pathToComponent = path.join(__dirname, `./src/components/${folder}/${name}`);

  const cssDir = `${pathToComponent}/scss`;
  const typesDir = `${pathToComponent}/types`;

  const oldCss = `${pathToComponent}/${name}.scss`;
  const newCss = `${pathToComponent}/scss/${name}.scss`;

  const newTypes = `${typesDir}/model.ts`;

  if (!fs.existsSync(cssDir) && !fs.existsSync(typesDir)) {
    //CREATE CSS DIR
    fs.mkdirSync(cssDir, { recursive: true });
    //CREATE TYPES DIR
    fs.mkdirSync(typesDir, { recursive: true });
    //MAKE MODEL FILE
    fs.writeFile(newTypes, `export type ${name}Props={}`, () => {});
    //MOVE FILES
    fs.renameSync(oldCss, newCss, (err) => {
      if (err) console.log(err);
    });
  }
});
