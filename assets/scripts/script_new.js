/**
 * Modernized JavaScript for Katharine Jiang's portfolio site
 * Uses ES6+ syntax, no jQuery dependency
 */

class PortfolioApp {
	constructor() {
		this.onBegPage = true;
		this.init();
	}

	init() {
		// Check URL params
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('fromProjectPage')) {
			this.onBegPage = false;
		}

		// Initialize DOM references
		this.elements = {
			begContainer: document.querySelector('.beg-container'),
			startContainer: document.querySelector('.start-container'),
			start: document.getElementById('start'),
			quit: document.getElementById('quit'),
			cont: document.getElementById('continue'),
			save1: document.getElementById('save1'),
			save2: document.getElementById('save2'),
			tutorial: document.getElementById('tutorial'),
			about: document.getElementById('about'),
			back: document.getElementById('back'),
			modals: document.querySelectorAll('.modal'),
			modalClose: document.querySelectorAll('.modal-close'),
			quitModalClose: document.getElementById('quit-modal-close')
		};

		// Validate elements exist
		if (!this.validateElements()) {
			console.error('Required DOM elements not found');
			return;
		}

		// Set initial state
		this.updatePageVisibility();

		// Attach event listeners
		this.attachEventListeners();

		// Close all modals initially
		this.closeAllModals();
	}

	validateElements() {
		return Object.values(this.elements).every(el => {
			if (Array.isArray(el)) return el.length > 0;
			return el !== null;
		});
	}

	attachEventListeners() {
		// Menu navigation
		this.elements.start?.addEventListener('click', () => this.handleStart());
		this.elements.back?.addEventListener('click', () => this.handleBack());
		this.elements.quit?.addEventListener('click', () => this.handleQuit());

		// Modal triggers
		this.elements.cont?.addEventListener('click', () => this.openModal('cont-modal'));
		this.elements.save1?.addEventListener('click', () => this.openModal('blend-modal'));
		this.elements.save2?.addEventListener('click', () => this.openModal('nextdoor-modal'));
		this.elements.tutorial?.addEventListener('click', () => this.openModal('tutorial-modal'));
		this.elements.about?.addEventListener('click', () => this.openModal('about-modal'));

		// Modal close buttons
		this.elements.modalClose.forEach(button => {
			button.addEventListener('click', () => {
				this.closeAllModals();
				// Update URL without page reload
				const newUrl = window.location.pathname + '?fromProjectPage=1';
				window.history.pushState({}, '', newUrl);
			});
		});

		this.elements.quitModalClose?.addEventListener('click', () => this.closeAllModals());

		// Keyboard navigation
		document.addEventListener('keydown', (e) => this.handleKeyboard(e));
	}

	handleKeyboard(event) {
		// Close modals with Escape key
		if (event.key === 'Escape') {
			this.closeAllModals();
		}
	}

	handleStart() {
		this.onBegPage = false;
		this.updatePageVisibility();
		this.closeAllModals();
	}

	handleBack() {
		this.onBegPage = true;
		this.updatePageVisibility();
		this.closeAllModals();
		// Update URL without page reload
		window.history.pushState({}, '', window.location.pathname);
	}

	handleQuit() {
		// Don't change menu state, just show the quit modal
		this.closeAllModals();
		const modal = document.getElementById('quit-modal');
		if (modal) {
			modal.classList.remove('closed');
			modal.setAttribute('aria-hidden', 'false');
			const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
			firstFocusable?.focus();
		}
	}

	openModal(modalId) {
		// Switch to start menu for modals (except quit which is handled separately)
		this.onBegPage = false;
		this.updatePageVisibility();
		this.closeAllModals();

		const modal = document.getElementById(modalId);
		if (modal) {
			modal.classList.remove('closed');
			modal.setAttribute('aria-hidden', 'false');
			
			// Focus management for accessibility
			const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
			firstFocusable?.focus();
		}
	}

	closeAllModals() {
		this.elements.modals.forEach(modal => {
			modal.classList.add('closed');
			modal.setAttribute('aria-hidden', 'true');
		});
	}

	updatePageVisibility() {
		if (this.elements.begContainer && this.elements.startContainer) {
			if (this.onBegPage) {
				this.elements.begContainer.style.visibility = 'visible';
				this.elements.startContainer.style.visibility = 'hidden';
			} else {
				this.elements.begContainer.style.visibility = 'hidden';
				this.elements.startContainer.style.visibility = 'visible';
			}
		}
	}
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		new PortfolioApp();
	});
} else {
	new PortfolioApp();
}
