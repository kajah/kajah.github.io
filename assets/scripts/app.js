// Main App Component
class App {
    constructor() {
        this.state = {
            activeSection: 'home',
            timelinePosition: 0, // 0 = first grid, 1 = second grid, 2 = third grid
            openModal: null // null, 'chapter1', 'chapter2', or 'chapter3'
        };
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            ${this.renderMain()}
            ${this.renderModals()}
        `;
    }

    renderMain() {
        return `
            <main class="main">
                ${this.renderSection()}
            </main>
        `;
    }

    renderSection() {
        // Keep home as the main page; contact is shown as a modal instead
        switch(this.state.activeSection) {
            case 'home':
            default:
                return this.renderHome();
        }
    }

    renderHome() {
        const activeGridIndex = this.state.timelinePosition;
        return `
            <section class="section home-section">
                <div class="home-container">
                    <div class="image-grid">
                        <div class="grid-item ${activeGridIndex === 0 ? 'active' : ''}" data-grid-index="0">
                            <img src="./assets/images/2025/sf.jpg" alt="SF">
                            <div class="grid-overlay">
                                <span class="overlay-text">SF</span>
                            </div>
                        </div>
                        <div class="grid-item ${activeGridIndex === 1 ? 'active' : ''}" data-grid-index="1">
                            <img src="./assets/images/2025/nyc.jpg" alt="SF">
                            <div class="grid-overlay">
                                <span class="overlay-text">NYC</span>
                            </div>
                        </div>
                        <div class="grid-item ${activeGridIndex === 2 ? 'active' : ''}" data-grid-index="2">
                            <img src="./assets/images/2025/dc.jpg" alt="SF">
                            <div class="grid-overlay">
                                <span class="overlay-text">DC</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-container">
                        <div class="mini-person" style="left: ${this.getTimelinePosition()}%">
                            <img src="./assets/images/avatar.png" alt="Avatar" class="person-icon" />
                        </div>
                        <div class="timeline-track">
                            <div class="timeline-line"></div>
                            <div class="timeline-dot" style="left: 16.67%">
                                <div class="press-enter-text ${activeGridIndex === 0 ? 'visible' : ''}">chapter 1<br>(press enter)</div>
                            </div>
                            <div class="timeline-dot" style="left: 50%">
                                <div class="press-enter-text ${activeGridIndex === 1 ? 'visible' : ''}">chapter 2<br>(press enter)</div>
                            </div>
                            <div class="timeline-dot" style="left: 83.33%">
                                <div class="press-enter-text ${activeGridIndex === 2 ? 'visible' : ''}">chapter 3<br>(press enter)</div>
                            </div>
                        </div>
                    </div>
                    <div class="home-content">
                        <!-- Second container content will go here -->
                    </div>
                </div>
            </section>
        `;
    }

    getTimelinePosition() {
        // Calculate position percentage at the center of each grid item
        // For 3 equal columns: centers are at 16.67%, 50%, 83.33%
        const positions = [16.67, 50, 83.33];
        return positions[this.state.timelinePosition] || positions[0];
    }

    moveTimeline(direction) {
        if (direction === 'left' && this.state.timelinePosition > 0) {
            this.setState({ timelinePosition: this.state.timelinePosition - 1 });
        } else if (direction === 'right' && this.state.timelinePosition < 2) {
            this.setState({ timelinePosition: this.state.timelinePosition + 1 });
        }
    }


    renderModals() {
        const { openModal } = this.state;
        if (!openModal) return '';
        
        return `
            <div class="modal-overlay visible">
                <div class="modal-content-wrapper">
                    ${openModal === 'chapter1' ? this.renderChapter1Modal() : ''}
                    ${openModal === 'chapter2' ? this.renderChapter2Modal() : ''}
                    ${openModal === 'chapter3' ? this.renderChapter3Modal() : ''}
                    ${openModal === 'contact' ? this.renderContactModal() : ''}
                    <button class="modal-close">×</button>
                </div>
            </div>
        `;
    }

    renderChapter1Modal() {
        return `
            <div class="chapter-modal">
                <h2 class="chapter-title">Chapter 1: San Francisco</h2>
                <div class="chapter-content">
                    <p>Content for Chapter 1 goes here...</p>
                </div>
            </div>
        `;
    }

    renderChapter2Modal() {
        return `
            <div class="chapter-modal">
                <h2 class="chapter-title">Chapter 2: New York City</h2>
                <div class="chapter-content">
                    <p>Content for Chapter 2 goes here...</p>
                </div>
            </div>
        `;
    }

    renderChapter3Modal() {
        return `
            <div class="chapter-modal">
                <h2 class="chapter-title">Chapter 3: Washington DC</h2>
                <div class="chapter-content">
                    <p>Content for Chapter 3 goes here...</p>
                </div>
            </div>
        `;
    }

    renderContactModal() {
        return `
            <div class="chapter-modal">
                <h2 class="chapter-title">Get in Touch</h2>
                <div class="chapter-content">
                    <p class="contact-intro">
                        I'm always open to chatting about startups, investing, music, games, or anything else!
                    </p>
                    <div class="contact-links">
                        <a href="https://twitter.com/katharine_jiang" target="_blank" class="contact-link">
                            <span class="contact-icon">🐦</span>
                            <span>Twitter</span>
                        </a>
                        <a href="https://www.linkedin.com/in/katharine-jiang/" target="_blank" class="contact-link">
                            <span class="contact-icon">💼</span>
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:katharine@wizform.com" class="contact-link">
                            <span class="contact-icon">✉️</span>
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        // Modal close button and overlay
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalCloseBtn = document.querySelector('.modal-close');
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.closeModal();
                }
            });
        }
        
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Keyboard controls for timeline - always attach, but check section in handler
        this.attachTimelineListeners();
        
        // Grid hover listeners (only when on home section)
        if (this.state.activeSection === 'home') {
            this.attachGridHoverListeners();
        }
    }

    attachGridHoverListeners() {
        // Remove existing listeners if any
        if (this.gridHoverHandlers) {
            this.gridHoverHandlers.forEach(handler => {
                handler.element.removeEventListener('mouseenter', handler.enterHandler);
                handler.element.removeEventListener('click', handler.clickHandler);
            });
        }

        this.gridHoverHandlers = [];
        
        // Add hover and click listeners to each grid item
        document.querySelectorAll('.grid-item').forEach((item, index) => {
            const enterHandler = () => {
                this.setState({ timelinePosition: index });
            };
            
            const clickHandler = () => {
                this.setState({ timelinePosition: index });
                // Small delay to ensure position is set before opening modal
                setTimeout(() => {
                    this.openChapterModal();
                }, 0);
            };
            
            item.addEventListener('mouseenter', enterHandler);
            item.addEventListener('click', clickHandler);
            
            this.gridHoverHandlers.push({
                element: item,
                enterHandler: enterHandler,
                clickHandler: clickHandler
            });
        });
    }

    attachTimelineListeners() {
        // Remove existing listener if any
        if (this.timelineKeyHandler) {
            document.removeEventListener('keydown', this.timelineKeyHandler);
        }

        // Add keyboard event listener
        this.timelineKeyHandler = (e) => {
            // Allow Escape to work even when modal is open
            if (e.key === 'Escape') {
                e.preventDefault();
                this.closeModal();
                return;
            }
            
            // Other keys only work on home section
            if (this.state.activeSection !== 'home') return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.moveTimeline('left');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.moveTimeline('right');
            } else if (e.key === 'Enter') {
                e.preventDefault();
                this.openChapterModal();
            }
        };

        document.addEventListener('keydown', this.timelineKeyHandler);
    }

    openChapterModal() {
        const chapterMap = {
            0: 'chapter1',
            1: 'chapter2',
            2: 'chapter3'
        };
        const chapter = chapterMap[this.state.timelinePosition];
        if (chapter) {
            this.setState({ openModal: chapter });
        }
    }

    closeModal() {
        this.setState({ openModal: null });
    }

    setState(newState) {
        const wasOnHome = this.state.activeSection === 'home';
        const timelineChanged = newState.timelinePosition !== undefined && 
                                newState.timelinePosition !== this.state.timelinePosition;
        const sectionChanged = newState.activeSection && 
                               newState.activeSection !== this.state.activeSection;
        const modalChanged = newState.openModal !== undefined;
        
        this.state = { ...this.state, ...newState };
        
        // If only timeline position changed and we're on home, update just the position
        if (wasOnHome && this.state.activeSection === 'home' && timelineChanged && 
            !sectionChanged && !modalChanged && Object.keys(newState).length === 1) {
            this.updateTimelinePosition();
        } else {
            // Full re-render for other state changes (including modal changes)
            this.render();
            this.attachEventListeners();
        }
        
        // Scroll to top on section change
        if (sectionChanged) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    updateTimelinePosition() {
        const miniPerson = document.querySelector('.mini-person');
        if (miniPerson) {
            const position = this.getTimelinePosition();
            miniPerson.style.left = `${position}%`;
        }
        
        // Update active grid item overlay
        document.querySelectorAll('.grid-item').forEach((item, index) => {
            if (index === this.state.timelinePosition) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Update "press enter" text visibility
        document.querySelectorAll('.press-enter-text').forEach((text, index) => {
            if (index === this.state.timelinePosition) {
                text.classList.add('visible');
            } else {
                text.classList.remove('visible');
            }
        });
    }
}

// Initialize app when DOM is ready
let app;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new App();
        window.app = app; // Make app accessible globally for onclick handlers
    });
} else {
    app = new App();
    window.app = app; // Make app accessible globally for onclick handlers
}

