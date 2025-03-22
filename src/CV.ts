import SkillService from './services/skillsService';

const skillService = new SkillService();

const skills = skillService.getSkills();
console.log('Todos los skills:', skills);