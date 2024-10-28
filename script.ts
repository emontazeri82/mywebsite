// Function to show a specific page
function showPage(pageNumber: number) {
    console.log(`showPage called with pageNumber: ${pageNumber}`); // Debug log
    document.querySelectorAll('.container').forEach(container => {
        container.classList.remove('active');
    });
    const page = document.getElementById(`page${pageNumber}`);
    if (page) {
        page.classList.add('active');
    } else {
        console.error(`Page with id "page${pageNumber}" not found.`);
    }
}

// Function to highlight each sentence and add mouse hover events
function highlightSentences() {
    document.querySelectorAll('p, ul li').forEach((element) => {
        console.log(`Original content: ${element.innerHTML}`); // Debug log

        // Split content by sentences
        const lines = element.innerHTML.split('. ');
        // Wrap each sentence in a <span> for highlighting
        element.innerHTML = lines
            .map(line => `<span class="highlight-line">${line}.</span>`)
            .join(' ');

        // Add hover event listeners to each sentence
        element.querySelectorAll('.highlight-line').forEach((span) => {
            const spanElement = span as HTMLSpanElement; // Assert span as HTMLSpanElement
            spanElement.addEventListener('mouseenter', () => {
                spanElement.style.backgroundColor = 'yellow'; // Highlight on hover
                spanElement.style.color = '#333';
            });
            span.addEventListener('mouseleave', () => {
                spanElement.style.backgroundColor = ''; // Reset on mouse leave
                spanElement.style.color = '';
            });
        });

        console.log(`Updated content: ${element.innerHTML}`); // Debug log
    });
}

// Run functions once DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed"); // Debug log
    highlightSentences();
});



