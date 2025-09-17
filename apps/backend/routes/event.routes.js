var express = require('express');
var router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");
const { getEventList, getEventById, getEventListByUserId, getEventListByCalendarId, newEvent } = require("../controllers/event.controller");

router.use(authMiddleware);

router.get('/', getEventList);
router.get('/:eventId', getEventById);
router.get('/:userId', getEventListByUserId);
router.get('/:calendarId', getEventListByCalendarId);
router.post('/', newEvent);

module.exports = router;
