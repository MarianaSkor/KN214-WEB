function check_name(element_n){
    if(parseInt(element_n)){
        document.getElementById("wrong_n").innerHTML = "Введіть ім'я";
        document.getElementById("wrong_n").style.color = "red";
    }
}

function check_subject(element_s){
    if(parseInt(element_s)){
        document.getElementById("wrong_s").innerHTML = "Тема повідомлення";
        document.getElementById("wrong_s").style.color = "red";
    }
}

let form_submit = document.getElementById('form_');

form_submit.addEventListener('submit', function(event){
    event.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let sub = document.querySelector('input[name="subject"]').value;
    check_subject(sub);
    check_name(name);
});