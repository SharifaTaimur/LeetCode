//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Note that an empty string is also considered valid.

//Example 1:

//Input: "()"
//Output: true


var isValid = function(bra) {
    let objBra = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let stack = [];
  for (let i = 0; i < bra.length; i++) {
    if (bra[i] === "{" || bra[i] === "(" || bra[i] === "[") {
      stack.push(bra[i]);
    } else {
      let last = stack.pop();
      if (bra[i] !== objBra[last]) {
        return (false);
      }
    }
  }
  if (stack.length !== 0) {
    return(false);
  }

 return(true);
};
