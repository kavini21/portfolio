// Portfolio Filter Script
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#nav-tab button');
    const portfolioItems = document.querySelectorAll('[data-category]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-bs-target');
            let filter = '';
            
            // Determine filter based on tab
            if (targetId === '#nav-all') {
                filter = 'all';
            } else if (targetId === '#nav-fullstack') {
                filter = 'fullstack';
            } else if (targetId === '#nav-frontend') {
                filter = 'frontend';
            } else if (targetId === '#nav-mobile') {
                filter = 'uiux';
            }
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    // Add fade-in animation
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
