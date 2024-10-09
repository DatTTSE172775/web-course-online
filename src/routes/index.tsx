import { DefaultLayout, StudentLayout } from "../layout";
import { RoleEnum, RouteConfig } from "../model/RouteConfig";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import StudentDashboard from "../pages/Student/dashboard";

const publicRoute: RouteConfig[] = [
  { path: "/", component: Home, layout: DefaultLayout, role: RoleEnum.Guest },
  { path: "/login", component: Login, layout: null, role: RoleEnum.Guest },
];

const studentRoute: RouteConfig[] = [
  {
    path: "/dashboard-student",
    component: StudentDashboard,
    layout: StudentLayout,
    role: RoleEnum.User,
  },
];
const privateRoute: RouteConfig[] = [];

export { privateRoute, publicRoute, studentRoute };
