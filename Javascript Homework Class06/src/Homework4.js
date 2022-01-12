let greetingButton = document.getElementById("greeting");
greetingButton.addEventListener("click", function()
{
    alert(`Hello ${greetingButton.value}`);
}); 