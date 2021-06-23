import mailList from './apps/mail/cmps/mail-list.js'
import mailPreview from './apps/mail/cmps/mail-preview.js'
import mailApp from './apps/mail/pages/mail-app.js'
import homePage from './pages/home-page.js'

const routes = [{
  path: '/',
  component: homePage
},
{
  path: '/mail-app',
  component: mailApp
},
{
  path: '/mail-preview',
  component: mailPreview
},
{
  path: '/mail-list',
  component: mailList
}

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