let books = [
    'Pirma',
    'Antra',
    'Trecia'
]

let cars = [
    {
        model: 'Ford',
        modelName: 'Focus'
    },
    {
        model: 'Tesla',
        modelName: 'Model S'
    }
]

// let booklist = document.querySelector('#books-list');
for (let i = 0; i < books.length; i++) {
    let line = document.createElement('li');
    console.log(line)
    let bookName = document.createTextNode(books[i]);
    line.appendChild(bookName);
}

document.getElementById('books-list').appendChild(line);
// susikurti elemntus li
// ir ideti i atitinkama list (books/cars)
