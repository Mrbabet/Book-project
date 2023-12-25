import { getBookByID} from "./home_page/fetch";


const bookIMG =  document.getElementById('bookImage')
const bookTitle = document.getElementById('bookTitle')
const bookAuthor =  document.getElementById('bookAuthor')
const bookDescription = document.getElementById('bookDescription')


// Funkcja inicjująca modal z danymi książki
export async function initModal(bookId) {

  const {data: book} = await getBookByID(bookId)
  
  bookIMG.src.value = book.book_image;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = `Autor: ${book.author}`;
  bookDescription.textContent = book.description;

  const buyLinksContainer = document.getElementById('buyLinks');
  buyLinksContainer.innerHTML = '';
  book.buy_links.forEach(link => {
    if (link.name === 'Amazon' || link.name ==='Apple Books' || link.name ==='Barnes and Noble') {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      a.target = '_blank';
      buyLinksContainer.appendChild(a);
      
    }
   
  });

  // Obsługa przycisku dodawania do listy zakupów
  const toggleButton = document.getElementById('toggleShoppingList');
  const isBookInList = localStorage.getItem(book.primary_isbn13);
  toggleButton.textContent = isBookInList ? 'USUŃ Z LISTY ZAKUPÓW' : 'DODAJ DO LISTY ZAKUPÓW';
  toggleButton.onclick = () => {
    if (isBookInList) {
      localStorage.removeItem(book.primary_isbn13);
      toggleButton.textContent = 'DODAJ DO LISTY ZAKUPÓW';
    } else {
      localStorage.setItem(book.primary_isbn13, JSON.stringify(book));
      toggleButton.textContent = 'USUŃ Z LISTY ZAKUPÓW';
    }
  };
}

// Funkcja wyświetlająca modal
export function showModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Funkcja ukrywająca modal
function hideModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Obsługa zdarzeń dla przycisku zamykania i kliknięcia poza modalem
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const closeButton = document.querySelector('.close');

  closeButton.onclick = () => hideModal();
  window.onclick = (event) => {
    if (event.target === modal) {
      hideModal();
    }
  };
});

