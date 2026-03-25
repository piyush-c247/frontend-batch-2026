import { FiLink, FiFolder } from 'react-icons/fi';
import { LABELS, AUDIT_DATA } from './detailConstants'; 
import styles from './DetailsSection.module.scss';

export default function DetailsSection() {
  const { carrier, meta } = AUDIT_DATA;
  const carrierFields = [
    { label: LABELS.CARRIER_DBA, value: carrier.dba },
    { label: LABELS.NSC_CVOR, value: carrier.nsc },
    { label: LABELS.DOT, value: carrier.dot },
    { label: LABELS.OWNER, value: carrier.owner },
    { label: LABELS.OWNER_PHONE, value: carrier.phone },
    { label: LABELS.OWNER_EMAIL, value: carrier.email },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h2>{carrier.name}</h2>
          <div className={styles.iconGroup}>
            {[FiLink, FiFolder].map((Icon, i) => (
              <button key={i} className={styles.iconBtn}><Icon /></button>
            ))}
          </div>
        </div>
        <button className={styles.auditBtn}>{LABELS.TITLE}</button>
      </div>

      <div className={styles.grid}>
        {carrierFields.slice(0, 3).map((f, i) => (
          <div key={i}><span className={styles.label}>{f.label}</span> {f.value}</div>
        ))}
        <div className={styles.metaRight}>{LABELS.LAST_SAVED} {meta.lastSaved}</div>

        {carrierFields.slice(3).map((f, i) => (
          <div key={i}><span className={styles.label}>{f.label}</span> {f.value}</div>
        ))}
        <div className={styles.metaRight}>
          {LABELS.AUDITOR} {meta.auditor} | {LABELS.VERSION} {meta.version} | {LABELS.AUDIT_STARTED} {meta.auditStarted}
        </div>
      </div>
    </div>
  );
}
