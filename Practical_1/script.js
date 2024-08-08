const votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0
};

function vote(language) {
    votes[language]++;
    updateVotes();
}

function updateVotes() {
    document.getElementById('jsVotes').textContent = votes.JavaScript;
    document.getElementById('pythonVotes').textContent = votes.Python;
    document.getElementById('javaVotes').textContent = votes.Java;
}

setInterval(() => {
    const languages = ['JavaScript', 'Python', 'Java'];
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    votes[randomLanguage]++;
    updateVotes();
}, 2000);
