import Skill from '../models/skills';

class SkillService {
  private Skills: Skill[] = [
    { id: 1, name: 'HTML5', percentaje: 87, image: '../assets/img/html-5.png' },
    { id: 2, name: 'CSS3', percentaje: 73, image: '../assets/img/css3.png' },
    { id: 3, name: 'JAVASCRIPT', percentaje: 50, image: '../assets/img/javascript.png' },
    { id: 4, name: 'SCSS', percentaje: 60, image: '../assets/img/sass.png' },
    { id: 5, name: 'C#', percentaje: 60, image: '../assets/img/c-sharp.png' },
    { id: 6, name: 'MySQL', percentaje: 70, image: '../assets/img/mysql.png' },
/*  { id: 7, name: 'Ibexpert', percentaje: 75, image: '../assets/img/' },
    { id: 8, name: 'Aspel SAE', percentaje: 72, image: '../assets/img/' },
    { id: 9, name: 'Aspel PROD', percentaje: 50, image: '../assets/img/' },
 */  ];

  getSkills(): Skill[] {
    return this.Skills;
  }

  getSkillById(id: number): Skill | undefined {
    return this.Skills.find(skill => skill.id === id);
  }
}

export default SkillService;
