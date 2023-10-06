// Define the initial data for job listings
let jobListings = [
  { title: 'Software Engineer', company: 'ABC Inc.', location: 'New York', salary: '$100,000' },
  { title: 'Data Analyst', company: 'XYZ Corp.', location: 'San Francisco', salary: '$80,000' },
  // Add more job listings here...
];

// Function to render job listings
function renderJobListings() {
  let listingsContainer = document.getElementById('app'); // Get the container element

  // Clear the container
  listingsContainer.innerHTML = '';

  // Loop through job listings and create HTML elements
  for (let i = 0; i < jobListings.length; i++) {
    let listing = jobListings[i];
    let listingElement = document.createElement('div');
    listingElement.className = 'job-listing'; // Apply CSS class for styling

    // Create HTML structure for job listing
    listingElement.innerHTML = 
      <h2>${listing.title}</h2>
      <p>${listing.company}</p>
      <p>${listing.location}</p>
      <p>${listing.salary}</p>
    ;

    // Append job listing element to the container
    listingsContainer.appendChild(listingElement);
  }
}

// Call the renderJobListings function to display job listings
renderJobListings();