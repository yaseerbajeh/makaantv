import Home from "../pages/Home";
import Prices from "../pages/Home/prices";
import Tarkeeb from "../pages/Home/tarkeeb";
import  AboutApp  from "../pages/Home/aboutapp";
import  Netflix  from "../pages/Home/netflix";
import  Shahid  from "../pages/Home/shahid";
import  youtube  from "../pages/Home/youtube";
import  packages  from "../pages/Home/packages";

const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: Home,
  },
  {
    path: ["/prices"],
    exact: true,
    component: Prices,
  },
  {
    path: ["/tarkeeb"],
    exact: true,
    component: Tarkeeb,
  },
    {
    path: ["/aboutapp"],
    exact: true,
    component: AboutApp,
  },
      {
    path: ["/netflix"],
    exact: true,
    component: Netflix,
  },

        {
    path: ["/shahid"],
    exact: true,
    component: Shahid,
  },
          {
    path: ["/youtube"],
    exact: true,
    component: youtube,
  },
            {
    path: ["/packages"],
    exact: true,
    component: packages,
  },
];

export default routes;