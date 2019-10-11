const handleCheck = e => {
    console.log(e);
}

(function(){
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', handleCheck);
    });
}());