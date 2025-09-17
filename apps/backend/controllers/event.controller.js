
const eventService = require("../services/event.service");

async function getEventList(req, res, next) {
  try {
    const eventList = await eventService.getAll(req.params.id)
    res.json(eventList)
  } catch (err) {
    next(err)
  }
}

async function getEventById(req, res, next) {
  try {
    const event = await eventService.getById(req.params.id)
    res.json(event)
  } catch (err) {
    next(err)
  }
}

async function getEventListByUserId(req, res, next) {
  try {
    const event = await eventService.getByUserId(req.params.id)
    res.json(event)
  } catch (err) {
    next(err)
  }
}

async function getEventListByCalendarId(req, res, next) {
  try {
    const event = await eventService.getByCalendarId(req.params.id)
    res.json(event)
  } catch (err) {
    next(err)
  }
}

async function newEvent(req, res, next) {
  try {
    const event = await eventService.create(req.body)
    res.status(201).json(event)
  } catch (err) {
    next(err)
  }
}

module.exports = { getEventList, getEventById, getEventListByUserId, getEventListByCalendarId, newEvent };