async function getAll() {
  return await Promise.resolve([]);
}

async function getById(id) {
  return await Promise.resolve({ id });
}

async function getByCalendarId(calendarId) {
  return await Promise.resolve({ id: calendarId });
}

async function getByUserId(userId) {
  return await Promise.resolve({ id: userId });
}

async function create() {
  return await Promise.resolve({ id: 'ok' });
}

module.exports = { getAll, getByUserId, getByCalendarId, getById, create };