import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
  }
  
  const ELEMENT_DATA_1: PeriodicElement[] = [
    {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      description: `Helium is a chemical element with symbol He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li',
      description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
          silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
          lightest solid element.`
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be',
      description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
          relatively rare element in the universe, usually occurring as a product of the spallation of
          larger atomic nuclei that have collided with cosmic rays.`
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B',
      description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
          by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
          low-abundance element in the Solar system and in the Earth's crust.`
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C',
      description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
          and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
          to group 14 of the periodic table.`
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N',
      description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
          discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O',
      description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
           the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
           agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F',
      description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
          lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
          conditions.`
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`
    },
  ];
  
  export interface User {
    name: string;
    email: string;
    phone: string;
    addresses?: Address[] | MatTableDataSource<Address>;
  }
  
  export interface Address {
    street: string;
    zipCode: string;
    city: string;
  }
  
  export interface UserDataSource {
    name: string;
    email: string;
    phone: string;
    addresses?: MatTableDataSource<Address>;
  }
  
  export const USERS: User[] = [
    {
      name: "Mason",
      email: "mason@test.com",
      phone: "9864785214",
      addresses: [
        {
          street: "Street 1",
          zipCode: "78542",
          city: "Kansas"
        },
        {
          street: "Street 2",
          zipCode: "78554",
          city: "Texas"
        }
      ]
    },
    {
      name: "Eugene",
      email: "eugene@test.com",
      phone: "8786541234",
    },
    {
      name: "Jason",
      email: "jason@test.com",
      phone: "7856452187",
      addresses: [
        {
          street: "Street 5",
          zipCode: "23547",
          city: "Utah"
        },
        {
          street: "Street 5",
          zipCode: "23547",
          city: "Ohio"
        }
      ]
    }
  ];

  export class User_2 {
    name: string;
    position: string;
    weight: string;
    symbol: string;
    test?: test2;
    child?: Address[] | MatTableDataSource<Address>;
    addresses?: Address[];
  }
  export class test2{
    typename: string;
    id: string;
  }

  export class User_3 {
    department: string;
    abbreviation: string;
    child?: Address_2[] | MatTableDataSource<Address_2>;
    newaddresses?: Address_2[] | MatTableDataSource<Address_2>;
  }
  
  export class Address {
    street: string;
    zipCode: string;
    city: string;
  }

  export class Address_2 {
    newstreet: string;
    newzipCode: string;
  }
  
  // export class UserDataSource_2 {
  //   name: string;
  //   position: string;
  //   weight: string;
  //   symbol: string;
  //   addresses?: MatTableDataSource<Address>;
  // }

  export const USERS_2: User_2[] = [
    {
      name: "Mason",
      position: "mason@test.com",
      weight: "9864785214",
      symbol: "De",
      test: {typename:"jsd",id:"jxgh"},
      addresses: [
        {
          street: "Street 1",
          zipCode: "78542",
          city: "Kansas"
        },
        {
          street: "Street 2",
          zipCode: "78554",
          city: "Texas"
        }
      ]
    },
    {
      name: "Eugene",
      position: "2@test.com",
      weight: "7428654",
      symbol: "Ne",
      test: {typename:"2jsd",id:"jxgh"},
    },
    {
      name: "Jason",
      position: "3@test.com",
      weight: "0598379",
      symbol: "La",
      test: {typename:"3jsd",id:"jxgh"},
      addresses: [
        {
          street: "Street 5",
          zipCode: "23547",
          city: "Utah"
        },
        {
          street: "Street 5",
          zipCode: "23547",
          city: "Ohio"
        }
      ]
    }
  ];

  export const USERS_3: User_3[] = [
    {
      department: "1name",
      abbreviation: "mason@test.com",
      newaddresses: [
        {
          newstreet: "1 Street 1",
          newzipCode: "78542"
        },
        {
          newstreet: "2 Street 2",
          newzipCode: "95165"
        }
      ]
    },
    {
      department: "2name",
      abbreviation: "2mason@test.com",
    },
    {
      department: "3name",
      abbreviation: "3mason@test.com",
      newaddresses: [
        {
          newstreet: "3 Street 3",
          newzipCode: "854226"
        },
        {
          newstreet: "4 Street 4",
          newzipCode: "33333"
        }
      ]
    }
  ];
