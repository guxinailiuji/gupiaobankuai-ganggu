// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Get DOM elements
    const sectorCards = document.querySelectorAll('.sector-card');
    const sectorLinks = document.querySelectorAll('.grid a[href^="#"]');
    
    // Add smooth scrolling for sector navigation links
    sectorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Show the target element if it's hidden
                targetElement.classList.remove('hidden');
                
                // Scroll to the target with smooth behavior
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Highlight the selected sector in the overview
                highlightSelectedSector(targetId);
            }
        });
    });
    
    // Function to highlight the selected sector
    function highlightSelectedSector(sectorId) {
        // Remove highlight from all sectors
        sectorLinks.forEach(link => {
            link.classList.remove('ring', 'ring-black', 'ring-opacity-50');
        });
        
        // Add highlight to selected sector
        const selectedLink = document.querySelector(`.grid a[href="#${sectorId}"]`);
        if (selectedLink) {
            selectedLink.classList.add('ring', 'ring-black', 'ring-opacity-50');
        }
    }
    
    // Add staggered delay to the flashing effect
    sectorCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animationDelay = `${index * 0.2}s`;
        }, 100);
    });
    
    // Initially show all sectors
    sectorCards.forEach(card => {
        card.classList.remove('hidden');
    });
});
