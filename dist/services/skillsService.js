class SkillService {
    constructor() {
        this.Skills = [
            { id: 1, name: 'HTML5', percentaje: 75, image: '../assets/img/html-5.png' },
            { id: 2, name: 'CSS3', percentaje: 70, image: '../assets/img/css3.png' },
            { id: 3, name: 'SCSS', percentaje: 60, image: '../assets/img/sass.png' },
            { id: 4, name: 'C#', percentaje: 60, image: '../assets/img/c-sharp.png' },
            { id: 5, name: 'MySQL', percentaje: 70, image: '../assets/img/mysql.png' },
            /*     { id: 6, name: 'Ibexpert', percentaje: 75, image: '../assets/img/' },
                { id: 7, name: 'Aspel SAE', percentaje: 72, image: '../assets/img/' },
                { id: 8, name: 'Aspel PROD', percentaje: 50, image: '../assets/img/' },
             */ 
        ];
    }
    getSkills() {
        return this.Skills;
    }
    getSkillById(id) {
        return this.Skills.find(skill => skill.id === id);
    }
}
export default SkillService;
//# sourceMappingURL=skillsService.js.map