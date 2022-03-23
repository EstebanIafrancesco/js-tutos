// You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
// pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
let numberLikes = ["Max", "John", "Mark"];

function likes(numberLikes) {
  if (numberLikes.length === 0) {
    return "no one likes this";
  }
  if (numberLikes.length === 1) {
    return numberLikes[0] + " like this";
  }
  if (numberLikes.length === 2) {
    return numberLikes[0] + " and " + numberLikes[1] + " like this";
  }
  if (numberLikes.length === 3) {
    return (
      numberLikes[0] +
      ", " +
      numberLikes[1] +
      " and " +
      numberLikes[2] +
      " likes this"
    );
  }
  if (numberLikes.length > 3) {
    return (
      numberLikes[0] +
      ", " +
      numberLikes[1] +
      " and " +
      (numberLikes.length - 2) +
      " others like this"
    );
  }
}

console.log(likes(numberLikes));
