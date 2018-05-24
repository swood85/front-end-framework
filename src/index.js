require("babel-runtime/regenerator")
require("./scss/main.scss");
require("./index.html");

var a = async (args)=> {
    const { a, b } = args
    await console.log("Hello from the future!", a, b)
    console.log("Done")
}

a({ a:1, b:2 })