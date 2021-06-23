import { utilService } from '../../../services/utils.js'

export const mailService = {
  query,
  remove
}

function query() {
  // return storageService.query()
  return gMails
}

function remove(mailId) {
  // storageService.remove(, mailId)

  const idx = gMails.find(mail => {
    return mail.id === mailId
  })
  gMails.splice(idx, 1)

}



const gMails = [{
  id: utilService._makeId(),
  sender: 'Guy Geva',
  subject: 'First test',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '12:18'
},
{
  id: utilService._makeId(),
  sender: 'Guy Geva',
  subject: 'Second test',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: true,
  sentAt: '12:20'
},
{
  id: utilService._makeId(),
  sender: 'Guy Geva',
  subject: 'Third test',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '12:35'
}
]