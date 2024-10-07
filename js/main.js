import {
  handleRegistrationForm,
  handleLoginForm,
  handleAddCarForm,
  handleSearch,
} from "./form-handlers.js";
import { handleFormFocus, handleButtonHover } from "./event-handlers.js";

document.addEventListener("DOMContentLoaded", () => {
  handleSearch();
  handleRegistrationForm();
  handleLoginForm();
  handleAddCarForm();
  handleFormFocus();
  handleButtonHover();
});
