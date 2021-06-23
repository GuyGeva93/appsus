import homePage from './pages/home-page.js'

const routes = [
  {
    path: '/',
    component: homePage
  },

  // {
  //   path: '/about',
  //   component: about
  // },
  // {
  //   path: '/book',
  //   component: bookApp
  // },
  // {
  //   path: '/book/:bookId',
  //   component: bookDetails
  // },
  // {
  //   path: '/google-book-add',
  //   component: googleBookAdd
  // }
]

export const router = new VueRouter({ routes })