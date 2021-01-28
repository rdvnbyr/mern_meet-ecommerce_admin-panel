import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Tables from "views/examples/Tables.js";
import AllProducts from "views/pages/products/AllProducts";
import AddProducts from "views/pages/products/AddProducts";
import Icons from "views/examples/Icons.js";




var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/all-products",
    name: "All Products",
    icon: "ni ni-tv-2 text-success",
    component: AllProducts,
    layout: "/admin"
  },
  {
    path: "/add-products/",
    name: "Add Products",
    icon: "ni ni-tv-2 text-success",
    component: AddProducts,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  }
];
  


export default routes;
