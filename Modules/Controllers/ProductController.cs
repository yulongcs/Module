using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Endy.Modules.Controllers
{
    public class ProductController : Controller
    {
        public ActionResult List()
        {
            return this.View("~/Views/Page/Product/List.cshtml");
        }
    }
}