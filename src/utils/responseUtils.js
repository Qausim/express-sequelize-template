import { serverErrorMsg, notFoundErrorMsg } from './constants';

module.exports = class ResponseUtils {
  static success(responseObject, data, statusCode = 200) {
    return responseObject.status(statusCode).json({ status: 'success', data });
  }

  static internalServerError(responseObject) {
    return responseObject.status(500).json({
      status: 'error',
      error: { message: serverErrorMsg },
    });
  }

  static badRequestError(responseObject, error, statusCode = 400) {
    return responseObject.status(statusCode).json({ status: 'error', error });
  }

  static notFoundError(responseObject, message = notFoundErrorMsg) {
    return responseObject.status(404).json({ status: 'error', error: { message } });
  }

  static conflictError(responseObject, error) {
    return responseObject.status(409).json({ status: 'error', error });
  }
};
