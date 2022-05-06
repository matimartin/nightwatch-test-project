describe("home page suit", () => {

    it("test homepage loads and do a search", () => {

        const  homePage = browser.page.homePage(); // instancio la pagina de la page object

        homePage
            .navigate()
            .assert.titleEquals("Home | Ultimate QA")
            .searchElementAndSubmit("javascript")
            .assert.titleEquals("javascript | Ultimate QA")  
            .assert.urlEquals('https://ultimateqa.com/?s=javascript&et_pb_searchform_submit=et_search_proccess&et_pb_include_posts=yes&et_pb_include_pages=yes');
    });
});