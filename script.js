const jobsData = [
{ title: "Frontend Intern", company: "TechCorp", type: "Internship", skills: "HTML, CSS, JS" },
{ title: "Backend Developer", company: "DataSoft", type: "Placement", skills: "Node.js, SQL" },
{ title: "Full Stack Intern", company: "InnovateX", type: "Internship", skills: "MERN Stack" },
{ title: "Software Engineer", company: "CodeWorks", type: "Placement", skills: "Java, DSA" }
];


const jobsContainer = document.getElementById("jobs");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");


function renderJobs() {
const searchText = searchInput.value.toLowerCase();
const filterType = filterSelect.value;


jobsContainer.innerHTML = "";


const filteredJobs = jobsData.filter(job => {
return (
job.title.toLowerCase().includes(searchText) &&
(filterType === "All" || job.type === filterType)
);
});


filteredJobs.forEach(job => {
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
<h3>${job.title}</h3>
<p><strong>Company:</strong> ${job.company}</p>
<p><strong>Type:</strong> ${job.type}</p>
<p><strong>Skills:</strong> ${job.skills}</p>
<button onclick="applyJob('${job.title}')">Apply Now</button>
`;
jobsContainer.appendChild(card);
});
}


function applyJob(title) {
alert("You have applied for: " + title);
}


searchInput.addEventListener("input", renderJobs);
filterSelect.addEventListener("change", renderJobs);


renderJobs();

let index = 0;
const testimonials = document.querySelectorAll('.testimonial');


setInterval(() => {
testimonials[index].classList.remove('active');
index = (index + 1) % testimonials.length;
testimonials[index].classList.add('active');
}, 3000);

const jobCards = document.querySelectorAll(".card");

const today = new Date();

jobCards.forEach(card => {
  const postedDate = new Date(card.dataset.posted);
  const deadlineDate = new Date(card.dataset.deadline);

  const daysSincePosted = (today - postedDate) / (1000 * 60 * 60 * 24);
  const daysToDeadline = (deadlineDate - today) / (1000 * 60 * 60 * 24);

  const title = card.querySelector("h3");

  // Auto NEW badge (posted within last 7 days)
  if (daysSincePosted <= 7) {
    const newBadge = document.createElement("span");
    newBadge.className = "badge-new";
    newBadge.innerText = "NEW";
    title.appendChild(newBadge);
  }

  // Closing Soon badge (deadline within 5 days)
  if (daysToDeadline <= 5 && daysToDeadline > 0) {
    const closingBadge = document.createElement("span");
    closingBadge.className = "badge-closing";
    closingBadge.innerText = "Closing Soon";
    title.appendChild(closingBadge);
  }
});
