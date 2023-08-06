const sideLinks = document.querySelectorAll(".sidebar .side-menu li a:not(.logout)");

sideLinks.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click',() => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
}); 

const menuBar = document.querySelector('.content nav .bx-menu');
const sideBar = document.querySelector('div.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close')
})

const searchBtn = document.querySelector('.content nav form .form-input .search-btn');
const searchBtnIcon = document.querySelector('.content nav form .form-input .search-btn .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {    
    if(window.innerWidth < 576){
        e.preventDefault;
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchBtnIcon.classList.replace('bx-search', 'bx-x')
        }else(
            searchBtnIcon.classList.replace('bx-x', 'bx-search')
        )
    }  
})

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function() {
    if(this.checked){
        document.body.classList.add('dark');
    }else {
        document.body.classList.remove('dark');
    }
})