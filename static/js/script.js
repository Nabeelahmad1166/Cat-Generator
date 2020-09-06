// Your age in days calculator


function age_in_days() {
    var birthyear = prompt("What year were you born... Good friend?");
    var ageInDayss = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    // document.getElementById("flex-box-result").innerHTML = ageInDayss;
}

function reset() {
    document.getElementById('ageInDays').remove();
}

let i = 0;

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    i++;
    // console.log(i)
    image.src = "static/images/iloveimg-resized_1/" + i + ".jpg";
    if (i == 8) { i = 0; }
    div.appendChild(image);
}