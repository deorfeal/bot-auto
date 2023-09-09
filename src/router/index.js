import {
  createWebHistory,
  createRouter
} from "vue-router";
import Home from "@/views/Home.vue";
import Buy from "@/views/Buy.vue";
import Info from "@/views/Info.vue";
import Contacts from "@/views/Contacts.vue";
import Contracts from "@/views/Contracts.vue";
import Car from "@/views/Car.vue";
import Map from "@/views/Map.vue";
import Region from "@/views/Region.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Buy",
    name: "Buy",
    component: Buy,
  },
  {
    path: "/Info",
    name: "Info",
    component: Info,
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/Contracts",
    name: "Contracts",
    component: Contracts,
  },
  {
    path: "/Car",
    name: "Car",
    component: Car,
  },
  {
    path: "/Map",
    name: "Map",
    component: Map,
  },
  {
    path: "/Region",
    name: "Region",
    component: Region,
  },
];

const router = createRouter({
  history: createWebHistory('/bot-auto/'),
  routes,
});

export default router;