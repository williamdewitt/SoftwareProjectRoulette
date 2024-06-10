// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const categories = {
        "Application": ["ToDo", "Vending Machine", "Parking Pay Station", "Bank ATM"],
        "Project Type": ["Console", "Api"],
        "Persistent Storage": ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "MsSQL", "FlatFile"]
    };

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generateProject() {
        let projectIdea = '';
        for (const category in categories) {
            projectIdea += `${category}: ${getRandomElement(categories[category])}<br>`;
        }
        document.getElementById('project-idea').innerHTML = projectIdea;
    }

    document.getElementById('generate-button').addEventListener('click', generateProject);
});
