/**
 * Created by Pablo Sahonero on 4/6/2015.
 */
/*1. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame. For
 example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
 *********
 * Hello *
 * World *
 * in    *
 * a     *
 * frame *
 **********/
/**
 * This function returns a rectangular frame from given array of strings
 * @param stringlist represents the list of strings to be printed
 */
var printString = function(stringList){
    var maxLength = getMaxLength(stringList);
    console.log(buildLineWithCrosses(maxLength));
    for(var i = 0; i < stringList.length; i++){
        console.log(buildLineWithWord(maxLength ,stringList[i]));
    };
    console.log(buildLineWithCrosses(maxLength));
};

/**
 * This function returns the maximum length of all the strings in the given array
 * @param stringlist represents the list of strings
 */
var getMaxLength = function(stringList){
    var maxLength = 0;
    for(var i = 0; i < stringList.length; i++){
        if(stringList[i].length > maxLength){
            maxLength = stringList[i].length;
        };
    };

    return maxLength;
};

/**
 * This function returns a line containing a number of crosses(*) given a limit
 * @param limit represents limit of how many crosses should be printed
 */
var buildLineWithCrosses = function(limit){
    limit = limit + 4;
    var line = "";
    for(var i = 0; i < limit; i++){
        line = line + "*";
    };

    return line;
};

/**
 * This function returns a line containing a number of crosses(*) and a word given a limit
 * @param limit represents limit of how many crosses should be printed
 * * @param word represents the word that should be printed
 */
var buildLineWithWord = function(limit, word){
    var spaces = limit - word.length;
    var line = "* " + word;
    for(var i = 0; i < spaces; i++){
        line = line + " ";
    };
    line = line + " *";
    return line;
};








/*2. Write function that translates a text to Pig Latin. English is translated to Pig Latin by taking the first
 letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox”
 becomes “Hetay uickqay rownbay oxfay”. */

/**
 * This function returns a translated text to Pig Latin
 * @param text represents the text that is going to be translated to Pig Latin
 */
var translateToPigLatin = function(text){
    var translatedText = "";
    var arrayWords = text.split(" ");
    var suffix = "ay";
    for(var i = 0; i < arrayWords.length; i++){
        var arrayLetters = arrayWords[i].split("");
        var newWord = "";
        for(var j = 1; j < arrayLetters.length; j++){
            newWord = newWord + arrayLetters[j];
        };
        newWord = newWord + arrayLetters[0] + suffix;
        translatedText = translatedText + newWord + " ";
    };
    return translatedText;
};







/*3. Given an array with numbers, write a program that gets the nearest larger value for the number at
 an specified position. For example in the array [1,4,3,2,5,7], the nearest larger value for item at
 position 1 (number 4) is 5.
*/

var obtainNearestLargerNumber = function(arrayOfNumbers, position){
    return discoverNearestLargerNumber(arrayOfNumbers, position, position);
};

var discoverNearestLargerNumber = function(arrayOfNumbers, initialPosition, actualPosition, max){

    /*
    if(position== undefined)
        position=arrayOfNumbers.length-1;


    */

    if (actualPosition == 0 || actualPosition == arrayOfNumbers.length)
        return max;

    if(max==undefined)
        max=arrayOfNumbers[initialPosition];

    if(actualPosition - 1 > 0)
    {
        actualPosition = actualPosition - 1;
        if (max<arrayOfNumbers[actualPosition]) {
            max = arrayOfNumbers[actualPosition];
            return max;
        }
        else
        {
            discoverNearestLargerNumber(arrayOfNumbers, initialPosition, actualPosition-1,max);
        };
    }
    else{
        if(actualPosition + 1 < arrayOfNumbers.length) {
            actualPosition = actualPosition + 1;
            if (max<arrayOfNumbers[actualPosition]) {
                max = arrayOfNumbers[actualPosition];
                return max;
            }
        }
        else
        {
            discoverNearestLargerNumber(arrayOfNumbers, initialPosition, actualPosition+1,max);
        };
    }

    return max;
};
