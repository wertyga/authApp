import isEmpty from 'lodash/isEmpty';

export default function(data) {
    const errors = {};

    if(!data.username) errors.username = 'Field can not be blank';
    if(!data.password) errors.password = 'Field can not be blank';

    return {
        isValid: isEmpty(errors),
        errors
    }
};