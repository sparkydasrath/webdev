using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebapiTry01.Models;
using WebapiTry01.Services;

namespace webapiTry01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookService bookService;

        public BooksController(BookService bookService)
        {
            this.bookService = bookService;
        }

        [HttpPost]
        public ActionResult<Book> Create(Book book)
        {
            bookService.Create(book);

            return CreatedAtRoute("GetBook", new { id = book.Id.ToString() }, book);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var book = bookService.Get(id);

            if (book == null)
            {
                return NotFound();
            }

            bookService.Remove(book.Id);

            return NoContent();
        }

        // GET: api/Books
        [HttpGet]
        public ActionResult<List<Book>> Get()
        {
            return bookService.Get();
        }

        // GET: api/Books/5
        [HttpGet("{id:length(24)}", Name = "GetBook")]
        public ActionResult<Book> Get(string id)
        {
            Book book = bookService.Get(id);
            if (book == null) return NotFound();
            return book;
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Book bookIn)
        {
            var book = bookService.Get(id);

            if (book == null)
            {
                return NotFound();
            }

            bookService.Update(id, bookIn);

            return NoContent();
        }
    }
}