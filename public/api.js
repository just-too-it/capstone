window.fetchAPI = function (date) {
  const day = date.getDay();
  return day % 2 === 0 ? ['10:00', '12:00', '14:00'] : ['16:00', '20:00'];
};

window.submitAPI = function (formData) {
  return true;
};
