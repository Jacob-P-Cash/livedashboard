namespace Sales.Models {

    public class SalesData {
        public int Id { get; set; }
        public string? Itemname { get; set; } 
        public DateTime? Timestamp { get; set; }
        public decimal Salevalue { get; set; }
    }
}