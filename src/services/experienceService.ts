import Experience from '../models/experiences';

class ExperienceService {
    private experiences: Experience[] = [
        {
            id: 1,
            position: 'Desarrollador Software & Full Stack',
            company: 'Industrias Dabe S.A. de C.V.',
            location: 'Monterrey, N.L., México',
            startDate: new Date('2022-04-01'),
            endDate: new Date('2023-08-01'),
            responsabilities: [
                { description: 'Creación de paginas web y gestión de e-commerce' },
                { description: 'Creación de aplicaciones para externer funciones del ERP Aspel SAE & PROD' },
                { description: 'Creación de reportes de finanzas e inventarios mediante consultas' },
            ],
        },
        {
            id: 2,
            position: 'Desarrollador Software',
            company: 'SIKAD',
            location: 'Monterrey, N.L., México',
            startDate: new Date('2020-04-01'),
            endDate: new Date('2022-04-01'),
            responsabilities: [
                { description: 'Creación de aplicaciónes de escritorio y automatización para mejora de procesos internos' },
                { description: 'Ampliación y automatización de funciones del ERP Aspel SAE & PROD' },
                { description: 'Desarrollo y consumo de APIs RESTful en formato JSON' },
            ],
        },
        {
            id: 3,
            position: 'Practicante Frontend',
            company: 'Milenio Diario S.A. de C.V.',
            location: 'Monterrey, N.L., México',
            startDate: new Date('2019-06-01'),
            endDate: new Date('2019-09-01'),
            responsabilities: [
                { description: 'Mantenimiento de paginas web para equipos locales de baloncesto' },
                { description: 'Consumo e implementación de APIs' },
            ],
        },
    ];
}