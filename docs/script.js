// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const categories = {
        "Programming Language": ["JavaScript", "Python", "Java", "C#", "Ruby"],
        "Framework": ["React", "Vue", "Angular", "Django", "Flask"],
        "Persistent Storage": ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase"],
        "APIs": ["REST API", "GraphQL", "SOAP", "gRPC", "JSON-RPC"]
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
