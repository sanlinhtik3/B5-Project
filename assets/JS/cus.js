var waypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
        if (direction === "down") {
            document.querySelector(".navbar").classList.add("navbar-control")
            document.querySelector(".navbar").classList.add("animate__fadeInDown")
            document.querySelector(".navbar").classList.add("shadow-zinc-300")
        } else {
            document.querySelector(".navbar").classList.remove("navbar-control")
            document.querySelector(".navbar").classList.remove("animate__fadeInDown")
            document.querySelector(".navbar").classList.remove("shadow-zinc-300")
        }
    },
    offset: '5%'
})


var waypoint = new Waypoint({
    element: document.getElementById('pricing'),
    handler: function(direction) {
        if (direction === "down") {
            document.querySelector(".footer-fixed").classList.add('show')
            document.querySelector(".footer-fixed").classList.add("animate__fadeInDown")
            console.log("down")
        } else {
            document.querySelector(".footer-fixed").classList.remove('show')
            document.querySelector(".footer-fixed").classList.remove("animate__fadeInDown")
            console.log("up")
        }
    },
    offset: '5%'
})




// Theme

let card = document.querySelectorAll('.card');

const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme','dark');
    document.querySelector('.navbar').classList.remove('shadow-lg');
    document.querySelector('.navbar').classList.add('pdf-border-zinc-800');
    localStorage.setItem('data-theme','dark');

    for(let x = 0; x < card.length; x++ ) {
        card[x].classList.remove('shadow-xl');
        card[x].classList.remove('border-0');
        card[x].classList.add('pdf-border-zinc-800');
    }
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme','light');
    document.querySelector('.navbar').classList.add('shadow-lg');
    document.querySelector('.navbar').classList.remove('border-bottom');
    document.querySelector('.navbar').classList.remove('pdf-border-zinc-800');

    localStorage.setItem('data-theme','light')

    for(let x = 0; x < card.length; x++ ) {
        card[x].classList.add('shadow-xl');
        card[x].classList.add('border-0');
        card[x].classList.remove('pdf-border-zinc-800');
    }
}



let changeTheme = document.getElementById('changeTheme');

changeTheme.addEventListener('change',  () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark') {
        changeThemeToLight();
    } else {
        changeThemeToDark()
    }
})

let theme = localStorage.getItem('data-theme');
if (theme === 'dark') {
    changeThemeToDark()
    changeTheme.setAttribute('checked','checked')
} else {
    changeThemeToLight()
}

// menu icon
let menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('show');
})