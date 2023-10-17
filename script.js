document.addEventListener('DOMContentLoaded', function() {
    const generateMealButton = document.getElementById('generateMeal');
    const mealResult = document.getElementById('mealResult');

    const meals = [
        "Spaghetti Bolognese 🍝",
        "Chicken Alfredo 🍗",
        "Margherita Pizza 🍕",
        "Sushi Platter 🍣",
        "Vegetarian Stir Fry 🥦",
        "Classic Burger 🍔",
        "Taco Tuesday 🌮",
        "Caesar Salad 🥗",
        "Pancakes with Maple Syrup 🥞",
        "Chocolate Fondue 🍫"
    ];

    generateMealButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * meals.length);
        const randomMeal = meals[randomIndex];
        displayMeal(randomMeal);
    });

    function displayMeal(meal) {
        mealResult.textContent = `How about trying: ${meal}`;
    }
});
