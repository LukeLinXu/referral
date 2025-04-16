function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Get the button that was clicked
        const button = event.currentTarget;
        const originalIcon = button.innerHTML;
        
        // Change the icon to a checkmark
        button.innerHTML = '<i class="fas fa-check"></i>';
        
        // Change the color to green
        button.style.color = '#2ecc71';
        
        // Reset the button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.style.color = '#3498db';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
} 