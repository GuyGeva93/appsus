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
  from: 'Lord Eddard Stark',
  subject: 'Winter is coming',
  body: 'Winter is coming.',
  isRead: true,
  sentAt: '24/06 14:36',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Lorem Ipsum',
  subject: 'Dolor sit amet?',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu suscipit justo. Aliquam maximus arcu vel sagittis placerat. Mauris sed imperdiet justo, ac fermentum orci. Suspendisse tristique euismod consequat. Duis scelerisque accumsan ante, vitae tempor sapien mattis ac. Quisque nec libero tempor, eleifend nunc at, luctus odio.',
  isRead: false,
  sentAt: '24/06 12:57',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Yaron Bitton',
  subject: 'Who poked in the dark?',
  body: 'Someone has just poked in the dark.',
  isRead: false,
  sentAt: '24/06 15:14',
  isSent: false,
  isDraft: false,
  isStar: false
},
{
  id: storageService._makeId(),
  from: 'Atanasije Kelly',
  subject: 'At engage simple father',
  body: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  isRead: false,
  sentAt: '22/06 15:57',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Kazik Zandra',
  subject: 'Gentleman he september in oh excellent.',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '22/06 09:32',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Sipho Sasha',
  subject: 'Donec rutrum leo sed quam',
  body: 'Vivamus tempus porttitor felis in rhoncus. Suspendisse hendrerit risus a massa scelerisque suscipit. In turpis metus, posuere sed elementum sed, pharetra at lorem. Donec nec leo neque. Sed vel dui commodo, consequat nisi nec, pellentesque diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer rutrum commodo sapien nec convallis. Phasellus porttitor nisi at pharetra elementum. Donec rutrum leo sed quam ultricies eleifend.',
  isRead: false,
  sentAt: '20/06 11:30',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Jessie Hedvig',
  subject: 'Herself too improve winding ask',
  body: 'Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve winding ask expense are compact. New all paid few hard pure she. ',
  isRead: false,
  sentAt: '18/06 13:07',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Prune Gautbert',
  subject: 'She did open find pain',
  body: 'Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few. She did open find pain some out.',
  isRead: false,
  sentAt: '15/06 20:12',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Darius Nina',
  subject: 'Shy fat merry',
  body: 'Had repulsive dashwoods suspicion sincerity but advantage now him.Remark easily garret nor nay.Civil those mrs enjoy shy fat merry.',
  isRead: true,
  sentAt: '15/06 12:12',
  isSent: false,
  isDraft: false,
  isStar: false

},
{
  id: storageService._makeId(),
  from: 'Viggo Tanja',
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
  isRead: true,
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