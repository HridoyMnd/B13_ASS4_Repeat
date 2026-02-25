
// tab switched functionality
function tabSwitch(tab) {
    const allTab = document.getElementById("all_tab");
    const interviewTab = document.getElementById("interview_tab");
    const rejectedTab = document.getElementById("rejected_tab");
    const tabs = document.getElementById("tabs_container").children;
    for(const tab of tabs){
        tab.classList.remove("bg-blue-500", "text-white")
        tab.classList.add("bg-white", "shadow-sm")  
    }
    
    if (tab === "all_tab") {
        allTab.classList.remove("bg-white", "shadow-sm")
        allTab.classList.add("bg-blue-500", "text-white")
    } else if (tab === "interview_tab") {
        interviewTab.classList.remove("bg-white", "shadow-sm")
        interviewTab.classList.add("bg-blue-500", "text-white")
    } else {
        rejectedTab.classList.remove("bg-white", "shadow-sm")
        rejectedTab.classList.add("bg-blue-500", "text-white")
    }
}
