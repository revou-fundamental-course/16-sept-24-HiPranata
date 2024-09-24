function displayTime() {
    const now = new Date();
    const timeString = now.toUTCString();
    document.getElementById('time').textContent = timeString;
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    document.getElementById('outputName').textContent = name;
    document.getElementById('outputDob').textContent = dob;
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputMessage').textContent = message;
});

window.onload = function() {
    displayTime();
    setInterval(displayTime, 1000);
};