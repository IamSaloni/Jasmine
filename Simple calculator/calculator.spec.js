describe("calculator.js", function() {
  
  describe("Calculator", function() {
    let calculator;
    let calculator2;
    beforeEach(function() {
      calculator = new Calculator();
      calculator2 = new Calculator();
    });

    afterEach(function() {
        //this will execute after after each spec
    });

    it("should initialize the total", function() {
      expect(calculator.total).toBe(0);
      expect(calculator.total).toBeFalsy();
    });

    it("can be instantiated", function() {
      jasmine.addMatchers(customMatchers);
      expect(calculator).toBeCalculator(); //custom!
      expect(2).not.toBeCalculator(); //custom!

      expect(calculator).toBeTruthy();
      expect(calculator2).toBeTruthy();
      expect(calculator).toEqual(calculator2);
      expect(calculator.constructor.name).toContain("Calc"); //if we add calc1 it will give error
    });

    it("instantiates unique object", function() {
      expect(calculator).not.toBe(calculator2); //negating matchers
    });

    it("has common operations", function() {
      expect(calculator.add).toBeDefined(); // or not.toBeUndefined();
      expect(calculator.subtract).toBeDefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });

    it("can overwrite total", function() {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    describe("add()", function() {
      it("should add numbers to total", function() {
        calculator.add(5);
        expect(calculator.total).toBe(5);
      });

      it("returns total", function() {
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch("number");
        expect(calculator.total).toEqual(jasmine.anything());
        // expect(calculator.total).toBeNumber();

        expect(function() {}).toEqual(jasmine.anything());
        // expect(undefined).toEqual(jasmine.anything());
      });
    });

    describe("subtract()", function() {
      it("should subtract numbers from total", function() {
        calculator.total = 30;
        calculator.subtract(20);
        expect(calculator.total).toBe(10);
      });
    });

    describe("multiply()", function() {
      it("should multiply total by number", function() {
        calculator.total = 10;
        calculator.multiply(5);
        expect(calculator.total).toBe(50);
      });

      it("does not handle NaN", function() {
        calculator.total = 20;
        calculator.multiply("a");
        expect(calculator.total).toBeNaN();
      });
    });

    describe("divide()", function() {
      it("should divide total by number", function() {
        calculator.total = 10;
        calculator.divide(10);
        expect(calculator.total).toBe(1);
      });

      it("handles divide by zero", function() {
        expect(function() {
          calculator.divide(0);
        }).toThrow();
        expect(function() {
          calculator.divide(0);
        }).toThrowError(Error);
        //  expect(function() {calculator.divide(0)}).toThrowError(Error, 'cannot divide by zer'); // it will throw error
      });
    });
  });
});
