function generateHashtag(str) {
  const trimStr = str.replace(/\s+/g, " ").trim();
  if (!trimStr) return false;

  const hTag =
    "#" +
    trimStr
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");

  return hTag.length > 140 ? false : hTag;
}

generateHashtag("Do We have A Hashtag"); // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
generateHashtag(""); // false, "Expected an empty string to return false")
// generateHashtag(" ".repeat(200)); // false, "Still an empty string")
// generateHashtag("Codewars"); // "#Codewars", "Should handle a single word.")
// generateHashtag("Codewars Is Nice"); // "#CodewarsIsNice", "Should remove spaces.")
// generateHashtag("Codewars is nice"); // "#CodewarsIsNice", "Should capitalize first letters of words.")
// generateHashtag("code" + " ".repeat(140) + "wars"); // "#CodeWars")
// generateHashtag("a".repeat(139)); // "#A" + "a".repeat(138) "Should work")
// generateHashtag("a".repeat(140)); // false, "Too long")
// generateHashtag(
//   "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
// ); // false, "Should return false if the final word is longer than 140 chars.")
