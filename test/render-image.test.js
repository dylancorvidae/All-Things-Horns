import renderImage from '../src/render-image.js';
const test = QUnit.test;

QUnit.module('Render Animal Cards');

test('renders html from data', assert => {
    // arrange
    const animal = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
    <li title="A unicorn and a narwhal nuzzling their horns" id="hornies">
        <div>
            <h2>UniWhal</h2>
            <h3>1 Horn</h3>
        </div>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `;

    // act
    const html = renderImage(animal);
    
    // assert
    assert.htmlEqual(html, expected);
});