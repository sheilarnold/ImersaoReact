import React from 'react';
import propTypes from 'prop-types';

function FormField({titulo, type, name, value, capturarMudancas}) {
    const fielId = `id_${name}`;
    return (
        <div>
            <label htmlFor={fielId}>
                {titulo}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={capturarMudancas}
                />
            </label>
        </div>
    )
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
}

FormField.propTypes = {
    titulo: propTypes.string.isRequired,
    type: propTypes.string,
    name: propTypes.string.isRequired,
    value: propTypes.string,
    onChange: propTypes.func,
};

export default FormField;