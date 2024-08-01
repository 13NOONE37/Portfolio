import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './input.module.css';
import fonts from '@/styles/fonts.module.css';

interface FieldProps {
  className?: string;
  label?: string;
  error?: string;
  touched?: boolean;
}

interface InputProps
  extends FieldProps,
    InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({
  className,
  placeholder,
  label,
  name,
  value,
  error,
  touched,
  onChange,
  onBlur,
  type,
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <div className={cx(fonts.button__text, styles.label)}>{label}</div>
      )}
      {error && touched && (
        <div className={cx(fonts.button__text, styles.error)}>{error[0]}</div>
      )}
      <input
        className={cx(styles.input, fonts.body, className)}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

interface TextareaProps
  extends FieldProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: FC<TextareaProps> = ({
  className,
  placeholder,
  label,
  name,
  value,
  error,
  touched,
  onChange,
  onBlur,
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <div className={cx(fonts.button__text, styles.label)}>{label}</div>
      )}
      {error && touched && (
        <div className={cx(fonts.button__text, styles.error)}>{error[0]}</div>
      )}
      <textarea
        className={cx(
          styles.input,
          fonts.body,
          styles.input__textarea,
          className,
        )}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export { Input, Textarea };
