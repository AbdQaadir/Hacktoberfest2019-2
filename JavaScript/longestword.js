function CheckLongestWord(str){
             let wordsArray = str.split(" ");
             let longestWord ="";
             for (let word of wordsArray){   
                 if(word.length > longestWord.length)             {
                     longestWord = word;
                 }
                 }     
                 return longestWord;          
             }
            

        console.log(CheckLongestWord("Test in here dude")) 
