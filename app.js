// scripts.js
function acceptPrivacy() {
    document.getElementById('privacyAlert').style.display = 'none';
    localStorage.setItem('privacyAccepted', 'true');
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('privacyAccepted') === 'true') {
        document.getElementById('privacyAlert').style.display = 'none';
    }
});
