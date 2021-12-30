"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var Todo = response.data;
    var id = Todo.id;
    var title = Todo.title;
    var completed = Todo.completed;
    logger(id, title, completed);
});
var logger = function (id, title, completed) {
    console.log("\n\t\tThe id of the todo is: ".concat(id, "\n\t\twith a title of: ").concat(title, "\n\t\twhich is completed?: ").concat(completed, "\n\t"));
};
