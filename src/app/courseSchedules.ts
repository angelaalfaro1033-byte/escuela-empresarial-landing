export type ScheduleSession = { label: string; dates: string[]; time?: string };

export type CitySchedule = {
  city: string;
  induction: { date: string; time: string; place: string };
  sessions: ScheduleSession[];
  complementary?: { dates: string[]; information?: string };
  closure: { date: string; time?: string; place?: string };
  practicalPlace?: string;
  transversalPlace?: string;
  additionalInformation?: string;
};

const ibagueInduction = { date: 'Lunes 7 de septiembre', time: '2:00 p. m.', place: 'Auditorio Cámara de Comercio (sede centro)' };
const neivaInduction = { date: 'Jueves 8 de septiembre', time: '8:00 a. m.', place: 'Auditorio Huila E Cámara de Comercio - Neiva' };
const neivaFullInduction = { date: 'Jueves 8 de septiembre', time: '8:00 a. m.', place: 'Auditorio Cámara de Comercio del Huila, Calle 21 Sur N° 25-41 (Centro Empresarial Huila E), Neiva, Huila' };
const municipalInduction = { date: 'Martes 8 de septiembre', time: '10:00 a. m.', place: 'Virtual' };
const ibagueClosure = { date: 'Lunes 9 de noviembre', place: 'Centro de Convenciones Alfonso López Pumarejo – Gobernación del Tolima' };
const neivaPlace = 'Auditorio Cámara de Comercio del Huila, Calle 21 Sur N° 25-41 (Centro Empresarial Huila E), Neiva, Huila';
const ibaguePractical = 'Centro Empresarial Cámara de Comercio de Cra 4 # 10-77 Parque Murillo Toro, Ibagué, Tolima';
const ibagueTransversal = 'Universidad del Tolima Sede Centro / Universidad Cooperativa · Por confirmar';
const beautyComplementary = { dates: ['Lunes 14 de septiembre', 'Lunes 21 de septiembre', 'Lunes 5 de octubre', 'Lunes 19 de octubre', 'Lunes 26 de octubre'] };
const standardComplementary = { dates: ['Lunes 14 y 21 de septiembre', 'Lunes 5, 19 y 26 de octubre'] };
const pendingComplementary = { ...standardComplementary, information: 'Por confirmar programación' };

const rawDefinitiveSchedules: Record<string, CitySchedule[]> = {
  'nail-basic': [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
      { label: 'Sesión 1', dates: ['Martes 15 de septiembre'], time: '8:00 a. m.' },
      { label: 'Sesiones 2 y 3', dates: ['Lunes 28 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 4 y 5', dates: ['Martes 20 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { date: 'Lunes 9 de noviembre' } },
    { city: 'Neiva', induction: { ...neivaInduction }, sessions: [
      { label: 'Sesión 1', dates: ['Martes 22 de septiembre'], time: '8:00 a. m.' },
      { label: 'Sesiones 2 y 3', dates: ['Martes 13 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 4 y 5', dates: ['Martes 27 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { date: 'Lunes 9 de noviembre' } },
  ],
  'nail-design': [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
      { label: 'Sesiones 1 y 2', dates: ['Miércoles 16 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 2 y 4', dates: ['Martes 29 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 5 y 6', dates: ['Miércoles 21 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { ...ibagueClosure }, practicalPlace: ibaguePractical, transversalPlace: ibagueTransversal },
    { city: 'Neiva', induction: { ...neivaInduction }, sessions: [
      { label: 'Sesiones 1 y 2', dates: ['Miércoles 23 de septiembre'], time: '8:00 a. m.' },
      { label: 'Sesiones 3 y 4', dates: ['Miércoles 14 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 5 y 6', dates: ['Miércoles 28 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { date: 'Lunes 9 de noviembre' } },
  ],
  'nail-design-senior': [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
      { label: 'Sesiones 1 y 2', dates: ['Jueves 17 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 2 y 4', dates: ['Miércoles 30 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 5 y 6', dates: ['Jueves 22 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { ...ibagueClosure }, practicalPlace: ibaguePractical, transversalPlace: ibagueTransversal },
    { city: 'Neiva', induction: { ...neivaInduction }, sessions: [
      { label: 'Sesiones 1 y 2', dates: ['Jueves 24 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 3 y 4', dates: ['Jueves 15 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
      { label: 'Sesiones 5 y 6', dates: ['Jueves 29 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { date: 'Lunes 9 de noviembre' } },
  ],
  makeup: [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
      { label: 'Sesión 1', dates: ['Martes 15 de septiembre'], time: '8:00 a. m.' }, { label: 'Sesiones 2 y 3', dates: ['Lunes 28 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesiones 4 y 5', dates: ['Martes 20 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { ...ibagueClosure }, practicalPlace: ibaguePractical, transversalPlace: ibagueTransversal },
    { city: 'Neiva', induction: { ...neivaInduction }, sessions: [
      { label: 'Sesión 1', dates: ['Martes 22 de septiembre'], time: '8:00 a. m.' }, { label: 'Sesiones 2 y 3', dates: ['Martes 13 de octubre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesiones 4 y 5', dates: ['Martes 27 de octubre'], time: '8:00 a. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { date: 'Lunes 9 de noviembre' } },
    { city: 'Rovira', induction: { ...municipalInduction }, sessions: [
      { label: 'Sesión 1', dates: ['Viernes 18 de septiembre'], time: '2:00 p. m. a 5:00 p. m.' }, { label: 'Sesiones 2 y 3', dates: ['Viernes 2 de octubre', 'Viernes 9 de octubre'], time: '2:00 p. m. a 5:00 p. m.' }, { label: 'Sesiones 4 y 5', dates: ['Viernes 16 de octubre', 'Viernes 23 de octubre'], time: '2:00 p. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Salón Vive Digital - Alcaldía Municipal Rovira', transversalPlace: 'Virtual' },
    { city: 'Cajamarca', induction: { ...municipalInduction }, sessions: [
      { label: 'Sesiones 1 y 2', dates: ['Miércoles 16 de septiembre', 'Miércoles 30 de septiembre'], time: '2:00 p. m. a 5:00 p. m.' }, { label: 'Sesiones 3 y 4', dates: ['Miércoles 7 de octubre', 'Miércoles 14 de octubre'], time: '2:00 p. m. a 5:00 p. m.' }, { label: 'Sesión 5', dates: ['Miércoles 21 de octubre'], time: '2:00 p. m. a 5:00 p. m.' },
    ], complementary: { ...beautyComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Salón Casa Agraria - Alcaldía Municipal Cajamarca', transversalPlace: 'Virtual' },
  ],
  colorimetry: [{ city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
    { label: 'Sesiones 1, 2 y 3', dates: ['Lunes 28 de septiembre', 'Martes 29 de septiembre', 'Miércoles 30 de septiembre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 4, 5 y 6', dates: ['Martes 27 de octubre', 'Miércoles 28 de octubre', 'Jueves 29 de octubre'], time: '8:00 a. m. a 4:00 p. m.' },
  ], complementary: { ...beautyComplementary }, closure: { ...ibagueClosure }, practicalPlace: ibaguePractical, transversalPlace: ibagueTransversal }],
  barbershop: [{ city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
    { label: 'Sesiones 1, 2 y 3', dates: ['Miércoles 16 de septiembre', 'Miércoles 23 de septiembre', 'Miércoles 30 de septiembre'], time: '8:00 a. m. a 12:00 m.' }, { label: 'Sesiones 4, 5 y 6', dates: ['Miércoles 7 de octubre', 'Miércoles 14 de octubre', 'Miércoles 21 de octubre'], time: '8:00 a. m. a 12:00 m.' },
  ], complementary: { ...beautyComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'FUNSE sede Santa Helena Cra. 4 #39-85, Barrio Santa Helena, Ibagué, Tolima', transversalPlace: ibagueTransversal }],
  lashes: [{ city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
    { label: 'Sesiones 1, 2 y 3', dates: ['Miércoles 16, 23 y 30 de septiembre'], time: '8:00 a. m. a 12:00 m.' }, { label: 'Sesiones 4, 5 y 6', dates: ['Miércoles 7, 14 y 21 de octubre'], time: '8:00 a. m. a 12:00 m.' },
  ], complementary: { ...standardComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'FUNSE sede Santa Helena Cra. 4 #39-85, Barrio Santa Helena, Ibagué, Tolima', transversalPlace: ibagueTransversal }],
  pastry: [{ city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
    { label: 'Sesiones 1 y 2', dates: ['Martes 15 de septiembre', 'Miércoles 16 de septiembre'], time: '2:00 p. m. a 5:30 p. m.' }, { label: 'Sesiones 2 y 4', dates: ['Martes 29 de septiembre', 'Miércoles 30 de septiembre'], time: '2:00 p. m. a 5:30 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Martes 13 de octubre', 'Miércoles 14 de octubre'], time: '2:00 p. m. a 5:30 p. m.' },
  ], complementary: { ...standardComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Aula Cocina-Taller, Universidad Uniminuto Sede Chicalá, Barrio El Vergel, Ibagué, Tolima', transversalPlace: ibagueTransversal }],
  bakery: [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
      { label: 'Sesiones 1 y 2', dates: ['Martes 22 y miércoles 23 de septiembre'], time: '2:00 p. m. a 5:30 p. m.' }, { label: 'Sesiones 2 y 4', dates: ['Martes 6 y miércoles 7 de octubre'], time: '2:00 p. m. a 5:30 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Martes 20 y miércoles 21 de octubre'], time: '2:00 p. m. a 5:30 p. m.' },
    ], complementary: { ...standardComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Aula Cocina-Taller, Universidad Uniminuto Sede Chicalá, Barrio El Vergel, Ibagué, Tolima', transversalPlace: ibagueTransversal },
    { city: 'Neiva', induction: { ...neivaFullInduction }, sessions: [
      { label: 'Sesiones 1 y 2', dates: ['Martes 15 y miércoles 16 de septiembre'], time: '2:00 p. m. a 5:30 p. m.' }, { label: 'Sesiones 2 y 4', dates: ['Martes 29 y miércoles 30 de septiembre'], time: '2:00 p. m. a 5:30 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Martes 13 y miércoles 14 de octubre'], time: '2:00 p. m. a 5:30 p. m.' },
    ], complementary: { ...standardComplementary }, closure: { date: 'Jueves 12 de noviembre', place: neivaPlace }, practicalPlace: neivaPlace, transversalPlace: `${neivaPlace} · Por confirmar` },
  ],
  barista: [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [{ label: 'Sesiones 1 y 2', dates: ['Sábado 12 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesiones 2 y 4', dates: ['Sábado 26 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Sábado 10 de octubre'], time: '8:00 a. m. a 5:00 p. m.' }], complementary: { ...standardComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Café C al Cubo, Calle 10 # 3-76, Edificio Cámara de Comercio (primer piso), Ibagué, Tolima', transversalPlace: ibagueTransversal },
    { city: 'Neiva', induction: { ...neivaFullInduction }, sessions: [{ label: 'Sesiones 1 y 2', dates: ['Sábado 19 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesiones 2 y 4', dates: ['Sábado 3 de octubre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Sábado 17 de octubre'], time: '8:00 a. m. a 5:00 p. m.' }], complementary: { ...standardComplementary }, closure: { date: 'Jueves 12 de noviembre', place: neivaPlace }, practicalPlace: neivaPlace },
  ],
  'coffee-roasting': [{ city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [{ label: 'Sesión 1 y 2', dates: ['Sábado 19 de septiembre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesión 2 y 4', dates: ['Sábado 3 de octubre'], time: '8:00 a. m. a 5:00 p. m.' }, { label: 'Sesión 5 y 6', dates: ['Sábado 17 de octubre'], time: '8:00 a. m. a 5:00 p. m.' }], complementary: { ...standardComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Café C al Cubo, Calle 10 # 3-76, Edificio Cámara de Comercio (primer piso), Ibagué, Tolima', transversalPlace: ibagueTransversal }],
  chocolate: [{ city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
    { label: 'Sesión 1', dates: ['Viernes 23 de octubre'], time: '8:00 a. m. a 12:00 m.' }, { label: 'Sesión 2', dates: ['Sábado 24 de octubre'], time: '8:00 a. m. a 12:00 m.' }, { label: 'Sesión 3', dates: ['Martes 27 de octubre'], time: '8:00 a. m. a 12:00 m.' }, { label: 'Sesión 4', dates: ['Miércoles 28 de octubre'], time: '8:00 a. m. a 12:00 m.' }, { label: 'Sesión 5', dates: ['Jueves 29 de octubre'], time: '8:00 a. m. a 12:00 m.' }, { label: 'Sesión 6', dates: ['Viernes 30 de octubre'], time: '8:00 a. m. a 12:00 m.' },
  ], complementary: { ...pendingComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Aula Cocina-Taller, Universidad Uniminuto Sede Chicalá, Barrio El Vergel, Ibagué, Tolima', transversalPlace: ibagueTransversal }],
  motorcycle: [{ city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [
    { label: 'Sesión 1', dates: ['Jueves 17 de septiembre'], time: '5:30 p. m. a 8:30 p. m.' }, { label: 'Sesión 2', dates: ['Jueves 24 de septiembre'], time: '5:30 p. m. a 8:30 p. m.' }, { label: 'Sesión 3', dates: ['Jueves 1 de octubre'], time: '5:30 p. m. a 8:30 p. m.' }, { label: 'Sesión 4', dates: ['Jueves 8 de octubre'], time: '5:30 p. m. a 8:30 p. m.' }, { label: 'Sesión 5', dates: ['Jueves 15 de octubre'], time: '5:30 p. m. a 8:30 p. m.' },
  ], complementary: { ...pendingComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Taller Honda Motos Tolima, punto Honda Grupo Super Motos Carrera 5 # 39-55 Ibagué, Tolima', transversalPlace: ibagueTransversal, additionalInformation: 'Curso exclusivo FFMM' }],
  decoration: [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [{ label: 'Sesiones 1 y 2', dates: ['Jueves 17 de septiembre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 3 y 4', dates: ['Jueves 1 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Jueves 15 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }], complementary: { ...pendingComplementary }, closure: { ...ibagueClosure }, practicalPlace: ibaguePractical, transversalPlace: ibagueTransversal },
    { city: 'Neiva', induction: { date: 'Jueves 10 de septiembre', time: '8:00 a. m.', place: neivaPlace }, sessions: [{ label: 'Sesiones 1 y 2', dates: ['Jueves 24 de septiembre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 3 y 4', dates: ['Jueves 8 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Jueves 22 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }], complementary: { ...pendingComplementary }, closure: { date: 'Jueves 12 de noviembre', time: '8:00 a. m.', place: neivaPlace }, practicalPlace: neivaPlace, transversalPlace: `${neivaPlace} · Por confirmar` },
  ],
  'floral-arrangements': [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: [{ label: 'Sesiones 1 y 2', dates: ['Jueves 24 de septiembre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 3 y 4', dates: ['Jueves 8 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Jueves 22 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }], complementary: { ...pendingComplementary }, closure: { ...ibagueClosure }, practicalPlace: ibaguePractical, transversalPlace: ibagueTransversal },
    { city: 'Neiva', induction: { date: 'Jueves 10 de septiembre', time: '8:00 a. m.', place: neivaPlace }, sessions: [{ label: 'Sesiones 1 y 2', dates: ['Jueves 17 de septiembre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 3 y 4', dates: ['Jueves 1 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }, { label: 'Sesiones 5 y 6', dates: ['Jueves 15 de octubre'], time: '8:00 a. m. a 4:00 p. m.' }], complementary: { ...pendingComplementary }, closure: { date: 'Jueves 12 de noviembre', time: '8:00 a. m.', place: neivaPlace }, practicalPlace: neivaPlace, transversalPlace: `${neivaPlace} · Por confirmar` },
  ],
  't-shirt-yarn': [
    { city: 'Ibagué', induction: { ...ibagueInduction }, sessions: ['16 de septiembre', '23 de septiembre', '30 de septiembre', '7 de octubre', '14 de octubre', '21 de octubre'].map((date, index) => ({ label: `Sesión ${index + 1}`, dates: [`Miércoles ${date}`], time: '2:00 p. m. a 5:00 p. m.' })), complementary: { ...standardComplementary }, closure: { ...ibagueClosure }, practicalPlace: ibaguePractical, transversalPlace: ibagueTransversal },
    { city: 'Cajamarca', induction: { ...municipalInduction }, sessions: ['18 de septiembre', '25 de septiembre', '2 de octubre', '9 de octubre', '16 de octubre', '23 de octubre'].map((date, index) => ({ label: `Sesión ${index + 1}`, dates: [`Viernes ${date}`], time: '2:00 p. m. a 5:00 p. m.' })), complementary: { ...standardComplementary }, closure: { ...ibagueClosure }, practicalPlace: 'Salón Casa Agraria - Alcaldía Municipal Cajamarca', transversalPlace: 'Virtual' },
  ],
};

// Cada sede recibe sus propios objetos y arreglos, incluso cuando parte de la
// información coincide con otra ciudad.
export const definitiveSchedules: Record<string, CitySchedule[]> = Object.fromEntries(
  Object.entries(rawDefinitiveSchedules).map(([courseId, schedules]) => [
    courseId,
    schedules.map((schedule) => ({
      ...schedule,
      induction: { ...schedule.induction },
      sessions: schedule.sessions.map((session) => ({ ...session, dates: [...session.dates] })),
      complementary: schedule.complementary
        ? { ...schedule.complementary, dates: [...schedule.complementary.dates] }
        : undefined,
      closure: { ...schedule.closure },
    })),
  ]),
);
