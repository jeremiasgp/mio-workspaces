const calendarService = require("../services/calendar.service");

async function getCalendars(req, res, next) {
  try {
    const calendarList = await calendarService.getAll()
    res.json(calendarList)
  } catch (err) {
    next(err)
  }
}

async function getCalendarById(req, res, next) {
  try {
    const calendar = await calendarService.getById(req.params.id)
    res.json(calendar)
  } catch (err) {
    next(err)
  }
}

async function getCalendarByUserId(req, res, next) {
  try {
    const calendar = await calendarService.getByUserId(req.params.id)
    res.json(calendar)
  } catch (err) {
    next(err)
  }
}

async function newCalendar(req, res, next) {
  try {
    const calendar = await calendarService.create(req.body)
    res.status(201).json(calendar)
  } catch (err) {
    next(err)
  }
}

module.exports = { getCalendars, getCalendarByUserId, getCalendarById, newCalendar };
