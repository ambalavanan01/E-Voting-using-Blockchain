function showNotification(message, type = 'info', duration = 4000) {
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';

    notification.innerHTML = `
        <span>${icon}</span>
        <span>${message}</span>
    `;

    container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.5s ease-in';
        setTimeout(() => notification.remove(), 500);
    }, duration);
}

function injectUserInfo() {
    const name = localStorage.getItem("userName");
    const phone = localStorage.getItem("userPhone");
    const aadhaar = localStorage.getItem("currentAadhaarNumber");
    const voterId = localStorage.getItem("currentVoterID");

    if (name && phone) {
        // Remove existing badge if any
        const existing = document.querySelector('.user-profile-badge');
        if (existing) existing.remove();

        const badge = document.createElement('div');
        badge.className = 'user-profile-badge';

        const initial = name.charAt(0).toUpperCase();

        let extraInfo = '';
        if (aadhaar) {
            const formattedAadhaar = aadhaar.replace(/\D/g, '').match(/.{1,4}/g).join(" ");
            extraInfo += `<span class="extra-field"><b>AADHAAR:</b> ${formattedAadhaar}</span>`;
        }
        if (voterId) {
            extraInfo += `<span class="extra-field"><b>VOTER ID:</b> ${voterId.toUpperCase()}</span>`;
        }

        badge.innerHTML = `
            <div class="avatar">${initial}</div>
            <div class="info">
                <span class="name">${name}</span>
                <span class="phone">+91 ${phone}</span>
                ${extraInfo ? `<div class="extra-details">${extraInfo}</div>` : ''}
            </div>
        `;
        document.body.appendChild(badge);
    }
}

// Run on load
document.addEventListener('DOMContentLoaded', injectUserInfo);

// Override alert for better UX
window.alert = function (msg) {
    showNotification(msg, 'info');
};
