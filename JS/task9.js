var test = document.getElementById("task9");

var name = prompt("Как тебя тебя зовут, пользователь");

confirm(greet(name));

function greet(name)
{
    return "Доброго здоровечка " + name;
}
