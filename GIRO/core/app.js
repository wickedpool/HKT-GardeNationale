// 1. Define route components.
// These can be imported from other files
const Dashboard = { template: '#template-dashboard' };
const NotFound = { template: '#template-not-found' };
const Missions = { template: '#template-missions' };
const Search = { template: '#template-search' };
const Add = { template: '#template-add-mission' };

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard},
  { path: '/404', component: NotFound},
  { path: '/missions', component: Missions},
  { path: '/search', component: Search},
  { path: '/add', component: Add}
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app');
