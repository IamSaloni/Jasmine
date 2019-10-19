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
    
});