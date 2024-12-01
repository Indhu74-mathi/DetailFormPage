// document.querySelector('form').addEventListener('submit', (e) => {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;

//     if (!name || !email || !phone) {
//         alert('All fields are required!');
//         e.preventDefault();
//     }
// });


const scriptURL = 'https://script.google.com/macros/s/AKfycbzOE0qPmZGBMOjCckcYQfLVRaQkoaW_kps-ps6yONMcUEQfYXEVr2G9Bb6OTKAbv7VH/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            if (response.ok) {
                // Redirect to thankpage.html after successful submission
                window.location.href = 'thankpage.html';
            } else {
                alert("Error! Form submission failed.");
            }
        })
        .catch((error) => {
            console.error('Error!', error.message);
            alert("Error! Unable to submit the form.");
        });
});


// form.addEventListener('submit', e => {
  
//   e.preventDefault()
  
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! Form is submitted" ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })