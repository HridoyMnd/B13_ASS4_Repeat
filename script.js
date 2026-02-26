
// array of applications object
const applications = [
    {
        id: 1,
        companyName: "TechNova Solutions",
        position: "Frontend Developer",
        location: "Dhaka, Bangladesh",
        status: "Not Applied",
        type: "Full-Time",
        salary: "৳45,000 - ৳60,000",
        description: "We are looking for a skilled React developer with experience in Tailwind CSS and REST APIs."
    },
    {
        id: 2,
        companyName: "CodeCrafters Ltd.",
        position: "Backend Developer",
        location: "Chattogram, Bangladesh",
        status: "Not Applied",
        type: "Remote",
        salary: "৳50,000 - ৳75,000",
        description: "Seeking a Node.js developer with strong knowledge of Express and MongoDB."
    },
    // {
    //     id: 3,
    //     companyName: "Digital Spark",
    //     position: "UI/UX Designer",
    //     location: "Sylhet, Bangladesh",
    //     status: "Not Applied",
    //     type: "Part-Time",
    //     salary: "৳30,000 - ৳40,000",
    //     description: "Looking for a creative designer with Figma and modern UI design experience."
    // },
    // {
    //     id: 4,
    //     companyName: "NextGen IT",
    //     position: "MERN Stack Developer",
    //     location: "Remote",
    //     status: "Not Applied",
    //     type: "Contract",
    //     salary: "৳70,000 - ৳90,000",
    //     description: "We need a MERN stack developer for building scalable web applications."
    // },
    // {
    //     id: 5,
    //     companyName: "SoftEdge Technologies",
    //     position: "Junior Web Developer",
    //     location: "Rajshahi, Bangladesh",
    //     status: "Not Applied",
    //     type: "Internship",
    //     salary: "৳15,000 - ৳20,000",
    //     description: "Great opportunity for beginners to gain hands-on experience in web development."
    // },
    // {
    //     id: 6,
    //     companyName: "Skyline Digital",
    //     position: "Full Stack Developer",
    //     location: "Khulna, Bangladesh",
    //     status: "Not Applied",
    //     type: "Full-Time",
    //     salary: "৳60,000 - ৳85,000",
    //     description: "Looking for a full stack developer experienced in React, Node.js, and PostgreSQL."
    // },
    // {
    //     id: 7,
    //     companyName: "Bright Future Tech",
    //     position: "Software Engineer",
    //     location: "Dhaka, Bangladesh",
    //     status: "Not Applied",
    //     type: "Full-Time",
    //     salary: "৳55,000 - ৳80,000",
    //     description: "Join our engineering team to build scalable SaaS products."
    // },
    // {
    //     id: 8,
    //     companyName: "Creative Apps Studio",
    //     position: "Mobile App Developer",
    //     location: "Remote",
    //     status: "Not Applied",
    //     type: "Contract",
    //     salary: "৳65,000 - ৳95,000",
    //     description: "Hiring a React Native developer for cross-platform mobile applications."
    // },
    // {
    //     id: 9,
    //     companyName: "DataMind Analytics",
    //     position: "Data Analyst",
    //     location: "Dhaka, Bangladesh",
    //     status: "Not Applied",
    //     type: "Full-Time",
    //     salary: "৳40,000 - ৳65,000",
    //     description: "Looking for someone skilled in data visualization and SQL."
    // },
    // {
    //     id: 10,
    //     companyName: "InnoTech Labs",
    //     position: "DevOps Engineer",
    //     location: "Chattogram, Bangladesh",
    //     status: "Not Applied",
    //     type: "Remote",
    //     salary: "৳75,000 - ৳1,00,000",
    //     description: "Seeking a DevOps engineer familiar with Docker, CI/CD pipelines, and cloud services."
    // }
];

// all functionality added below
const cardsContainer = document.querySelector(".cards_container")
let allCardContainer = document.getElementById("all_card_container")
let interviewCardContainer = document.getElementById("interview_card_container")
let rejectedCardContainer = document.getElementById("rejected_card_container")
let emptyJobContainer = document.getElementById("no_job_container")
const totalApplication = document.getElementById('total_application')
const totalInterview = document.getElementById('total_interview')
const totalRejeced = document.getElementById('total_rejected')
let availableJobContainer = document.getElementById("available_job")

// initialy hidden interview and rejected container
interviewCardContainer.classList.add("hidden")
rejectedCardContainer.classList.add("hidden")


// tab switched functionality
function tabSwitch(tab) {
    const allTab = document.getElementById("all_tab");
    const interviewTab = document.getElementById("interview_tab");
    const rejectedTab = document.getElementById("rejected_tab");
    const tabs = document.getElementById("tabs_container").children;

    for (const tab of tabs) {
        tab.classList.remove("bg-blue-500", "text-white")
        tab.classList.add("bg-white", "shadow-sm")
    }

    if (tab === "all_tab") {
        allTab.classList.remove("bg-white", "shadow-sm")
        allTab.classList.add("bg-blue-500", "text-white")
        rejectedCardContainer.classList.add("hidden")
        interviewCardContainer.classList.add("hidden")
        allCardContainer.classList.remove("hidden")
        availableJobContainer.innerHTML = allCardContainer.children.length;
    } else if (tab === "interview_tab") {

        interviewTab.classList.remove("bg-white", "shadow-sm")
        interviewTab.classList.add("bg-blue-500", "text-white")
        rejectedCardContainer.classList.add("hidden");
        allCardContainer.classList.add("hidden");
        interviewCardContainer.classList.remove("hidden");
        availableJobContainer.innerHTML = interviewCardContainer.children.length;
    } else {
        rejectedTab.classList.remove("bg-white", "shadow-sm")
        rejectedTab.classList.add("bg-blue-500", "text-white")
        allCardContainer.classList.add("hidden");
        interviewCardContainer.classList.add("hidden");
        rejectedCardContainer.classList.remove("hidden");
        availableJobContainer.innerHTML = rejectedCardContainer.children.length;
    }
}

// render all application initialy
function renderAllApplications(applications) {
    for (const application of applications) {
        const card = document.createElement("div");
        card.classList.add("application_card")
        card.innerHTML = `
              <div class="p-4 rounded-md bg-white shadow-sm flex items-center justify-between">
                  <div class="">
                      <h3 class="text-xl font-bold opacity-80">${application.companyName}</h3>
                      <h4 class="text-lg font-medium opacity-60 mb-5 mt-2">${application.position}</h4>
                      <h5 class="opacity-60"><span>${application.location} . </span><span>${application.type} . </span><span>${application.salary} . </span></h5>
                      <button class="btn uppercase bg-slate-300 font-semibold mb-5 mt-5 status_btn">${application.status}</button>
                      <p class="text-gray-700 mb-5">${application.description}</p>
                      <button                          
                        class="btn interview_btn border-green-500 text-[16px] font-semibold hover:bg-green-400 hover:text-white duration-300 uppercase text-green-500">Interview</button>
                      <button
                        class="btn rejected_btn border-red-500 text-[16px] font-semibold ml-2 hover:bg-red-400 hover:text-white duration-300 uppercase text-red-500">Rejected</button>
                  </div>
                  <button 
                        class="hover:text-red-500 delete_btn duration-300 cursor-pointer p-5">
                      <i class="fa-solid fa-trash"></i>
                  </button>
              </div>
        `
        allCardContainer.append(card);
    }
}
renderAllApplications(applications);


// card container event control
cardsContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".application_card");
    let statusBtn = card.querySelector(".status_btn");
    if (event.target.closest(".delete_btn")) {
        card.remove();
    } else if (event.target.classList.contains("interview_btn")) {
        const emptyBox = interviewCardContainer.querySelector(".empty_massage")
        if(emptyBox){
            emptyBox.remove();
        }
        interviewCardContainer.append(card)
        statusBtn.innerHTML = "Interview"
    } else if (event.target.classList.contains("rejected_btn")) {
        const emptyBox = rejectedCardContainer.querySelector(".empty_massage")
        if(emptyBox){
            emptyBox.remove();
        }
        rejectedCardContainer.append(card)
        statusBtn.innerHTML = "Rejected"
    }
    updateJobCounter()
    renderEmptyContainer();
})

// updateJob counter
function updateJobCounter() {
    const applicationCount = allCardContainer.children.length;
    const interviewCount = interviewCardContainer.children.length;
    const rejectedCount = rejectedCardContainer.children.length;
    totalApplication.innerHTML = applicationCount;
    totalInterview.innerHTML = interviewCount;
    totalRejeced.innerHTML = rejectedCount;
}
updateJobCounter();

// all containers
function renderEmptyContainer() {
    const containers = [allCardContainer, interviewCardContainer, rejectedCardContainer];
    for (const container of containers) {
        if (container.children.length < 1) {
            container.innerHTML =
                `
        <section class="bg-white shadow-sm rounded-md my-4 text-center empty_massage p-44">
            <img src="./images/document.png" alt="" class="mx-auto">
            <h2 class="text-2xl font-bold opacity-80 my-3">No Jobs Available</h2>
            <p class="text-gray-700">Check back soon for new job opportunities</p>
        </section>
    `
        }
    }
}
renderEmptyContainer();