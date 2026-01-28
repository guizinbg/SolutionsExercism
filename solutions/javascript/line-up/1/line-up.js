//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let result = number % 10
  let result2 = number % 100

  if (result === 1 && result2 !== 11)
  {
    return name + ", you are the " + number + "st customer we serve today. Thank you!"
  }
  else if (result === 2 && result2 !== 12)
  {
    return name + ", you are the " + number + "nd customer we serve today. Thank you!"
  }
  else if (result === 3 && result2 !== 13)
  {
    return name + ", you are the " + number + "rd customer we serve today. Thank you!"
  }
  else
  {
    return name + ", you are the " + number + "th customer we serve today. Thank you!"
  }
};
