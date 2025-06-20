document.addEventListener('DOMContentLoaded', function () {
    function updatePageDimensions() {
        // Get the dimensions of the viewport (visible area of the browser window)
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        // Get the full height and width of the document (including scrolled content)
        // document.documentElement.scrollWidth/Height might be more reliable for the full document size
        const documentWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );


        const dimensionsElement = document.getElementById('dimensions');
        if (dimensionsElement) {
            dimensionsElement.innerHTML = `Viewport: ${viewportWidth}px x ${viewportHeight}px | Document: ${documentWidth}px x ${documentHeight}px`;
        }
    }

    // Call the function initially to display dimensions when the page loads
    updatePageDimensions();

    // Update dimensions whenever the window is resized
    window.addEventListener('resize', updatePageDimensions);
});