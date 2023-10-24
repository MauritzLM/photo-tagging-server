
// compare numbers - check if selection is correct
exports.compareValues =  function (x, y, characterValues) {

       return ((x >= characterValues.x_min && x <= characterValues.x_max) && (y >= characterValues.y_min && y <= characterValues.y_max));
};