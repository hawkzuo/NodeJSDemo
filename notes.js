
console.log('Notes.js');

console.log(module);

module.exports.addNote = function () {
    console.log('addNote got called');
    return 'addNote done'
};

module.exports.add = function (x, y) {
    return x+y
};
