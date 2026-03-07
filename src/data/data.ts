export interface Circuit {
    round: number;
    id: string;
    name: string;
    location: string;
    date: string;
    description: string;
    specs: {
        firstGP: string;
        laps: number;
        length: string; // km
        distance: string; // km
        record: string;
    };
}

export interface Team {
    id: string;
    name: string;
    fullName: string;
    baseColor: string;
    secondaryColor: string;
    rank2025: number;
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

export interface Regulation {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    icon: string;
}

export interface News {
    id: string;
    title: string;
    excerpt: string;
    category: 'TECHNICAL' | 'MERCADO' | 'RACE_WEEK' | 'F1_LIVE';
    date: string;
    imageUrl: string;
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
    { id: 'verstappen', name: 'Max Verstappen', teamId: 'redbull', number: '1', country: 'NL', wins: 71, podiums: 127, entries: 233, titles: 4, rank2025: 2, points: 0 },
    { id: 'hadjar', name: 'Isack Hadjar', teamId: 'redbull', number: '6', country: 'FR', wins: 0, podiums: 1, entries: 24, titles: 0, rank2025: 14, points: 0 },

    // MCLAREN
    { id: 'norris', name: 'Lando Norris', teamId: 'mclaren', number: '4', country: 'GB', wins: 11, podiums: 44, entries: 152, titles: 1, rank2025: 1, points: 0 },
    { id: 'piastri', name: 'Oscar Piastri', teamId: 'mclaren', number: '81', country: 'AU', wins: 6, podiums: 22, entries: 70, titles: 0, rank2025: 4, points: 0 },

    // FERRARI
    { id: 'leclerc', name: 'Charles Leclerc', teamId: 'ferrari', number: '16', country: 'MC', wins: 8, podiums: 50, entries: 171, titles: 0, rank2025: 3, points: 0 },
    { id: 'hamilton', name: 'Lewis Hamilton', teamId: 'ferrari', number: '44', country: 'GB', wins: 105, podiums: 202, entries: 380, titles: 7, rank2025: 6, points: 0 },

    // MERCEDES
    { id: 'russell', name: 'George Russell', teamId: 'mercedes', number: '63', country: 'GB', wins: 5, podiums: 21, entries: 151, titles: 0, rank2025: 5, points: 0 },
    { id: 'antonelli', name: 'Kimi Antonelli', teamId: 'mercedes', number: '12', country: 'IT', wins: 0, podiums: 3, entries: 24, titles: 0, rank2025: 15, points: 0 },

    // ASTON MARTIN
    { id: 'alonso', name: 'Fernando Alonso', teamId: 'astonmartin', number: '14', country: 'ES', wins: 32, podiums: 106, entries: 427, titles: 2, rank2025: 9, points: 0 },
    { id: 'stroll', name: 'Lance Stroll', teamId: 'astonmartin', number: '18', country: 'CA', wins: 0, podiums: 3, entries: 187, titles: 0, rank2025: 13, points: 0 },

    // ALPINE
    { id: 'gasly', name: 'Pierre Gasly', teamId: 'alpine', number: '10', country: 'FR', wins: 1, podiums: 4, entries: 174, titles: 0, rank2025: 11, points: 0 },
    { id: 'colapinto', name: 'Franco Colapinto', teamId: 'alpine', number: '43', country: 'AR', wins: 0, podiums: 0, entries: 28, titles: 0, rank2025: 12, points: 0 },

    // AUDI
    { id: 'hulkenberg', name: 'Nico Hülkenberg', teamId: 'audi', number: '27', country: 'DE', wins: 0, podiums: 0, entries: 248, titles: 0, rank2025: 10, points: 0 },
    { id: 'bortoleto', name: 'Gabriel Bortoleto', teamId: 'audi', number: '5', country: 'BR', wins: 0, podiums: 0, entries: 24, titles: 0, rank2025: 19, points: 0 },

    // CADILLAC
    { id: 'perez', name: 'Sergio Pérez', teamId: 'cadillac', number: '11', country: 'MX', wins: 6, podiums: 39, entries: 306, titles: 0, rank2025: 8, points: 0 },
    { id: 'bottas', name: 'Valtteri Bottas', teamId: 'cadillac', number: '77', country: 'FI', wins: 10, podiums: 67, entries: 306, titles: 0, rank2025: 16, points: 0 },

    // HAAS
    { id: 'ocon', name: 'Esteban Ocon', teamId: 'haas', number: '31', country: 'FR', wins: 1, podiums: 3, entries: 178, titles: 0, rank2025: 7, points: 0 },
    { id: 'bearman', name: 'Oliver Bearman', teamId: 'haas', number: '87', country: 'GB', wins: 0, podiums: 0, entries: 28, titles: 0, rank2025: 18, points: 0 },

    // RB
    { id: 'lawson', name: 'Liam Lawson', teamId: 'rb', number: '30', country: 'NZ', wins: 0, podiums: 0, entries: 36, titles: 0, rank2025: 17, points: 0 },
    { id: 'lindblad', name: 'Arvid Lindblad', teamId: 'rb', number: '41', country: 'GB', wins: 0, podiums: 0, entries: 1, titles: 0, rank2025: 0, points: 0 },

    // WILLIAMS
    { id: 'sainz', name: 'Carlos Sainz', teamId: 'williams', number: '55', country: 'ES', wins: 4, podiums: 25, entries: 230, titles: 0, rank2025: 20, points: 0 },
    { id: 'albon', name: 'Alexander Albon', teamId: 'williams', number: '23', country: 'TH', wins: 0, podiums: 2, entries: 126, titles: 0, rank2025: 21, points: 0 }
];

export const CIRCUITS: Circuit[] = [
    { 
        round: 1, id: 'australia', name: 'Australian GP', location: 'Melbourne', date: '06-08 MAR',
        description: "El inicio de la temporada en Albert Park. Un circuito semi-urbano rápido y fluido que ha sido renovado recientemente para favorecer los adelantamientos con la nueva aerodinámica.",
        specs: { firstGP: "1996", laps: 58, length: "5.278 km", distance: "306.124 km", record: "1:19.813 (Leclerc)" }
    },
    { 
        round: 2, id: 'china', name: 'Chinese GP', location: 'Shanghai', date: '13-15 MAR',
        description: "Famoso por su curva 1 en forma de 'caracol' y su larguísima recta trasera. Un trazado técnico que exige un equilibrio perfecto entre velocidad punta y agarre lateral.",
        specs: { firstGP: "2004", laps: 56, length: "5.451 km", distance: "305.066 km", record: "1:32.238 (Schumacher)" }
    },
    { 
        round: 3, id: 'japan', name: 'Japanese GP', location: 'Suzuka', date: '27-29 MAR',
        description: "El único circuito en forma de '8'. Sus eses del primer sector y la mítica curva 130R lo convierten en el test definitivo para el chasis de un monoplaza.",
        specs: { firstGP: "1987", laps: 53, length: "5.807 km", distance: "307.471 km", record: "1:30.965 (Antonelli)" }
    },
    { 
        round: 4, id: 'bahrain', name: 'Bahrain GP', location: 'Sakhir', date: '10-12 APR',
        description: "Carrera nocturna bajo los focos del desierto. Muy exigente con los frenos y la tracción, ofrece siempre grandes batallas en la primera curva.",
        specs: { firstGP: "2004", laps: 57, length: "5.412 km", distance: "308.238 km", record: "1:31.447 (De la Rosa)" }
    },
    { 
        round: 5, id: 'jeddah', name: 'Saudi Arabian GP', location: 'Jeddah', date: '17-19 APR',
        description: "El circuito urbano más rápido del mundo. Muros extremadamente cerca a velocidades superiores a los 300 km/h. Pura adrenalina y precisión.",
        specs: { firstGP: "2021", laps: 50, length: "6.174 km", distance: "308.450 km", record: "1:30.734 (Hamilton)" }
    },
    { 
        round: 6, id: 'miami', name: 'Miami GP', location: 'Miami', date: '01-03 MAY',
        description: "Un trazado moderno alrededor del Hard Rock Stadium. Combina secciones de alta velocidad con una zona extremadamente revirada bajo la autopista.",
        specs: { firstGP: "2022", laps: 57, length: "5.412 km", distance: "308.326 km", record: "1:29.708 (Verstappen)" }
    },
    { 
        round: 7, id: 'canada', name: 'Canadian GP', location: 'Montreal', date: '22-24 MAY',
        description: "Hogar del famoso 'Muro de los Campeones'. Un circuito de 'stop-and-go' donde se castigan los pianos y se requiere una gran estabilidad en frenada.",
        specs: { firstGP: "1978", laps: 70, length: "4.361 km", distance: "305.270 km", record: "1:13.078 (Bottas)" }
    },
    { 
        round: 8, id: 'monaco', name: 'Monaco GP', location: 'Monte Carlo', date: '05-07 JUN',
        description: "La carrera que todo piloto sueña con ganar. Un anacronismo glorioso donde el glamour se mezcla con el riesgo absoluto en cada milímetro.",
        specs: { firstGP: "1950", laps: 78, length: "3.337 km", distance: "260.286 km", record: "1:12.909 (Hamilton)" }
    },
    { 
        round: 9, id: 'barcelona', name: 'Barcelona GP', location: 'Barcelona', date: '12-14 JUN',
        description: "El trazado de pruebas por excelencia. Sus curvas rápidas revelan inmediatamente qué coche tiene la mejor carga aerodinámica del año.",
        specs: { firstGP: "1991", laps: 66, length: "4.657 km", distance: "307.236 km", record: "1:16.330 (Verstappen)" }
    },
    { 
        round: 10, id: 'austria', name: 'Austrian GP', location: 'Spielberg', date: '26-28 JUN',
        description: "Corto, montañoso y extremadamente rápido. Con solo 10 curvas, las diferencias en clasificación suelen ser de milésimas de segundo.",
        specs: { firstGP: "1970", laps: 71, length: "4.318 km", distance: "306.452 km", record: "1:05.619 (Sainz)" }
    },
    { 
        round: 11, id: 'great-britain', name: 'British GP', location: 'Silverstone', date: '03-05 JUL',
        description: "La cuna de la F1. Silverstone es velocidad pura. El complejo Maggotts-Becketts es la secuencia de curvas más icónica del calendario.",
        specs: { firstGP: "1950", laps: 52, length: "5.891 km", distance: "306.198 km", record: "1:27.097 (Verstappen)" }
    },
    { 
        round: 12, id: 'belgium', name: 'Belgian GP', location: 'Spa', date: '17-19 JUL',
        description: "El circuito más largo y majestuoso. El clima impredecible de las Ardenas suele añadir drama a las subidas por Eau Rouge y Raidillon.",
        specs: { firstGP: "1950", laps: 44, length: "7.004 km", distance: "308.052 km", record: "1:46.286 (Bottas)" }
    },
    { 
        round: 13, id: 'hungary', name: 'Hungarian GP', location: 'Budapest', date: '24-26 JUL',
        description: "Un 'Mónaco sin muros'. Revirado y caluroso, donde adelantar es un reto y la gestión de neumáticos es crítica bajo el sol de julio.",
        specs: { firstGP: "1986", laps: 70, length: "4.381 km", distance: "306.630 km", record: "1:16.627 (Hamilton)" }
    },
    { 
        round: 14, id: 'netherlands', name: 'Dutch GP', location: 'Zandvoort', date: '21-23 AUG',
        description: "Un trazado 'old school' con peraltes espectaculares. La marea naranja convierte este circuito entre dunas en una auténtica caldera.",
        specs: { firstGP: "1952", laps: 72, length: "4.259 km", distance: "306.587 km", record: "1:11.097 (Hamilton)" }
    },
    { 
        round: 15, id: 'italy', name: 'Italian GP', location: 'Monza', date: '04-06 SEP',
        description: "El Templo de la Velocidad. Rectas infinitas donde el motor térmico y la potencia eléctrica de 2026 se llevan al límite absoluto.",
        specs: { firstGP: "1950", laps: 53, length: "5.793 km", distance: "306.720 km", record: "1:21.046 (Barrichello)" }
    },
    { 
        round: 16, id: 'madrid', name: 'Spanish GP', location: 'Madrid', date: '11-13 SEP',
        description: "El gran estreno de 2026. Un circuito semi-urbano vanguardista en IFEMA con una curva peraltada que promete ser la nueva firma de Madrid.",
        specs: { firstGP: "2026", laps: 54, length: "5.474 km", distance: "295.596 km", record: "Por definir" }
    },
    { 
        round: 17, id: 'azerbaijan', name: 'Azerbaijan GP', location: 'Baku', date: '24-26 SEP',
        description: "La recta más larga del mundial y la zona del castillo más estrecha. Baku siempre garantiza caos, adelantamientos de tres en tres y finales épicos.",
        specs: { firstGP: "2016", laps: 51, length: "6.003 km", distance: "306.049 km", record: "1:43.009 (Leclerc)" }
    },
    { 
        round: 18, id: 'singapore', name: 'Singapore GP', location: 'Marina Bay', date: '09-11 OCT',
        description: "La carrera física más dura del año. Humedad extrema y 23 curvas bajo la noche eléctrica de Singapur. Un desafío de resistencia total.",
        specs: { firstGP: "2008", laps: 62, length: "4.940 km", distance: "306.143 km", record: "1:35.867 (Hamilton)" }
    },
    { 
        round: 19, id: 'austin', name: 'United States GP', location: 'Austin', date: '23-25 OCT',
        description: "Un mix de las mejores curvas del mundo. La subida ciega a la curva 1 es uno de los momentos más espectaculares de la salida.",
        specs: { firstGP: "2012", laps: 56, length: "5.513 km", distance: "308.405 km", record: "1:36.169 (Leclerc)" }
    },
    { 
        round: 20, id: 'mexico', name: 'Mexico City GP', location: 'Mexico', date: '30 OCT - 01 NOV',
        description: "A 2.200 metros sobre el nivel del mar. El aire fino reduce la carga aerodinámica y la refrigeración, haciendo que los coches alcancen velocidades altísimas.",
        specs: { firstGP: "1963", laps: 71, length: "4.304 km", distance: "305.354 km", record: "1:17.774 (Bottas)" }
    },
    { 
        round: 21, id: 'brazil', name: 'São Paulo GP', location: 'Interlagos', date: '06-08 NOV',
        description: "Corto, intenso y cargado de historia. Interlagos permite múltiples trazadas y suele ser el escenario de las remontadas más legendarias.",
        specs: { firstGP: "1973", laps: 71, length: "4.309 km", distance: "305.879 km", record: "1:10.540 (Bottas)" }
    },
    { 
        round: 22, id: 'las-vegas', name: 'Las Vegas GP', location: 'Las Vegas', date: '19-21 NOV',
        description: "El Strip de Las Vegas a 340 km/h. Un espectáculo visual sin precedentes donde el frío del desierto pone a prueba el calentamiento de los neumáticos.",
        specs: { firstGP: "2023", laps: 50, length: "6.201 km", distance: "310.050 km", record: "1:35.490 (Piastri)" }
    },
    { 
        round: 23, id: 'qatar', name: 'Qatar GP', location: 'Doha', date: '27-29 NOV',
        description: "Curvas rápidas y constantes que generan una carga física brutal en el cuello de los pilotos. Un circuito fluido donde no hay respiro.",
        specs: { firstGP: "2021", laps: 57, length: "5.419 km", distance: "308.611 km", record: "1:24.319 (Verstappen)" }
    },
    { 
        round: 24, id: 'abu-dhabi', name: 'Abu Dhabi GP', location: 'Yas Marina', date: '04-06 DEC',
        description: "El gran final. El sol se pone mientras se decide el campeonato bajo la espectacular iluminación del hotel Yas Abu Dhabi.",
        specs: { firstGP: "2009", laps: 58, length: "5.281 km", distance: "306.183 km", record: "1:26.103 (Verstappen)" }
    }
];

export const NEWS: News[] = [
    {
        id: 'audi-presentation',
        title: 'Audi F1 Team revela su chasis definitivo',
        excerpt: 'La marca alemana sorprende en el paddock de Melbourne con un alerón delantero revolucionario diseñado para maximizar el flujo hacia el suelo.',
        category: 'TECHNICAL',
        date: '07 MAR 2026',
        imageUrl: '/news/audi-launch.jpg'
    },
    {
        id: 'lewis-ferrari-first-lap',
        title: 'Hamilton: "Pilotar para Ferrari es un sentimiento eléctrico"',
        excerpt: 'Tras las primeras sesiones libres, Lewis Hamilton lidera la tabla de tiempos y se postula como favorito para la Pole en su debut de rojo.',
        category: 'RACE_WEEK',
        date: '07 MAR 2026',
        imageUrl: '/news/hamilton-ferrari.webp'
    },
    {
        id: 'manual-override-debate',
        title: 'Polémica con el Manual Override',
        excerpt: 'Varios jefes de equipo cuestionan si la gestión de la potencia extra eléctrica penalizará demasiado a los coches que lideran.',
        category: 'TECHNICAL',
        date: '06 MAR 2026',
        imageUrl: '/news/tech-debate.avif'
    },
    {
        id: 'colapinto-alpine-top10',
        title: 'Colapinto brilla con el Alpine en los libres',
        excerpt: 'El piloto argentino logra meterse en el Top 10 durante la simulación de carrera, superando a su compañero Gasly por dos décimas.',
        category: 'RACE_WEEK',
        date: '06 MAR 2026',
        imageUrl: '/news/colapinto-alpine.webp'
    },
    {
        id: 'newey-aston-effect',
        title: 'El primer Aston Martin de Adrian Newey vuela',
        excerpt: 'Los datos de telemetría muestran que el AMR26 es el coche que menos energía pierde en el Modo X (baja resistencia).',
        category: 'TECHNICAL',
        date: '05 MAR 2026',
        imageUrl: '/news/newey-aston.jpg'
    },
    {
        id: 'cadillac-engine-sound',
        title: 'El motor Cadillac sorprende por su rugido',
        excerpt: 'A pesar de la mayor importancia de la parte eléctrica, la unidad de potencia GM suena más agresiva que sus competidoras en Melbourne.',
        category: 'TECHNICAL',
        date: '05 MAR 2026',
        imageUrl: '/news/cadillac-engine.avif'
    },
    {
        id: 'verstappen-redbull-future',
        title: 'Verstappen esquiva preguntas sobre su contrato',
        excerpt: 'Max se muestra frustrado con los problemas de recolección de energía de su Red Bull: "Tenemos mucho trabajo por delante".',
        category: 'MERCADO',
        date: '04 MAR 2026',
        imageUrl: '/news/verstappen-pit.jpg'
    },
    {
        id: 'madrid-gp-progress',
        title: 'El circuito de Madrid ya está al 80% de ejecución',
        excerpt: 'Nuevas imágenes aéreas muestran la espectacular curva peraltada que conectará los dos pabellones de IFEMA.',
        category: 'F1_LIVE',
        date: '03 MAR 2026',
        imageUrl: '/news/madrid-track.webp'
    },
    {
        id: 'mclaren-wind-tunnel',
        title: 'McLaren estrena actualización en el suelo',
        excerpt: 'Buscando mantener el título de 2025, el equipo papaya ha traído un paquete agresivo para la primera carrera del año.',
        category: 'TECHNICAL',
        date: '02 MAR 2026',
        imageUrl: '/news/mclaren-update.webp'
    },
    {
        id: 'antonelli-mercedes-pressure',
        title: 'Antonelli: "No soy el nuevo Hamilton, soy Kimi"',
        excerpt: 'El joven italiano debuta con Mercedes este fin de semana bajo una presión mediática sin precedentes desde 2007.',
        category: 'RACE_WEEK',
        date: '01 MAR 2026',
        imageUrl: '/news/kimi-mercedes.jpg'
    },
    {
        id: 'audi-sponsorship-deal',
        title: 'Audi firma un acuerdo histórico con gigante tecnológico',
        excerpt: 'La estructura de Ingolstadt asegura su viabilidad económica para los próximos 5 años con un patrocinio de 300 millones.',
        category: 'MERCADO',
        date: '28 FEB 2026',
        imageUrl: '/news/audi-money.avif'
    },
    {
        id: 'active-aero-failures',
        title: 'Fallas en el Modo X durante los test privados',
        excerpt: 'Dos equipos han reportado bloqueos en el mecanismo del alerón delantero. La FIA revisará la seguridad antes de la Qualy.',
        category: 'TECHNICAL',
        date: '27 FEB 2026',
        imageUrl: '/news/aero-fail.jpg'
    },
    {
        id: 'sainz-williams-ambition',
        title: 'Sainz: "Williams estará en el podio este año"',
        excerpt: 'Carlos se muestra muy optimista tras descubrir que el motor Mercedes 2026 es, posiblemente, el más potente del grupo.',
        category: 'F1_LIVE',
        date: '26 FEB 2026',
        imageUrl: '/news/sainz-blue.webp'
    },
    {
        id: 'sustainable-fuel-test',
        title: 'Éxito total en las pruebas de combustible 100% sintético',
        excerpt: 'La FIA confirma que no hay pérdida de rendimiento térmico respecto a los combustibles fósiles usados en 2025.',
        category: 'TECHNICAL',
        date: '25 FEB 2026',
        imageUrl: '/news/green-fuel.jpg'
    },
    {
        id: 'perez-cadillac-hero',
        title: 'Marea verde en Melbourne apoyando a Checo Pérez',
        excerpt: 'La afición mexicana se desplaza masivamente para ver el debut de Cadillac con Checo al volante.',
        category: 'F1_LIVE',
        date: '24 FEB 2026',
        imageUrl: '/news/checo-fans.webp'
    },
    {
        id: 'bearman-haas-goals',
        title: 'Ollie Bearman apunta a los puntos en su primer año completo',
        excerpt: 'El joven británico confía en que la asociación Haas-Ferrari les permita liderar la zona media.',
        category: 'RACE_WEEK',
        date: '23 FEB 2026',
        imageUrl: '/news/bearman-haas.avif'
    },
    {
        id: 'honda-aston-integration',
        title: 'Honda y Aston Martin: Una integración perfecta',
        excerpt: 'Los ingenieros japoneses afirman que el empaquetado del motor en el chasis de Newey es el mejor que han visto nunca.',
        category: 'TECHNICAL',
        date: '22 FEB 2026',
        imageUrl: '/news/honda-aston.avif'
    },
    {
        id: 'bottas-cadillac-role',
        title: 'Bottas: "Mi experiencia ayudará a Cadillac a crecer"',
        excerpt: 'Valtteri asume el rol de líder veterano en el nuevo proyecto americano tras su salida de Sauber-Audi.',
        category: 'MERCADO',
        date: '21 FEB 2026',
        imageUrl: '/news/bottas-caddy.jpeg'
    },
    {
        id: 'weight-limit-struggle',
        title: 'Tres equipos no llegan al peso mínimo de 768kg',
        excerpt: 'La lucha por aligerar los coches 2026 es brutal. Algunos han tenido que eliminar pintura para ahorrar gramos.',
        category: 'TECHNICAL',
        date: '20 FEB 2026',
        imageUrl: '/news/car-weight.webp'
    },
    {
        id: 'leclerc-monaco-renew',
        title: 'Leclerc renueva con Ferrari hasta 2029',
        excerpt: 'Charles sella su compromiso a largo plazo antes de empezar la nueva era reglamentaria junto a Hamilton.',
        category: 'MERCADO',
        date: '19 FEB 2026',
        imageUrl: '/news/leclerc-signature.jpg'
    },
    {
        id: 'stroll-aston-doubts',
        title: '¿Última temporada de Lance Stroll?',
        excerpt: 'Rumores sugieren que Lawrence Stroll podría buscar un piloto de primer nivel para 2027 si Lance no iguala a Alonso.',
        category: 'MERCADO',
        date: '17 FEB 2026',
        imageUrl: '/news/stroll-future.jpeg'
    },
    {
        id: 'f1-tv-new-graphics',
        title: 'F1 TV lanza nuevos gráficos de telemetría eléctrica',
        excerpt: 'Los espectadores podrán ver en tiempo real cuánta batería le queda a cada piloto para el Manual Override.',
        category: 'F1_LIVE',
        date: '16 FEB 2026',
        imageUrl: '/news/f1-graphics.webp'
    },
    {
        id: 'albon-williams-leader',
        title: 'Albon: "Carlos y yo somos la pareja más equilibrada"',
        excerpt: 'Alex Albon da la bienvenida a Sainz y asegura que Williams tiene la mejor alineación de la zona media.',
        category: 'MERCADO',
        date: '15 FEB 2026',
        imageUrl: '/news/albon-sainz.jpg'
    }
];

export const REGULATIONS: Regulation[] = [
    { 
        id: 'manual-override',
        title: "Manual Override Mode", 
        shortDesc: "Sustituye al DRS. Potencia eléctrica extra para adelantamientos.",
        fullDesc: "A diferencia del DRS, que abría el alerón trasero, el Manual Override permite al piloto perseguidor usar toda la potencia de la batería (350kW) mientras el coche de delante ve su potencia limitada a altas velocidades.",
        icon: "zap"
    },
    { 
        id: 'active-aero',
        title: "Aerodinámica Activa", 
        shortDesc: "Alerones móviles (Modo X y Z) para reducir drag.",
        fullDesc: "Los coches 2026 cuentan con alerones delanteros y traseros móviles. El 'Modo Z' ofrece máxima carga para curvas, mientras que el 'Modo X' reduce la resistencia al aire en las rectas para maximizar la velocidad punta.",
        icon: "wind"
    },
    { 
        id: 'power-unit-2026',
        title: "Unidad de Potencia 50/50", 
        shortDesc: "Reparto equitativo entre motor térmico y potencia eléctrica.",
        fullDesc: "Se elimina el MGU-H. El motor V6 de 1.6 litros ahora genera menos potencia térmica, pero se compensa con un aumento masivo de la parte eléctrica (de 120kW a 350kW), utilizando combustible 100% sostenible.",
        icon: "battery-charging"
    },
    {
        id: 'nimble-cars',
        title: "Coches Ágiles (Nimble)",
        shortDesc: "Monoplazas más cortos, estrechos y ligeros.",
        fullDesc: "Para mejorar el espectáculo, los coches son ahora 30kg más ligeros, con una distancia entre ejes reducida a 3400mm y una anchura de 1900mm.",
        icon: "maximize"
    }
];