/*eslint-env browser*/

//STEP 1
function alphabet_order(str) {
    "use strict";
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

//STEP 2
function uppercase(str) {
    "use strict";
    var array = str.split(' ');
    var newarray = [];
    for(var x = 0; x < array.length; x++) {
        newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
    }
    return newarray.join(' ');
}
console.log(uppercase("the quick brown fox"));

//STEP 3
function vowel(str) {
    "use strict";
    var vowels = 'aeiouAEIOU';
    var vowelCount = 0;
    for(var x = 0; x < str.length; x++) {
        if(vowels.indexOf(str[x]) !== -1) {
            vowelCount += 1;
        }
    }
    return vowelCount;
}
console.log(vowel("The quick brown fox"));

//STEP 4
function genId(x) {
    "use strict";
    var text = " ";
    var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < x; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length));
    } return text;
}
console.log(genId(8));

//STEP 5
function longest(name) {
    "use strict";
    return name.reduce(function(longName, country) {
        return longName.length > country.length ? longName : country;
    }, "");
}
console.log(longest(["Democratic Republic of the Congo", "United Kingdom of Great Britain and Northern Ireland", "Great Socialist People's Libyan Arab Jamahiriya"]));