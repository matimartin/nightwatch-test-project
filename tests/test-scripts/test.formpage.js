describe("Forms Suite", () => {

  it('Fill out form', (browser) => {
    
      const FormPage = browser.page.FormPage(); // instancio la pagina de la page object
      
      FormPage
          .navigate()
          .assert.titleEquals('Filling Out Forms | Ultimate QA')
          .fillFormAndSubmit("LeBron James", "LeBron Raymone James Sr. es un jugador de baloncesto estadounidense")
          .verify.containsText('#et_pb_contact_form_0 > div > p', 'Thanks for contacting us')
  });
});