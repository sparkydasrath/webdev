using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebapiTry01.Models
{
    public class Book
    {
        [BsonElement("Author")]
        public string Author { get; set; }

        [BsonElement("Name")]
        public string BookName { get; set; }

        [BsonElement("Category")]
        public string Category { get; set; }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Price")]
        public decimal Price { get; set; }
    }
}