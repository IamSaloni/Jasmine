describe("main.js", function() {
  describe("calculate()", function() {
    it("validates expression when first number is invalid", function() {
      spyOn(window, "updateResult").and.stub();

      calculate("a+3");

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it("validates expression when second number is invalid", function() {
      spyOn(window, "updateResult");

      calculate("3+a");

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it("validates expression when operation is invalid", function() {
      spyOn(window, "updateResult");

      calculate("3_4");

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("calls add", function() {
      const spy = spyOn(Calculator.prototype, "add");

      calculate("3+4");
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledWith(4);
    });

    it("calls subtract", function() {
      const spy = spyOn(Calculator.prototype, "subtract");
      calculate("3-7");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(7);

    });

    it("calls multiply", function() {
      const spy = spyOn(Calculator.prototype, "multiply");
      calculate("3*8");
      expect(spy).toHaveBeenCalled();
      expect(spy).not.toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledWith(8);
    });

    it("calls divide", function() {
      const spy = spyOn(Calculator.prototype, "divide");
      calculate("3/2");
      expect(spy).toHaveBeenCalled();
      expect(spy).not.toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledWith(2);
    });

   
    it("calls updateResult (example using and.callThrough)", function() {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.callThrough();
      calculate('5*5');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(25);
    });

    it("calls updateResult (example using and.callFake)", function() {
      spyOn(window, 'updateResult');
      // spyOn(Calculator.prototype, 'multiply').and.callFake(function(number) {
      //     return 'it works';
      // });
      calculate('5*5');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(25);
    });

    it("calls updateResult (example using and.returnValue)", function() {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever [multiply] return');
      calculate('5*5');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('whatever [multiply] return');
    });

    it("calls updateResult (example using and.returnValues)", function() {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'add').and.returnValues(null,'whatever [add] returns');
      calculate('5+5');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('whatever [add] returns');
    });

    it('does not handle errors', function() {
      spyOn(Calculator.prototype, 'multiply').and.throwError('some error');

     expect(function(){calculate('5*5')}).toThrowError('some error');

    });

  });
  

  describe("updateResult()", function() {
    let element;
    beforeAll(function() {
      const element = document.createElement("div");
      element.setAttribute("id", "result");
      document.body.appendChild(element);
      this.element = element;
    });

   afterAll(function() {
      document.body.removeChild(this.element);
    });

    it("adds result to DOM element", function() {
      updateResult("5");
      expect(this.element.innerText).toBe("5");
    });

    describe('showVersion()', function() {
      it('calls calculator.version', function() {
        spyOn(document, 'getElementById').and.returnValues({
          innerText:null
        });
      const syp = spyOnProperty(Calculator.prototype, 'version', 'get');

        showVersion();

        //Object.getOwnPropertyDescriptor(Calculator.prototype, 'version').get

        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
