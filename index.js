const stringLength = (string) => {
  const strLength = string.length;
  if (strLength > 0 && strLength <= 10) {
    return strLength;
  } else {
    throw 'Error: String should have atleast 1 char and maximum of 10 chars';
  }
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase();
};

export { stringLength, reverseString, capitalize };
