

let books = [
    {title : 'tat den',author : 'ngo tat to',id : 1},
    {title : 'de men phuu luu ky',author : 'to hoai',id : 2},
    {title : 'hai dua tre',author : 'thach lam',id : 3},
]

const fragment = document.getElementById('t');
books.forEach(book => {
    const instance = document.importNode(fragment.content ,true) ;
    
    instance.querySelector('.title').innerHTML = book.title;
    instance.querySelector('.author').innerHTML = book.author;
    instance.querySelector('.delete').id = book.id

    
    document.getElementById('books').appendChild(instance);
})

class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1 class="tieude" >Book Lists</h1>`;
    }
}      
customElements.define('my-component', MyComponent);


class add extends HTMLElement {

    connectedCallback() {
      this.innerHTML = `<div class="add">
                            <input id="name" type="text" placeholder="name">
                            <input id="author" type="text" placeholder="author">
                            <button onClick="getinf()" type="submit">Add</button>
                        </div>`;
    }

}       
customElements.define('a-dd', add);
// document.getElementsByClassName('name').textcontent
function getinf () {
    let name = document.getElementById('name').value
    let author = document.getElementById('author').value
    books.push({title : name,author : author,id : books.length})
    document.getElementById('books').innerHTML = `<tr>
                                                        <th>name</th>
                                                        <th>author</th>
                                                    </tr>`
    books.forEach(book => {
        const instance = document.importNode(fragment.content ,true) ;
    
        instance.querySelector('.title').innerHTML = book.title;
        instance.querySelector('.author').innerHTML = book.author;
        instance.querySelector('.delete').id = book.id;
    
        document.getElementById('books').appendChild(instance);
    })
}

function deleteb (a) {
    for (let i = 0 ; i < books.length ; i ++) {
        if (a == books[i].id) {books.splice(i,1)}
    }
    console.log(a);
    if (books.length == 0) {document.getElementById('books').innerHTML = `this is empty`} else {
    document.getElementById('books').innerHTML = `<tr>
                                                        <th>name</th>
                                                        <th>author</th>
                                                    </tr>`
    books.forEach(book => {
        const instance = document.importNode(fragment.content ,true) ;
    
        instance.querySelector('.title').innerHTML = book.title;
        instance.querySelector('.author').innerHTML = book.author;
        instance.querySelector('.delete').id = book.id
    
        document.getElementById('books').appendChild(instance);
    })
    }
}
