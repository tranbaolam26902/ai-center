// Start: Show/Hide Sidebar
const btnSidebar = document.querySelector('#btn-sidebar');
const sidebar = document.querySelector("#sidebar");
const content = document.querySelector("#content");
const sidebarOverlay = document.querySelector("#sidebar-overlay");
const ToggleSidebar = function() {
    sidebar.classList.toggle('sidebar--active');
    content.classList.toggle('content--active');
    sidebarOverlay.classList.toggle('sidebar-overlay--show')
}
btnSidebar.addEventListener('click', ToggleSidebar);
sidebarOverlay.addEventListener('click', ToggleSidebar);
// End: Show/Hide Sidebar
