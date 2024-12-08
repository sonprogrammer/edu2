export interface Section {
    id: number;
    title: string;
    ImageUrl: string;
    content: string | Portfolio[]
}

export interface Portfolio{
    projectTitle: string;
    description: string;
    image: string
}
