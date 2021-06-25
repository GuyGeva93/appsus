import { storageService } from '../../../services/async-storage-service.js'


export const mailService = {
  query,
  post,
  remove,
  put
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
  newMail.sentAt = _formatTime();
  if (!newMail.isDraft) newMail.isSent = true
  storageService.post(MAIL_KEY, newMail)
    .catch(err => console.log(err))

}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId)
    .catch(err => console.log(err))
}

function put(mail) {
  console.log(mail);
  storageService.put(MAIL_KEY, mail)
}

function _formatTime() {
  const today = new Date()
  const dayFormat = today.getDate() <= 9 ? '0' + today.getDate() : today.getDate()
  const monthFormat = today.getMonth() <= 9 ? '0' + today.getMonth() : today.getMonth()
  const minFormat = today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()
  const hourFormat = today.getHours() <= 9 ? '0' + today.getHours() : today.getHours()
  const time = `${dayFormat}/${monthFormat} ${hourFormat}:${minFormat}`
  return time;
}


const gMails = [{
  id: storageService._makeId(),
  from: 'Yaron Bitton',
  subject: 'Poked in the dark?',
  body: 'Someone has just poked in the dark.',
  isRead: false,
  sentAt: '24/06 15:14',
  isSent: false,
  isDraft: false,
  isStar: false
},
{
  id: storageService._makeId(),
  from: 'Lord Eddard Stark',
  subject: 'Winter is coming',
  body: 'Buy a coat.',
  isRead: true,
  sentAt: '24/06 14:36',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Shabak',
  subject: 'Watching you',
  body: 'Be carefull!',
  isRead: false,
  sentAt: '24/06 12:57',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '22/06 15:57',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '22/06 09:32',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '20/06 11:30',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '18/06 13:07',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '15/06 20:12',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '15/06 12:12',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '14/06 17:49',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '09/06 16:33',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '07/06 07:27',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '04/06 06:49',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '02/06 15:05',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '01/06 15:51',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '25/05 08:14',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '19/05 09:13',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '14/05 10:00',
  isSent: false,
  isDraft: false,
  isStar: false

}
]