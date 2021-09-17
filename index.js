/*
1.we have to grab the input value(input event"oninput"")
2.match the input value with the color name
*/




function search(){
    let inputVal = searchText.value;

    //here the provided class name should be same in every element, in which we wanna perform array.from-for each method
    let colorName = document.getElementsByClassName('colorName')

    //array.from-for each will perform provided function once for each array element. This will run one by one in every 
Color elements, it will go to the 1st element, search for the releavant text and so on.
    Array.from(colorName).forEach(function(element){

        //grabbing color name(text) from span. [0] means first element of this tag.
        let colorText = element.getElementsByTagName('span')[0].innerText;

        //if colorText includes inputVal, then set the style to block, otherwise set it to none.
        if (colorText.includes(inputVal)) {
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }
    })
}
