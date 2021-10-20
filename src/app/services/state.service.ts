export const storageService = {
  query,
  remove,
  post,
  put
};

interface Entity {
  id?: string;
  name?:string
}
//todo: add 3 parma to a card: id
//for noe delete by txt

function query(entityType = 'items') {
  let entities = JSON.parse(localStorage.getItem(entityType)!) || [];
  if (!entities.length) {
    let demyData: any = _addDemyData();
    _save(entityType, demyData);
    return _addDemyData();
  } else {
    return entities;
  }
}

async function remove(
  entityType: string = 'items',
  txt: any
): Promise<boolean> {
  const entities = await query(entityType);
  const idx = entities.findIndex((entity: any) => {
    entity.name === txt;
  });

  if (idx !== -1) entities.splice(idx, 1);
  _save('items', entities);
  return true;
}
function _save(entityType: string = 'items', entities: Entity[]) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}


async function post(entityType: string, newEntity: Entity): Promise<Entity> {
    // newEntity = {...newEntity, id: makeId()}
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function put(entityType: string, updatedEntity : Entity): Promise<Entity> {
    const entities = await query(entityType)
    const idx = entities.findIndex((entity:any) => entity.name === updatedEntity.name)
    entities[idx] = updatedEntity
    _save(entityType, entities)
    return updatedEntity
}

function _addDemyData() {
  return [
    { name: 'buy milk', type: 'Shopping list' },
    { name: 'buy bread', type: 'Shopping list' },
    { name: 'buy cheese', type: 'Shopping list' },
    { name: 'angular practice', type: 'Home-work' },
    { name: 'vue practice', type: 'Home-work' },
    { name: 'react practice', type: 'Home-work' },
    { name: 'go to the bank', type: 'Finance' },
    { name: 'buy shares', type: 'Finance' },
    { name: 'take loan', type: 'Finance' },
    { name: 'clean house', type: 'others' },
    { name: 'clean car', type: 'others' },
    { name: 'call mom', type: 'others' },
  ];
}
