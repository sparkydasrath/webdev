using Microsoft.AspNetCore.Mvc;

namespace aspTutorial.Controllers
{
    // [Route("api/[controller]")] [ApiController]
    public class HelloWorldController : Controller
    {
        public IActionResult Index()
        {
            // GET: /HelloWorld/
            return View();
        }

        public IActionResult Welcome(string name, int numTimes = 1)
        {
            // GET: /HelloWorld/Welcome/

            ViewData["Message"] = "Hello " + name;
            ViewData["NUmTimes"] = numTimes;

            return View();
        }
    }
}