// Datos simulados para incidentes
export interface Incident {
  id: string;
  type: string;
  status: "pending" | "resolved" | "investigating";
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
    id: "INC-001",
    type: "Robo",
    status: "resolved",
    date: "2025-11-10",
    time: "14:30",
    location: "123 Calle Principal, Centro",
    description: "Robo de bicicleta en área residencial",
    reporter: "Juan Pérez",
    latitude: 40.7128,
    longitude: -74.006,
    createdAt: "2025-11-10T14:30:00Z",
  },
  {
    id: "INC-002",
    type: "Vandalismo",
    status: "investigating",
    date: "2025-11-11",
    time: "09:15",
    location: "456 Avenida Roble, Distrito Norte",
    description: "Grafiti en propiedad pública",
    reporter: "María García",
    latitude: 40.758,
    longitude: -73.985,
    createdAt: "2025-11-11T09:15:00Z",
  },
  {
    id: "INC-003",
    type: "Actividad Sospechosa",
    status: "pending",
    date: "2025-11-12",
    time: "22:45",
    location: "789 Carretera Olmo, Lado Oeste",
    description: "Individuos desconocidos merodeando cerca del parque",
    reporter: "Roberto López",
    latitude: 40.713,
    longitude: -74.008,
    createdAt: "2025-11-12T22:45:00Z",
  },
  {
    id: "INC-004",
    type: "Accidente de Tráfico",
    status: "resolved",
    date: "2025-11-09",
    time: "16:20",
    location: "321 Calle Pino, Centro",
    description: "Colisión menor en intersección",
    reporter: "Alicia Rodríguez",
    latitude: 40.748,
    longitude: -73.968,
    createdAt: "2025-11-09T16:20:00Z",
  },
  {
    id: "INC-005",
    type: "Queja por Ruido",
    status: "pending",
    date: "2025-11-12",
    time: "23:00",
    location: "654 Carril Abedul, Lado Este",
    description: "Música fuerte proveniente del edificio residencial",
    reporter: "Miguel Martínez",
    latitude: 40.728,
    longitude: -73.977,
    createdAt: "2025-11-12T23:00:00Z",
  },
];

// Estadísticas
export const incidentStats = {
  total: mockIncidents.length,
  resolved: mockIncidents.filter((i) => i.status === "resolved").length,
  pending: mockIncidents.filter((i) => i.status === "pending").length,
  investigating: mockIncidents.filter((i) => i.status === "investigating")
    .length,
};

// Datos de tendencia para gráfico
export const trendingData = [
  { month: "Ene", incidents: 24 },
  { month: "Feb", incidents: 18 },
  { month: "Mar", incidents: 32 },
  { month: "Abr", incidents: 28 },
  { month: "May", incidents: 35 },
  { month: "Jun", incidents: 22 },
  { month: "Jul", incidents: 19 },
  { month: "Ago", incidents: 25 },
  { month: "Sep", incidents: 29 },
  { month: "Oct", incidents: 31 },
  { month: "Nov", incidents: 15 },
  { month: "Dic", incidents: 26 },
];

// Distribución de tipos de incidentes
export const incidentTypesData = [
  { type: "Robo", count: 45 },
  { type: "Vandalismo", count: 32 },
  { type: "Actividad Sospechosa", count: 28 },
  { type: "Accidente de Tráfico", count: 23 },
  { type: "Queja por Ruido", count: 18 },
];
