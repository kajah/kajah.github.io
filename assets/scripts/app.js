// Main App Component
class App {
    constructor() {
        this.state = {
            activeSection: 'home',
            timelinePosition: 0 // 0 = first grid, 1 = second grid, 2 = third grid
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
            ${this.renderHeader()}
            ${this.renderMain()}
            ${this.renderFooter()}
        `;
    }

    renderHeader() {
        return `
            <header class="header">
                <div class="header-content">
                    <div class="logo">
                        <h1>Katharine Jiang</h1>
                    </div>
                    <nav class="nav">
                        <button class="nav-link ${this.state.activeSection === 'home' ? 'active' : ''}" data-section="home">Home</button>
                        <button class="nav-link ${this.state.activeSection === 'about' ? 'active' : ''}" data-section="about">About</button>
                        <button class="nav-link ${this.state.activeSection === 'experience' ? 'active' : ''}" data-section="experience">Experience</button>
                        <button class="nav-link ${this.state.activeSection === 'contact' ? 'active' : ''}" data-section="contact">Contact</button>
                    </nav>
                </div>
            </header>
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
        switch(this.state.activeSection) {
            case 'home':
                return this.renderHome();
            case 'about':
                return this.renderAbout();
            case 'experience':
                return this.renderExperience();
            case 'contact':
                return this.renderContact();
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
                            <span class="person-icon">🧑</span>
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

    renderAbout() {
        return `
            <section class="section about-section">
                <div class="container">
                    <h2 class="section-title">About Me</h2>
                    <div class="about-content">
                        <div class="about-text">
                            <p>
                                Hi! My name is <strong>Katharine Jiang</strong>. I'd probably describe myself as a jack of all trades.
                            </p>
                            <p>
                                You can reach me on <a href="https://twitter.com/katharine_jiang" target="_blank" class="link">Twitter</a> 
                                or <a href="https://www.linkedin.com/in/katharine-jiang/" target="_blank" class="link">LinkedIn</a> 
                                and talk to me about any of the following!
                            </p>
                            <ul class="interests-list">
                                <li>My <a href="https://www.wizform.com" target="_blank" class="link">company</a></li>
                                <li>Startup <a href="https://www.polymathcp.com/" target="_blank" class="link">investing</a></li>
                                <li><a href="https://wearemovingforward.github.io/" target="_blank" class="link">Inclusive & equitable venture capital fundraising</a></li>
                                <li>My podcast <a href="https://www.shoesoffpls.com/" target="_blank" class="link">Shoes Off Pls</a>, elevating Asian American stories</li>
                                <li>Music (piano, guitar, music production, composing, Glass Animals, Yuja Wang, Foals, …)</li>
                                <li>Indie Video Games (Supergiant Games, Zero Escape: Nonary Games, Ace Attorney, Celeste, Undertale, A Walk in the Woods, Oxenfree, Life is Strange, …)</li>
                                <li>Good books</li>
                                <li>A trusty pair (or 2 or 5) of black boots</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderExperience() {
        return `
            <section class="section experience-section">
                <div class="container">
                    <h2 class="section-title">Experience</h2>
                    <div class="experience-grid">
                        ${this.renderExperienceCard({
                            title: 'Loop',
                            role: 'Co-founder',
                            period: 'Current',
                            description: 'Building the next generation of sales productivity software.',
                            link: 'https://helloloop.io',
                            tech: []
                        })}
                        ${this.renderExperienceCard({
                            title: 'WizForm',
                            role: 'Co-founder',
                            period: 'Previously',
                            description: 'Automated incorporation for small businesses. Sold to Clearco.',
                            link: 'https://www.wizform.com',
                            tech: []
                        })}
                        ${this.renderExperienceCard({
                            title: 'Blend',
                            role: 'Software Engineer',
                            period: 'July 2019 - December 2020',
                            description: 'B2B fintech platform building products that streamline mortgage and other loan processes. Worked on the Disclosures team, building services from scratch and managing full-stack features.',
                            link: 'https://blend.com/',
                            tech: ['TypeScript', 'ReactJS', 'PostgreSQL', 'MongoDB']
                        })}
                        ${this.renderExperienceCard({
                            title: 'Nextdoor',
                            role: 'Software Engineer Intern',
                            period: 'May - August 2018',
                            description: 'Full stack engineering intern on the Real Estate team. Built and shipped 3 product features: Polls, Events, and Map Filters.',
                            link: 'https://nextdoor.com/',
                            tech: ['ReactJS', 'Django', 'SQL']
                        })}
                    </div>
                    
                    <div class="education-section">
                        <h3 class="subsection-title">Education</h3>
                        ${this.renderEducationCard({
                            school: 'University of California, Berkeley',
                            degree: 'BA in Computer Science',
                            period: 'Class of 2018 (December)',
                            description: 'Throughout my 3.5 years at Berkeley I\'ve had the opportunity to join amazing student organizations.',
                            organizations: [
                                {
                                    name: 'BerkeleyTime',
                                    link: 'https://berkeleytime.com/landing',
                                    description: 'Web application for students to search through 12000+ courses. Helped lead the rewrite of the frontend codebase to ReactJS.'
                                },
                                {
                                    name: 'Innovative Design',
                                    link: 'https://innovativedesign.club/',
                                    description: 'Creative student agency. Spent 3 semesters on web design teams, leading my own team in my last semester.'
                                },
                                {
                                    name: 'Mobile Developers of Berkeley',
                                    link: 'https://www.facebook.com/mobiledevsberkeley/',
                                    description: 'Built WingIt, an Android app that creates spontaneous trip itineraries. Published Version 1.0 and 2.0.'
                                }
                            ]
                        })}
                    </div>
                </div>
            </section>
        `;
    }

    renderExperienceCard(exp) {
        return `
            <div class="experience-card">
                <div class="experience-header">
                    <h3 class="experience-title">
                        ${exp.link ? `<a href="${exp.link}" target="_blank" class="link">${exp.title}</a>` : exp.title}
                    </h3>
                    <span class="experience-period">${exp.period}</span>
                </div>
                <p class="experience-role">${exp.role}</p>
                <p class="experience-description">${exp.description}</p>
                ${exp.tech && exp.tech.length > 0 ? `
                    <div class="tech-tags">
                        ${exp.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderEducationCard(edu) {
        return `
            <div class="education-card">
                <div class="education-header">
                    <h3 class="education-title">${edu.school}</h3>
                    <span class="education-period">${edu.period}</span>
                </div>
                <p class="education-degree">${edu.degree}</p>
                <p class="education-description">${edu.description}</p>
                <div class="organizations">
                    ${edu.organizations.map(org => `
                        <div class="organization">
                            <h4 class="organization-name">
                                <a href="${org.link}" target="_blank" class="link">${org.name}</a>
                            </h4>
                            <p class="organization-description">${org.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderContact() {
        return `
            <section class="section contact-section">
                <div class="container">
                    <h2 class="section-title">Get in Touch</h2>
                    <div class="contact-content">
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
            </section>
        `;
    }

    renderFooter() {
        return `
            <footer class="footer">
                <div class="container">
                    <p>&copy; ${new Date().getFullYear()} Katharine Jiang</p>
                </div>
            </footer>
        `;
    }

    attachEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.setState({ activeSection: section });
            });
        });

        // Section buttons
        document.querySelectorAll('[data-section]').forEach(btn => {
            if (btn.classList.contains('btn')) {
                btn.addEventListener('click', (e) => {
                    const section = e.target.dataset.section;
                    this.setState({ activeSection: section });
                });
            }
        });

        // Keyboard controls for timeline (only when on home section)
        if (this.state.activeSection === 'home') {
            this.attachTimelineListeners();
            this.attachGridHoverListeners();
        }
    }

    attachGridHoverListeners() {
        // Remove existing listeners if any
        if (this.gridHoverHandlers) {
            this.gridHoverHandlers.forEach(handler => {
                handler.element.removeEventListener('mouseenter', handler.enterHandler);
            });
        }

        this.gridHoverHandlers = [];
        
        // Add hover listeners to each grid item
        document.querySelectorAll('.grid-item').forEach((item, index) => {
            const enterHandler = () => {
                this.setState({ timelinePosition: index });
            };
            
            item.addEventListener('mouseenter', enterHandler);
            
            this.gridHoverHandlers.push({
                element: item,
                enterHandler: enterHandler
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
            if (this.state.activeSection !== 'home') return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.moveTimeline('left');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.moveTimeline('right');
            }
        };

        document.addEventListener('keydown', this.timelineKeyHandler);
    }

    setState(newState) {
        const wasOnHome = this.state.activeSection === 'home';
        const timelineChanged = newState.timelinePosition !== undefined && 
                                newState.timelinePosition !== this.state.timelinePosition;
        const sectionChanged = newState.activeSection && 
                               newState.activeSection !== this.state.activeSection;
        
        this.state = { ...this.state, ...newState };
        
        // If only timeline position changed and we're on home, update just the position
        if (wasOnHome && this.state.activeSection === 'home' && timelineChanged && 
            !sectionChanged && Object.keys(newState).length === 1) {
            this.updateTimelinePosition();
        } else {
            // Full re-render for other state changes
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
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new App();
    });
} else {
    new App();
}

