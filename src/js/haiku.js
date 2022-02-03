
export function exemption(string) {
  if (string.endsWith("ded")) {
    const saved = string.replace("ded", "dod");
    return saved;
  } else if (string.endsWith("ted")) {
    const saved = string.replace("ted", "tod");
    return saved;
  } else {
    return string;
  }
}

export function deleteSilent(string) {
  if (string.endsWith("e")) {
    const trimmed = string.replace("e", "");
    return trimmed;
  } else if (string.endsWith("ed")) {
    const trimmed = string.replace("ed", "");
    return trimmed;
  } else {
    return string;
  }
}

export function eilizer(string) {
  const word = string.split("");
  let eilized = [];
  word.map(function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      eilized.push("e");
    } else {
      eilized.push(letter);
    }
  });
  return eilized.join("");
}

export function doubleVowelRemover(string) {
  if (string.includes("ee")) {
    const removed = string.replace("ee", "e");
    return removed;
  } else {
    const removed = string;
    return removed;
  }
}

export function vowelCounter(string) {
  const word = string.split("");
  const counter = word.filter(e => e === "a" || e === "e" || e === "i" || e === "o" || e === "u");
  return counter.length;
}

export function doTheDangThang (arr) {
  const syllableCount = arr.map(e => vowelCounter(doubleVowelRemover(eilizer(deleteSilent(exemption(e))))));
  return syllableCount;
}

export function addTheDangThang (arr) {
  const summedArray = arr.reduce(function(currentValue, element) {
    return element + currentValue;
  }, 0);
  return summedArray;
}