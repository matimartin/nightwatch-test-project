const elements = {
  leftFormName: "#et_pb_contact_name_0",
  leftFormMessage: "#et_pb_contact_message_0",
  submitBtn: "#et_pb_contact_form_0 > div.et_pb_contact > form > div > button"
};

const commands = {
  fillFormAndSubmit(name, message) {
    return this
    .setValue("@leftFormName", name)
    .setValue("@leftFormMessage", message).pause(500)
    .click('@submitBtn')
  },
}

module.exports = {
  elements: elements,
  commands: commands,
  url: "https://ultimateqa.com/filling-out-forms"
}
