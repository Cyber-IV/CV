import SkillService from '../dist/services/skillsService.js';
import { getHTMLlayout } from './utils.js';

const skillService = new SkillService();
const skills = skillService.getSkills();

async function genSkillsHTML() {
  const skillLayoutHTML = await getHTMLlayout("/src/templates/skill_layout.html");
  if (!skillLayoutHTML) return;

  const parser = new DOMParser();

  skills.forEach(skill => {
    const doc = parser.parseFromString(skillLayoutHTML, 'text/html');
  
    const skillHTML = doc.body.firstElementChild as HTMLDivElement;
    if (!skillHTML) return;

    let skillElement = skillHTML.querySelector('.skill_name');
    if (skillElement) skillElement.textContent = skill.name;
    skillElement = skillHTML.querySelector('.skill_percent');
    if (skillElement){
      skillElement.textContent = String(skill.percentaje)+'%';
      skillElement.setAttribute('style', `width: ${skill.percentaje}%`);
    } 
    skillElement = skillHTML.querySelector('.skill_image');
    if (skillElement) skillElement.setAttribute('src', skill.image);

    document.querySelector('#skills')?.appendChild(skillHTML);
  });
}
genSkillsHTML();