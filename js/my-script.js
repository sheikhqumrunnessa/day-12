

$('#add').click(function () {
    var  x = Number($('#firstNumber').val());
    var  y = Number($('#lastNumber').val());
    var  result = x+y;
    $('#reset').val(result);

});

$('#add').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x+y;

    $('#result').val(result);

});

$('#sub').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x-y;

    $('#result').val(result);

});

$('#multi').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x*y;

    $('#result').val(result);

});

$('#div').click(function () {
    var x = Number($('#firstNo').val());
    var y = Number($('#lastNo').val());
    var result = x/y;

    $('#result').val(result);

});
















// $('#btn').click(function () {
//     var  firstNameValue = $('#firstName').val();
//     var  lastNameValue = $('#lastName').val();
//     var  fullName = firstNameValue+' '+lastNameValue;
//     $('#fullName').val(fullName);
//
// });


// alert ( $('#h1').html('Hello World');

// var redBtnElement =document.getElementById('redBtn');
//   redBtnElement.onclick = function () {
//     var  divOneElement= document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'red';
//       divOneElement.className ='class-one';
//
// };
// var greenBtnElement =document.getElementById('greenBtn');
// greenBtnElement.onclick = function () {
//     var  divOneElement= document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'green';
//     divOneElement.className ='class-two';
//
// };
//
// var blueBtnElement =document.getElementById('blueBtn');
// blueBtnElement.onclick = function () {
//     var  divOneElement= document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'blue';
//     divOneElement.className ='class-three';
// };
//
// var defaultBtnElement =document.getElementById('defaultBtn');
// defaultBtnElement.onclick = function () {
//     var  divOneElement= document.getElementById('divOne');
//     // divOneElement.style.backgroundColor = 'white';
//     divOneElement.className ='my-style';
// };
//




























var btnElement = document.getElementById('btn');
btnElement.onclick =function () {
   var  startingNumberValue = document.getElementById('startingNumber').value;
    var  endingNumberValue = document.getElementById('endingNumber').value;

    var res='';
    for (var x=startingNumberValue; x<=endingNumberValue; x++){
        // document.write(x+' ');
        res+=x;//res=res(string)+x(string)=concate
    }
    document.getElementById('result').value = res;

};
