"use client";

import styles from './Tabs.module.scss';
import { tabs, TabType } from './tabs.config';


export { tabs };
export type { TabType };

interface Props {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

export default function Tabs({ activeTab, onChange }: Props) {
  return (
    <div className={styles.tabs}>
      {tabs.map(tab => (
        <button
          key={tab}
          className={`${styles.tab} ${
            activeTab === tab ? styles.active : ''
          }`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}