// Committee class definition
class Committee {
    constructor(icon, name, description) {
        this.icon = icon;
        this.name = name;
        this.description = description;
    }

    // Method to generate HTML for a committee card
    generateCardHTML() {
        return `
            <div class="committee-card">
                <div class="committee-icon">${this.icon}</div>
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <button>More Info</button>
            </div>
        `;
    }
}

// Function to render committees
function renderCommittees(committees) {
    const container = document.getElementById('committees-container');
    container.innerHTML = committees.map(committee => committee.generateCardHTML()).join('');
}

// Create committee objects
const committees = [
    new Committee('📄', 'Security Council', 'Discuss issues of international peace and security, offering diplomatic solutions.'),
    new Committee('🌍', 'World Health Organization', 'Address global health issues, focusing on pandemic preparedness and disease control.'),
    new Committee('📚', 'UNESCO', 'Promote education, science, and cultural understanding across member nations.'),
    new Committee('⚖️', 'International Court of Justice', 'Settle legal disputes between nations and advise on international law.'),
    new Committee('🛠️', 'Economic and Social Council', 'Focus on economic development and social issues, aiming for sustainable solutions.')
];

// Render the committees on page load
renderCommittees(committees);
