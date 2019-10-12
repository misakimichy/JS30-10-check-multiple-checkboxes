(function(){
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    let lastChecked;
    const handleCheck = (e) => {
        // check if they had the shift key down
        let inBetween = false;
        if(e.shiftKey && e.currentTarget.checked) {
            checkboxes.forEach(checkbox => {
                if (checkbox === e.currentTarget || checkbox === lastChecked) {
                    inBetween = !inBetween;
                }
                if (inBetween) {
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = e.currentTarget;
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', handleCheck);
    });
}());