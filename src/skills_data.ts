import SkillService from '../dist/services/skillsService.js';

const skillService = new SkillService();
const skills = skillService.getSkills();

async function getHTMLlayout(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al obtener el HTML: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error al obtener el HTML:', error);
    return null;
  }
}

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