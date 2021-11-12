let persons = [
    {
        name: 'James',
        lastname: 'Bond',
        houses: [
            {
                name: 'Casino Royale',
                name: 'NY Condos'
            }
        ]
    },
    {
        name: 'Leia',
        lastname: 'Princess',
        houses: [
            {
                name: 'Alderaan',
                name: 'Rebel base'
            }
        ]
    },
    {
        name: 'Solo',
        lastname: 'Han',
        houses: [
            {
                name: 'Millenium Falcon',
            }
        ]
    },
    {
        name: 'Vader',
        lastname: 'Darth',
        houses: [
            {
                name: 'Death Star',
                name: 'Tatooine'
            }
        ]
    }
];

let txt = '';
for (let person of persons) {
    console.log(person.name);
    console.log(person.lastname);
    console.log('Houses:');
    let i = 0;
    if (key === 'houses') {
    for (let house of person.houses) {
        console.log(house.name);
        i++;
    }
}
    console.log('---')
}

