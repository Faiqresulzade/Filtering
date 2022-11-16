using Microsoft.AspNetCore.Mvc;

namespace FiorEllo.Controllers
{
    public class BlogController:Controller
    {
        public async Task<IActionResult> Index()
        {
            return View();
        }
        public async Task<IActionResult> Details()
        {
            return View();
        }
    }
}
