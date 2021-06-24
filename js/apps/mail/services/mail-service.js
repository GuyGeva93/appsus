import { utilService } from '../../../services/utils.js'
import { storageService } from '../../../services/async-storage-service.js'


export const mailService = {
  query,
  post,
  remove
}

const MAIL_KEY = 'mails'

function query() {
  return storageService.query(MAIL_KEY)
}

function post(newMail) {
  newMail.sentAt = `${new Date().getHours()}:${new Date().getMinutes()}`
  newMail.isSent = true
  storageService.post(MAIL_KEY, newMail)
    .catch(err => console.log(err))

}

function remove(mailId) {
  // storageService.remove(, mailId)
  return storageService.remove(MAIL_KEY, mailId)
    .then(console.log('REMOVE ok'))
    .catch(err => console.log(err))
}