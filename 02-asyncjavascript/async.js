const books = [
    { name: 'Kitap 1', author: 'Yazar 1' },
    { name: 'Kitap 2', author: 'Yazar 2' },
    { name: 'Kitap 3', author: 'Yazar 3' },
]
const listBooks = (msg) => {
    books.map((book) => {
        console.log(
            `Kitap adı  : ${book.name} ---->  Yazar : ${book.author} -----> `,
            msg
        )
    })
}
const addBook = (newBook) => {
    return new Promise((resolve, reject) => {
        books.push(newBook)
        resolve('Başarılı.Kitap  eklendi.')
        reject('HATA! Kitap eklenemedi')
    })
}

async function processBook() {
    try {
        const endAddBook = await addBook({
            name: 'Kitap 4',
            author: 'Yazar 4',
        })
        listBooks(endAddBook)
    } catch (error) {
        console.log(error)
    }
}
processBook()