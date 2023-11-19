
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        let userName = document.getElementById('name').value;
        let containerUserName = document.getElementById('user_name');
        containerUserName.textContent = userName;

        document.getElementById('user_log').style.display = 'block';
    });
});

function handleHideMensage() {
    let containerUserLog = document.getElementById('user_log');
    containerUserLog.classList.add('showMensage')
}
