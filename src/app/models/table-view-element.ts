export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export interface ElementTwo {
    name: string;
    position: number;
    symbol: string;
}
export const ELEMENT_DATA: Element[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];

export const ELEMENT_DATA_2: ElementTwo[] = [
    { position: 1, name: 'Hydrogen',  symbol: 'H' },
    { position: 2, name: 'Helium',  symbol: 'He' },
    { position: 3, name: 'Lithium',  symbol: 'Li' },
    { position: 4, name: 'Beryllium',  symbol: 'Be' },
    { position: 5, name: 'Boron',  symbol: 'B' },
];