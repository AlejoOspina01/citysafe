// Mock data for incidents
export interface Incident {
  id: string;
  type: string;
  status: 'pending' | 'resolved' | 'investigating';
  date: string;
  time: string;
  location: string;
  description: string;
  reporter: string;
  latitude: number;
  longitude: number;
  createdAt: string;
}

export const mockIncidents: Incident[] = [
  {
    id: 'INC-001',
    type: 'Theft',
    status: 'resolved',
    date: '2025-11-10',
    time: '14:30',
    location: '123 Main Street, Downtown',
    description: 'Bicycle theft from residential area',
    reporter: 'John Doe',
    latitude: 40.7128,
    longitude: -74.006,
    createdAt: '2025-11-10T14:30:00Z',
  },
  {
    id: 'INC-002',
    type: 'Vandalism',
    status: 'investigating',
    date: '2025-11-11',
    time: '09:15',
    location: '456 Oak Avenue, North District',
    description: 'Graffiti on public property',
    reporter: 'Jane Smith',
    latitude: 40.758,
    longitude: -73.985,
    createdAt: '2025-11-11T09:15:00Z',
  },
  {
    id: 'INC-003',
    type: 'Suspicious Activity',
    status: 'pending',
    date: '2025-11-12',
    time: '22:45',
    location: '789 Elm Road, West Side',
    description: 'Unknown individuals loitering near park',
    reporter: 'Robert Johnson',
    latitude: 40.713,
    longitude: -74.008,
    createdAt: '2025-11-12T22:45:00Z',
  },
  {
    id: 'INC-004',
    type: 'Traffic Accident',
    status: 'resolved',
    date: '2025-11-09',
    time: '16:20',
    location: '321 Pine Street, Central',
    description: 'Minor collision at intersection',
    reporter: 'Alice Williams',
    latitude: 40.748,
    longitude: -73.968,
    createdAt: '2025-11-09T16:20:00Z',
  },
  {
    id: 'INC-005',
    type: 'Noise Complaint',
    status: 'pending',
    date: '2025-11-12',
    time: '23:00',
    location: '654 Birch Lane, East Side',
    description: 'Loud music from residential building',
    reporter: 'Michael Brown',
    latitude: 40.728,
    longitude: -73.977,
    createdAt: '2025-11-12T23:00:00Z',
  },
];

// Statistics
export const incidentStats = {
  total: mockIncidents.length,
  resolved: mockIncidents.filter((i) => i.status === 'resolved').length,
  pending: mockIncidents.filter((i) => i.status === 'pending').length,
  investigating: mockIncidents.filter((i) => i.status === 'investigating').length,
};

// Trending data for chart
export const trendingData = [
  { month: 'Jan', incidents: 24 },
  { month: 'Feb', incidents: 18 },
  { month: 'Mar', incidents: 32 },
  { month: 'Apr', incidents: 28 },
  { month: 'May', incidents: 35 },
  { month: 'Jun', incidents: 22 },
  { month: 'Jul', incidents: 19 },
  { month: 'Aug', incidents: 25 },
  { month: 'Sep', incidents: 29 },
  { month: 'Oct', incidents: 31 },
  { month: 'Nov', incidents: 15 },
  { month: 'Dec', incidents: 26 },
];

// Incident types distribution
export const incidentTypesData = [
  { type: 'Theft', count: 45 },
  { type: 'Vandalism', count: 32 },
  { type: 'Suspicious Activity', count: 28 },
  { type: 'Traffic Accident', count: 23 },
  { type: 'Noise Complaint', count: 18 },
];
