import styles from './ScoreCard.module.scss';
import { SectionScore } from "@/utils/sectionScoring";
import {LABELS} from './constants'

interface Props {
  sectionScores: SectionScore[];
  total: number;
}

export default function ScoreCard({ sectionScores, total }: Props) {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{LABELS.SCORES_BY_TYPE}</h4>
      
      <div className={styles.card}>
        <div className={styles.scoreList}>

          {sectionScores.map((section) => (
            <div key={section.sectionId} className={styles.row}>
              <span className={styles.label}>{section.title}</span>
              <span className={styles.separator}>:</span>
              <span className={styles.value}>
                {section.percentage.toFixed(2)}
              </span>
            </div>
          ))}

        </div>

        <div className={styles.totalSection}>
          <div className={styles.row}>
            <span className={styles.totalLabel}>{LABELS.TOTAL_SCORE}</span>
            <span className={styles.separator}>:</span>
            <span className={styles.totalValue}>
              {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}