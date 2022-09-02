const books = [
    { name: 'Kitap 1', author: 'Yazar 1' },
    { name: 'Kitap 2', author: 'Yazar 2' },
    { name: 'Kitap 3', author: 'Yazar 3' },
]
const listBooks = (value) => {
    books.map((book) => {
        console.log(
            `Kitap adı  : ${book.name} ---->  Yazar : ${book.author} -----> `,
            value
        )
    })
}
const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        resolve('Başarılı.Kitap  eklendi.')
        reject('HATA! Kitap eklenemedi')
    })
    return promise1
}
addBook({ name: 'Kitap 4', author: 'Yazar 4' })
    .then((value) => {
        listBooks(value)
    })
    .catch((error) => {
        console.log(error)
    })