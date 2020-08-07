function komprimieren(message) {
  var i = 0;
  var string = new String(message);

  var returnmessage = "";

  var lastChar = "";
  var charCount = 0;
  while (i < string.length) {
    //console.log(`Char at ${i} is '${string.charAt(i)}'`);
    if (lastChar == string.charAt(i)) {
      lastChar++;
      charCount++;
    } else {
      if (charCount >= 4) {
        returnmessage = `${returnmessage}${charCount}${lastChar}`;
      } else {
      }

      lastChar = string.charAt(i);
      charCount = 1;
    }
    i++;
  }
  //console.log({ returnmessage });
  return `${returnmessage}`;
}

module.exports.komprimieren = komprimieren;

function splitmessage(message) {
  var ret = [{ char: "", count: 0 }];
  ret = [];
  var loc = 0;
  while (loc < message.length) {
    if (ret.length == 0) {
      ret.push({ char: `${message.charAt(loc)}`, count: 1 });
    } else if (ret[ret.length - 1].char == `${message.charAt(loc)}`) {
      ret[ret.length - 1]["count"]++;
    } else {
      ret.push({ char: message.charAt(loc), count: 1 });
    }
    loc++;
  }
  // console.log(JSON.stringify(ret));
  return JSON.stringify(ret);
}

module.exports.splitmessage = splitmessage;

module.exports.toUglyMessage = (jsonString) => {
  var input = JSON.parse(jsonString);
  var ret = "";
  input.forEach((value) => {
    switch (value.count) {
      case 0:
        break;
      case 1:
        ret = `${ret}${value.char}`;
        break;
      case 2:
        ret = `${ret}${value.char}${value.char}`;
        break;
      case 3:
        ret = `${ret}${value.char}${value.char}${value.char}`;
        break;
      default:
        ret = `${ret}§${value.count}${value.char}`;
        break;
    }
    /*if (value.count >= 4) {
      ret = `${ret}§${value.count}${value.char}`;
    } else {
      ret = `${ret}${value.char}`;
    }*/
    //console.log(" -> " + JSON.stringify(value));
  });
  return ret;
};
