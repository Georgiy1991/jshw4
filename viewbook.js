function ViewBook(){

};


ViewBook.prototype.addBook = function(book){
    var listhome = document.querySelector('#list-books');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>'+book.title+'</li>'+
    '<li>'+book.autor+'</li>'+
    '<li>'+book.year+'</li>'+
    '<li>'+book.publication+'</li>'+
    '<li>'+book.instance+'</li>'+
    '<li>'+book.pages+'</li>'+
    '<li><button class="delete" id="delete">Удалить книгу</button></li>';

    listhome.appendChild(ulList);

    ulList.onclick = function (ev) {
        var del = ev.target.closest('.delete');
        if (!del) {
            return;
        }
        listhome.removeChild(ulList);
    };
};


ViewBook.prototype.addTravelbook = function(book){
    var listhome = document.querySelector('#list-books');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>'+book.titleT+'</li>'+
    '<li>'+''+'</li>'+
    '<li>'+''+'</li>'+
    '<li>'+book.publicationT+'</li>'+
    '<li>'+book.instanceT+'</li>'+
    '<li>'+book.pagesT+'</li>'+
    '<li><button class="delete" id="delete">Удалить книгу</button></li>';

    listhome.appendChild(ulList);

    ulList.onclick = function (ev) {
        var del = ev.target.closest('.delete');
        if (!del) {
            return;
        }
        listhome.removeChild(ulList);
    };
};



    
ViewBook.prototype.getMessage = function(message, name){
    var block = document.createElement('div');
    block.className = name;
    block.innerHTML = message;

    var container = document.querySelector('body');
    var form = document.querySelector('.ol');

    container.insertBefore(block, form); //добавление дива перед тегом форм
};

ViewBook.prototype.clear = function(){
    document.querySelector('#title').value ='';
    document.querySelector('#autor').value ='';
    document.querySelector('#year').value ='';
    document.querySelector('#publication').value ='';
    document.querySelector('#instance').value ='';
    document.querySelector('#pages').value ='';
};

ViewBook.prototype.clearTwo = function(){
    document.querySelector('#titleT').value ='';
    document.querySelector('#publicationT').value ='';
    document.querySelector('#instanceT').value ='';
    document.querySelector('#pagesT').value ='';
};






