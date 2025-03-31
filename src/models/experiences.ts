interface responsability {
    description: string;
}

interface experience {
    id: number;
    position: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    responsabilities: responsability[];
}

export default experience;