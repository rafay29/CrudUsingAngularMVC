using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;

namespace WebApplicationAngularJS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public void Insert()
        {
            using (SqlConnection conn = new SqlConnection())
            {
                conn.ConnectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
                conn.Open();
                SqlCommand command = new SqlCommand("INSERT INTO Detail VALUES('RAFAY','7259554466')", conn);
                command.ExecuteNonQuery();
                conn.Close();
                conn.Dispose();
                // using the code here...
            }
        }
    }
}