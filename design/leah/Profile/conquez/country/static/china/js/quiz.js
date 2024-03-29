const explain = document.getElementById('explanation');
const question = document.getElementsByClassName('wrapper');
const ques_1_A = document.getElementById('1A');
const ques_1_B = document.getElementById('1B');
const ques_1_C = document.getElementById('1C');
const ques_1_D = document.getElementById('1D');
const ques_2_A = document.getElementById('2A');
const ques_2_B = document.getElementById('2B');
const ques_2_C = document.getElementById('2C');
const ques_2_D = document.getElementById('2D');
const ques_3_A = document.getElementById('3A');
const ques_3_B = document.getElementById('3B');
const ques_3_C = document.getElementById('3C');
const ques_3_D = document.getElementById('3D');
const ques_4_A = document.getElementById('4A');
const ques_4_B = document.getElementById('4B');
const ques_4_C = document.getElementById('4C');
const ques_4_D = document.getElementById('4D');
const ansDiv1 = document.getElementById('answerContainer1');
const ansDiv2 = document.getElementById('answerContainer2');
const ansDiv3 = document.getElementById('answerContainer3');
const ansDiv4 = document.getElementById('answerContainer4');

// variables
let score = 0;
let scoreper =(parseFloat(score/4))*100;

function checkAnswer1(answer){
    if (answer === 'A'){
        console.log('Correct');
        score++;
        document.getElementById("heading1").innerHTML = "CORRECT";
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading1").innerHTML = "INCORRECT";

    }
    explanationRender1();
}

function explanationRender1() {
    document.getElementById('buttons1').innerHTML = "This is the explanation of qus1"
}
ques_1_A.addEventListener("click", function checkIt0() {checkAnswer1('A');});
ques_1_B.addEventListener("click", function checkIt1() {checkAnswer1('B');});
ques_1_C.addEventListener("click", function checkIt2() {checkAnswer1('C');});
ques_1_D.addEventListener("click", function checkIt3() {checkAnswer1('D');});


function checkAnswer2(answer){
    if (answer === 'B'){
        console.log('Correct');
        score++;
        document.getElementById("heading2").innerHTML = "CORRECT"
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading2").innerHTML = "INCORRECT"

    }
    explanationRender2();
}

function explanationRender2() {
    document.getElementById('buttons2').innerText = "This is the explanation of qus1";
    }

ques_2_A.addEventListener("click", function checkIt4() {checkAnswer2('A');});
ques_2_B.addEventListener("click", function checkIt5() {checkAnswer2('B');});
ques_2_C.addEventListener("click", function checkIt6() {checkAnswer2('C');});
ques_2_D.addEventListener("click", function checkIt7() {checkAnswer2('D');});





function checkAnswer3(answer){
    if (answer === 'C'){
        console.log('Correct');
        score++;
        document.getElementById("heading3").innerHTML = "CORRECT"
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading3").innerHTML = "INCORRECT"

    }
    explanationRender3()
}

function explanationRender3() {
    document.getElementById('buttons3').innerText = "This is the explanation of qus1";
}

ques_3_A.addEventListener("click", function checkIt8() {checkAnswer3('A');});
ques_3_B.addEventListener("click", function checkIt9() {checkAnswer3('B');});
ques_3_C.addEventListener("click", function checkIt10() {checkAnswer3('C');});
ques_3_D.addEventListener("click", function checkIt11() {checkAnswer3('D');});


function checkAnswer4(answer){
    if (answer === 'D'){
        console.log('Correct');
        score++;
        document.getElementById("heading4").innerHTML = "CORRECT";
    }
    else {
        console.log('Incorrect');
        document.getElementById("heading4").innerHTML = "INCORRECT";

    }
    explanationRender4();
}

function explanationRender4() {
    document.getElementById('buttons4').innerText = "This is the explanation of qus1";
    document.getElementById('check_score').innerHTML = "<button onclick='scoreRender()'>Click Here To Check Score</button>";
}

function scoreRender(){
    document.getElementById('ques_body').style.display='none';
    scorePercent = (parseFloat(score/4))*100;
    document.getElementById('score_container').innerHTML = scorePercent + '%<br>';
    document.getElementById('score_container').innerHTML = "<button onclick = validate()>validate</button> "
    document.getElementById('score_container').innerHTML += '<a href="https://conquez.herokuapp.com/home">Go Back to Globe</a>';
}
ques_4_A.addEventListener("click", function checkIt12() {checkAnswer4('A');});
ques_4_B.addEventListener("click", function checkIt13() {checkAnswer4('B');});
ques_4_C.addEventListener("click", function checkIt14() {checkAnswer4('C');});
ques_4_D.addEventListener("click", function checkIt15() {checkAnswer4('D');});

//AJAX for Retrieving Score
// function validate() {
//     console.log("sucessfully validating score");
//     $.ajax({
//         type:"POST",
//         url: "/get_score",
//         dataType: 'json',
//         data: { 
//             user_score: scoreper, country_id: 1 
//         },
//         success: function(response) {
//             console.log("score");
//         },
//         error: function(request, status, err) {
//             console.log('Cannot Validate Score');
//             alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//         }
//     });
// }