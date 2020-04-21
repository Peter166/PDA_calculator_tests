const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it("should number 5button  update the display of the running total", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('73')
  })

  it('should do the arithmetical operations and update the display with the result of operation', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_subtract')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('10');
  })

  it('should multiple operations be chained together', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it('should be able to display the same number of decimals as js float in infinite scenarios', function() {
    running_total = element(by.css('#running_total'))
    let js_float = 1/3;
    let js_float_str = String(js_float);
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal(js_float_str);
  })

  it('should display warning if devision by 0 will try to occur', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Can\'t divide by zero');
  })





});
