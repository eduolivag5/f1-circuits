export interface Team {
    id: string;
    name: string;
    fullName: string;
    baseColor: string;
    secondaryColor: string;
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
}

export interface Circuit {
    round: number;
    id: string;
    name: string;
    location: string;
    date: string;
}

export const TEAMS: Record<string, Team> = {
    ferrari: { id: 'ferrari', name: 'Ferrari', fullName: 'Scuderia Ferrari HP', baseColor: '#E10600', secondaryColor: '#FFFFFF' },
    redbull: { id: 'redbull', name: 'Red Bull', fullName: 'Oracle Red Bull Racing', baseColor: '#3671C6', secondaryColor: '#FFEC00' },
    mercedes: { id: 'mercedes', name: 'Mercedes', fullName: 'Mercedes-AMG PETRONAS F1 Team', baseColor: '#27F4D2', secondaryColor: '#000000' },
    mclaren: { id: 'mclaren', name: 'McLaren', fullName: 'McLaren Formula 1 Team', baseColor: '#FF8000', secondaryColor: '#5FB7E9' },
    astonmartin: { id: 'astonmartin', name: 'Aston Martin', fullName: 'Aston Martin Aramco F1 Team', baseColor: '#229971', secondaryColor: '#CEDC00' },
    audi: { id: 'audi', name: 'Audi', fullName: 'Audi F1 Factory Team', baseColor: '#000000', secondaryColor: '#F50537' },
    williams: { id: 'williams', name: 'Williams', fullName: 'Williams Racing', baseColor: '#37BEDD', secondaryColor: '#005AFF' },
    alpine: { id: 'alpine', name: 'Alpine', fullName: 'BWT Alpine F1 Team', baseColor: '#0093CC', secondaryColor: '#FF87BC' },
    haas: { id: 'haas', name: 'Haas', fullName: 'MoneyGram Haas F1 Team', baseColor: '#B6BABD', secondaryColor: '#E6002B' },
    rb: { id: 'rb', name: 'RB', fullName: 'Visa Cash App RB F1 Team', baseColor: '#6692FF', secondaryColor: '#FFFFFF' },
    cadillac: { id: 'cadillac', name: 'Cadillac', fullName: 'Cadillac F1 Team', baseColor: '#000000', secondaryColor: '#FFFFFF' }
};

export const DRIVERS: Driver[] = [
    { id: 'verstappen', name: 'Max Verstappen', teamId: 'redbull', number: '1', country: 'NED', wins: 62, podiums: 111, entries: 206, titles: 3 },
    { id: 'leclerc', name: 'Charles Leclerc', teamId: 'ferrari', number: '16', country: 'MON', wins: 7, podiums: 41, entries: 144, titles: 0 },
    { id: 'alonso', name: 'Fernando Alonso', teamId: 'astonmartin', number: '14', country: 'ESP', wins: 32, podiums: 106, entries: 401, titles: 2 },
    { id: 'hamilton', name: 'Lewis Hamilton', teamId: 'ferrari', number: '44', country: 'GBR', wins: 105, podiums: 201, entries: 353, titles: 7 },
    { id: 'perez', name: 'Sergio Pérez', teamId: 'redbull', number: '11', country: 'MEX', wins: 6, podiums: 39, entries: 282, titles: 0 },
    { id: 'russell', name: 'George Russell', teamId: 'mercedes', number: '63', country: 'GBR', wins: 2, podiums: 14, entries: 125, titles: 0 },
    { id: 'antonelli', name: 'Kimi Antonelli', teamId: 'mercedes', number: '12', country: 'ITA', wins: 0, podiums: 0, entries: 0, titles: 0 },
    { id: 'norris', name: 'Lando Norris', teamId: 'mclaren', number: '4', country: 'GBR', wins: 3, podiums: 25, entries: 125, titles: 0 },
    { id: 'piastri', name: 'Oscar Piastri', teamId: 'mclaren', number: '81', country: 'AUS', wins: 2, podiums: 9, entries: 46, titles: 0 },
    { id: 'stroll', name: 'Lance Stroll', teamId: 'astonmartin', number: '18', country: 'CAN', wins: 0, podiums: 3, entries: 163, titles: 0 },
    { id: 'hulkenberg', name: 'Nico Hülkenberg', teamId: 'audi', number: '27', country: 'GER', wins: 0, podiums: 0, entries: 224, titles: 0 },
    { id: 'bortoleto', name: 'Gabriel Bortoleto', teamId: 'audi', number: '5', country: 'BRA', wins: 0, podiums: 0, entries: 0, titles: 0 },
    { id: 'sainz', name: 'Carlos Sainz', teamId: 'williams', number: '55', country: 'ESP', wins: 4, podiums: 25, entries: 206, titles: 0 },
    { id: 'albon', name: 'Alexander Albon', teamId: 'williams', number: '23', country: 'THA', wins: 0, podiums: 2, entries: 102, titles: 0 },
    { id: 'gasly', name: 'Pierre Gasly', teamId: 'alpine', number: '10', country: 'FRA', wins: 1, podiums: 4, entries: 150, titles: 0 },
    { id: 'doohan', name: 'Jack Doohan', teamId: 'alpine', number: '7', country: 'AUS', wins: 0, podiums: 0, entries: 0, titles: 0 },
    { id: 'ocon', name: 'Esteban Ocon', teamId: 'haas', number: '31', country: 'FRA', wins: 1, podiums: 3, entries: 154, titles: 0 },
    { id: 'bearman', name: 'Oliver Bearman', teamId: 'haas', number: '87', country: 'GBR', wins: 0, podiums: 0, entries: 3, titles: 0 },
    { id: 'tsunoda', name: 'Yuki Tsunoda', teamId: 'rb', number: '22', country: 'JPN', wins: 0, podiums: 0, entries: 87, titles: 0 },
    { id: 'hadjar', name: 'Isack Hadjar', teamId: 'rb', number: '6', country: 'FRA', wins: 0, podiums: 0, entries: 0, titles: 0 }
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