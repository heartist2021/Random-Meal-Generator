document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quote-text');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Code is like humor. When you have to explain it, it’s bad. - Cory House ",
        "It’s not that I’m so smart, it’s just that I stay with problems longer. - Albert Einstein ",
        "The only way to do great work is to love what you do. - Steve Jobs" ,
        "Don’t watch the clock; do what it does. Keep going. - Sam Levenson" ,
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
        "Do not wait to strike till the iron is hot, but make it hot by striking.- William Butler Yeats" ,
        "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs"

        // Add more quotes...
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayNewQuote() {
        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote;
    }

    newQuoteBtn.addEventListener('click', displayNewQuote);

    // Initial display
    displayNewQuote();
});
