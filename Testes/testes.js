//leetcode
    str = 'Happy birthday hennny!';
    const originalStr = str.split(" ");
    let wordsObj = [];
    str = str.toLowerCase(); 
    const strArray = str.split(" ");
    for(let i = 0; i < strArray.length; i++){
    var wObj = {};
      for(let j = 0; j < strArray[i].length; j++){
        var l = strArray[i].charAt(j);
        wObj[l] = (isNaN(wObj[l]) ? 1 : wObj[l]+1);
      }
      wordsObj.push(wObj);
    }
    var num = 1;
    var wordPos = -1;
    for(let i = 0; i<wordsObj.length;i++){
        let val = Object.values(wordsObj[i]);
        var rep = Math.max(...val);
        console.log(rep);
        if(rep>num){
            num = rep;
            wordPos = i;
        } 
    }
    if(wordPos === -1){
        str = wordPos;
    } else {
        str = originalStr[wordPos];
    }
    console.log(str);
    console.log(num);
    console.log(wordPos);
