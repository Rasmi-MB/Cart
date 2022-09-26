module.exports = function(handler) {
    return async (req, res, next) => {
        try {
            return await handler(req, res, next);
        } catch (error) {
            return next(error);
        }
    };
};
