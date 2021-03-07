export class Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export interface ElementTwo {
    department: string;
    abbreviation: string;
}
export const ELEMENT_DATA: Element[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];

export const ELEMENT_DATA_2: ElementTwo[] = [
    {  department: 'SOS',  abbreviation: 'SS' },
    {  department: 'HumanResources',  abbreviation: 'HR' },
    {  department: 'Dev',  abbreviation: 'D' },
    {  department: 'Test',  abbreviation: 'Te' },
    {  department: 'Managers',  abbreviation: 'Man' },
];