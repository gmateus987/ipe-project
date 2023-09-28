const emailButton = document.getElementById('edit-email');
const emailModal = document.getElementById('email-modal');
const closeButton = document.getElementById('close-modal');

emailButton.onclick = function () {
    emailModal.showModal()
};

closeButton.onclick = function () {
    emailModal.close()
};
