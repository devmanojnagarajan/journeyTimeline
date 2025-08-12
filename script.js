// Dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-switch');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
}

// Toggle dark mode when switch is clicked
darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Certificate viewing functionality
document.addEventListener('DOMContentLoaded', function() {
    const certificateButtons = document.querySelectorAll('.view-certificate-btn');
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('certificateTitle');
    const modalFrame = document.getElementById('certificateFrame');
    const closeBtn = document.getElementById('closeCertificate');
    
    // Coming Soon Modal elements
    const comingSoonModal = document.getElementById('comingSoonModal');
    const comingSoonCloseBtn = document.getElementById('closeComingSoon');
    
    // Job Description Modal elements
    const jdButtons = document.querySelectorAll('[data-jd]');
    const jdModal = document.getElementById('jdModal');
    const jdCloseBtn = document.getElementById('closeJD');
    
    // Certificate data
    const certificateData = {
        'masters-cs': {
            url: '#',
            title: "Master's Degree in Computer Science"
        },
        'masters-arch': {
            url: 'assets/certificates/MAA_Degree.pdf#rotate=90',
            title: "Masters in Advanced Architecture"
        },
        'bachelor-arch': {
            url: 'assets/certificates/Bachelors Degree.pdf',
            title: "Bachelor in Architecture"
        },
        'work-2022': {
            url: 'assets/certificates/Manoj Nagarajan - QDC-1.pdf',
            title: "Work Experience Certificate - Qatar Design Consortium"
        },
        'intern-2018': {
            url: '#',
            title: "Internship Certificate - Intern-Architect (2018)"
        },
        'intern-2017': {
            url: '#',
            title: "Internship Certificate - Intern-Architect (2017)"
        },
        'job-2025': {
            url: 'assets/portfolios/_01_Manoj_Nagarajan-IND-1.pdf',
            title: "Design Portfolio - Manoj Nagarajan"
        },
        'cert1-2023': {
            url: 'assets/certificates/Dynamo_Python(2024).pdf',
            title: "BIM Automation - Dynamo Python"
        },
        'cert2-2023': {
            url: 'assets/certificates/GSS22_IAAC.pdf',
            title: "Global Summer School - IAAC"
        },
        'cert3-2023': {
            url: 'assets/certificates/BIM22.pdf',
            title: "BIM Professional Certification"
        },
        'cert4-2023': {
            url: 'assets/certificates/UPDA_2021.pdf',
            title: "UPDA Registration 2021"
        },
        'cert1-2020': {
            url: '#',
            title: "Project Management Certification"
        },
        'cert2-2020': {
            url: '#',
            title: "AutoCAD Professional Certification"
        },
        'cert3-2020': {
            url: '#',
            title: "Construction Management Certification"
        }
    };
    
    // Open certificate modal
    certificateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certificateType = this.dataset.certificate;
            const certData = certificateData[certificateType];
            
            if (certData.url && certData.url !== '#') {
                // Open portfolio in new window, certificates in modal
                if (certificateType === 'job-2025') {
                    window.open(certData.url, '_blank');
                } else {
                    modalTitle.textContent = certData.title;
                    modalFrame.src = certData.url;
                    
                    // Add rotation class for masters certificate
                    if (certificateType === 'masters-arch') {
                        modalFrame.classList.add('rotate-90');
                    } else {
                        modalFrame.classList.remove('rotate-90');
                    }
                    
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            } else {
                // Show themed coming soon modal
                comingSoonModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal functionality
    function closeModal() {
        modal.style.display = 'none';
        modalFrame.src = ''; // Clear iframe
        modalFrame.classList.remove('rotate-90'); // Clear rotation
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Close coming soon modal functionality
    function closeComingSoonModal() {
        comingSoonModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    closeBtn.addEventListener('click', closeModal);
    comingSoonCloseBtn.addEventListener('click', closeComingSoonModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close coming soon modal when clicking outside
    comingSoonModal.addEventListener('click', function(e) {
        if (e.target === comingSoonModal) {
            closeComingSoonModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal.style.display === 'block') {
                closeModal();
            } else if (comingSoonModal.style.display === 'block') {
                closeComingSoonModal();
            } else if (jdModal.style.display === 'block') {
                closeJDModal();
            }
        }
    });

    // Job Description functionality
    jdButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jdType = this.dataset.jd;
            
            // Handle different JD types
            if (jdType === 'work-2022') {
                jdModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close JD modal functionality
    function closeJDModal() {
        jdModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    jdCloseBtn.addEventListener('click', closeJDModal);

    // Close JD modal when clicking outside
    jdModal.addEventListener('click', function(e) {
        if (e.target === jdModal) {
            closeJDModal();
        }
    });

    // Project icon navigation functionality with enhanced interactivity
    const projectIconLinks = document.querySelectorAll('.project-icon-link');
    
    // Project URLs for MAA portfolio section (online first, local backup)
    const maaProjectUrls = {
        'fibernetics-2024': {
            online: 'https://blog.iaac.net/fibernetics-bridging-kinetic-architecture-with-cybernetics-for-adaptive-spatial-configurations/',
            local: 'blog/maa-projects/fibernetics.html'
        },
        'travel-through-2024': {
            online: 'https://blog.iaac.net/genetic-optimization-travel-through/',
            local: 'blog/maa-projects/travel-through.html'
        },
        'computation-composition-2024': {
            online: 'https://blog.iaac.net/kniphofia-community-amphitheater/',
            local: 'blog/maa-projects/computation-composition.html'
        }
    };
    
    // Function to check if URL is accessible and open it
    function tryOpenProjectUrl(projectData) {
        // First try to open the online URL
        try {
            const onlineWindow = window.open(projectData.online, '_blank');
            
            // Check if the window was blocked or failed to open
            if (!onlineWindow || onlineWindow.closed || typeof onlineWindow.closed == 'undefined') {
                // If online fails, notify user and try local backup
                showFallbackNotification('Online version unavailable. Opening local copy...');
                setTimeout(() => {
                    window.open(projectData.local, '_blank');
                }, 1000);
            }
        } catch (error) {
            // If there's an error opening online URL, use local backup
            showFallbackNotification('Using local backup...');
            setTimeout(() => {
                window.open(projectData.local, '_blank');
            }, 1000);
        }
    }
    
    // Function to show user notification about fallback
    function showFallbackNotification(message) {
        // Create or update notification element
        let notification = document.getElementById('project-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'project-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #0066ff, #00d4ff);
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
                z-index: 1001;
                font-family: Arial, sans-serif;
                font-size: 14px;
                max-width: 300px;
                transform: translateX(320px);
                transition: transform 0.3s ease;
            `;
            document.body.appendChild(notification);
        }
        
        notification.textContent = message;
        notification.style.transform = 'translateX(0)';
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(320px)';
        }, 3000);
    }
    
    projectIconLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.dataset.project;
            
            // Check if this is an MAA project with URLs
            if (maaProjectUrls[projectId]) {
                tryOpenProjectUrl(maaProjectUrls[projectId]);
            } else {
                // Fallback for other projects
                alert(`Navigating to ${projectId} project page...`);
            }
        });
        
        // Add hover effects
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Certification icon navigation functionality
    const certIconLinks = document.querySelectorAll('.cert-icon-link');
    const certLinks = document.querySelectorAll('.cert-link');
    
    // 2023 Certification placeholder URLs - replace with your actual certification links
    const cert2023Urls = {
        'cloud-architecture-2023': '#', // Add your AWS/GCP certification URL here
        'fullstack-development-2023': '#', // Add your Meta/MongoDB certification URL here
        'machine-learning-2023': '#', // Add your Stanford/Coursera ML certification URL here
        'data-engineering-2023': '#', // Add your Apache/Databricks certification URL here
        'devops-automation-2023': '#' // Add your Docker/Kubernetes certification URL here
    };
    
    // Handle certification icon clicks (🏆)
    certIconLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const certId = this.dataset.cert;
            handleCertificationClick(certId);
        });
        
        // Add hover effects for certification icons
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(-5deg)';
            this.style.transition = 'transform 0.2s ease';
            this.style.filter = 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4))';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'none';
        });
    });
    
    // Handle certificate link clicks (Certificate button)
    certLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const certId = this.dataset.cert;
            handleCertificationClick(certId);
        });
    });
    
    // Unified certification click handler
    function handleCertificationClick(certId) {
        // Check if this is a 2023 certification
        if (cert2023Urls[certId]) {
            if (cert2023Urls[certId] === '#') {
                // Show placeholder message with certification name
                const certName = certId.replace(/-2023$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                showCertificationNotification(`${certName} certification link - Ready to be updated with your actual certificate URL`);
            } else {
                // Open actual certification URL
                window.open(cert2023Urls[certId], '_blank');
            }
        } else {
            // Existing certification functionality
            alert(`Opening ${certId} certification verification page...`);
        }
    }
    
    // Function to show certification notification
    function showCertificationNotification(message) {
        let notification = document.getElementById('cert-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'cert-notification';
            notification.style.cssText = `
                position: fixed;
                top: 70px;
                right: 20px;
                background: linear-gradient(135deg, #FFD700, #FFA500);
                color: #333;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
                z-index: 1001;
                font-family: Arial, sans-serif;
                font-size: 14px;
                max-width: 320px;
                transform: translateX(350px);
                transition: transform 0.3s ease;
                border: 2px solid #FFD700;
            `;
            document.body.appendChild(notification);
        }
        
        notification.textContent = message;
        notification.style.transform = 'translateX(0)';
        
        setTimeout(() => {
            notification.style.transform = 'translateX(350px)';
        }, 4000);
    }

});