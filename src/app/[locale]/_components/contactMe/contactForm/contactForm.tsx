'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Form, Formik, FormikHelpers } from 'formik';
import cx from 'classnames';

import styles from './contactForm.module.css';
import fonts from '@/styles/fonts.module.css';
import { z, ZodError } from 'zod';
import { Input, Textarea } from '@/components/input/input';
import { PrimaryButton } from '@/components/buttons/primary/primary';
import PrivacyButton from '@/components/shared/privacyButton/privacyButton';
import ReCAPTCHA from 'react-google-recaptcha';

interface Values {
  name: string;
  email: string;
  message: string;
}

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = ({ className }: { className?: string }) => {
  const t = useTranslations('Contact');

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  const ValidationSchema = z.object({
    name: z.string().min(1, t('this_field_is_required')),
    email: z
      .string()
      .min(1, t('this_field_is_required'))
      .email(t('email_is_invalid')),
    message: z.string().min(1, t('this_field_is_required')),
  });

  const handleValidate = (values: Values) => {
    try {
      ValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  return (
    <div className={cx(styles.container, className)}>
      <h3 className={fonts.heading_500}>{t('contact_form')}</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={handleValidate}
      >
        {({
          values,
          isSubmitting,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <Form className={styles.form}>
            <Input
              type={'text'}
              label={t('your_name')}
              name="name"
              placeholder={t('name_placeholder')}
              value={values.name}
              error={errors.name}
              touched={touched.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              type={'email'}
              label={t('your_email')}
              name="email"
              placeholder={t('email_placeholder')}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={styles.textareaContainer}>
              <Textarea
                label={t('your_message')}
                name="message"
                placeholder={t('message_placeholder')}
                value={values.message}
                error={errors.message}
                touched={touched.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <PrivacyButton className={styles.privacy} />
            </div>
            {/* <div className={styles.captcha}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string}
                onChange={(token) => {
                  setCaptchaValue(token);
                }}
              />
            </div> */}
            <div className={styles.submit}>
              <PrimaryButton type="submit">Send message</PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
