function calculateArea() {
    // Get values from the form
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    // Check if inputs are valid numbers
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Please enter valid numbers for base and height.');
        return;
    }

    // Calculate the area in square meters
    const areaSquareMeters = 0.5 * base * height;

    // Convert square meters to square kilometers
    const areaSquareKilometers = areaSquareMeters / 1e6;

    // Display the result
    document.getElementById('areaResult').innerText = `The area of the triangle is ${areaSquareKilometers.toFixed(6)} square kilometers.`;
}
