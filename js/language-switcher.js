// Language Switcher Implementation for Vasic Digital Website

class LanguageSwitcher {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    // Detect user's preferred language
    detectLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('vasic-digital-lang');
        if (saved && translations[saved]) {
            return saved;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];

        // Map some common variants
        const langMap = {
            'en': 'en',
            'ru': 'ru',
            'be': 'be',
            'zh': 'zh',
            'hi': 'hi',
            'fa': 'fa',
            'ar': 'ar',
            'ko': 'ko',
            'ja': 'ja',
            'sr': 'sr',
            'fr': 'fr',
            'de': 'de',
            'es': 'es',
            'pt': 'pt',
            'no': 'no',
            'nb': 'no', // Norwegian Bokmål
            'nn': 'no', // Norwegian Nynorsk
            'da': 'da',
            'sv': 'sv',
            'is': 'is',
            'bg': 'bg',
            'ro': 'ro',
            'hu': 'hu',
            'it': 'it',
            'el': 'el',
            'he': 'he',
            'iw': 'he', // Hebrew alternative code
            'ka': 'ka',
            'kk': 'kk',
            'uz': 'uz',
            'tg': 'tg',
            'tr': 'tr'
        };

        return langMap[langCode] || 'en';
    }

    // Initialize the language switcher
    init() {
        this.createLanguageDropdown();
        this.applyTranslations();
        this.setupEventListeners();

        // Apply RTL for Arabic, Persian, Hebrew
        if (['ar', 'fa', 'he'].includes(this.currentLang)) {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }

    // Create the language dropdown in the navbar
    createLanguageDropdown() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle || !themeToggle.parentElement) return;

        const langItem = document.createElement('li');
        langItem.className = 'nav-item language-switcher-container';

        const langButton = document.createElement('button');
        langButton.id = 'language-toggle';
        langButton.className = 'language-toggle';
        langButton.innerHTML = `<span class="current-flag">${translations[this.currentLang].flag}</span>`;
        langButton.setAttribute('aria-label', 'Change language');

        const dropdown = document.createElement('div');
        dropdown.className = 'language-dropdown';
        dropdown.id = 'language-dropdown';

        // Get sorted languages
        const sortedLangs = this.getSortedLanguages();

        sortedLangs.forEach(langCode => {
            const lang = translations[langCode];
            const option = document.createElement('button');
            option.className = 'language-option';
            option.dataset.lang = langCode;
            if (langCode === this.currentLang) {
                option.classList.add('active');
            }
            option.innerHTML = `
                <span class="lang-flag">${lang.flag}</span>
                <span class="lang-name">${lang.name}</span>
            `;
            dropdown.appendChild(option);
        });

        langItem.appendChild(langButton);
        langItem.appendChild(dropdown);

        // Insert before theme toggle
        themeToggle.parentElement.parentElement.insertBefore(langItem, themeToggle.parentElement);
    }

    // Get languages sorted alphabetically by current language
    getSortedLanguages() {
        const langs = Object.keys(translations);
        const currentLang = this.currentLang;

        return langs.sort((a, b) => {
            const nameA = translations[a].name;
            const nameB = translations[b].name;
            return nameA.localeCompare(nameB, currentLang);
        });
    }

    // Apply translations to the page
    applyTranslations() {
        const t = translations[this.currentLang];
        if (!t) return;

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks.length >= 5) {
            navLinks[0].textContent = t.nav.home;
            navLinks[1].textContent = t.nav.about;
            navLinks[2].textContent = t.nav.services;
            navLinks[3].textContent = t.nav.portfolio;
            navLinks[4].textContent = t.nav.contact;
        }

        // Hero Section
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroBtnPrimary = document.querySelector('.hero-buttons .btn-primary');
        const heroBtnSecondary = document.querySelector('.hero-buttons .btn-secondary');

        if (heroTitle) heroTitle.textContent = t.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
        if (heroBtnPrimary) heroBtnPrimary.textContent = t.hero.btnPrimary;
        if (heroBtnSecondary) heroBtnSecondary.textContent = t.hero.btnSecondary;

        // About Section
        const aboutTitle = document.querySelector('.about .section-title');
        const aboutTexts = document.querySelectorAll('.about-text p');
        const stats = document.querySelectorAll('.stat');

        if (aboutTitle) aboutTitle.textContent = t.about.title;
        if (aboutTexts.length >= 3) {
            aboutTexts[0].textContent = t.about.text1;
            aboutTexts[1].textContent = t.about.text2;
            aboutTexts[2].textContent = t.about.text3;
        }
        if (stats.length >= 3) {
            stats[0].querySelector('.stat-number').textContent = t.about.stat1Number;
            stats[0].querySelector('.stat-label').textContent = t.about.stat1Label;
            stats[1].querySelector('.stat-number').textContent = t.about.stat2Number;
            stats[1].querySelector('.stat-label').textContent = t.about.stat2Label;
            stats[2].querySelector('.stat-number').textContent = t.about.stat3Number;
            stats[2].querySelector('.stat-label').textContent = t.about.stat3Label;
        }

        // Services Section
        const servicesTitle = document.querySelector('.services .section-title');
        const serviceCards = document.querySelectorAll('.service-card');

        if (servicesTitle) servicesTitle.textContent = t.services.title;
        if (serviceCards.length >= 6) {
            serviceCards[0].querySelector('h3').textContent = t.services.service1Title;
            serviceCards[0].querySelector('p').textContent = t.services.service1Text;
            serviceCards[1].querySelector('h3').textContent = t.services.service2Title;
            serviceCards[1].querySelector('p').textContent = t.services.service2Text;
            serviceCards[2].querySelector('h3').textContent = t.services.service3Title;
            serviceCards[2].querySelector('p').textContent = t.services.service3Text;
            serviceCards[3].querySelector('h3').textContent = t.services.service4Title;
            serviceCards[3].querySelector('p').textContent = t.services.service4Text;
            serviceCards[4].querySelector('h3').textContent = t.services.service5Title;
            serviceCards[4].querySelector('p').textContent = t.services.service5Text;
            serviceCards[5].querySelector('h3').textContent = t.services.service6Title;
            serviceCards[5].querySelector('p').textContent = t.services.service6Text;
        }

        // Portfolio Section
        const portfolioTitle = document.querySelector('.portfolio .section-title');
        const portfolioIntro = document.querySelector('.portfolio-intro');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        if (portfolioTitle) portfolioTitle.textContent = t.portfolio.title;
        if (portfolioIntro) portfolioIntro.textContent = t.portfolio.intro;

        const projectKeys = ['catalogizer', 'grabtube', 'shareconnect', 'panoptic', 'androidToolkit', 'asinka'];
        portfolioItems.forEach((item, index) => {
            if (t.portfolio[projectKeys[index]]) {
                const project = t.portfolio[projectKeys[index]];
                const title = item.querySelector('h3');
                const tech = item.querySelector('.project-tech');
                const desc = item.querySelector('.portfolio-content > p');
                const link = item.querySelector('.project-link');

                // Don't translate title (project names stay the same)
                if (tech && tech.childNodes.length > 1) {
                    // Keep the icon, update text
                    tech.childNodes[tech.childNodes.length - 1].textContent = ' ' + project.tech;
                }
                if (desc) desc.textContent = project.description;
                if (link) {
                    link.innerHTML = `<i class="fab fa-github"></i> ${t.portfolio.viewOnGithub}`;
                }
            }
        });

        // Contact Section
        const contactTitle = document.querySelector('.contact .section-title');
        const contactItems = document.querySelectorAll('.contact-item');
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        const formButton = document.querySelector('.contact-form button');

        if (contactTitle) contactTitle.textContent = t.contact.title;
        if (contactItems.length >= 3) {
            contactItems[0].querySelector('h3').textContent = t.contact.email;
            contactItems[1].querySelector('h3').textContent = t.contact.location;
            contactItems[1].querySelector('p').textContent = t.contact.locationText;
            contactItems[2].querySelector('h3').textContent = t.contact.phone;
        }
        if (formInputs.length >= 3) {
            formInputs[0].placeholder = t.contact.formName;
            formInputs[1].placeholder = t.contact.formEmail;
            formInputs[2].placeholder = t.contact.formMessage;
        }
        if (formButton) formButton.textContent = t.contact.formButton;

        // Footer
        const footerTagline = document.querySelector('.footer-logo p');
        const footerSections = document.querySelectorAll('.footer-section');
        const copyright = document.querySelector('.footer-bottom p');

        if (footerTagline) footerTagline.textContent = t.footer.tagline;
        if (footerSections.length >= 3) {
            footerSections[0].querySelector('h3').textContent = t.footer.quickLinks;
            footerSections[1].querySelector('h3').textContent = t.footer.featuredProjects;
            footerSections[2].querySelector('h3').textContent = t.footer.contactSection;

            const contactLinks = footerSections[2].querySelectorAll('a');
            if (contactLinks.length >= 4) {
                contactLinks[0].textContent = t.footer.emailUs;
                contactLinks[1].textContent = t.footer.scheduleCall;
                contactLinks[2].textContent = t.footer.support;
                contactLinks[3].textContent = t.footer.careers;
            }
        }
        if (copyright) copyright.textContent = t.footer.copyright;
    }

    // Setup event listeners
    setupEventListeners() {
        const langToggle = document.getElementById('language-toggle');
        const langDropdown = document.getElementById('language-dropdown');

        if (!langToggle || !langDropdown) return;

        // Toggle dropdown
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher-container')) {
                langDropdown.classList.remove('show');
            }
        });

        // Language selection
        const langOptions = langDropdown.querySelectorAll('.language-option');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const newLang = option.dataset.lang;
                this.switchLanguage(newLang);
                langDropdown.classList.remove('show');
            });
        });
    }

    // Switch to a new language
    switchLanguage(newLang) {
        if (newLang === this.currentLang || !translations[newLang]) return;

        this.currentLang = newLang;
        localStorage.setItem('vasic-digital-lang', newLang);

        // Update flag in toggle button
        const currentFlag = document.querySelector('.current-flag');
        if (currentFlag) {
            currentFlag.textContent = translations[newLang].flag;
        }

        // Update active state in dropdown
        document.querySelectorAll('.language-option').forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.lang === newLang) {
                opt.classList.add('active');
            }
        });

        // Apply RTL for Arabic, Persian, Hebrew
        if (['ar', 'fa', 'he'].includes(newLang)) {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }

        // Re-apply translations
        this.applyTranslations();

        // Recreate dropdown with new sorting
        const oldDropdown = document.getElementById('language-dropdown');
        if (oldDropdown) {
            const parent = oldDropdown.parentElement;
            oldDropdown.remove();

            const dropdown = document.createElement('div');
            dropdown.className = 'language-dropdown';
            dropdown.id = 'language-dropdown';

            const sortedLangs = this.getSortedLanguages();
            sortedLangs.forEach(langCode => {
                const lang = translations[langCode];
                const option = document.createElement('button');
                option.className = 'language-option';
                option.dataset.lang = langCode;
                if (langCode === this.currentLang) {
                    option.classList.add('active');
                }
                option.innerHTML = `
                    <span class="lang-flag">${lang.flag}</span>
                    <span class="lang-name">${lang.name}</span>
                `;
                dropdown.appendChild(option);
            });

            parent.appendChild(dropdown);
            this.setupEventListeners();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});
