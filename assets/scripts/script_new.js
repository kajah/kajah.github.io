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
			// startContainer: document.querySelector('.start-container'), // Removed
			start: document.getElementById('start'),
			quit: document.getElementById('quit'),
			notebookContainer: document.getElementById('notebook-container'),
			notebookPages: document.querySelectorAll('.page'),
			prevPageBtn: document.getElementById('prev-page'),
			nextPageBtn: document.getElementById('next-page'),
			tutorial: document.getElementById('tutorial'),
			about: document.getElementById('about'),
			back: document.getElementById('back'),
			modals: document.querySelectorAll('.modal'),
			modalClose: document.querySelectorAll('.modal-close'),
			quitModalClose: document.getElementById('quit-modal-close')
		};

		this.currentPageIndex = 0;

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

		// Initialize notebook state
		this.updateNotebookNavigation();
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

		// Notebook Navigation
		this.elements.prevPageBtn?.addEventListener('click', () => this.flipPage(-1));
		this.elements.nextPageBtn?.addEventListener('click', () => this.flipPage(1));

		// Modal triggers
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

		// Notebook Navigation
		if (!this.onBegPage && this.elements.notebookContainer && this.elements.notebookContainer.style.display !== 'none') {
			// Ensure we are not in another modal
			const modalsOpen = Array.from(this.elements.modals).some(m => !m.classList.contains('closed') && m.getAttribute('aria-hidden') === 'false');
			if (!modalsOpen) {
				if (event.key === 'ArrowLeft') {
					this.flipPage(-1);
				} else if (event.key === 'ArrowRight') {
					this.flipPage(1);
				}
			}
		}
	}

	handleStart() {
		this.onBegPage = false;
		this.updatePageVisibility();
		this.closeAllModals();

		// Reset notebook to first page
		this.currentPageIndex = 0;
		this.updateNotebookPages();
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
		if (this.elements.begContainer) {
			if (this.onBegPage) {
				this.elements.begContainer.style.visibility = 'visible';
				if (this.elements.notebookContainer) this.elements.notebookContainer.style.display = 'none';
			} else {
				this.elements.begContainer.style.visibility = 'hidden';
				// only show notebook if we are NOT in a modal? 
				// The original logic hid startContainer when begContainer was visible.
				// Now we show notebookContainer when onBegPage is false initially.
				// However, if we open a modal, we might want to keep notebook visible behind it?
				// Original code: startContainer.style.visibility = 'visible'.
				if (this.elements.notebookContainer) this.elements.notebookContainer.style.display = 'flex';
			}
		}
	}

	flipPage(direction) {
		const newIndex = this.currentPageIndex + direction;
		if (newIndex >= 0 && newIndex < this.elements.notebookPages.length) {
			this.currentPageIndex = newIndex;
			this.updateNotebookPages();
		}
	}

	updateNotebookPages() {
		this.elements.notebookPages.forEach((page, index) => {
			if (index < this.currentPageIndex) {
				page.classList.add('flipped');
				page.style.zIndex = index + 1; // Lower z-index for flipped pages? 
				// Actually, flipped pages should be on top of the stack on the left.
				// Let's rely on CSS or manage z-index carefully.
				// If page 0 flips, it goes to left. Page 1 is now revealed.
				// Page 0 should be on top of the left stack? 
				// Logic:
				// Pages on right (not flipped): z-index decreases (0 is top, 1 is below).
				// Pages on left (flipped): z-index increases (0 is bottom, last flipped is top).
			} else {
				page.classList.remove('flipped');
			}

			// Dynamic Z-Index Correction
			if (page.classList.contains('flipped')) {
				page.style.zIndex = index + 1;
			} else {
				page.style.zIndex = this.elements.notebookPages.length - index;
			}
		});
		this.updateNotebookNavigation();
	}

	updateNotebookNavigation() {
		if (this.elements.prevPageBtn) {
			this.elements.prevPageBtn.disabled = this.currentPageIndex === 0;
			this.elements.prevPageBtn.style.opacity = this.currentPageIndex === 0 ? '0.3' : '1';
		}
		if (this.elements.nextPageBtn) {
			this.elements.nextPageBtn.disabled = this.currentPageIndex === this.elements.notebookPages.length - 1;
			this.elements.nextPageBtn.style.opacity = this.currentPageIndex === this.elements.notebookPages.length - 1 ? '0.3' : '1';
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
