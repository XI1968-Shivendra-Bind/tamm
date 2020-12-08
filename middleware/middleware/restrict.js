module.exports = function (req, res, next) {
    if (!req.session.id) {
        throw new Error('No session')
    }
    let path = req.baseUrl + req.path
    // check URL has /pub/proxy or /api/proxy else throw error
    if (path.indexOf('pub/proxy') === 1 || path.indexOf('api/proxy') === 1) {
        next()
    } else {
        throw new Error('Unauthorised access! URL must contain /pub/proxy or /api/proxy ')
    }

}