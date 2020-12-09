const consts = require('../utils/constants');
const URL_CHECKS = consts.URL_CHECKS

module.exports = function (req, res, next) {
    let path = req.baseUrl + req.path
    // check URL has /pub/proxy or /api/proxy else throw error
    console.log(path);
    let allowed = false;
    for (let i = 0; i < URL_CHECKS.length; i++) {
        const element = URL_CHECKS[i];
        if (path.indexOf(element) === 1) {
            allowed = true;
            break;
        }
    }
    if (allowed  && !req.session?.id) {
        throw new Error(`Unauthorised access! URL must contain ${URL_CHECKS.join(' ')}`)
    } else {
        next()
    }

}