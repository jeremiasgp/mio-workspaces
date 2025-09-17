var express = require('express');
var router = express.Router();

const { getCalendars, getCalendarByUserId, getCalendarById, newCalendar } = require("../controllers/calendar.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.get('/', getCalendars);
router.get('/:userId', getCalendarByUserId);
router.get('/:calendarId', getCalendarById);
router.post('/', newCalendar);


module.exports = router;