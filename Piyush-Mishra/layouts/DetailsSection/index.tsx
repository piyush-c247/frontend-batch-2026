import { FiLink, FiFolder } from 'react-icons/fi';
import { LABELS, AUDIT_DATA } from './detailConstants'; 
import styles from './DetailsSection.module.scss';

export default function DetailsSection() {
  const { carrier, meta } = AUDIT_DATA;

  return (
    <div className={styles.card}>
      {/* Top Header Section */}
      <div className={styles.header}>
        <div className={styles.left}>
          <h2>{carrier.name}</h2>
          <div className={styles.iconGroup}>
            <button className={styles.iconBtn}><FiLink /></button>
            <button className={styles.iconBtn}><FiFolder /></button>
          </div>
        </div>
        <button className={styles.auditBtn}>
          {LABELS.TITLE}
        </button>
      </div>

      {/* Main Info Grid */}
      <div className={styles.grid}>
        <div><span className={styles.label}>{LABELS.CARRIER_DBA}</span> {carrier.dba}</div>
        <div><span className={styles.label}>{LABELS.NSC_CVOR}</span> {carrier.nsc}</div>
        <div><span className={styles.label}>{LABELS.DOT}</span> {carrier.dot}</div>
        <div className={styles.metaRight}>
           {LABELS.LAST_SAVED} {meta.lastSaved}
        </div>

        <div><span className={styles.label}>{LABELS.OWNER}</span> {carrier.owner}</div>
        <div><span className={styles.label}>{LABELS.OWNER_PHONE}</span> {carrier.phone}</div>
        <div><span className={styles.label}>{LABELS.OWNER_EMAIL}</span> {carrier.email}</div>
        <div className={styles.metaRight}>
          {LABELS.AUDITOR} {meta.auditor} | {LABELS.VERSION} {meta.version} | {LABELS.AUDIT_STARTED} {meta.auditStarted}
        </div>
      </div>
    </div>
  );
}
