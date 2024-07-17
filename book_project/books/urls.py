from django.urls import path
from .views import BookList, BookDetail, SingleBookDetail  

urlpatterns = [
    path('books/', BookList.as_view(), name='book-list'),  # List all books and create a new book
    path('books/add/', BookList.as_view(), name='add-book'),  # Add a new book
    path('books/<int:pk>/delete/', BookDetail.as_view(), name='delete-book'),  # Delete a specific book
    path('books/<int:pk>/', SingleBookDetail.as_view(), name='single-book'),  # Retrieve a single book by ID
]
