

//Error handler to wrap a function 
const errorHandler = (func =>
    {
        return function(req, res, next)
        {
            Promise.resolve(func(req, res, next)).catch((error)=>next(error));
        }
    })

    module.exports = errorHandler;