//
//  studentsInfo.js
//  WAD Mid term
//
//  Created by Syed Ahtsham on 05/12/22.
//  Copyright © 2022 Syed Ahtsham. All rights reserved.
//

const studentsArr = ["Ahtsham", "Imran", "Umer", "Zaheer", "Rizwan", "Ali", "Shahid", "Zeeshan"];
const imagesSrcs = ["images/img1.jpeg","images/img2.jpeg","images/img3.jpeg","images/img4.jpeg","images/img5.jpeg","images/img6.jpeg","images/img7.jpeg","images/img8.jpeg"];


let selectionList = '<select multiple class="form-select" aria-label="Default select example">';



for(let i=0; i<studentsArr.length; i++){
    selectionList += '<option value='+imagesSrcs[i]+'>'+studentsArr[i]+'</option>';
}


selectionList += '</select>';

document.getElementById('studentsList').innerHTML = selectionList;




let selectOptions = document.querySelectorAll('option');
console.log(selectOptions);

let orderedList = document.getElementById('selectedStds');

orderedList.innerHTML = '<ol>';

//This loop runs through all the checkboxes and adds an onchange event listener to each of them
for(let i=0; i<selectOptions.length; i++){

    selectOptions[i].addEventListener('click', function (evt) {
        
        // console.log(selectOptions[i].value);
        //changing the value of input field for quantity to 1 whenever a corresponding checkbox is checked
        if(document.querySelectorAll('option:checked').length === 1){
            orderedList.innerHTML = "";
            
            
        }
        if(selectOptions[i].selected === true){
           orderedList.innerHTML += '<li id='+imagesSrcs[i]+'>'+selectOptions[i].innerText+'</li>';
        
        }
        else{
            
            document.getElementById(imagesSrcs[i]).remove();

              //value is set to null back if the checkbox is unchecked
        }
        
        //limiting the number of selections
        if (document.querySelectorAll('option:checked').length > 6) {
            
            alert("You can select maximum 6 students");
            selectOptions[i].selected = false;
            orderedList.innerHTML += '</ol>';
            document.getElementById(imagesSrcs[i]).remove();
            if(document.querySelectorAll('button').length === 0){
            document.getElementById('proceed').innerHTML = '<button id="proceedBtn" onclick="changeCube()" type="button" class="btn btn-success m-3">Proceed</button>';
            }
        }
        else{
            
        }
        
    });
}







let cubeImgs = document.getElementsByTagName('img');
console.log(cubeImgs);

let flag = false;

function changeCube(){
    if(flag){
        window.location.reload();
        flag = false;
    }
    let selectedStudentsImages = document.querySelectorAll('option:checked');
console.log(selectedStudentsImages);

    for(let i=0; i<selectedStudentsImages.length; i++){
        
        cubeImgs[i].src = selectedStudentsImages[i].value;
    }

    document.getElementById('proceedBtn').innerText = "Try Again";
    document.getElementById('proceedBtn').style.backgroundColor = "red";
    flag = true;
}