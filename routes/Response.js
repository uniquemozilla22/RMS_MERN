class Response {
  isSuccess = false;
  responseData = null;
  constructor(isSuccess, data) {
    this.isSuccess = isSuccess;
    this.responseData = data;
  }
}

module.exports = Response;
