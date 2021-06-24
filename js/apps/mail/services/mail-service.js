import { storageService } from '../../../services/async-storage-service.js'


export const mailService = {
  query,
  post,
  remove
}

const MAIL_KEY = 'mails'
// const DRAFT_KEY = 'drafts'

function query() {
  return storageService.query(MAIL_KEY)
    .then(mails => {
      if (!mails || !mails.length) {
        storageService.postMany(MAIL_KEY, gMails)
        return gMails
      }
      return mails
    })
}

function post(newMail) {
  newMail.sentAt = `${new Date().getHours()}:${new Date().getMinutes()}`
  if (!newMail.isDraft) newMail.isSent = true
  storageService.post(MAIL_KEY, newMail)
    .catch(err => console.log(err))

}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId)
    .then(console.log('REMOVE ok'))
    .catch(err => console.log(err))
}


const gMails = [{
  id: storageService._makeId(),
  from: 'Yaron Bitton',
  subject: 'Poked in the dark?',
  body: 'Someone has just poked in the dark.',
  isRead: false,
  sentAt: '12:18',
  isSent: false,
  isDraft: false
},
{
  id: storageService._makeId(),
  from: 'Lord Eddard Stark',
  subject: 'Winter is coming',
  body: 'Buy a coat.',
  isRead: true,
  sentAt: '12:20',
  isSent: false,
  isDraft: false
},
{
  id: storageService._makeId(),
  from: 'Shabak',
  subject: 'Watching you',
  body: 'Be carefull!',
  isRead: false,
  sentAt: '12:35',
  isSent: false,
  isDraft: false
},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '12:35',
  isSent: false,
  isDraft: false
}
]