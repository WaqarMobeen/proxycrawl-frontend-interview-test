const FormController = function (options) {
  this.errorMessage = options.errorMessage
    ? options.errorMessage
    : "Invalid Input";
  return this;
};

FormController.prototype.initialize = function () {
  this.formElement = document.getElementById("crawl-form");
  this.errorElement = document.getElementById("crawl-form-error");
  this.formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    this.resetFormError();
    if (this.isValidForm()) {
      this.formElement.submit();
    } else {
      this.setFormError(this.errorMessage);
    }
  });
};

FormController.prototype.setFormError = function (error) {
  this.errorElement.innerText = error;
};

FormController.prototype.resetFormError = function () {
  this.errorElement.innerText = "";
};

FormController.prototype.isValidInput = function (input) {
  if (!input || input.trim().length === 0) {
    return false;
  }
  return true;
};

FormController.prototype.isValidForm = function () {
  const { token, url } = Object.fromEntries(new FormData(this.formElement));
  if (this.isValidInput(token) && this.isValidInput(url)) {
    return true;
  }
  return false;
};

const CrawlForm = new FormController({ errorMessage: "Invalid Token / Url" });
CrawlForm.initialize();
