import { DefaultLayout, StudentLayout } from "../layout";
import { RoleEnum, RouteConfig } from "../model/RouteConfig";
import Student from "../pages/DashboardStudent";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";

const publicRoute: RouteConfig[] = [
  { path: "/", component: Home, layout: DefaultLayout, role: RoleEnum.Guest },
  { path: "/login", component: Login, layout: null, role: RoleEnum.Guest },
];

const studentRoute: RouteConfig[] = [
  {
    path: "/dashboard-student",
    component: Student,
    layout: StudentLayout,
    role: RoleEnum.User,
  },
];
const privateRoute: RouteConfig[] = [];

export { privateRoute, publicRoute, studentRoute };
