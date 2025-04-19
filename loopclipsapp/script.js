// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Book data
    const books = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
        rating: 4.5,
        category: "classics",
        image: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        badges: ["bestseller"],
        description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan."
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        price: 9.99,
        rating: 4.0,
        category: "dystopian",
        image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
        description: "Nineteen Eighty-Four (also published as 1984) is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime."
      },
      {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.99,
        rating: 5.0,
        category: "classics",
        image: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        badges: ["popular"],
        description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize."
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 11.99,
        rating: 4.5,
        category: "classics",
        image: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        description: "Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
      },
      {
        id: 5,
        title: "Moby Dick",
        author: "Herman Melville",
        price: 14.99,
        rating: 4.0,
        category: "classics",
        image: "https://m.media-amazon.com/images/I/91I7RuzhRDL._AC_UF1000,1000_QL80_.jpg",
        badges: ["classic"],
        description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge against Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee."
      },
      {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 10.49,
        rating: 4.0,
        category: "fiction",
        image: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
        description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945-1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst, alienation, and as a critique of superficiality in society."
      },
      {
        id: 7,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 13.49,
        rating: 4.5,
        category: "fantasy",
        image: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        badges: ["bestseller"],
        description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction."
      },
      {
        id: 8,
        title: "War and Peace",
        author: "Leo Tolstoy",
        price: 15.99,
        rating: 5.0,
        category: "classics",
        image: "https://m.media-amazon.com/images/I/A1aDb5U0j9L._AC_UF1000,1000_QL80_.jpg",
        description: "War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo Tolstoy. It was first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains an internationally praised classic of world literature."
      },
      {
        id: 9,
        title: "The Odyssey",
        author: "Homer",
        price: 18.99,
        rating: 4.0,
        category: "classics",
        image: "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
        badges: ["classic"],
        description: "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern audiences. As with the Iliad, the poem is divided into 24 books. It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War."
      },
      {
        id: 10,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        price: 13.99,
        rating: 4.5,
        category: "classics",
        image: "https://m.media-amazon.com/images/I/81oB5U1I1RL._AC_UF1000,1000_QL80_.jpg",
        description: "Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. It is the second of Dostoevsky's full-length novels following his return from ten years of exile in Siberia."
      }
    ];
  
    // State management
    const state = {
      cart: JSON.parse(localStorage.getItem('bookzone_cart')) || [],
      favorites: new Set(JSON.parse(localStorage.getItem('bookzone_favorites')) || []),
      currentCategory: 'all',
      searchQuery: ''
    };
  
    // DOM elements
    const DOM = {
      bookList: document.querySelector('.book-list'),
      searchInput: document.getElementById('searchInput'),
      categoryBtns: document.querySelectorAll('.category-btn'),
      modal: document.getElementById('bookModal'),
      modalImage: document.getElementById('modalBookImage'),
      modalTitle: document.getElementById('modalBookTitle'),
      modalAuthor: document.getElementById('modalBookAuthor'),
      modalRating: document.getElementById('modalBookRating'),
      modalPrice: document.getElementById('modalBookPrice'),
      modalDescription: document.getElementById('modalBookDescription'),
      closeModal: document.querySelector('.close-modal'),
      addToCartBtn: document.querySelector('.add-to-cart'),
      addToFavoritesBtn: document.querySelector('.add-to-favorites')
    };
  
    // Initialize the app
    function init() {
      renderBooks(books);
      setupEventListeners();
    }
  
    // Render books to the page
    function renderBooks(booksToRender) {
      DOM.bookList.innerHTML = booksToRender.map(book => createBookCard(book)).join('');
    }
  
    // Create HTML for a book card
    function createBookCard(book) {
      const badges = book.badges?.map(badge => 
        `<span class="book-badge">${capitalizeFirstLetter(badge)}</span>`
      ).join('') || '';
  
      const stars = renderRatingStars(book.rating);
  
      return `
        <div class="book-card" data-id="${book.id}">
          ${badges}
          <img src="${book.image}" alt="${book.title}">
          <div class="card-body">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <div class="book-rating">
              ${stars}
              <span> (${book.rating})</span>
            </div>
            <p class="book-price">$${book.price.toFixed(2)}</p>
          </div>
        </div>
      `;
    }
  
    // Render star rating
    function renderRatingStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
      return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
      `;
    }
  
    // Capitalize first letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    // Show book details in modal
    function showBookDetails(bookId) {
      const book = books.find(b => b.id === bookId);
      if (!book) return;
  
      DOM.modalImage.src = book.image;
      DOM.modalImage.alt = book.title;
      DOM.modalTitle.textContent = book.title;
      DOM.modalAuthor.textContent = `by ${book.author}`;
      DOM.modalRating.innerHTML = renderRatingStars(book.rating) + `<span> (${book.rating})</span>`;
      DOM.modalPrice.textContent = `$${book.price.toFixed(2)}`;
      DOM.modalDescription.textContent = book.description;
  
      // Update favorite button state
      const favIcon = DOM.addToFavoritesBtn.querySelector('i');
      if (state.favorites.has(book.id)) {
        favIcon.classList.remove('far');
        favIcon.classList.add('fas');
        DOM.addToFavoritesBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
      } else {
        favIcon.classList.remove('fas');
        favIcon.classList.add('far');
        DOM.addToFavoritesBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
      }
  
      // Set up modal button handlers
      DOM.addToCartBtn.onclick = () => addToCart(book);
      DOM.addToFavoritesBtn.onclick = () => toggleFavorite(book.id);
  
      // Show modal
      DOM.modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }
  
    // Add book to cart
    function addToCart(book) {
      const existingItem = state.cart.find(item => item.id === book.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...book,
          quantity: 1
        });
      }
      saveCart();
      showNotification(`${book.title} added to cart`);
      closeModal();
    }
  
    // Toggle book in favorites
    function toggleFavorite(bookId) {
      if (state.favorites.has(bookId)) {
        state.favorites.delete(bookId);
      } else {
        state.favorites.add(bookId);
      }
      saveFavorites();
      updateFavoriteButton(bookId);
    }
  
    // Update favorite button appearance
    function updateFavoriteButton(bookId) {
      const favIcon = DOM.addToFavoritesBtn.querySelector('i');
      if (state.favorites.has(bookId)) {
        favIcon.classList.remove('far');
        favIcon.classList.add('fas');
        DOM.addToFavoritesBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
      } else {
        favIcon.classList.remove('fas');
        favIcon.classList.add('far');
        DOM.addToFavoritesBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
      }
    }
  
    // Close modal
    function closeModal() {
      DOM.modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  
    // Save cart to localStorage
    function saveCart() {
      localStorage.setItem('bookzone_cart', JSON.stringify(state.cart));
    }
  
    // Save favorites to localStorage
    function saveFavorites() {
      localStorage.setItem('bookzone_favorites', JSON.stringify([...state.favorites]));
    }
  
    // Show notification
    function showNotification(message) {
      // In a real app, you'd show a proper notification
      console.log(message);
    }
  
    // Filter books by search query and category
    function filterBooks() {
      const filtered = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(state.searchQuery) || 
                            book.author.toLowerCase().includes(state.searchQuery);
        const matchesCategory = state.currentCategory === 'all' || 
                              book.category === state.currentCategory;
        return matchesSearch && matchesCategory;
      });
      renderBooks(filtered);
    }
  
    // Set up event listeners
    function setupEventListeners() {
      // Book selection
      DOM.bookList.addEventListener('click', (e) => {
        const card = e.target.closest('.book-card');
        if (card) {
          const bookId = parseInt(card.dataset.id);
          showBookDetails(bookId);
        }
      });
  
      // Search functionality
      DOM.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase();
        filterBooks();
      });
  
      // Category filtering
      DOM.categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          state.currentCategory = btn.textContent.toLowerCase();
          DOM.categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          filterBooks();
        });
      });
  
      // Modal close button
      DOM.closeModal.addEventListener('click', closeModal);
  
      // Close modal when clicking outside
      window.addEventListener('click', (e) => {
        if (e.target === DOM.modal) {
          closeModal();
        }
      });
  
      // Close modal with Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.modal.style.display === 'block') {
          closeModal();
        }
      });
    }
  
    // Initialize the application
    init();
  });
  // Handle feedback chip selection
document.querySelectorAll('.feedback-chip').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.feedback-chip').forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
  
  // Handle feedback submission
  document.querySelector('.feedback-submit').addEventListener('click', () => {
    const selected = document.querySelector('.feedback-chip.selected')?.textContent;
    const comment = document.querySelector('.feedback-text').value.trim();
  
    if (!selected && !comment) {
      alert("Please select feedback or write a comment.");
      return;
    }
  
    const finalFeedback = `Feedback: ${selected || 'None'}\nComment: ${comment || 'None'}`;
    alert("Thank you for your feedback!\n\n" + finalFeedback);
  
    // Reset
    document.querySelectorAll('.feedback-chip').forEach(btn => btn.classList.remove('selected'));
    document.querySelector('.feedback-text').value = '';
  });
  