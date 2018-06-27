class Form {
    constructor(element) {
        this.element = element;

        this.bind();
    }

    bind() {
        this.element.addEventListener('submit', (e) => {
            this.validate(e);
        });

        this.element.addEventListener('blur', (e) => {
            const target = e.target;
            const parent = target.parentNode;

            if (parent) {
                const messages = parent.querySelectorAll('.validation-message');
                if (messages.length) {
                    messages.forEach((item) => {
                        item.remove();
                    });
                }
            }
        }, true);
    }

    validate(submitEvent) {
        if (!submitEvent.target.checkValidity()) {
            submitEvent.preventDefault();
            submitEvent.stopImmediatePropagation();
            submitEvent.stopPropagation();

            const form = submitEvent.target,
                elements = form.elements;

            for (let i = 0, len = elements.length; i < len; i++) {
                const element = elements[i];

                if (element.willValidate && !element.validity.valid) {
                    const message = element.validationMessage,
                        parent = element.parentNode,
                        div = document.createElement('div');

                    const messages = parent.querySelectorAll('.validation-message');
                    if (messages.length) {
                        messages.forEach((item) => {
                            item.remove();
                        });
                    }

                    div.appendChild(document.createTextNode(message));
                    div.classList.add('validation-message');

                    parent.insertBefore(div, element.nextSibling);

                    element.focus();

                    break;
                } else if (element.willValidate && element.validity.valid) {
                    const parent = element.parentNode;
                    if (parent) {
                        const messages = parent.querySelectorAll('.validation-message');
                        if (messages.length) {
                            messages.forEach((item) => {
                                item.remove();
                            });
                        }
                    }
                }
            }

            return false;
        }

        return true;
    }
}