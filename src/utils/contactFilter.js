/**
 * @description - This fucntion filter the contact array to be grouped into tabs
 * @param {Array} contactData
 * @param {String} filterParam
 * @returns {Array} filtered Obaject
 */
export const filterContacts = (contactData, filterParam) =>
  contactData.filter((data) =>
    data.name.first.startsWith(filterParam.toUpperCase()),
  );
