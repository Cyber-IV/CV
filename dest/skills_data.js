"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skillsService_1 = __importDefault(require("./services/skillsService"));
const fs_1 = require("fs");
const skillService = new skillsService_1.default();
const skills = skillService.getSkills();
function getHTMLlayout(url) {
    try {
        const response = (0, fs_1.readFileSync)(url, "utf-8");
        return response;
    }
    catch (error) {
        console.error('Error al obtener el HTML:', error);
        return null;
    }
}
function updElement(html, nameClass, newContent) {
    const regex = new RegExp(`<([a-z]+)([^>]*)class="${nameClass}"([^>]*)>(.*?)</\\1>`, 'is');
    return html.replace(regex, `<$1$2class="${nameClass}"$3>${newContent}</$1>`);
}
function genSkillsHTML() {
    const skillLayoutHTML = getHTMLlayout("src/skill_layout.html");
    if (!skillLayoutHTML)
        return;
    skills.forEach(skill => {
        let newHtml = updElement(skillLayoutHTML, "skill_name", skill.name);
        console.log(newHtml);
    });
    /* const skillsContainer = document.getElementById('skills');
    if (skillsContainer) {
      skillsHTML.forEach(skill => skillsContainer.appendChild(skill));
    } else {
      console.error("No se encontró el contenedor con el ID 'skills container'");
    } */
}
