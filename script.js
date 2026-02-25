
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
    {
        id: 3,
        companyName: "Digital Spark",
        position: "UI/UX Designer",
        location: "Sylhet, Bangladesh",
        status: "Not Applied",
        type: "Part-Time",
        salary: "৳30,000 - ৳40,000",
        description: "Looking for a creative designer with Figma and modern UI design experience."
    },
    {
        id: 4,
        companyName: "NextGen IT",
        position: "MERN Stack Developer",
        location: "Remote",
        status: "Not Applied",
        type: "Contract",
        salary: "৳70,000 - ৳90,000",
        description: "We need a MERN stack developer for building scalable web applications."
    },
    {
        id: 5,
        companyName: "SoftEdge Technologies",
        position: "Junior Web Developer",
        location: "Rajshahi, Bangladesh",
        status: "Not Applied",
        type: "Internship",
        salary: "৳15,000 - ৳20,000",
        description: "Great opportunity for beginners to gain hands-on experience in web development."
    },
    {
        id: 6,
        companyName: "Skyline Digital",
        position: "Full Stack Developer",
        location: "Khulna, Bangladesh",
        status: "Not Applied",
        type: "Full-Time",
        salary: "৳60,000 - ৳85,000",
        description: "Looking for a full stack developer experienced in React, Node.js, and PostgreSQL."
    },
    {
        id: 7,
        companyName: "Bright Future Tech",
        position: "Software Engineer",
        location: "Dhaka, Bangladesh",
        status: "Not Applied",
        type: "Full-Time",
        salary: "৳55,000 - ৳80,000",
        description: "Join our engineering team to build scalable SaaS products."
    },
    {
        id: 8,
        companyName: "Creative Apps Studio",
        position: "Mobile App Developer",
        location: "Remote",
        status: "Not Applied",
        type: "Contract",
        salary: "৳65,000 - ৳95,000",
        description: "Hiring a React Native developer for cross-platform mobile applications."
    },
    {
        id: 9,
        companyName: "DataMind Analytics",
        position: "Data Analyst",
        location: "Dhaka, Bangladesh",
        status: "Not Applied",
        type: "Full-Time",
        salary: "৳40,000 - ৳65,000",
        description: "Looking for someone skilled in data visualization and SQL."
    },
    {
        id: 10,
        companyName: "InnoTech Labs",
        position: "DevOps Engineer",
        location: "Chattogram, Bangladesh",
        status: "Not Applied",
        type: "Remote",
        salary: "৳75,000 - ৳1,00,000",
        description: "Seeking a DevOps engineer familiar with Docker, CI/CD pipelines, and cloud services."
    }
];


// all functionality added below
const allCardContainer = document.getElementById("all_card_container")
const interviewCardContainer = document.getElementById("interview_card_container")
const rejectedCardContainer = document.getElementById("rejected_card_container")

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
        applicationDisplay(allCardContainer, allCardContainer.childNodes.length);
    } else if (tab === "interview_tab") {
        interviewTab.classList.remove("bg-white", "shadow-sm")
        interviewTab.classList.add("bg-blue-500", "text-white")
        rejectedCardContainer.classList.add("hidden");
        allCardContainer.classList.add("hidden");
        interviewCardContainer.classList.remove("hidden");
        applicationDisplay(interviewCardContainer, interviewCardContainer.childNodes.length)
    } else {
        rejectedTab.classList.remove("bg-white", "shadow-sm")
        rejectedTab.classList.add("bg-blue-500", "text-white")
        allCardContainer.classList.add("hidden");
        interviewCardContainer.classList.add("hidden");
        rejectedCardContainer.classList.remove("hidden");
        applicationDisplay(rejectedCardContainer, rejectedCardContainer.childNodes.length);
    }
}

// application card display funtionality
function applicationDisplay(container, containerLength) {
    if (containerLength < 1) {
        container.innerHTML =
            `
        <section class="bg-white shadow-sm rounded-md my-5 text-center p-44">
            <img src="./images/document.png" alt="" class="mx-auto">
            <h2 class="text-2xl font-bold opacity-80 my-3">No Jobs Available</h2>
            <p class="text-gray-700">Check back soon for new job opportunities</p>
        </section>
        `

    } else {
        console.log("Thik ache")
    }
}

// render all application initialy
function renderAllApplications() {
    for (const application of applications) {
        const card = document.createElement("div");
        card.innerHTML = `
              <div class="p-4 rounded-md bg-white shadow-sm flex items-center justify-between">
                  <div class="">
                      <h3 class="text-xl font-bold opacity-80">${application.companyName}</h3>
                      <h4 class="text-lg font-medium opacity-60 mb-5 mt-2">${application.position}</h4>
                      <h5 class="opacity-60"><span>${application.location} . </span><span>${application.type} . </span><span>${application.salary} . </span></h5>
                      <button class="btn uppercase bg-slate-300 font-semibold mb-5 mt-5">${application.status}</button>
                      <p class="text-gray-700 mb-5">${application.description}</p>
                      <button                          
                          class="btn border-green-500 text-[16px] font-semibold hover:bg-green-400 hover:text-white duration-300 uppercase text-green-500">Interview</button>
                      <button
                          class="btn border-red-500 text-[16px] font-semibold ml-2 hover:bg-red-400 hover:text-white duration-300 uppercase text-red-500">Rejected</button>
                  </div>
                  <button class="hover:text-red-500 duration-300 cursor-pointer p-5">
                      <i class="fa-solid fa-trash"></i>
                  </button>
              </div>
        `
        allCardContainer.append(card);
    }
}
renderAllApplications();