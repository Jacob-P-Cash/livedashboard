using Microsoft.EntityFrameworkCore;
using Sales.Models;
using Microsoft.OpenApi;
using Microsoft.Extensions.Options;
var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

builder.Services.AddOpenApi();
var connectionString = "Data Source=liveDashboard.db";
builder.Services.AddDbContext<liveDashboardContext>(options => options.UseSqlite(connectionString));
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Live Dashboard API",
        Version = "v1"
    });
});
var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapSwagger();
    app.UseSwagger();
    app.UseSwaggerUI();
}
using (var scope = app.Services.CreateScope())
{
  var dbContext = scope.ServiceProvider.GetRequiredService<liveDashboardContext>();
    dbContext.Database.EnsureCreated();
}

app.UseHttpsRedirection();
app.MapFallbackToFile("index.html");

app.MapGet("/sales", async (liveDashboardContext db) =>
{
    var sales = await db.Sales.ToListAsync();
    return Results.Ok(sales);
});

app.MapPost("/sale", async (liveDashboardContext db, SalesData saleData) =>
{
    await db.Sales.AddAsync(saleData);
    await db.SaveChangesAsync();
    return Results.Created($"/SalesData/{saleData.Id}", new { Message = "success sale created", SaleData = saleData });
});

app.MapGet("/sales/totals/past/{startDate:datetime}/{endDate:datetime}", async (DateTime startDate, DateTime endDate ,liveDashboardContext db) =>
{
    var totalSales = await db.Sales
    .Where(s => s.Timestamp >= startDate && s.Timestamp < endDate)
    .GroupBy(s => s.Timestamp.Value.Date)
    .OrderBy(g => g.Key)
    .Select(g => new {date = g.Key, totals = g.Sum(s=> s.Salevalue)})
    .ToListAsync();
    return Results.Ok(totalSales);
});
app.Run();

public class liveDashboardContext : DbContext
{ 
public liveDashboardContext(DbContextOptions<liveDashboardContext> Options) : base(Options) { }
   public DbSet<SalesData> Sales => Set<SalesData>();
}

