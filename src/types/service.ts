export type Service = {
    sections: {
        id: string;
        title: string;
        description: string;
        navReference: string;
        cards: {
            id: string;
            title: string;
            description: string;
            icon: string;
            href: string;
        }[];
    }[];
}