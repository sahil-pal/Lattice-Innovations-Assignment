module.exports = {
    ROUTES : {
        ROOT:"/",
        PATIENT:{
            ADD_PATIENT : "/add"
        },
        HOSPITAL : {
            VIEW_BY_ID : "/view"
        }
    },
    STATUS_CODES: {
        NOT_FOUND: 404,
        SUCCESS: 200,
        SERVER_ERROR: 500,
        FILE_NOT_FOUND: 404,
        BAD_REQUEST : 400
    }
}