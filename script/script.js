const defaultConfig = {
    studio_name: "NOREAL STUDIOS",
    hero_tagline: "Creating Immersive Roblox Experiences",
    ceo_title: "Leadership",
    ceo_name_1: "Gio",
    ceo_name_2: "Lorenzo",
    projects_title: "Our Projects",
    project_name: "Blox Flipper",
    roadmap_title: "Development Roadmap",
    background_color: "#000000",
    surface_color: "#0a0a0a",
    text_color: "#ffffff",
    primary_action_color: "#ffffff",
    secondary_action_color: "#999999",
    font_family: "Inter",
    font_size: 16
};
async function onConfigChange(config) {
    const studioName = config.studio_name || defaultConfig.studio_name;
    const heroTagline = config.hero_tagline || defaultConfig.hero_tagline;
    const ceoTitle = config.ceo_title || defaultConfig.ceo_title;
    const ceoName1 = config.ceo_name_1 || defaultConfig.ceo_name_1;
    const ceoName2 = config.ceo_name_2 || defaultConfig.ceo_name_2;
    const projectsTitle = config.projects_title || defaultConfig.projects_title;
    const projectName = config.project_name || defaultConfig.project_name;
    const roadmapTitle = config.roadmap_title || defaultConfig.roadmap_title;
    const backgroundColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontSize = config.font_size || defaultConfig.font_size;
    const fontStack = `${customFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
    document.getElementById('studio-name').textContent = studioName;
    document.getElementById('hero-title').textContent = studioName;
    document.getElementById('hero-tagline').textContent = heroTagline;
    document.getElementById('ceo-section-title').textContent = ceoTitle;
    document.getElementById('ceo-name-1').textContent = ceoName1;
    document.getElementById('ceo-name-2').textContent = ceoName2;
    document.getElementById('projects-title').textContent = projectsTitle;
    document.getElementById('project-name').textContent = projectName;
    document.getElementById('roadmap-title').textContent = roadmapTitle;
    document.getElementById('ceo-avatar-1').textContent = ceoName1.charAt(0).toUpperCase();
    document.getElementById('ceo-avatar-2').textContent = ceoName2.charAt(0).toUpperCase();
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    const ceosSections = document.querySelectorAll('.ceos, .roadmap');
    ceosSections.forEach(section => {
        section.style.backgroundColor = surfaceColor;
    });
    const allText = document.querySelectorAll('body, h1, h2, h3, p');
    allText.forEach(el => {
        el.style.color = textColor;
    });
    document.querySelector('.hero p').style.color = secondaryActionColor;
    document.querySelectorAll('.roadmap-content p').forEach(el => {
        el.style.color = secondaryActionColor;
    });
    document.querySelectorAll('.roadmap-progress').forEach(el => {
        el.style.backgroundColor = primaryActionColor;
    });
    document.querySelectorAll('.roadmap-item.active .roadmap-dot, .roadmap-item.completed .roadmap-dot').forEach(el => {
        el.style.backgroundColor = primaryActionColor;
    });
    document.body.style.fontFamily = fontStack;
    document.querySelector('.logo').style.fontSize = `${baseFontSize * 2}px`;
    document.querySelector('.hero h1').style.fontSize = `${baseFontSize * 4.5}px`;
    document.querySelector('.hero p').style.fontSize = `${baseFontSize * 1.5}px`;
    document.querySelectorAll('.ceos h2, .projects h2, .roadmap h2').forEach(el => {
        el.style.fontSize = `${baseFontSize * 3}px`;
    });
    document.querySelectorAll('.ceo-card h3').forEach(el => {
        el.style.fontSize = `${baseFontSize * 1.75}px`;
    });
    document.querySelector('.project-card h3').style.fontSize = `${baseFontSize * 2.25}px`;
    document.querySelectorAll('.roadmap-content h3').forEach(el => {
        el.style.fontSize = `${baseFontSize * 1.5}px`;
    });
}
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: onConfigChange,
        mapToCapabilities: (config) => ({
            recolorables: [
                {
                    get: () => config.background_color || defaultConfig.background_color,
                    set: (value) => {
                        config.background_color = value;
                        window.elementSdk.setConfig({ background_color: value });
                    }
                },
                {
                    get: () => config.surface_color || defaultConfig.surface_color,
                    set: (value) => {
                        config.surface_color = value;
                        window.elementSdk.setConfig({ surface_color: value });
                    }
                },
                {
                    get: () => config.text_color || defaultConfig.text_color,
                    set: (value) => {
                        config.text_color = value;
                        window.elementSdk.setConfig({ text_color: value });
                    }
                },
                {
                    get: () => config.primary_action_color || defaultConfig.primary_action_color,
                    set: (value) => {
                        config.primary_action_color = value;
                        window.elementSdk.setConfig({ primary_action_color: value });
                    }
                },
                {
                    get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                    set: (value) => {
                        config.secondary_action_color = value;
                        window.elementSdk.setConfig({ secondary_action_color: value });
                    }
                }
            ],
            borderables: [],
            fontEditable: {
                get: () => config.font_family || defaultConfig.font_family,
                set: (value) => {
                    config.font_family = value;
                    window.elementSdk.setConfig({ font_family: value });
                }
            },
            fontSizeable: {
                get: () => config.font_size || defaultConfig.font_size,
                set: (value) => {
                    config.font_size = value;
                    window.elementSdk.setConfig({ font_size: value });
                }
            }
        }),
        mapToEditPanelValues: (config) => new Map([
            ["studio_name", config.studio_name || defaultConfig.studio_name],
            ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
            ["ceo_title", config.ceo_title || defaultConfig.ceo_title],
            ["ceo_name_1", config.ceo_name_1 || defaultConfig.ceo_name_1],
            ["ceo_name_2", config.ceo_name_2 || defaultConfig.ceo_name_2],
            ["projects_title", config.projects_title || defaultConfig.projects_title],
            ["project_name", config.project_name || defaultConfig.project_name],
            ["roadmap_title", config.roadmap_title || defaultConfig.roadmap_title]
        ])
    });
}

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2
    });
}

document.querySelectorAll('.ceo-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});


function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.z -= p.speed;
        if (p.z <= 0) {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
            p.z = 100;
        }
        const scale = 300 / (300 + p.z);
        ctx.beginPath();
        ctx.arc(p.x * scale, p.y * scale, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${scale})`;
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



(function () {
    const roadmapData = [
        { title: "Changing all the UI", description: "We're re-doing the ui for a best user experience", status: 2 },
        { title: "Redoing Shop System", description: "Always for a better User Experience", status: 1 },
        { title: "Redoing Map Building", description: "A new map for best performance", status: 1 },
        { title: "Redoing Job", description: "With a new map we thinking are a good choise change the job which were previously monotonous and boring", status: 1 },
        { title: "Redoing Wall System", description: "For a best experience and a better performance", status: 0 },
        { title: "Redoing Tools System", description: "For Wall System we must redoing also the tools", status: 0 },
        { title: "Release Game", description: "??/??/2025", status: 0 },
    ];
    const container = document.getElementById('roadmap-content');
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('roadmap-line');
    container.appendChild(lineDiv);
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('roadmap-progress');
    container.appendChild(progressDiv);
    function getStatus(statusCode) {
        switch (statusCode) {
            case 2: return { class: 'status-completed', text: 'Completed', itemClass: 'completed' };
            case 1: return { class: 'status-active', text: 'In Progress', itemClass: 'active' };
            default: return { class: 'status-planned', text: 'Planned', itemClass: 'planned' };
        }
    }
    roadmapData.forEach(item => {
        const status = getStatus(item.status);
        const itemHTML = `
<div class="roadmap-item ${status.itemClass}">
    <div class="roadmap-dot"></div>
    <div class="roadmap-content">
    <span class="roadmap-status ${status.class}">${status.text}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    </div>
</div>
`;
        container.insertAdjacentHTML('beforeend', itemHTML);
    });
})();

async function onConfigChange(config) {
    const studioName = config.studio_name || defaultConfig.studio_name;
    const heroTagline = config.hero_tagline || defaultConfig.hero_tagline;
    const ceoTitle = config.ceo_title || defaultConfig.ceo_title;
    const ceoName1 = config.ceo_name_1 || defaultConfig.ceo_name_1;
    const ceoName2 = config.ceo_name_2 || defaultConfig.ceo_name_2;
    const projectsTitle = config.projects_title || defaultConfig.projects_title;
    const projectName = config.project_name || defaultConfig.project_name;
    const roadmapTitle = config.roadmap_title || defaultConfig.roadmap_title;
    const backgroundColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontSize = config.font_size || defaultConfig.font_size;
    const fontStack = `${customFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
    document.getElementById('studio-name').textContent = studioName;
    document.getElementById('hero-title').textContent = studioName;
    document.getElementById('hero-tagline').textContent = heroTagline;
    document.getElementById('ceo-section-title').textContent = ceoTitle;
    document.getElementById('ceo-name-1').textContent = ceoName1;
    document.getElementById('ceo-name-2').textContent = ceoName2;
    document.getElementById('projects-title').textContent = projectsTitle;
    document.getElementById('project-name').textContent = projectName;
    document.getElementById('roadmap-title').textContent = roadmapTitle;
    document.getElementById('ceo-avatar-1').textContent = ceoName1.charAt(0).toUpperCase();
    document.getElementById('ceo-avatar-2').textContent = ceoName2.charAt(0).toUpperCase();
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    const ceosSections = document.querySelectorAll('.ceos, .roadmap');
    ceosSections.forEach(section => {
        section.style.backgroundColor = surfaceColor;
    });
    const allText = document.querySelectorAll('body, h1, h2, h3, p');
    allText.forEach(el => {
        el.style.color = textColor;
    });
    document.querySelector('.hero p').style.color = secondaryActionColor;
    document.querySelectorAll('.roadmap-content p').forEach(el => {
        el.style.color = secondaryActionColor;
    });
    document.querySelectorAll('.roadmap-progress').forEach(el => {
        el.style.backgroundColor = primaryActionColor;
    });
    document.querySelectorAll('.roadmap-item.active .roadmap-dot, .roadmap-item.completed .roadmap-dot').forEach(el => {
        el.style.backgroundColor = primaryActionColor;
    });
    document.body.style.fontFamily = fontStack;
    document.querySelector('.logo').style.fontSize = `${baseFontSize * 2}px`;
    document.querySelector('.hero h1').style.fontSize = `${baseFontSize * 4.5}px`;
    document.querySelector('.hero p').style.fontSize = `${baseFontSize * 1.5}px`;
    document.querySelectorAll('.ceos h2, .projects h2, .roadmap h2').forEach(el => {
        el.style.fontSize = `${baseFontSize * 3}px`;
    });
    document.querySelectorAll('.ceo-card h3').forEach(el => {
        el.style.fontSize = `${baseFontSize * 1.75}px`;
    });
    document.querySelector('.project-card h3').style.fontSize = `${baseFontSize * 2.25}px`;
    document.querySelectorAll('.roadmap-content h3').forEach(el => {
        el.style.fontSize = `${baseFontSize * 1.5}px`;
    });
}
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: onConfigChange,
        mapToCapabilities: (config) => ({
            recolorables: [
                {
                    get: () => config.background_color || defaultConfig.background_color,
                    set: (value) => {
                        config.background_color = value;
                        window.elementSdk.setConfig({ background_color: value });
                    }
                },
                {
                    get: () => config.surface_color || defaultConfig.surface_color,
                    set: (value) => {
                        config.surface_color = value;
                        window.elementSdk.setConfig({ surface_color: value });
                    }
                },
                {
                    get: () => config.text_color || defaultConfig.text_color,
                    set: (value) => {
                        config.text_color = value;
                        window.elementSdk.setConfig({ text_color: value });
                    }
                },
                {
                    get: () => config.primary_action_color || defaultConfig.primary_action_color,
                    set: (value) => {
                        config.primary_action_color = value;
                        window.elementSdk.setConfig({ primary_action_color: value });
                    }
                },
                {
                    get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                    set: (value) => {
                        config.secondary_action_color = value;
                        window.elementSdk.setConfig({ secondary_action_color: value });
                    }
                }
            ],
            borderables: [],
            fontEditable: {
                get: () => config.font_family || defaultConfig.font_family,
                set: (value) => {
                    config.font_family = value;
                    window.elementSdk.setConfig({ font_family: value });
                }
            },
            fontSizeable: {
                get: () => config.font_size || defaultConfig.font_size,
                set: (value) => {
                    config.font_size = value;
                    window.elementSdk.setConfig({ font_size: value });
                }
            }
        }),
        mapToEditPanelValues: (config) => new Map([
            ["studio_name", config.studio_name || defaultConfig.studio_name],
            ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
            ["ceo_title", config.ceo_title || defaultConfig.ceo_title],
            ["ceo_name_1", config.ceo_name_1 || defaultConfig.ceo_name_1],
            ["ceo_name_2", config.ceo_name_2 || defaultConfig.ceo_name_2],
            ["projects_title", config.projects_title || defaultConfig.projects_title],
            ["project_name", config.project_name || defaultConfig.project_name],
            ["roadmap_title", config.roadmap_title || defaultConfig.roadmap_title]
        ])
    });
}