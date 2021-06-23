export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany,
  _makeId
}

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || gMails
  return Promise.resolve(entities);
}

function get(entityType, entityId) {
  return query(entityType)
    .then(entities => entities.find(entity => entity.id === entityId))
}

function post(entityType, newEntity) {
  newEntity.id = _makeId()
  return query(entityType)
    .then(entities => {
      entities.push(newEntity);
      _save(entityType, entities)
      return newEntity;
    })
}

function postMany(entityType, newEntities) {
  return query(entityType)
    .then(entities => {
      entities.push(...newEntities);
      _save(entityType, entities)
      return entities;
    })
}

function put(entityType, updatedEntity) {
  return query(entityType)
    .then(entities => {
      const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
      entities.splice(idx, 1, updatedEntity)
      _save(entityType, entities)
      return updatedEntity;
    })
}

function remove(entityType, entityId) {
  return query(entityType)
    .then(entities => {
      const idx = entities.findIndex(entity => entity.id === entityId);
      entities.splice(idx, 1)
      _save(entityType, entities)
    })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}


const gMails = [{
  id: _makeId(),
  from: 'Guy Geva',
  subject: 'First test',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '12:18'
},
{
  id: _makeId(),
  from: 'Guy Geva',
  subject: 'Second test',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: true,
  sentAt: '12:20'
},
{
  id: _makeId(),
  from: 'Guy Geva',
  subject: 'Third test',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  isRead: false,
  sentAt: '12:35'
}
]
