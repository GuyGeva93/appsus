import noteApp from './pages/keep-app.js'
import mailList from './apps/mail/cmps/mail-list.js'
import mailPreview from './apps/mail/cmps/mail-preview.js'
import mailApp from './apps/mail/pages/mail-app.js'
import homePage from './pages/home-page.js'
import mailCompose from './apps/mail/cmps/mail-compose.js'


const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp,
        children: [{
                path: '/mail',
                component: mailList
            },
            {
                path: '/sent',
                component: mailList
            },
            {
                path: '/draft',
                component: mailList
            }
        ]
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
        path: '/mail-compose',
        component: mailCompose
    },
    {
        path: '/keep',
        component: noteApp
    }
]

export const router = new VueRouter({ routes })