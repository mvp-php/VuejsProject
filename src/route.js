import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import ForgotPassword from "./components/ForgotPassword.vue";
import LinkSuccess from "./components/LinkSuccessfully.vue";
import ResetPassword from "./components/ResetPassword.vue";
import ResetSuccess from "./components/ResetSuccessfully.vue";
import Dashboard from './components/Dashboard/Dashboard.vue';
import UserManagement from './components/UserManagement/UserManagement.vue';
import CreateRole from './components/UserRoleManagement/CreateRole.vue';
import EditRole from './components/UserRoleManagement/EditRole.vue';
import createUserComponent from './components/UserManagement/createUser.vue';
import editUserComponent from './components/UserManagement/editUser.vue';
import CategoryManagment from './components/CategoryManagment/CategoryManagment.vue'; 
import CatgoryManagment from './components/CatgoryManagment/CatgoryManagment.vue';
import subcategoryManagement from './components/SubcategoryManagment/SubcategoryManagment.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from './middleware/auth';
const routes = [
  {
    path: '/login',
    component: Login

  },
  {
    path: '/forgot-password',
    component: ForgotPassword
  },
  {
    path: '/link-successfully',
    name: 'link-successfully',
    component: LinkSuccess
  },
  {
    path: '/reset-password/:id',
    component: ResetPassword
  },
  {
    path: '/reset-successfully',
    name: 'reset-success',
    component: ResetSuccess
  },
  {
    path: '/home',
    component: Dashboard,
    name: "home",
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/user-management',
    component: UserManagement,
    name: "user-management",
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/create-role',
    component: CreateRole,
    name: "create-role",
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/edit-role/:id',
    component: EditRole,
    name: "edit-role",
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/category-management',
    component: CategoryManagment,
    name: "categoryManagement",
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/create-user',
    component: createUserComponent,
    name: "create-user",
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/edit-user/:id',
    component: editUserComponent,
    name: "edit-user",
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/category-management',
    component: CatgoryManagment,
    name: "categoryManagement",
  },
  {
    path: '/subcategory-management/:id',
    component: subcategoryManagement,
    name: "SubcategoryManagment",
  },


];
const router = createRouter({ history: createWebHistory(), routes });

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

export default router;
