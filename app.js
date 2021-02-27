const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')


const btnTwitter = document.querySelector('#btnTwitter')
const btnInstagram = document.querySelector('#btnInstagram')
const btnGithub = document.querySelector('#btnGithub')
const btnLinkedin = document.querySelector('#btnLinkedin')

const header = document.querySelector('header')

const footers = document.querySelectorAll('.footer')

const li = document.querySelector('.active')

const logo = document.querySelector('#logo')

var telaAtual = 1

window.onload = () => {
    atualizaPagina()
    atualizaHeader()
    atualizaFooter()
}

function mudarTela (tela) {
    telaAtual = tela
    atualizaHeader()
    atualizaFooter()
    atualizaPagina()
}

function atualizaPagina () {
    removeClassPage()
    switch (telaAtual) {
        case 1:
            page1.classList.add('tela1')
            page2.classList.add('tela1')
            page3.classList.add('tela1')
            page4.classList.add('tela1')
        break
        case 2:
            page1.classList.add('tela2')
            page2.classList.add('tela2')
            page3.classList.add('tela2')
            page4.classList.add('tela2')
        break
        case 3:
            page1.classList.add('tela3')
            page2.classList.add('tela3')
            page3.classList.add('tela3')
            page4.classList.add('tela3')
        break
        case 4:
            page1.classList.add('tela4')
            page2.classList.add('tela4')
            page3.classList.add('tela4')
            page4.classList.add('tela4')
        break
    }
}

function removeClassPage () {
    page1.classList.remove('tela1')
    page2.classList.remove('tela1')
    page3.classList.remove('tela1')
    page4.classList.remove('tela1')
    page1.classList.remove('tela2')
    page2.classList.remove('tela2')
    page3.classList.remove('tela2')
    page4.classList.remove('tela2')
    page1.classList.remove('tela3')
    page2.classList.remove('tela3')
    page3.classList.remove('tela3')
    page4.classList.remove('tela3')
    page1.classList.remove('tela4')
    page2.classList.remove('tela4')
    page3.classList.remove('tela4')
    page4.classList.remove('tela4')
}

function atualizaFooter () {
    removeClassFooter()
    switch (telaAtual) {
        case 1:
            footers.forEach(element => {
                element.classList.add('tela1')
            });
        break
        case 2:
            footers.forEach(element => {
                element.classList.add('tela2')
            });
        break
        case 3:
            footers.forEach(element => {
                element.classList.add('tela3')
            });
        break
        case 4:
            footers.forEach(element => {
                element.classList.add('tela4')
            });
        break
    }
}

function removeClassFooter () {
    footers.forEach(element => {
        element.classList.remove('tela1')
        element.classList.remove('tela2')
        element.classList.remove('tela3')
        element.classList.remove('tela4')
    });
}

function atualizaHeader () {
    removeClass()
    switch (telaAtual) {
        case 1:
            logo.classList.add('twitter')
            btnTwitter.style.borderBottom = "2px solid #2980b9"
            header.style.borderBottom = "1px solid #297fb9a2"
        break
        case 2:
            logo.classList.add('instagram')
            btnInstagram.style.borderBottom = "2px solid #dc446f"
            header.style.borderBottom = "1px solid #dc446fb0"
        break
        case 3:
            logo.classList.add('github')
            btnGithub.style.borderBottom ="2px solid #24292e"
            header.style.borderBottom = "1px solid #24292e91"
        break
        case 4:
            logo.classList.add('linkedin')
            btnLinkedin.style.borderBottom = "2px solid #297fb9"
            header.style.borderBottom = "1px solid #297fb9a2"
        break
    }
}

function removeClass () {
    btnTwitter.style.borderBottom = "none"
    btnInstagram.style.borderBottom = "none"
    btnGithub.style.borderBottom = "none"
    btnLinkedin.style.borderBottom = "none"
    logo.classList.remove('twitter')
    logo.classList.remove('instagram')
    logo.classList.remove('github')
    logo.classList.remove('linkedin')
}

