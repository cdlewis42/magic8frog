//grab button from HTML

const frogArray = ["https://comicbookandbeyond.com/wp-content/uploads/2019/07/Kermit-the-Frog-popular-quotes.jpg", 
"https://relatably.com/q/img/frogs-quotes-sayings/0011119f5ebf034faa133f07a0466e37.jpg", 
"https://2.bp.blogspot.com/-glfzQv6HdPs/VhOhzi0q3gI/AAAAAAAADIo/_dtq8rljyLk/s1600/Two%2Bfrogs%2Bin%2Bthe.jpg", 
"https://i.pinimg.com/originals/1a/d5/2d/1ad52dee403ef19533aba192bac455dd.png"]

// var randomFrogImg = function (array) {
//     for(i = 0; i<array.length; i++){
//         var newDiv = $("div")
//         newDiv.append("<img src = '" + array[i] + "'>")
//     }
//     console.log(array)

// }

$(".frogButton").on("click", function(){
    console.log("click is going trhough")
    randomNumber = Math.floor(Math.random() * frogArray.length)
    var newDiv = $("div")
    newDiv.html("<br><img src = '" + frogArray[randomNumber] + "'>")

})
//make array with diff images
//make button grab random image and append to img tag