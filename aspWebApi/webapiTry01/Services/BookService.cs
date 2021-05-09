using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Collections.Generic;
using WebapiTry01.Models;

namespace WebapiTry01.Services
{
    public class BookService
    {
        private readonly IMongoCollection<Book> books;
        private readonly IConfiguration config;

        public BookService(IConfiguration config)
        {
            this.config = config;
            MongoClient client = new MongoClient(config.GetConnectionString("BookstoreDb"));
            IMongoDatabase database = client.GetDatabase("BookstoreDb");
            books = database.GetCollection<Book>("Books");
        }

        public Book Create(Book book)
        {
            books.InsertOne(book);
            return book;
        }

        public List<Book> Get()
        {
            return books.Find(book => true).ToList();
        }

        public Book Get(string id)
        {
            return books.Find<Book>(book => book.Id == id).FirstOrDefault();
        }

        public void Remove(Book bookIn)
        {
            books.DeleteOne(book => book.Id == bookIn.Id);
        }

        public void Remove(string id)
        {
            books.DeleteOne(book => book.Id == id);
        }

        public void Update(string id, Book bookIn)
        {
            books.ReplaceOne(book => book.Id == id, bookIn);
        }
    }
}