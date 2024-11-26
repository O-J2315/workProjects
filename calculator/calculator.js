const types = ['commercial', 'residential'];
const heights = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const gauges = [11.5, 11, 9, 8];
const grades = ['Commercial', 'Residential', 'Industrial'];
const finishes = ['Galvanized', 'Black', 'Green'];
const gatewidths = [3, 4, 5, 10, 12];



const heightElement = document.getElementById('height');
heights.forEach(height => {
    const option = document.createElement('option');
    option.value = height;
    option.textContent = height;
    heightElement.appendChild(option);
});

const gaugeElement = document.getElementById('gauge');
gauges.forEach(gauge => {
    const option = document.createElement('option');
    option.value = gauge;
    option.textContent = gauge;
    gaugeElement.appendChild(option);
});

const gradeElement = document.getElementById('grade');
grades.forEach(grade => {
    const option = document.createElement('option');
    option.value = grade;
    option.textContent = grade;
    gradeElement.appendChild(option);
});

const finishElement = document.getElementById('finish');
finishes.forEach(finish => {
    const option = document.createElement('option');
    option.value = finish;
    option.textContent = finish;
    finishElement.appendChild(option);
});

const gates1Element = document.getElementById('gates1');
gatewidths.forEach(width => {
    const option = document.createElement('option');
    option.value = width;
    option.textContent = width;
    gates1Element.appendChild(option);
});

const gates2Element = document.getElementById('gates2');
gatewidths.forEach(width => {
    const option = document.createElement('option');
    option.value = width;
    option.textContent = width;
    gates2Element.appendChild(option);
});


document.getElementById('resetButton').addEventListener('click', () => {

    const form = document.getElementById("myForm");
    form.reset();
    console.log("Form has been reset");
    console.clear();
    document.getElementById('costResults').textContent = '';
    document.getElementById('materialListResults').textContent = '';
    document.getElementById('results').setAttribute('class', 'resultsHidden');
});


// Submit Function
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();

    let StretchLinearLength = 0;

    // Loop through elements with IDs from 's1' to 's10'
    for (let i = 1; i <= 10; i++) {
        let value = document.getElementById(`s${i}`).value;
        if (!isNaN(value) && value.trim() !== "") {
            StretchLinearLength += parseFloat(value);
        }
    };
    console.log(`Total Linear Feet of chainlink: ${StretchLinearLength}`); //Fixed to next feet

    let terminalPosts = document.getElementById('tPosts').value;
    console.log(`Number of Terminal Posts: ${terminalPosts}`);

    let chainlinkTotalArea = parseFloat(document.getElementById('height').value) * StretchLinearLength;
    console.log(`Square area of chaillink fence: ${chainlinkTotalArea.toFixed(2)}`);












    //Show the results
    document.getElementById('results').setAttribute('class', 'resultsDisplay')
})