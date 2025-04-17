function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    
    try {
        // Select and copy the text
        textarea.select();
        document.execCommand('copy');
        
        // Get the button that was clicked
        const button = event.currentTarget;
        const originalIcon = button.innerHTML;
        
        // Change the icon to a checkmark
        button.innerHTML = '<i class="fas fa-check"></i>';
        
        // Change the color to green
        button.style.color = '#2ecc71';
        
        // Show feedback
        const feedback = document.createElement('div');
        feedback.textContent = 'Code Copied!';
        feedback.style.position = 'fixed';
        feedback.style.bottom = '20px';
        feedback.style.right = '20px';
        feedback.style.backgroundColor = '#2ecc71';
        feedback.style.color = 'white';
        feedback.style.padding = '10px 20px';
        feedback.style.borderRadius = '4px';
        feedback.style.zIndex = '1000';
        document.body.appendChild(feedback);
        
        // Remove feedback after 2 seconds
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 2000);
        
        // Reset the button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.style.color = '#3498db';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy text:', err);
    } finally {
        // Clean up
        document.body.removeChild(textarea);
    }
} 