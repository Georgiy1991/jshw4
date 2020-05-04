function Book(title, autor, year, publication, instance, pages, id){
    this.title = title;
    this.autor = autor;
    this.year = year;
    this.publication = publication;
    this.instance = instance;
    this.id = id;
    this.pages = pages;
    this.getChapters = function() {
        return Math.ceil(this.pages / 25);
       
    };
    alert("Количество глав этой книги=" + this.getChapters());
};

function Trevelbook(titleT, publicationT, instanceT, pagesT){
    this.titleT = titleT;
    this.publicationT = publicationT;
    this.instanceT = instanceT;
    this.pagesT = pagesT;
    this.getChapters = function() {
        return Math.ceil(this.pagesT / 5);
       
    };
    alert("Количество глав этой книги=" + this.getChapters());
};