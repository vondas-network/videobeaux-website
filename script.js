const instructions = {
    windows: `Windows selected
choco install ffmpeg
setx VIDEOBEAUX_PATH "C:\\videobeaux"
`,
    linux: `# GO TO DIRECTORY FOR THE PROJECT; COPY, PASTE, RUN
    
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/vondas-network/videobeaux/refs/heads/main/install.sh)"
`,
    mac: `# GO TO DIRECTORY FOR THE PROJECT; COPY, PASTE, RUN

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/vondas-network/videobeaux/refs/heads/main/install.sh)"
`
};

function showInstructions(os) {
    const el = document.getElementById('install-instructions');
    el.textContent = instructions[os];

    document.querySelectorAll('.os-buttons img').forEach(img => {
        img.classList.remove('selected');
    });

    const selectedIcon = document.querySelector(`.os-buttons img[data-os="${os}"]`);
    if (selectedIcon) selectedIcon.classList.add('selected');
}

// Attach click handlers to all icons
document.querySelectorAll('.os-buttons img').forEach(img => {
    img.addEventListener('click', () => {
        const os = img.getAttribute('data-os');
        showInstructions(os);
    });
});

// On load, simulate click on macOS icon
document.addEventListener("DOMContentLoaded", function() {
    const macIcon = document.querySelector('.os-buttons img[data-os="mac"]');
    if (macIcon) macIcon.click();
});