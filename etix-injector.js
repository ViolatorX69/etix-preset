(function() {
    'use strict';

    function injectQuantityLogic() {
        const muiSelect = document.getElementById('mui-component-select-3362514');
        if (!muiSelect) return;

        // Turn off the engine observer once the target component arrives
        observer.disconnect();

        // Launch the interactive prompt modal box
        const userInput = prompt('How many tickets would you like to select?', '1');
        if (userInput === null) return;

        const quantity = parseInt(userInput, 10);
        if (isNaN(quantity) || quantity < 0) {
            alert('Please enter a valid, positive number.');
            return;
        }

        const parentForm = muiSelect.closest('form') || document.body;
        const nativeInput = parentForm.querySelector('input[type="hidden"][value="3362514"]') ||
                            parentForm.querySelector('input[name*="3362514"]') ||
                            parentForm.querySelector('input[name*="priceLevel"]') ||
                            parentForm.querySelector('input[name*="ticketFormList"]');

        if (nativeInput) {
            // Force values into the background data engine tracking layers
            nativeInput.value = quantity.toString();
            nativeInput.dispatchEvent(new Event('change', { bubbles: true }));
            
            // Mirror the text change visually inside the Material-UI display box
            muiSelect.innerText = quantity.toString();
            console.log('Success: Form value forced to ' + quantity + ' ticket(s) from external file.');
        } else {
            alert('Could not locate the hidden form input to apply the quantity.');
        }
    }

    // Monitor the DOM structure in real-time to execute the script instantly on load
    const observer = new MutationObserver(() => {
        if (document.getElementById('mui-component-select-3362514')) {
            injectQuantityLogic();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
