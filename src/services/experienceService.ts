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
                { description: 'Automatización de reportes financieros e inventarios mediante consultas SQL' },
                { description: 'Apoyo en inventarios físicos, registros de productos y movimientos de almacén'},
                { description: 'Recolección y armado de pedidos, así como carga de mercancía para distribución'},
                { description: 'Extensión de funciones del ERP Aspel SAE & PROD con aplicaciones software personalizadas' },
                { description: 'Desarrollo de plataformas web y gestion de e-commerce con Woocommerce y modificación de plugins' },
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
                { description: 'Integración y personalización de funciones del ERP Aspel SAE & PROD mediante aplicaciones de escritorio' },
                { description: 'Consumo y desarrollo de APIs RESTful en formato JSON, para interoperabilidad entre sistemas internos y externos' },
                { description: 'Soporte técnico a soluciones implementadas y atención directa a clientes para identificar necesidades, dar seguimiento y adaptar funcionalidades' },
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
                { description: 'Consumo de APIs RESTful para mostrar estadísticas deportivas en tiempo real' },
                { description: 'Colaboré en la actualización de sitios web usnado componentes reutilizables en JavaScript y SCSS' },
            ],
        },
    ];

    public getExperiences(): Experience[] {
        return this.experiences;
    }
}

export default ExperienceService;