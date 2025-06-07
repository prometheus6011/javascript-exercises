const getTheTitles = function(obj) {
  let resArr = [];
  for (let i = 0; i < obj.length; ++i) {
    resArr.push(obj[i]["title"]);
  }
  return resArr;
};

// Do not edit below this line
module.exports = getTheTitles;
