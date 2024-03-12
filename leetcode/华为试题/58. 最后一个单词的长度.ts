function lengthOfLastWord(s: string): number {
  let token = s.split(" ").filter((item) => item);

  return token[token.length - 1].length;
}
