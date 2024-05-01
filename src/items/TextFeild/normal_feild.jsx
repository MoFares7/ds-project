import React from 'react';
import TextField from '@mui/material/TextField';
import colors from '../../assets/theme/base/colors';

const NormalTextFeild = ({
        value,
        isFulWidth,
        isDate,
        isNumaric,
        placeholder,
        label,
        validationErrors,
        onChange,
        helperText,
        validationColor
}) => {
        return (
                <TextField
                        id="fullWidth"
                        type={isNumaric ? 'number' : isDate ? 'Date' : ''}
                        value={value}
                        placeholder={placeholder}
                        label={label}
                        helperText={validationErrors || helperText}
                        autoFocus
                        fullWidth
                        variant="outlined"
                        error={validationErrors}
                        sx={{
                                margin: '1rem 1rem 1rem 1rem',
                                fontSize: '1rem',
                                width: isFulWidth ? '90%' : '50%',
                                borderRadius: '0.5rem',
                                color: 'red',
                                cursor: 'pointer',
                                '& .MuiInputLabel-outlined': {
                                        transform: 'translate(14px, 12px) scale(1)',
                                },
                                '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                        transform: 'translate(14px, -6px) scale(0.75)',
                                },
                                '& .MuiOutlinedInput-input': {
                                        padding: '12px 14px',
                                },
                                '& .MuiOutlinedInput-root': {
                                        borderRadius: '0.5rem',
                                        borderColor: validationErrors ? '#941b0c' : '#303F9F',
                                },
                                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: colors.gradients.info.main,
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: colors.gradients.info.main,
                                },
                        }}
                        inputProps={{
                                style: {
                                        borderRadius: '0.5rem',
                                        color: validationColor
                                },
                        }}
                        onChange={onChange}
                />
        );
};

export default NormalTextFeild;
