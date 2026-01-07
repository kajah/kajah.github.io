/**
 * Modernized JavaScript for Katharine Jiang's portfolio site
 * Uses ES6+ syntax, no jQuery dependency
 */

class PortfolioApp {
	constructor() {
		this.init();
	}

	init() {
		// Initialize DOM references
		this.elements = {
			notebookContainer: document.getElementById('notebook-container'),
			notebookPages: document.querySelectorAll('.page'),
			prevPageBtn: document.getElementById('prev-page'),
			nextPageBtn: document.getElementById('next-page'),
			tutorial: document.getElementById('tutorial'),
			about: document.getElementById('about'),
			modals: document.querySelectorAll('.modal'),
			modalClose: document.querySelectorAll('.modal-close')
		};

		this.currentPageIndex = 0;
		this.currentBackgroundPage = -1; // Track which page's background is showing

		// Background Config
		this.backgroundConfig = {
			0: ['flower-rose', 'flower-daisy', 'flower-sunflower'], // Cover
			1: ['sf-bridge', 'sf-ladies', 'sf-park'], // Chapter 1
			// Add more for other pages if needed
		};

		// Validate elements exist
		if (!this.validateElements()) {
			console.error('Required DOM elements not found');
			return;
		}

		// Attach event listeners
		this.attachEventListeners();

		// Close all modals initially
		this.closeAllModals();

		// Initialize notebook state
		this.updateNotebookNavigation();

		// Initial Background Spawn (Cover - Page 0)
		this.updateBackgroundElements(0);
	}

	validateElements() {
		return Object.values(this.elements).every(el => {
			if (Array.isArray(el)) return el.length > 0;
			return el !== null;
		});
	}

	attachEventListeners() {
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
			});
		});

		// Keyboard navigation
		document.addEventListener('keydown', (e) => this.handleKeyboard(e));
	}

	handleKeyboard(event) {
		// Close modals with Escape key
		if (event.key === 'Escape') {
			this.closeAllModals();
		}

		// Notebook Navigation
		// Ensure we are not in a modal
		const modalsOpen = Array.from(this.elements.modals).some(m => !m.classList.contains('closed') && m.getAttribute('aria-hidden') === 'false');
		if (!modalsOpen) {
			if (event.key === 'ArrowLeft') {
				this.flipPage(-1);
			} else if (event.key === 'ArrowRight') {
				this.flipPage(1);
			}
		}
	}

	updateBackgroundElements(pageIndex) {
		// Only update if the background needs to change
		if (this.currentBackgroundPage === pageIndex) return;

		this.currentBackgroundPage = pageIndex;

		// Clear existing elements
		document.querySelectorAll('.flower-popup').forEach(el => el.remove());

		const types = this.backgroundConfig[pageIndex];
		if (types) {
			this.spawnBackgroundElements(types);
		}
	}

	spawnBackgroundElements(types) {
		const count = 20;

		for (let i = 0; i < count; i++) {
			setTimeout(() => {
				const el = document.createElement('div');
				el.classList.add('flower-popup');

				// Random type
				const type = types[Math.floor(Math.random() * types.length)];
				el.classList.add(type);

				// Random position
				const x = Math.random() * (window.innerWidth - 150);
				const y = Math.random() * (window.innerHeight - 150);

				el.style.left = `${x}px`;
				el.style.top = `${y}px`;

				// Random rotation
				const rotation = Math.floor(Math.random() * 360);
				el.style.transform = `scale(0) rotate(${rotation}deg)`;

				document.body.appendChild(el);

				// Trigger animation
				requestAnimationFrame(() => {
					el.classList.add('flower-pop');
				});

			}, i * 50);
		}
	}

	openModal(modalId) {
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
				page.style.zIndex = index + 1;
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

		// Update background elements based on current page
		this.updateBackgroundElements(this.currentPageIndex);

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
