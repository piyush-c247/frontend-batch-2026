"use client";

import styles from "./AuditTable.module.scss";
import { AUDIT_TABLE_HEADER } from "./constants";

export const AuditTableHeader = () => {

    const renderCell = (className: string, content?: string, extraClass?: string) => (
        <div className={`${className} ${extraClass || ""}`}>
            {content || ""}
        </div>
    );

    const renderRedCell = (className: string, content: string) =>
        renderCell(className, content, styles.redText);

    return (
        <div className={styles.mainHeaderContainer}>

            {/* OVERVIEW */}
            <div className={`${styles.headerGroup} ${styles.headerOverview}`}>
                <div className={styles.topLabel}>
                    {AUDIT_TABLE_HEADER.OVERVIEW}
                </div>

                <div className={styles.bottomLabels}>
                    {renderCell(styles.wCat, AUDIT_TABLE_HEADER.OVERVIEW_COLUMNS.CATEGORY)}
                    {renderCell(styles.wSection, AUDIT_TABLE_HEADER.OVERVIEW_COLUMNS.SECTION)}
                    {renderCell(styles.wNum, AUDIT_TABLE_HEADER.OVERVIEW_COLUMNS.QUESTIONS)}
                </div>
            </div>

            {/* SCORING */}
            <div className={`${styles.headerGroup} ${styles.headerScoring}`}>
                <div className={styles.topLabel}>
                    {AUDIT_TABLE_HEADER.SCORING}
                </div>

                <div className={styles.scoringSubGrid}>
                    <div className={styles.subHeaderRow}>
                        {renderCell(styles.wNum2, AUDIT_TABLE_HEADER.SCORING_COLUMNS.COMPLETION)}
                        {renderCell(styles.wNum, AUDIT_TABLE_HEADER.SCORING_COLUMNS.TYPE_TOTAL)}
                        {renderCell(styles.wNum, AUDIT_TABLE_HEADER.SCORING_COLUMNS.PERCENT_TOTAL)}
                        {renderCell(styles.wNum, AUDIT_TABLE_HEADER.SCORING_COLUMNS.SECTION_TOTAL)}
                        {renderCell(styles.wGap)}
                        {renderCell(styles.wNum, AUDIT_TABLE_HEADER.SCORING_COLUMNS.WEIGHT)}
                        {renderCell(styles.wNum, AUDIT_TABLE_HEADER.SCORING_COLUMNS.TOTAL_SCORE)}
                    </div>

                    <div className={styles.bottomLabels}>
                        {renderRedCell(styles.wNum, AUDIT_TABLE_HEADER.SCORING_SUB.QUESTIONS)}
                        {renderRedCell(styles.wNum, AUDIT_TABLE_HEADER.SCORING_SUB.WEIGHT)}
                        {renderCell(styles.wNum)}
                        {renderCell(styles.wNum)}
                        {renderCell(styles.wNum)}
                        {renderCell(styles.wGap)}
                        {renderCell(styles.wNum)}
                        {renderCell(styles.wNum)}
                    </div>
                </div>
            </div>

            {/* ADJUSTED */}
            <div className={`${styles.headerGroup} ${styles.headerAdjusted}`}>
                <div className={styles.topLabel}>
                    {AUDIT_TABLE_HEADER.ADJUSTED}
                </div>

                <div className={styles.adjustedSubGrid}>
                    <div className={styles.subHeaderRow}>
                        {renderCell(styles.wNum2, AUDIT_TABLE_HEADER.ADJUSTED_COLUMNS.WEIGHT)}
                        {renderCell(styles.wNum2, AUDIT_TABLE_HEADER.ADJUSTED_COLUMNS.SCORE)}
                    </div>

                    <div className={styles.bottomLabels}>
                        {renderRedCell(styles.wNum, AUDIT_TABLE_HEADER.ADJUSTED_SUB.TYPE)}
                        {renderRedCell(styles.wNum, AUDIT_TABLE_HEADER.ADJUSTED_SUB.SECTION)}
                        {renderRedCell(styles.wNum, AUDIT_TABLE_HEADER.ADJUSTED_SUB.TYPE)}
                        {renderRedCell(styles.wNum, AUDIT_TABLE_HEADER.ADJUSTED_SUB.SECTION)}
                    </div>
                </div>
            </div>

        </div>
    );
};