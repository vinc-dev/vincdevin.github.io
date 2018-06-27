class CompanyView {
    constructor() {
        this.contactForm = new Form($('#contact-form')[0]);
    }

    init() {
    }
}

(($) => {
    const companyContainer = new CompanyView();
    companyContainer.init();
})(jQuery);