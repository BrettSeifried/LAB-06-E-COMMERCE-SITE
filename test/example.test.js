// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderShirt } from '../render-products.js';
import { shirts } from '../shirts.js';

const test = QUnit.test;

test('renderShirt should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="shirt-card"><h2>Gold Arm</h2><img src="./assets/shirt.webp"><h3>Gold sleeve on black shirt.</h3><h4>UFC</h4><p>$100</p><button>Add</button></div>`;
    const shirt1 = shirts [0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShirt(shirt1).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
