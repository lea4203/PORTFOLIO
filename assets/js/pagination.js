document.addEventListener('DOMContentLoaded', function(){
    let itemsPerPage = 3;

    let projects = document.querySelectorAll('.custom-card');
    let totalProjects = projects.length;

    let totalPages = Math.ceil(totalProjects / itemsPerPage);
    
    showPage(1);

    function showPage(pageNumber) {
        let start = (pageNumber - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        projects .forEach(function(project, index){
            if(index >= start && index < end) {
                project.style.display = 'block';
            }else {
                project.style.display = 'none'
            }
        });
    }

    function createPaginationLinks() {
        let paginationContainer = document.getElementById('pagination-container');

        for(let i = 1; i<= totalPages; i++) {
            let pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.innerHTML = i;
            pageLink.addEventListener('click',function(event){
                event.preventDefault();
                let pageNumber = parseInt(event.target.innerHTML);
                showPage(pageNumber);
            });
            paginationContainer.appendChild(pageLink);
        }
    }
    createPaginationLinks();
});