"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPage = showPage;
// Function to show a specific page
function showPage(pageNumber) {
    console.log("showPage called with pageNumber: ".concat(pageNumber)); // Debug log
    document.querySelectorAll('.container').forEach(function (container) {
        container.classList.remove('active');
    });
    var page = document.getElementById("page".concat(pageNumber));
    if (page) {
        page.classList.add('active');
    }
    else {
        console.error("Page with id \"page".concat(pageNumber, "\" not found."));
    }
}
// Function to highlight each sentence and add mouse hover events
function highlightSentences() {
    document.querySelectorAll('p, ul li').forEach(function (element) {
        console.log("Original content: ".concat(element.innerHTML)); // Debug log
        // Split content by sentences
        var lines = element.innerHTML.split('. ');
        // Wrap each sentence in a <span> for highlighting
        element.innerHTML = lines
            .map(function (line) { return "<span class=\"highlight-line\">".concat(line, ".</span>"); })
            .join(' ');
        // Add hover event listeners to each sentence
        element.querySelectorAll('.highlight-line').forEach(function (span) {
            var spanElement = span; // Assert span as HTMLSpanElement
            spanElement.addEventListener('mouseenter', function () {
                spanElement.style.backgroundColor = 'yellow'; // Highlight on hover
                spanElement.style.color = '#333';
            });
            span.addEventListener('mouseleave', function () {
                spanElement.style.backgroundColor = ''; // Reset on mouse leave
                spanElement.style.color = '';
            });
        });
        console.log("Updated content: ".concat(element.innerHTML)); // Debug log
    });
}
// Run functions once DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed"); // Debug log
    highlightSentences();
});
