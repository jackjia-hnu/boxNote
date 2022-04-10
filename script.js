var i = 0;
var formValue = [];
//第一种写法
// var submit = document.getElementById("submit");
// function getFormValues(){
//         formValue[i++] = document.getElementById("input").value;
//         console.log(formValue[i-1]);
// }

// submit.addEventListener("click", getFormValues);
//第二种写法
document.getElementById("submit").addEventListener("click", function(){
        formValue[i++] = document.getElementById("input").value;
        console.log(formValue[i-1]);
});
