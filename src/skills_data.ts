import SkillService from './services/skillsService';
import { readFileSync } from 'fs';

const skillService = new SkillService();
const skills = skillService.getSkills();

function getHTMLlayout(url: string) {
  try {
    const response = readFileSync(url,"utf-8");
    return response;
  } catch (error) {
    console.error('Error al obtener el HTML:', error);
    return null;
  }
}

function genSkillsHTML() {
  const skillLayoutHTML = getHTMLlayout("src/skill_layout.html");
  if (!skillLayoutHTML) return;

  skills.forEach(skill => {
    
  });
}

genSkillsHTML();