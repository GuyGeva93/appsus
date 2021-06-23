import noteApp from './pages/keep-app.js'
import mailList from './apps/mail/cmps/mail-list.js'
import mailPreview from './apps/mail/cmps/mail-preview.js'
import mailApp from './apps/mail/pages/mail-app.js'
import homePage from './pages/home-page.js'

const routes = [{
  path: '/',
  component: homePage
},
{
  path: '/mail',
  component: mailApp
},
{
  path: '/mail-preview',
  component: mailPreview
},
{
  path: '/mail-list',
  component: mailList
},
{
  path: '/keep',
  component: noteApp
}]

export const router = new VueRouter({ routes })