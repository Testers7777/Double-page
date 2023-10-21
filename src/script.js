const stpagename = document.querySelector('.stpagename')
const ndpagename = document.querySelector('.ndpagename')
const stpage = document.querySelector('.stpage')
const ndpage = document.querySelector('.ndpage')

window.addEventListener('DOMContentLoaded', () => {
    changePage(1)
})

stpagename.addEventListener('click', () => {
    changePage(1)
})

ndpagename.addEventListener('click', () => {
    changePage(2)
})

function changePage(index) {
    if (index == 1) {
        stpagename.classList.add('active')
        stpage.classList.add('active')
        ndpagename.classList.remove('active')
        ndpage.classList.remove('active')
    } else {
        ndpagename.classList.add('active')
        ndpage.classList.add('active')
        stpage.classList.remove('active')
        stpagename.classList.remove('active')
    }
}