describe('calculator.js',function() {
    it('should add numbers to total', function() {
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });

    it('should subtract numbers from total', function() {
        const calculator =  new Calculator();
        calculator.total = 30;
        calculator.subtract(20);
        expect(calculator.total).toBe(10);
    });

    it('should multiply total by number', function() {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(5);
        expect(calculator.total).toBe(50);
    });

    it('should divide total by number', function() {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.divide(10);
        expect(calculator.total).toBe(1);
    });

    //toBe

    it('should initialize the total', function() {
        const calculator = new Calculator();
       // expect(calculator.total).toBe("0"); // it will give 
       expect(calculator.total).toBe(0);
       expect(calculator.total).toBeFalsy();
    });

    //toEqual

    // it('has constructor', function() {
    //     const calculator = new Calculator();
    //     const calculator2 = new Calculator();
    //     // calculator.total = 44; will give error 
    //     expect(calculator).toEqual(calculator2); // deep equality comparison
    // })

    it('can be instantiated', function() {
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        expect(calculator.constructor.name).toContain("Calc"); //if we add calc1 it will give error

    });

    it('instantiates unique object', function() {
        const calculator1 =  new Calculator();
        const calculator2 =  new Calculator();

        expect(calculator1).not.toBe(calculator2);  //negating matchers
    });

    it('has common operations', function() {
        const calculator =  new Calculator();

        expect(calculator.add).toBeDefined();// or not.toBeUndefined();
        expect(calculator.subtract).toBeDefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.divide).toBeDefined();
    });

    it('can overwrite total', function() {
        const calculator = new Calculator();
        calculator.total = null;
        expect(calculator.total).toBeNull();
    });

    it('does not handle NaN', function() {
        const calculator =  new Calculator();
        calculator.total = 20;
        calculator.multiply('a');
        expect (calculator.total).toBeNaN();
    });
    
    it('handles divide by zero', function() {
        const calculator = new Calculator();

        expect(function() {calculator.divide(0)}).toThrow();
        expect(function() {calculator.divide(0)}).toThrowError(Error);
      //  expect(function() {calculator.divide(0)}).toThrowError(Error, 'cannot divide by zer'); // it will throw error
    });

    it('returns total', function() {
        const calculator = new Calculator();
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
    })
});