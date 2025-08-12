function groupAnagrams(words) {
  const map = {};

  for (const word of words) {
    const sorted = word.split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(word);
  }

  return Object.values(map);
}

// Example usage:
const words = ["bat", "tab", "eat", "tea", "tan", "ate", "nat"];
console.log(groupAnagrams(words));
// output  [(["bat", "tab"], ["eat", "tea", "ate"], ["tan", "nat"])];