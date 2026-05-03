document.addEventListener('DOMContentLoaded', () => {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const container = document.querySelector('.container');

    // Add event listeners for desktop hover
    left.addEventListener('mouseenter', () => {
        container.classList.add('hover-left');
    });

    left.addEventListener('mouseleave', () => {
        container.classList.remove('hover-left');
    });

    right.addEventListener('mouseenter', () => {
        container.classList.add('hover-right');
    });

    right.addEventListener('mouseleave', () => {
        container.classList.remove('hover-right');
    });

    // Handle touch events for mobile
    left.addEventListener('touchstart', (e) => {
        container.classList.remove('hover-right');
        container.classList.add('hover-left');
    }, { passive: true });

    right.addEventListener('touchstart', (e) => {
        container.classList.remove('hover-left');
        container.classList.add('hover-right');
    }, { passive: true });

    // --- Auth Modal Logic ---
    const authModal = document.getElementById('authModal');
    const openAuthModalBtn = document.getElementById('openAuthModal');
    const closeBtn = document.querySelector('.close-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const successMessage = document.getElementById('successMessage');
    const continueBtn = document.getElementById('continueBtn');
    const authTabsContainer = document.querySelector('.auth-tabs');

    // Open Modal
    openAuthModalBtn.addEventListener('click', () => {
        authModal.classList.add('show');
        resetModalState();
    });

    // Close Modal
    const closeModal = () => {
        authModal.classList.remove('show');
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            closeModal();
        }
    });

    // Tab Switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Update Tab Active State
            tabBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            // Update Form Active State
            authForms.forEach(form => form.classList.remove('active'));
            document.getElementById(targetTab + 'Form').classList.add('active');
        });
    });

    // Register Form Submit Logic - Agent Added!
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Hide forms and tabs
        authForms.forEach(form => form.classList.remove('active'));
        authTabsContainer.style.display = 'none';

        // Show success message
        successMessage.classList.add('active');

        // Update user state button
        const usernameInput = registerForm.querySelector('input[type="text"]').value;
        openAuthModalBtn.innerHTML = `<i class="fa-solid fa-user-check"></i> ${usernameInput}`;
        openAuthModalBtn.style.borderColor = '#2ed573';
        openAuthModalBtn.style.color = '#2ed573';
    });

    // Login Form Submit Logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = loginForm.querySelector('input[type="text"]').value;
        openAuthModalBtn.innerHTML = `<i class="fa-solid fa-user-check"></i> ${usernameInput}`;
        openAuthModalBtn.style.borderColor = '#2ed573';
        openAuthModalBtn.style.color = '#2ed573';
        closeModal();
    });

    // Continue Button
    continueBtn.addEventListener('click', closeModal);

    // Helper to reset modal state
    function resetModalState() {
        authTabsContainer.style.display = 'flex';
        successMessage.classList.remove('active');

        // Default to login tab
        tabBtns.forEach(t => t.classList.remove('active'));
        document.querySelector('.tab-btn[data-tab="login"]').classList.add('active');

        authForms.forEach(form => form.classList.remove('active'));
        document.getElementById('loginForm').classList.add('active');

        // Clear inputs
        loginForm.reset();
        registerForm.reset();
    }
});
