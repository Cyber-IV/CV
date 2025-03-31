import ExperienceService from "../dist/services/experienceService.js";
import { getHTMLlayout } from "./utils.js";
const experienceService = new ExperienceService();
const experiences = experienceService.getExperiences();
async function genExperiencesHTML() {
    const expLayoutHTML = await getHTMLlayout("/src/templates/experience_layout.html");
    if (!expLayoutHTML)
        return;
    const parser = new DOMParser();
    experiences.forEach(experience => {
        const doc = parser.parseFromString(expLayoutHTML, 'text/html');
        const expHTML = doc.body.firstElementChild;
        if (!expHTML)
            return;
        let expElement = expHTML.querySelector('.experience_position');
        if (expElement)
            expElement.textContent = experience.position;
        expElement = expHTML.querySelector('.experience_company');
        if (expElement)
            expElement.textContent = experience.company;
        expElement = expHTML.querySelector('.experience_location');
        if (expElement)
            expElement.textContent = experience.location;
        expElement = expHTML.querySelector('.experience_date-start');
        let dateStart = experience.startDate.toLocaleDateString('es-MX', { year: 'numeric', month: 'long' });
        if (expElement)
            expElement.textContent = dateStart;
        expElement = expHTML.querySelector('.experience_date-end');
        let dateEnd = experience.endDate.toLocaleDateString('es-MX', { year: 'numeric', month: 'long' });
        if (expElement)
            expElement.textContent = dateEnd;
        expElement = expHTML.querySelector('.responsibilities_list');
        if (expElement) {
            experience.responsabilities.forEach(responsability => {
                const li = document.createElement('li');
                li.classList.add('responsibility_item');
                li.textContent = responsability.description;
                expElement.appendChild(li);
            });
        }
        document.querySelector('#experiences_list')?.appendChild(expHTML);
    });
}
genExperiencesHTML();
//# sourceMappingURL=experiences_data.js.map