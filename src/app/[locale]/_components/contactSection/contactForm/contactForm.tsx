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
import PrivacyButton from '@/components/shared/buttons/privacyButton/privacyButton';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '@/actions/sendEmail';
import Loader from '@/components/loader/loader';
import { personalInformations } from '@/config/personalInformations';
import { SecondaryButton } from '@/components/buttons/secondary/secondary';
import Approve from '@/assets/icons/approve';
import Cancel from '@/assets/icons/cancel';

interface Values {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}
const initialValues: Values = {
  name: '',
  email: '',
  message: '',
  captchaToken: '',
};
type FormStatusType = 'success' | 'error' | null;

const ContactForm = ({ className }: { className?: string }) => {
  const t = useTranslations('Contact');
  const [formStatus, setFormStatus] = useState<FormStatusType>(null);

  const handleSubmit = async (
    values: Values,
    { setValues, setTouched }: FormikHelpers<Values>,
  ) => {
    try {
      await sendEmail({
        name: values.name,
        email: values.email,
        message: values.message,
        captchaToken: values.captchaToken,
      });

      setValues({ ...initialValues, captchaToken: values.captchaToken });
      setTouched({ name: false, email: false, message: false });
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
    }
  };

  const ValidationSchema = z.object({
    name: z.string().min(1, t('this_field_is_required')),
    email: z
      .string()
      .min(1, t('this_field_is_required'))
      .email(t('email_is_invalid')),
    message: z.string().min(1, t('this_field_is_required')),
    captchaToken: z
      .string({ message: t('this_field_is_required') })
      .min(1, t('this_field_is_required')),
  });

  const handleValidate = (values: Values) => {
    try {
      ValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.flatten().fieldErrors;
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
        validateOnMount
      >
        {({
          values,
          isSubmitting,
          isValid,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
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
            <div className={styles.captcha}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                onChange={(token) => setFieldValue('captchaToken', token)}
              />
            </div>

            <LoadingBox
              isSubmitting={isSubmitting}
              formStatus={formStatus}
              setFormStatus={setFormStatus}
            />

            <div className={styles.submit}>
              <PrimaryButton type="submit" disabled={!isValid || isSubmitting}>
                {t('send_message')}
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

function LoadingBox({
  isSubmitting,
  formStatus,
  setFormStatus,
}: {
  isSubmitting: boolean;
  formStatus: FormStatusType;
  setFormStatus: React.Dispatch<React.SetStateAction<FormStatusType>>;
}) {
  const t = useTranslations('Contact');

  return (
    <div
      className={cx(styles.loadingBox, {
        [styles['loadingBox__visible']]: isSubmitting || formStatus !== null,
      })}
    >
      {formStatus === 'success' && (
        <div
          className={styles.loadingBox__icon}
          style={{ fill: 'var(--color-green)' }}
        >
          <Approve />
        </div>
      )}
      {formStatus === 'error' && (
        <div
          className={styles.loadingBox__icon}
          style={{ fill: 'var(--color-warning)' }}
        >
          <Cancel />
        </div>
      )}

      <div className={styles.loadingBox__info}>
        <span className={fonts.heading_400}>
          {formStatus === 'success' && t('form_thank_for_message')}
          {formStatus === 'error' && t('form_something_went_wrong')}
        </span>

        {formStatus === 'success' && (
          <span className={fonts.body__thick}>{t('form_success')}</span>
        )}
        {formStatus === 'error' && (
          <span className={fonts.body__thick}>
            {t('form_error')}
            <a href={`mailto:${personalInformations.email}`}>
              {personalInformations.email}
            </a>
          </span>
        )}
      </div>
      {formStatus === null && (
        <Loader secondaryColor="var(--color-grey-dark)" />
      )}

      {formStatus !== null && (
        <div className={styles.loadingBox__closeButton}>
          <SecondaryButton onClick={() => setFormStatus(null)}>
            {t('close')}
          </SecondaryButton>
        </div>
      )}
    </div>
  );
}
export default ContactForm;
