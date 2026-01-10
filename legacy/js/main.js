const header = document.getElementsByClassName("header")[0]
const navbarLinks = [...document.getElementsByClassName("navbar__link")]
const sections = [...document.getElementsByTagName("section")]
const navbarSvg = document.getElementsByClassName("navbar__svg")[0]
const navbarUl = document.getElementsByClassName("navbar__ul")[0]
const tasaciones__button = document.getElementsByClassName("tasaciones__button")[0]
const form = document.getElementsByClassName("form")[0]
const form_close = document.getElementsByClassName("form__close")[0]

// ------------------------------------------------------------------

const changeHeaderClassScrolled = addOrRemove => header.classList[addOrRemove]("header__scrolled")

const changeActiveLink = () => {

    sections.forEach(section => {

        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight


        const scrollY = window.scrollY + header.clientHeight

        if (scrollY >= sectionTop && scrollY < (sectionTop + sectionHeight)) {

            const sectionId = section.getAttribute("id")

            navbarLinks.forEach(link => {

                const addOrRemove = link.getAttribute("href") === "#" + sectionId ? "add" : "remove"

                link.classList[addOrRemove]("navbar__linkActive")

            })

        }

    })

}

const ifMoblieCloseMenu = () => window.innerWidth < 768 && navbarUl.classList.toggle("show")

// ------------------------------------------------------------------

document.onscroll = () => {

    changeHeaderClassScrolled(window.scrollY === 0 ? "remove" : "add")

    changeActiveLink()

}

navbarSvg.onclick = () => navbarUl.classList.toggle("show")

navbarUl.onclick = () => {
    ifMoblieCloseMenu()
}

tasaciones__button.onclick = () => form.classList.add("showForm")

form_close.onclick = () => form.classList.remove("showForm")

form.onsubmit = e => {

    e.preventDefault()

    ifMoblieCloseMenu()

    console.log(e);

    const getValue = number => e.target[number].value

    const nombre = getValue(0)
    const email = getValue(1)
    const tipo_propiedad = getValue(2)
    const operacion = getValue(3)
    const direccion = getValue(4)
    const barrio = getValue(5)
    const superficie = getValue(6)
    const ambientes = getValue(7)

    const salto_linea = "%0a%0a"

    const mensaje = `Hola! Mi nombre es ${nombre} y estoy interesado/a en ${operacion} mi ${tipo_propiedad} ubicado/a en ${direccion}, ${barrio}.${salto_linea}Cuenta con ${superficie} m2 y ${ambientes} ambientes.${salto_linea}Para poder brindarles más información, pueden contactarse conmigo a través de este número de WhatsApp, o a través de mi correo electrónico ${email}.`

    window.location.href = `https://desouchespropiedades.com.ar/whatsapp/?text=${mensaje}`

}