export const tabs = [
  'Incidents',
  'Maintenance',
  'Policies',
  'Drivers',
  'Performance',
  'Bonus',
  'Summary',
] as const;

export type TabType = typeof tabs[number];