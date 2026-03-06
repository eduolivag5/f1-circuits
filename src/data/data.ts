export interface Circuit {
    round: number;
    id: string;
    name: string;
    location: string;
    date: string;
}

export interface Team {
    id: string;
    name: string;
    fullName: string;
    baseColor: string;
    secondaryColor: string;
    rank2025: number; // Posición en el mundial de constructores
}

export interface Driver {
    id: string;
    name: string;
    teamId: string;
    number: string;
    country: string;
    wins: number;
    podiums: number;
    entries: number;
    titles: number;
    rank2025: number;
    points: number;
}

export const TEAMS: Record<string, Team> = {
    mclaren: { id: 'mclaren', name: 'McLaren', fullName: 'McLaren Formula 1 Team', baseColor: '#FF8000', secondaryColor: '#FFFFFF', rank2025: 1 },
    ferrari: { id: 'ferrari', name: 'Ferrari', fullName: 'Scuderia Ferrari HP', baseColor: '#EF1A2D', secondaryColor: '#FFFFFF', rank2025: 2 },
    redbull: { id: 'redbull', name: 'Red Bull', fullName: 'Oracle Red Bull Racing', baseColor: '#0600EF', secondaryColor: '#FFEC00', rank2025: 3 },
    mercedes: { id: 'mercedes', name: 'Mercedes', fullName: 'Mercedes-AMG PETRONAS F1 Team', baseColor: '#27F4D2', secondaryColor: '#FFFFFF', rank2025: 4 },
    astonmartin: { id: 'astonmartin', name: 'Aston Martin', fullName: 'Aston Martin Aramco F1 Team', baseColor: '#006747', secondaryColor: '#CEDC00', rank2025: 5 },
    alpine: { id: 'alpine', name: 'Alpine', fullName: 'BWT Alpine F1 Team', baseColor: '#0093CC', secondaryColor: '#FF87BC', rank2025: 6 },
    haas: { id: 'haas', name: 'Haas', fullName: 'MoneyGram Haas F1 Team', baseColor: '#ED1A3B', secondaryColor: '#B6BABD', rank2025: 7 },
    rb: { id: 'rb', name: 'RB', fullName: 'Visa Cash App RB F1 Team', baseColor: '#6692FF', secondaryColor: '#FFFFFF', rank2025: 8 },
    williams: { id: 'williams', name: 'Williams', fullName: 'Williams Racing', baseColor: '#00A0DE', secondaryColor: '#FFFFFF', rank2025: 9 },
    audi: { id: 'audi', name: 'Audi', fullName: 'Audi F1 Factory Team', baseColor: '#F50537', secondaryColor: '#A7A7A7', rank2025: 10 },
    cadillac: { id: 'cadillac', name: 'Cadillac', fullName: 'Cadillac F1 Team', baseColor: '#E5E5E5', secondaryColor: '#FFD700', rank2025: 11 }
};

export const DRIVERS: Driver[] = [
    // RED BULL
    { id: 'verstappen', name: 'Max Verstappen', teamId: 'redbull', number: '1', country: 'NED', wins: 71, podiums: 127, entries: 233, titles: 4, rank2025: 2, points: 0 },
    { id: 'hadjar', name: 'Isack Hadjar', teamId: 'redbull', number: '6', country: 'FRA', wins: 0, podiums: 1, entries: 24, titles: 0, rank2025: 14, points: 0 },

    // MCLAREN
    { id: 'norris', name: 'Lando Norris', teamId: 'mclaren', number: '4', country: 'GBR', wins: 11, podiums: 44, entries: 152, titles: 1, rank2025: 1, points: 0 },
    { id: 'piastri', name: 'Oscar Piastri', teamId: 'mclaren', number: '81', country: 'AUS', wins: 6, podiums: 22, entries: 70, titles: 0, rank2025: 4, points: 0 },

    // FERRARI
    { id: 'leclerc', name: 'Charles Leclerc', teamId: 'ferrari', number: '16', country: 'MON', wins: 8, podiums: 50, entries: 171, titles: 0, rank2025: 3, points: 0 },
    { id: 'hamilton', name: 'Lewis Hamilton', teamId: 'ferrari', number: '44', country: 'GBR', wins: 105, podiums: 202, entries: 380, titles: 7, rank2025: 6, points: 0 },

    // MERCEDES
    { id: 'russell', name: 'George Russell', teamId: 'mercedes', number: '63', country: 'GBR', wins: 5, podiums: 21, entries: 151, titles: 0, rank2025: 5, points: 0 },
    { id: 'antonelli', name: 'Kimi Antonelli', teamId: 'mercedes', number: '12', country: 'ITA', wins: 0, podiums: 3, entries: 24, titles: 0, rank2025: 15, points: 0 },

    // ASTON MARTIN
    { id: 'alonso', name: 'Fernando Alonso', teamId: 'astonmartin', number: '14', country: 'ESP', wins: 32, podiums: 106, entries: 427, titles: 2, rank2025: 9, points: 0 },
    { id: 'stroll', name: 'Lance Stroll', teamId: 'astonmartin', number: '18', country: 'CAN', wins: 0, podiums: 3, entries: 187, titles: 0, rank2025: 13, points: 0 },

    // ALPINE
    { id: 'gasly', name: 'Pierre Gasly', teamId: 'alpine', number: '10', country: 'FRA', wins: 1, podiums: 4, entries: 174, titles: 0, rank2025: 11, points: 0 },
    { id: 'colapinto', name: 'Franco Colapinto', teamId: 'alpine', number: '43', country: 'ARG', wins: 0, podiums: 0, entries: 28, titles: 0, rank2025: 12, points: 0 },

    // AUDI
    { id: 'hulkenberg', name: 'Nico Hülkenberg', teamId: 'audi', number: '27', country: 'GER', wins: 0, podiums: 0, entries: 248, titles: 0, rank2025: 10, points: 0 },
    { id: 'bortoleto', name: 'Gabriel Bortoleto', teamId: 'audi', number: '5', country: 'BRA', wins: 0, podiums: 0, entries: 24, titles: 0, rank2025: 19, points: 0 },

    // CADILLAC
    { id: 'perez', name: 'Sergio Pérez', teamId: 'cadillac', number: '11', country: 'MEX', wins: 6, podiums: 39, entries: 306, titles: 0, rank2025: 8, points: 0 },
    { id: 'bottas', name: 'Valtteri Bottas', teamId: 'cadillac', number: '77', country: 'FIN', wins: 10, podiums: 67, entries: 306, titles: 0, rank2025: 16, points: 0 },

    // HAAS
    { id: 'ocon', name: 'Esteban Ocon', teamId: 'haas', number: '31', country: 'FRA', wins: 1, podiums: 3, entries: 178, titles: 0, rank2025: 7, points: 0 },
    { id: 'bearman', name: 'Oliver Bearman', teamId: 'haas', number: '87', country: 'GBR', wins: 0, podiums: 0, entries: 28, titles: 0, rank2025: 18, points: 0 },

    // RB
    { id: 'lawson', name: 'Liam Lawson', teamId: 'rb', number: '30', country: 'NZL', wins: 0, podiums: 0, entries: 36, titles: 0, rank2025: 17, points: 0 },
    { id: 'lindblad', name: 'Arvid Lindblad', teamId: 'rb', number: '41', country: 'GBR', wins: 0, podiums: 0, entries: 1, titles: 0, rank2025: 0, points: 0 },

    // WILLIAMS
    { id: 'sainz', name: 'Carlos Sainz', teamId: 'williams', number: '55', country: 'ESP', wins: 4, podiums: 25, entries: 230, titles: 0, rank2025: 20, points: 0 },
    { id: 'albon', name: 'Alexander Albon', teamId: 'williams', number: '23', country: 'THA', wins: 0, podiums: 2, entries: 126, titles: 0, rank2025: 21, points: 0 }
];

export const CIRCUITS: Circuit[] = [
    { round: 1, id: 'australia', name: 'Australian GP', location: 'Melbourne', date: '06-08 MAR' },
    { round: 2, id: 'china', name: 'Chinese GP', location: 'Shanghai', date: '13-15 MAR' },
    { round: 3, id: 'japan', name: 'Japanese GP', location: 'Suzuka', date: '27-29 MAR' },
    { round: 4, id: 'bahrain', name: 'Bahrain GP', location: 'Sakhir', date: '10-12 APR' },
    { round: 5, id: 'jeddah', name: 'Saudi Arabian GP', location: 'Jeddah', date: '17-19 APR' },
    { round: 6, id: 'miami', name: 'Miami GP', location: 'Miami', date: '01-03 MAY' },
    { round: 7, id: 'canada', name: 'Canadian GP', location: 'Montreal', date: '22-24 MAY' },
    { round: 8, id: 'monaco', name: 'Monaco GP', location: 'Monte Carlo', date: '05-07 JUN' },
    { round: 9, id: 'barcelona', name: 'Barcelona GP', location: 'Barcelona', date: '12-14 JUN' },
    { round: 10, id: 'austria', name: 'Austrian GP', location: 'Spielberg', date: '26-28 JUN' },
    { round: 11, id: 'great-britain', name: 'British GP', location: 'Silverstone', date: '03-05 JUL' },
    { round: 12, id: 'belgium', name: 'Belgian GP', location: 'Spa', date: '17-19 JUL' },
    { round: 13, id: 'hungary', name: 'Hungarian GP', location: 'Budapest', date: '24-26 JUL' },
    { round: 14, id: 'netherlands', name: 'Dutch GP', location: 'Zandvoort', date: '21-23 AUG' },
    { round: 15, id: 'italy', name: 'Italian GP', location: 'Monza', date: '04-06 SEP' },
    { round: 16, id: 'madrid', name: 'Spanish GP', location: 'Madrid', date: '11-13 SEP' },
    { round: 17, id: 'azerbaijan', name: 'Azerbaijan GP', location: 'Baku', date: '24-26 SEP' },
    { round: 18, id: 'singapore', name: 'Singapore GP', location: 'Marina Bay', date: '09-11 OCT' },
    { round: 19, id: 'austin', name: 'United States GP', location: 'Austin', date: '23-25 OCT' },
    { round: 20, id: 'mexico', name: 'Mexico City GP', location: 'Mexico', date: '30 OCT - 01 NOV' },
    { round: 21, id: 'brazil', name: 'São Paulo GP', location: 'Interlagos', date: '06-08 NOV' },
    { round: 22, id: 'las-vegas', name: 'Las Vegas GP', location: 'Las Vegas', date: '19-21 NOV' },
    { round: 23, id: 'qatar', name: 'Qatar GP', location: 'Doha', date: '27-29 NOV' },
    { round: 24, id: 'abu-dhabi', name: 'Abu Dhabi GP', location: 'Yas Marina', date: '04-06 DEC' },
];

export const REGULATIONS = [
    { title: "Manual Override", desc: "Sustituye al DRS. Potencia eléctrica extra para adelantamientos." },
    { title: "Active Aero", desc: "Alerones móviles (Modo X y Z) para reducir drag en rectas." },
    { title: "50/50 Power", desc: "Reparto equitativo entre motor térmico y potencia eléctrica." }
];