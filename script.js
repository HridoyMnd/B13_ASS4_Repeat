
// tab switched functionality
function tabSwitch(tab) {
    const allTab = document.getElementById("all_tab");
    const interviewTab = document.getElementById("interview_tab");
    const rejectedTab = document.getElementById("rejected_tab");
    const tabs = document.getElementById("tabs_container").children;
    const allCardContainer = document.getElementById("all_card_container")
    const interviewCardContainer = document.getElementById("interview_card_container")
    const rejectedCardContainer = document.getElementById("rejected_card_container")

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
    } else if (tab === "interview_tab") {
        interviewTab.classList.remove("bg-white", "shadow-sm")
        interviewTab.classList.add("bg-blue-500", "text-white")
        rejectedCardContainer.classList.add("hidden");
        allCardContainer.classList.add("hidden");
        interviewCardContainer.classList.remove("hidden");
    } else {
        rejectedTab.classList.remove("bg-white", "shadow-sm")
        rejectedTab.classList.add("bg-blue-500", "text-white")
        allCardContainer.classList.add("hidden");
        interviewCardContainer.classList.add("hidden");
        rejectedCardContainer.classList.remove("hidden");
    }
}
