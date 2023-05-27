const { exec } = require("child_process");

exec("npm config set @lukasbriza:registry=https://npm.pkg.github.com/", (err) => {
  if (err) throw Error(err.message);
  console.log("Set registry: @lukasbriza:registry=https://registry.npmjs.org/");
}).on("exit", () => {
  exec("npm publish", (err) => {
    if (err) throw Error(err.message);
    console.log("Publish...");
  }).on("exit", () => {
    exec("npm config set @lukasbriza:registry=https://registry.npmjs.org/", (err) => {
      if (err) throw Error(err.message);
      console.log("Set registry: @lukasbriza:registry=https://npm.pkg.github.com/");
    }).on("exit", () => {
      exec("npm publish", (err) => {
        if (err) throw Error(err.message);
        console.log("Publish...");
      }).on("exit", () => {
        consolelog("DONE");
      });
    });
  });
});
