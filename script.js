// Wait until the entire HTML document is loaded and ready
document.addEventListener('DOMContentLoaded', () => {

    // --- MODAL ---
    const modal = document.querySelector('#signup-modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButton = document.querySelector('.modal-close');

    // Function to open the modal
    const openModal = (event) => {
        event.preventDefault(); // Prevents the link from jumping to #cta
        modal.classList.add('active');
    };

    // Function to close the modal
    const closeModal = () => {
        modal.classList.remove('active');
    };

    // Add event listeners to all "open modal" buttons
    openModalButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Add event listener to the close button
    closeModalButton.addEventListener('click', closeModal);

    // Add event listener to close modal when clicking the overlay background
    modal.addEventListener('click', (event) => {
        // If the user clicks on the overlay itself (not the container inside it)
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(clickedItem => {
        const question = clickedItem.querySelector('h4');
        question.addEventListener('click', () => {
            // Check if the item we clicked is already open
            const isAlreadyActive = clickedItem.classList.contains('active');

            // First, close all other items
            faqItems.forEach(item => {
                item.classList.remove('active');
            });

            // If the clicked item was NOT already open, then open it
            if (!isAlreadyActive) {
                clickedItem.classList.add('active');
            }
        });
    });

    // --- SCROLL ANIMATIONS ---
    const sectionsToAnimate = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the section is intersecting the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element after it has become visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});