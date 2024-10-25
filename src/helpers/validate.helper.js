const CustomError = require('../utils/CustomError.js');

const validateRequest = (req, res, next, schema, requestParameterType) => {
  let requestData = {};
  if (requestParameterType === 'body') {
    requestData = req.body;
  } else if (requestParameterType === 'query') {
    requestData = req.query;
  } else {
    requestData = req.params;
  }
  const { value, error } = schema.validate(requestData);

  if (!error) {
    if (requestParameterType === 'body') {
      req.body = value;
    } else if (requestParameterType === 'query') {
      req.query = value;
    } else {
      req.params = value;
    }
    return next();
  }
  throw new CustomError(error.message, 400);
};

module.exports = {
  validateRequest
};

