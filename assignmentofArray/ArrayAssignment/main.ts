     //----  ASSIGNMENT OF ARRAY -----

     //       QUESTION : 1
     //  ===> CREATE AN ARRAY (STRING):
 let fruits : string [] = ["apple", "banana", "mango", "orange"];
         console.log(fruits, "\n(=>CREATING SIMPLE ARRAY (STRING))\n");



    //       QUESTION : 2
    //   ===> DECLARE AN ARRAY (NUMBER) :
 let numbers : number [] = [10 , 20 , 30 , 40 ];
         console.log(numbers, "\n(=>DECLARE AN ARRAY (NUMBER))\n");



    //      QUESTION : 3
    //   ===> ACCESSING THE THIRD ELEMENT :
 let thirdFruit = fruits [2];
         console.log(thirdFruit, "\n(=>ACCESSING THE THIRD ELEMENT)\n");



    //      QUESTION : 4
    //    ===> CHANGING THE SECOND ELEMENT :
 numbers [1] = 25;
      console.log(numbers, "\n(=>CHANGED THE SECOND ELEMENT TO 25)\n");



    //     QUESTION : 5
    //   ===>  ADD THE ELEMENT END OF THE FRUIT ARRAY :
fruits.push ("grapes");
        console.log(fruits, "\n(=>ADDING END ELEMENT OF THE ARRAY (GRAPES))\n");


    //    QUESTION : 6
     //   ===>  REMOVE THE LAST ELEMENT FROM THE FRUITS ARRAY :
let lastFruit = fruits.pop();
        console.log(fruits, "\n(=>REMOVING LAST ELEMENT FROM ARRAY)\n");


    //      QUESTION : 7
    //    ===>  REMOVE THE FIRST ELEMENT FROM THE FRUIT ARRAY :
let fruitFirst = fruits.shift();
        console.log(fruits, "\n(=>REMOVING FIRST ELEMENT FROM ARRAY)\n");


     //     QUESTION : 8
     //   ===>  ADD THE ELEMENT BEGINING OF THE FRUIT ARRAY :
fruits.unshift ("kiwi");
        console.log(fruits, "\n(=>ADDING THE ELEMENT BEGINING OF THE ARRAY (KIWI))\n");


     //     QUESTION : 9
     //   ===>  2 ELEMENT REMOVE FROM INDEX 1 (FRUIT ARRAY) :
fruits.splice(1 , 2);
        console.log(fruits, "\n(=>REMOVING 2 ELEMENT FROM INDEX 1)\n");


     //     QUESTION  : 10
     //   ===> INSERT THE ELEMENT STARTING FROM INDEX 2 (FRUIT ARRAY) :
fruits.splice(2 , 0 , "pineapple" , "pear");
         console.log(fruits, "\n(=>INSERTING THE ELEMENT STARTING FROM INDEX 2)\n");



      //     QUESTION : 11
      //   ===> CREATE A NEW ARRAY (CITRUS_FRUITS) :
let citrusFruits = fruits.slice( 0 , 2);
          console.log(citrusFruits, "\n(=>CREATING A NEW ARRAY (CITRUSFRUITS))\n");


      //     QUESTION : 12
      //    ===> CREATE A NEW ARRAY (LAST_TWO_FRUITS) :
let lastTwoFruits = fruits.slice(-2);
          console.log(lastTwoFruits, "\n(=>CREATING A NEW ARRAY (LAST_TWO_FRUITS))\n");

          