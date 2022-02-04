import { doubleVowelRemover, vowelCounter, eilizer, deleteSilent, exemption, doTheDangThang, addTheDangThang } from '../src/js/haiku.js';

describe (vowelCounter, () => {

  test('should take in a string and return an integer', () => {
    const inputString = new String("r");
    expect(vowelCounter(inputString)).toEqual(0);
  });

  test('should take in a vowel and return the appropriate integer', () => {
    const inputString = new String("a");
    expect(vowelCounter(inputString)).toEqual(1);
  });

  test('should take in a vowel and return the appropriate integer', () => {
    const inputString = new String("e");
    expect(vowelCounter(inputString)).toEqual(1);
  });

  test('should take in a vowel and return the appropriate integer', () => {
    const inputString = new String("i");
    expect(vowelCounter(inputString)).toEqual(1);
  });
  
  test('should take in a vowel and return the appropriate integer', () => {
    const inputString = new String("o");
    expect(vowelCounter(inputString)).toEqual(1);
  });

  test('should take in a vowel and return the appropriate integer', () => {
    const inputString = new String("u");
    expect(vowelCounter(inputString)).toEqual(1);
  });

  test('should take in a consonant and return the appropriate integer', () => {
    const inputString = new String("z");
    expect(vowelCounter(inputString)).toEqual(0);
  });
  
  test('should take in a multi character string with a vowel and return the appropriate integer', () => {
  const inputString = new String("bed");
  expect(vowelCounter(inputString)).toEqual(1);
  });

  test('should take in a multi character string with a vowel and return the appropriate integer', () => {
  const inputString = new String("bead");
  expect(vowelCounter(inputString)).toEqual(2);
  });
});

describe (eilizer, () => {

  test('should replace a string of vowels with an equally sized string of the letter e', () => {
    const inputString = new String("aeiou");
    expect(eilizer(inputString)).toEqual("eeeee");
  });

  test('should not replace any letters if word contains no vowels', () => {
    const inputString = new String("mxyzptlk");
    expect(eilizer(inputString)).toEqual("mxyzptlk");
  });
});

describe (doubleVowelRemover, () => {

  test('should remove a vowel if a string contains two adjacent vowels', () => {
    const inputString = new String("bees");
    expect(doubleVowelRemover(inputString)).toEqual("bes");
  });

  test('should not remove vowels unless vowels are adjacent', () => {
    const inputString = new String("elephant");
    expect(doubleVowelRemover(inputString)).toEqual("elephant");
  });
});

describe (deleteSilent, () => {

  test ('should return initial string if word is three letters long or less', () => {
    const inputString = new String("tee");
    expect (deleteSilent(inputString)).toEqual("tee");
  });
  
  test ('should return initial string if word only contains one vowel and is three letters long', () => {
    const inputString = new String("the");
    expect (deleteSilent(inputString)).toEqual("the")
  });

  test ('should remove the final letter of a word if the letter is e', () => {
    const inputString = new String("crate");
    expect (deleteSilent(inputString)).toEqual("crat");
  });

  test ('should remove the final syllable of a word if the letters are ed', () => {
    const inputString = new String("jumped");
    expect (deleteSilent(inputString)).toEqual("jump");
  });

  test ('should not remove the end of a word if it is not e or ed', () => {
    const inputString = new String("loud");
    expect (deleteSilent(inputString)).toEqual("loud");
  });
});

describe (exemption, () => {

  test ('should edit the last syllable of a word if the spelling is ted', () => {
    const inputString = new String("created");
    expect (exemption(inputString)).toEqual("creatod");
  });

  test ('should edit the last syllable of a word if the spelling is ded', () => {
    const inputString = new String("melded");
    expect (exemption(inputString)).toEqual("meldod");
  });
  
  test ('should change "eau" in any string to "eu" ', () => {
    const inputString = new String("beautiful");
    expect (exemption(inputString)).toEqual("beutiful");
  });

  test ('should not edit a word if the word does not end with ted or ded', () => {
    const inputString = new String("bees");
    expect (exemption(inputString)).toEqual("bees");
  });

  test ('should replace a string that has a length of 3 and starts with a and ends with y', () => {
    const inputString = new String("any");
    expect (exemption(inputString)).toEqual("taken")
  });
  
  test ('shoul replace the "y" with "ay" in any word that ends with a consonant followed by a y', () => {
    const inputString = new String("happy");
    expect (exemption(inputString)).toEqual("happay");
  });

  test ('shoul not replace the "y" with "ay" in any word that ends with a consonant followed by a y', () => {
    const inputString = new String("peppay");
    expect (exemption(inputString)).toEqual("peppay");
  });

  test ('shoul not replace the "y" with "ay" in any word that ends with a consonant followed by a y', () => {
    const inputString = new String("happey");
    expect (exemption(inputString)).toEqual("happey");
  });

  test ('shoul not replace the "y" with "ay" in any word that ends with a consonant followed by a y', () => {
    const inputString = new String("happiy");
    expect (exemption(inputString)).toEqual("happiy");
  });

  test ('shoul not replace the "y" with "ay" in any word that ends with a consonant followed by a y', () => {
    const inputString = new String("happuy");
    expect (exemption(inputString)).toEqual("happuy");
  });

});



describe (doTheDangThang, () => {

  test ('should count the number of syllables in each element of a multi string array', () => {
    const inputArr = ["hey", "what", "are"];
    expect (doTheDangThang(inputArr)).toEqual([1, 1, 1]);
  });
});

describe (addTheDangThang, () => {

  test ('should return the sum of an array of integers', () => {
    const inputArr = [1,2,3];
    expect (addTheDangThang(inputArr)).toEqual(6);
  });
});