document.querySelector('#books').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var autor = document.querySelector('#autor').value;
    var year = document.querySelector('#year').value;
    var publication = document.querySelector('#publication').value;
    var instance = document.querySelector('#instance').value;
    var pages = document.querySelector('#pages').value;

    var book = new Book(title, autor, year, publication, instance, pages);
    var viewBook = new ViewBook();

    if(title === '' || autor === '' || year === '' || publication === '' || instance === '' || pages === '' ){
        viewBook.getMessage('Пожалуйста введите все данные!', 'error');
    } else{
        viewBook.addBook(book);
        viewBook.getMessage('Книга успешно добавлена', 'ok');
        viewBook.clear();
    };

    event.preventDefault();
});

document.querySelector('#travel-books').addEventListener('submit', function(event){
    var titleT = document.querySelector('#titleT').value;
    var publicationT = document.querySelector('#publicationT').value;
    var instanceT = document.querySelector('#instanceT').value;
    var pagesT = document.querySelector('#pagesT').value;

    var trevelbook = new Trevelbook(titleT, publicationT, instanceT, pagesT);
    var viewBookTwo = new ViewBook();

    if(titleT === '' || publicationT === '' || instanceT === '' || pagesT === '' ){
        viewBookTwo.getMessage('Пожалуйста введите все данные!', 'error');
    } else{
        viewBookTwo.addTravelbook(trevelbook);
        viewBookTwo.getMessage('Книга успешно добавлена', 'ok');
        viewBookTwo.clearTwo();
    };

    event.preventDefault();
});
