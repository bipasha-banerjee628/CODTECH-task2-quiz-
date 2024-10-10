document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Quizform');
    const select = document.getElementById('Quiz');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedValue = select.value;
        const urlMapping = {
            'java': 'javaquiz.html',
            'HTML': 'htmlquiz.html',
            'C': 'cquiz.html',
        };
        window.location.href = urlMapping[selectedValue];
    });
});
