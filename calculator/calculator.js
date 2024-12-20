// Variables
const types = ['commercial', 'residential'];
const heights = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const gauges = [11.5, 11, 9, 8];
const grades = ['Commercial', 'Residential', 'Industrial'];
const finishes = ['Galvanized', 'Black', 'Green'];


//Select instancing 
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

//Reset Button
document.getElementById('resetButton').addEventListener('click', () => {

    const form = document.getElementById("myForm");
    form.reset();
    console.log("Form has been reset");
    console.clear();

    document.getElementById('fabricPara').textContent = '';
    document.getElementById('frameworkPara').textContent = '';
    document.getElementById('fittingsPara').textContent = '';
    document.getElementById('tiesPara').textContent = '';

    document.getElementById('results').setAttribute('class', 'resultsHidden');
});


// Submit Function
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();

    let StretchLinearLength = 0;
    let stretchCounter = 0;

    // Loop through elements with IDs from 's1' to 's10'
    for (let i = 1; i <= 10; i++) {
        let value = document.getElementById(`s${i}`).value;
        if (!isNaN(value) && value.trim() !== "") {
            StretchLinearLength += parseFloat(value);
            stretchCounter += 1;
        }
    };
    console.log(`Total Linear Feet lenght of chainlink: ${StretchLinearLength}`); //Fixed to next feet

    let terminalPosts = parseInt(document.getElementById('tPosts').value);
    console.log(`Number of Terminal Posts: ${terminalPosts}`);

    let chainlinkTotalArea = parseFloat(document.getElementById('height').value) * StretchLinearLength;
    let chainlinkHeight = parseInt(document.getElementById('height').value);
    console.log(`Fence Height: ${chainlinkHeight}`);
    console.log(`Square feet area of chaillink fence: ${chainlinkTotalArea.toFixed(2)}`);

    let fabricGauge = document.getElementById('gauge').value;
    console.log(`Fabric Gauge: ${fabricGauge}`);












    //Show the results
    document.getElementById('results').setAttribute('class', 'resultsDisplay');

    const fabricRolls = Math.ceil(StretchLinearLength / 50);
    const topRails = Math.ceil(StretchLinearLength / 21);
    const linePosts = (Math.ceil(StretchLinearLength / 10)) - stretchCounter;
    const isCommercial = document.getElementById('grade').value === 'commercial';
    const barbWireCheck = document.getElementById("barbWireCheck");
    let linePostsWidth = `1-7/8"`;
    let terminalPostsWidth = `2-3/8"`;
    let terminalPostsHeight = 3;
    let barbwireHtml = '';
    let braceBands = 4 * stretchCounter;
    let gate1Type, gate2Type;
    let numGates01 = document.getElementById('gates01');
    let numGates02 = document.getElementById('gates02');

    const gate1Radio = document.querySelector('input[name="gate1Type"]:checked');
    const gate2Radio = document.querySelector('input[name="gate2Type"]:checked');

    if (gate1Radio) {
        gate1Type = gate1Radio.value;
    } else {
        gate1Type = null;
    }
    if (gate2Radio) {
        gate2Type = gate2Radio.value;
    } else {
        gate2Type = null;
    }


    if (barbWireCheck.checked) {
        braceBands = terminalPosts * 5;
        barbWireHtml = `<p><strong>${StretchLinearLength * 3}ft</strong> Barb Wire </p>`;
    } else {
        barbWireHtml = '<p><strong>No Barb Wire</strong></p>';
    };


    if (isCommercial) {
        linePostsWidth = `2-3/8"`
        terminalPostsWidth = `2-7/8"`;
        terminalPostsHeight = chainlinkHeight + 3;
    } else {
        terminalPostsWidth = `2-3/8"`;
        terminalPostsHeight = chainlinkHeight + 2;
    };
    const tensionBands = (chainlinkHeight - 1) * (stretchCounter * 2);

    document.getElementById('fabricPara').innerHTML = `<p><strong>${fabricRolls}</strong> -> ${chainlinkHeight}' high x ${fabricGauge}ga. Chain Link Fabric. 50' Roll. For ${StretchLinearLength}ft Chain Link</p> `;
    const frameworkHTML = `<p><strong>${topRails}</strong> -> 1-5/8" x 21' Top Rails • SS20 </p>` +
        `<p><strong id="linePostsLine">${linePosts}</strong> -> ${linePostsWidth} x ${chainlinkHeight+2}' Line Posts • SS20 </p>` +
        `<p><strong>${terminalPosts}</strong> -> ${terminalPostsWidth} x ${terminalPostsHeight}' Terminal Posts • CQ40 </p>`;

    document.getElementById('frameworkPara').innerHTML = frameworkHTML;

    const fittingsHtml = `<p><strong>${linePosts}</strong> -> Eye Tops / Barb Arms - ${linePostsWidth}</p>` +
        `<p><strong>${terminalPosts}</strong> -> Post Caps - ${terminalPostsWidth}</p>` +
        `<p><strong>${braceBands}</strong> -> ${terminalPostsWidth} Brace Bands - Round</p>` +
        `<p><strong>${terminalPosts}</strong> -> Rail Ends - 1-5/8"</p>` +
        `<p><strong>${stretchCounter * 2}</strong> -> ${chainlinkHeight}' Tension Bars</p>` +
        `<p><strong>${tensionBands}</strong> -> Tension Bands - ${terminalPostsWidth}</p>` +
        `<p><strong>${tensionBands + braceBands}</strong> -> Carriage Bolts & Nuts</p>`;

    document.getElementById('fittingsPara').innerHTML = fittingsHtml;

    const tiesHTML = `<p><strong>${StretchLinearLength}</strong> -> Easy Twist Ties - 1-5/8"</p>` +
        `<p><strong>${chainlinkHeight * linePosts}</strong> -> Easy Twist Ties - ${linePostsWidth}</p>` +
        `<p><strong>${StretchLinearLength}</strong> -> Hog Ring Ties</p>`;

    document.getElementById('tiesPara').innerHTML = tiesHTML;

    const tensionwireHtml = `<p><strong>${StretchLinearLength}</strong>ft -> Tension Wire</p>`;
    document.getElementById('tensionwirePara').innerHTML = tensionwireHtml;

    const concreteHtml = `<p><strong>${(linePosts+terminalPosts)*2}</strong> -> 50lbs Fast Setting Concrete Bags</p>`;
    document.getElementById('concretePara').innerHTML = concreteHtml;

    document.getElementById("barbwirePara").innerHTML = barbWireHtml;
    document.getElementById('results').setAttribute('class', 'resultsDisplay');

    let gatesHtml;

    if (numGates01.value > 0) {
        let widthGates01 = document.getElementById("widthGate1").value;
        if (gate1Type == 'rolling') {
            gatesHtml = `<p><strong>Fittings for ${numGates01.value} ${gate1Type} gate ${widthGates01}ft x ${chainlinkHeight}ft</strong></p>` +
                `<p><strong>${numGates01.value * 2}</strong>-> Wheels with Brackets</p>` +
                `<p><strong>${numGates01.value * 2 * 4}</strong>-> Rail Connectors with Brackets</p>` +
                `<p><strong>${numGates01.value}</strong>-> Gate latch with hole</p>`;
        } else if (gate1Type == 'door') {
            gatesHtml = `<p><strong>Fittings for ${numGates01.value} ${gate1Type} gate ${widthGates01}ft x ${chainlinkHeight}ft</strong></p>` +
                `<p><strong>${numGates01.value * 2}</strong>-> 180° Hinge Brackets</p>` +
                `<p><strong>${numGates01.value}</strong>-> Gate latch with hole</p>`;
        }

    } else {
        console.log("No gates 01");
        gatesHtml = `<p>No gates for this Job</p>`
    }
    if (numGates02.value > 0) {
        let widthGates02 = document.getElementById("widthGate2").value;
        console.log(`Gates 02: ${numGates02.value} ${gate1Type} gate ${widthGates02}ft x ${chainlinkHeight}ft`);
    } else {
        console.log("No gates 02");
    }

    document.getElementById("gatesPara").innerHTML = gatesHtml;


});