"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillService {
    constructor() {
        this.Skills = [
            { id: 1, name: 'HTML5', percentaje: 75, image: '' },
            { id: 2, name: 'CSS3', percentaje: 70, image: '' },
            { id: 3, name: 'SCSS', percentaje: 60, image: '' },
            { id: 4, name: 'C#', percentaje: 60, image: '' },
            { id: 5, name: 'SQL Server', percentaje: 70, image: '' },
            { id: 6, name: 'Ibexpert', percentaje: 80, image: '' },
            { id: 7, name: 'Aspel SAE', percentaje: 75, image: '' },
            { id: 8, name: 'Aspel PROD', percentaje: 50, image: '' },
        ];
    }
    getSkills() {
        return this.Skills;
    }
    getSkillById(id) {
        return this.Skills.find(skill => skill.id === id);
    }
}
exports.default = SkillService;
