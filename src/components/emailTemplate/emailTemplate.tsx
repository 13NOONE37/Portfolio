import React from 'react';
import styles from './emailTemplate.module.css';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div className={styles.container}>
    <p className={styles.body}>{message}</p>
    <h4 className={styles.name}>{name}</h4>
    <h4 className={styles.email}>{email}</h4>
  </div>
);
