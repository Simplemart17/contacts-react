// Generate array of all alphabets using array method and string char code
const generateAlphabet = () => {
  const alpha = Array.from(Array(26)).map((_, i) => i + 97);
  return alpha.map((x) => String.fromCharCode(x));
};

export default generateAlphabet;
