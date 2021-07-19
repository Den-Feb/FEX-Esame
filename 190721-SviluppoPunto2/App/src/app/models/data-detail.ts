export class Interest {
    id: number;
    type_interest: string;
}

export class Attraction {
    id: number;
    name_attractions: string;
    state_attractions: string;
    open_attractions: string;
    close_attractions: string;
    people_enter: number;
    people_exit: number;
}

export class Meteo {
    id: number;
    day: string;
    degrees: string;
}

export class DataDetail {
    id: number;
    name: string;
    interest: Interest[];
    population: string;
    attractions: Attraction[];
    meteo: Meteo[];
}

export class RootObject {
    data_detail: DataDetail[];
}