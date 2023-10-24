const helpers = require("./helpers");


describe("test compare function", () => {

    const characterValues = {
        x_min: 5,
        x_max: 20,
        y_min: 30,
        y_max: 45,
    };

    test('incorrect selection', () => {
        let x = 5;
        let y = 20;
    
        let result = helpers.compareValues(x, y, characterValues);
    
        expect(result).toBe(false);
    });

    test('correct selection', () => {
        let x = 10;
        let y = 35;

        let result = helpers.compareValues(x, y, characterValues);
    
        expect(result).toBe(true);
    });
});

