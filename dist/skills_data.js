import SkillService from '../dist/services/skillsService.js';
const skillService = new SkillService();
const skills = skillService.getSkills();
async function getHTMLlayout(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al obtener el HTML: ${response.statusText}`);
        }
        return await response.text();
    }
    catch (error) {
        console.error('Error al obtener el HTML:', error);
        return null;
    }
}
let skillsHTLM = [];
async function genSkillsHTML() {
    const skillLayoutHTML = await getHTMLlayout("/src/templates/skill_layout.html");
    if (!skillLayoutHTML)
        return;
    skills.forEach(skill => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = skillLayoutHTML;
        const skillHTML = tempDiv.firstChild; // Asegúrate de que sea el tipo correcto
        skillsHTLM.push(skillHTML);
    });
}
genSkillsHTML();
export { skillsHTLM };
//# sourceMappingURL=skills_data.js.map