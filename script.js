// script.js

// Sample Job Data
const jobs = [
  { title: "Software Engineer", qualification: "B.Tech", location: "Pune", company: "TechCorp" },
  { title: "Marketing Manager", qualification: "MBA", location: "Mumbai", company: "AdMark" },
  { title: "Civil Engineer", qualification: "Diploma", location: "Nagpur", company: "BuildCon" },
  { title: "Data Analyst", qualification: "M.Sc", location: "Delhi", company: "DataPro" }
];

// Handle Form Submission
document.getElementById('jobForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const qualification = document.getElementById('qualification').value.trim();
  const results = jobs.filter(job => job.qualification.toLowerCase() === qualification.toLowerCase());
  
  displayResults(results);
});

// Display Job Results
function displayResults(results) {
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = ''; // Clear previous results

  if (results.length === 0) {
    jobList.innerHTML = '<li>No jobs found for the given qualification.</li>';
    return;
  }

  results.forEach(job => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${job.title}</strong><br>
      Qualification: ${job.qualification}<br>
      Location: ${job.location}<br>
      Company: ${job.company}
    `;
    jobList.appendChild(listItem);
  });
}
