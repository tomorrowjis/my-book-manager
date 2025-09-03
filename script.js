
        const dialog = document.getElementById("bookForm");
        let books = [];

        function openForm() {
            dialog.showModal();
        }
        function cancel() {
            dialog.close();
        }
        function addBook() {

            const title = document.getElementById("title").value;
            document.getElementById("title").value = "";

            const author = document.getElementById("author").value;
            document.getElementById("author").value = "";
            const pagenumber = document.getElementById("pagenumber").value;
            document.getElementById("pagenumber").value = "";

            const description = document.getElementById("description").value;
            document.getElementById("description").value = "";


            const id_val = 'x' + crypto.randomUUID();

            console.log(id_val);

            let info = {
                bookname: title,
                author: author,
                pagenum: pagenumber,
                id: id_val,
                description: description,
            }

            books.push(info);

            addCard(title, author, pagenumber, id_val, description);
            dialog.close();

        } console.log(books);

        function addCard(title, author, pagenumber, id_val, description) {

            let cardHTML = `
            <div class="card" id="card-${id_val}">
            <div class="cardInfo">
             <h3 id="title-${id_val}">${title}</h3>
             <h5 id="author-${id_val}">${author}</h5>
             <p id="desc-${id_val}">${description}</p>
             </div>
            <div class="cardBottom">
                <button onclick="removeBook('${id_val}')" class="btn">Remove</button>
                <button onclick="editBook('${id_val}')" class="btn">Edit</button>
             </div>
            </div>`;
            document.getElementById("cardBox").innerHTML += cardHTML;

        }

        function removeBook(id) {
            const element = document.getElementById(`card-${id}`);
            element.remove();
        }

        const editbook = document.getElementById("editForm");

        let currentEditingID = null;

        function editBook(id_val) {

            currentEditingID = id_val;
            console.log(id_val);
            const targetBook = books.find(item => item.id === id_val);
            console.log(targetBook);
            const title = targetBook.bookname;
            document.getElementById("titleEdit").value = title;
            const author = targetBook.author;
            document.getElementById("authorEdit").value = author;
            const pagenumber = targetBook.pagenum;
            document.getElementById("pagenumberEdit").value = pagenumber;

            const description = targetBook.description;
            document.getElementById("descriptionEdit").value = description;

            editbook.showModal();
        }

        const savebtn = document.getElementById("saveBook");
        savebtn.addEventListener("click", () => {

            const targetBook = books.find(item => item.id == currentEditingID);
            const newtitle = document.getElementById("titleEdit").value;
            const newauthor = document.getElementById("authorEdit").value;
            const newpagenumber = document.getElementById("pagenumberEdit").value;
            const newdesc = document.getElementById("descriptionEdit").value;

            console.log(newtitle);

            const card = document.getElementById(`card-${currentEditingID}`);
            card.querySelector("h3").textContent = newtitle;
            card.querySelector("h5").textContent = newauthor;
            card.querySelector("p").textContent = newdesc;

            targetBook.bookname = newtitle;
            targetBook.author = newauthor;
            targetBook.description = newdesc;
            targetBook.pagenum = newpagenumber;

            editbook.close();
            console.log(books);
            console.log(`h3#${currentEditingID}`);
        });
        function cancelEdit() {
            editbook.close();
        }


