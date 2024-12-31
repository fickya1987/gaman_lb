// JavaScript functionality for AI Native Language Project
document.addEventListener('DOMContentLoaded', () => {
    console.log("AI Native Language Preservation Webpage Loaded");

    // Adding interaction to the feature boxes if needed
    const featureBoxes = document.querySelectorAll('.feature-box');

    featureBoxes.forEach(box => {
        box.addEventListener('click', () => {
            console.log(`Navigating to: ${box.querySelector('.feature-link').href}`);
        });
    });
});
