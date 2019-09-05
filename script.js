/*jshint esversion: 6 */
function showFunction() {
    var form = document.getElementById("form");
    var cv = document.getElementById("main_div");
    form.style.display = 'block';
    cv.style.display = 'none';
}
//validation function 
function formValidate() {
    var name = document.contactForm.Name;
    var email = document.contactForm.Mail;
    var title = document.contactForm.Title;
    var message = document.contactForm.Message;
    var checks = [name, email, title, message];
    var valid = false;
    checks.forEach(function (element) {
        if (element.value == '') {
            alert(`${element.name} field left empty`);
        }
        if ((element == checks[0]) & (element.value.length < 4)) {
            alert('Name should be at least 4 characters');
            element.focus();
        } else if ((element == checks[3]) & (element.value.length < 20)) {
            alert('message should be at least 20 characters');
            element.focus();
        }
    });

    if ((checks[0] > 3) & (checks[3] > 19)) {
        valid = true;
    }
    if (valid) {
        form.style.display = 'none';
        cv.style.display = 'block';
    }
    //determines if the CV page is reloaded or not depending on the value of 'valid'
    return !valid;
}