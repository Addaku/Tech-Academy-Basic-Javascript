var lang = "Javascript";

function myFuntion(lang) {
    this.lang = lang;
   console.log("Hello, welcome to "+this.lang);
};
var  Test = new myFuntion(lang);