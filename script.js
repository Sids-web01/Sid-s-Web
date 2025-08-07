 const navLinks = document.querySelectorAll('header nav a')
 const logo = document.querySelector('.logo')

 const sections = document.querySelectorAll('section')
 const menuicon = document.querySelector('#menu-icon')
 const navbar = document.querySelector('header nav')

 menuicon.addEventListener('click', () =>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
 })
 
 const activiepage = () =>{
    const header = document.querySelector('header')
    const barsbox = document.querySelector('.bars-box')

    header.classList.remove('active')
    setTimeout(() =>{
        header.classList.add('active')
    }, 1100)




    navLinks.forEach(link =>{
        link.classList.remove('active')
    })

    barsbox.classList.remove('active')
    setTimeout(() =>{
        barsbox.classList.add('active')
    }, 1100)

    sections.forEach(section =>{
        section.classList.remove('active')
    })
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
 }

 navLinks.forEach((link, idx) =>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')){
            activiepage()

            link.classList.add('active')

            setTimeout(() =>{
                sections[idx].classList.add('active')

            },1100)


        }
    })
 })
 
 logo.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
        activiepage()

        navLinks[0].classList.add('active')
        setTimeout(() =>{
            sections[idx].classList.add('active')

        },1100)
    }
 })
 const resumebtns = document.querySelectorAll('.resume-btn')

 resumebtns.forEach((btn, idx) =>{
    btn.addEventListener('click', () =>{
        const resumeDetails= document.querySelectorAll('.resume-detail')

        resumebtns.forEach(btn =>{
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetails.forEach(detail =>{
            detail.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')
        
    })
 })