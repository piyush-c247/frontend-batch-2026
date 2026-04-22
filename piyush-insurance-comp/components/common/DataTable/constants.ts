import {
  FaChartBar,
  FaAddressBook,
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

export const TEXTS = {
  actions: 'Actions',
  noData: 'No Data Available',
} as const;

export const ACTIONS = [
  {
    key: 'rate',
    icon: FaChartBar,
    styleKey: 'rate',
  },
  {
    key: 'contacts',
    icon: FaAddressBook,
    styleKey: 'contacts',
  },
  {
    key: 'locations',
    icon: FaMapMarkerAlt,
    styleKey: 'locations',
  },
  {
    key: 'edit',
    icon: FaEdit,
    styleKey: 'edit',
  },
  {
    key: 'delete',
    icon: FaTrash,
    styleKey: 'delete',
  },
] as const;