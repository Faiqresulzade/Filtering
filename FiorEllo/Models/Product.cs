using System.ComponentModel.DataAnnotations.Schema;

namespace FiorEllo.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
        public string PhotoName { get; set; }
         [NotMapped]
        public IFormFile Photo { get; set; }
        public int Quantity { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public string Description { get; set; }
        public string Weight { get; set; }
        public string Dimensions { get; set; }
        public List<ProductPhoto>ProductPhotos{ get; set; }
    }
}
