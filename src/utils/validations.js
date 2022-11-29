export const validations = {
    name: {
        required: 'Campo requerido.',
    },

    email: {
        required: 'Campo requerido.',
        pattern: {
            value: /\b[\w.-]+@[\w.-]+.\w{2,4}\b/,
            message: 'Ingrese un email válido.',
        },
    },

    pass: {
        required: 'Campo requerido.',
        minLength: {
            value: 6,
            message: 'Mínimo 6 caracteres.'
        },
    },

    confirmPass(pass) {
        return {
            required: 'Campo requerido.',
            validate: confPass => {
                if (pass !== confPass) {
                    return 'Las contraseñas no coinciden.';
                }
            },
        };
    },

    address(bool) {
        return {
            required: 'Ingrese la dirección de envío.',
            disabled: bool,
        };
    },

    tel: {
        required: 'Campo requerido.',
        pattern: {
            value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
            message: 'Ingrese un teléfono válido.',
        },
    },

    credit: {
        required: 'Campo requerido.',
        pattern: {
            value: /^(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}$/,
            message: 'Ingrese un número de tarjeta válido.',
        },
    },

    expiration: {
        required: true,
        pattern: /^(0[1-9]|1[012])[ -/]\d\d$/,
    },

    cvv: {
        required: true,
        minLength: 3,
        maxLength: 3,
    },
};