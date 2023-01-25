function toCamelCase(str){
  let words = str.split(/[-_]/);
  let camelCased = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCased += ((words[i][0].toUpperCase() + words[i].substring(1)))
  }
  return camelCased;
}

toCamelCase("the-stealth-warrior")
toCamelCase("The_Stealth_Warrior")

// console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
// console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"