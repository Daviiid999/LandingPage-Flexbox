const section_home = document.getElementById('home');
const section_about = document.getElementById('about');
const section_projects = document.getElementById('projects');
const section_team = document.getElementById('team');
const section_gallery = document.getElementById('gallery');
const section_publications = document.getElementById('publications');
const section_contact = document.getElementById('contact');

const link_home = document.getElementById('link-home');
const link_about = document.getElementById('link-about');
const link_projects = document.getElementById('link-projects');
const link_team = document.getElementById('link-team');
const link_gallery = document.getElementById('link-gallery');
const link_publications = document.getElementById('link-publications');
const link_contact = document.getElementById('link-contact');

window.addEventListener('scroll', (e) => {
    if (section_home.getBoundingClientRect().top<=0 && section_home.getBoundingClientRect().bottom>=0){
        link_home.classList.add('active');
        link_home.children[0].classList.add('selected');
    } else {
        link_home.classList.remove('active');
        link_home.childNodes[0].classList.remove('selected');
    }

    if (section_about.getBoundingClientRect().top<=0 && section_about.getBoundingClientRect().bottom>=0){
        link_about.classList.add('active');
        link_about.children[0].classList.add('selected');
    } else {
        link_about.classList.remove('active');
        link_about.childNodes[0].classList.remove('selected');
    }

    if (section_projects.getBoundingClientRect().top<=0 && section_projects.getBoundingClientRect().bottom>=0){
        link_projects.classList.add('active');
        link_projects.children[0].classList.add('selected');
    } else {
        link_projects.classList.remove('active');
        link_projects.childNodes[0].classList.remove('selected');
    }

    if (section_team.getBoundingClientRect().top<=0 && section_team.getBoundingClientRect().bottom>=0){
        link_team.classList.add('active');
        link_team.children[0].classList.add('selected');   
    } else {
        link_team.classList.remove('active');
        link_team.childNodes[0].classList.remove('selected');
    }

    if (section_gallery.getBoundingClientRect().top<=0 && section_gallery.getBoundingClientRect().bottom>=0){
        link_gallery.classList.add('active');
        link_gallery.children[0].classList.add('selected');
    } else {
        link_gallery.classList.remove('active');
        link_gallery.childNodes[0].classList.remove('selected');
    }

    if (section_publications.getBoundingClientRect().top<=0 && section_publications.getBoundingClientRect().bottom>=0){
        link_publications.classList.add('active');
        link_publications.children[0].classList.add('selected');
    } else {
        link_publications.classList.remove('active');
        link_publications.childNodes[0].classList.remove('selected');
    }

    if (section_contact.getBoundingClientRect().top<=0 && section_contact.getBoundingClientRect().bottom>=0){
        link_contact.classList.add('active');
        link_contact.children[0].classList.add('selected');
    } else {
        link_contact.classList.remove('active');
        link_contact.childNodes[0].classList.remove('selected');
    }
});
