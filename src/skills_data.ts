import SkillService from './services/skillsService';
import { readFileSync } from 'fs';

const skillService = new SkillService();
const skills = skillService.getSkills();

function getHTMLlayout(url:string) {
  try {
    const response = readFileSync(url,"utf-8");
    return response;
  } catch (error) {
    console.error('Error al obtener el HTML:', error);
    return null;
  }
}
function updElement(html: string, nameClass: string, newContent: string): string {
  const regex = new RegExp(`<([a-z]+)([^>]*)class="${nameClass}"([^>]*)>(.*?)</\\1>`, 'is');
  return html.replace(regex, `<$1$2class="${nameClass}"$3>${newContent}</$1>`);
}

function genSkillsHTML() {
  const skillLayoutHTML = getHTMLlayout("src/skill_layout.html");
  if (!skillLayoutHTML) return;

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
