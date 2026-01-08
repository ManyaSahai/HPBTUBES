/* ====================== HPB TUBES NAVBAR SCRIPTS ====================== */

// Language Dropdown Toggle
function toggleLanguageDropdown() {
    document.getElementById("languageDropdown").classList.toggle("show");
}

// Close language dropdown when clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.closest('.language-selector-wrapper')) {
        var dropdown = document.getElementById("languageDropdown");
        if (dropdown) {
            dropdown.classList.remove("show");
        }
    }
});

// Change Language Function
function changeLanguage(lang) {
    console.log("Language changed to:", lang);
    
    // Language mapping
    var langNames = {
        'en': 'Global English',
        'pt': 'Português',
        'fr': 'Français',
        'es': 'Español'
    };
    
    // Update button text (optional)
    var btn = document.querySelector('.language-globe-btn span');
    if (btn) {
        btn.textContent = langNames[lang] ? langNames[lang].split(' ')[0] : 'Global';
    }
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Close dropdown
    document.getElementById("languageDropdown").classList.remove("show");
    
    // Here you would add i18n translation logic
    // For now, just log the change
    console.log('Language preference saved:', lang);
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        console.log('Loaded saved language preference:', savedLang);
        // Apply saved language if needed
    }
});
