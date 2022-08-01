import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
<<<<<<< HEAD
import Register from "../views/Register.vue";
import Main from "../views/Main.vue";
import HouseList from "../views/HouseList.vue";
import HouseDetail from "../views/HouseDetail.vue";
import HouseRegister from "../views/HouseRegister.vue";
import CommunityList from "../views/CommunityList.vue";
import CommunityDetail from "../views/CommunityDetail.vue";
import CommunityRegister from "../views/CommunityRegister.vue";
import UserPosts from "../views/UserPosts.vue";
import UserReviews from "../views/UserReviews.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/user/:id",
    children: [
      {
        // /user/:id/profile
        path: "profile",
        component: UserProfile,
      },
      {
        // /user/:id/reviews
        path: "reviews",
        component: UserReviews,
      },
      {
        // /user/:id/posts
        path: "posts",
        component: UserPosts,
      },
    ],
  },
  { path: "/houses", component: HouseList },
  { path: "/houses/:id", component: HouseDetail },
  { path: "/bysharoo", component: HouseRegister },
  {
    path: "/community",
    component: CommunityList,
    children: [
      {
        path: ":id",
        component: CommunityDetail,
      },
      {
        path: "register",
        component: CommunityRegister,
      },
    ],
  },
=======
import Main from "../views/Main.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/login", name: "Login", component: Login },
>>>>>>> 34e62088e5e6cd9d4e5d48a88cb340d10ea2ca35
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
