// Créditos oficiales de cada ramo
const creditos = {
// 1° Semestre
  'fundamentos_matematicas': 8,
  'algebra': 8,
  'introduccion_ingenieria_industrial': 5,
  'informatica1': 5,
  'desarrollo_personal1': 4,

  // 2° Semestre
  'calculo_diferencial': 8,
  'algebra_lineal': 6,
  'fundamentos_fisica': 6,
  'mundo_contemporaneo_ingenieria': 4,
  'desarrollo_personal2': 4,
  'idioma1': 2,

  // 3° Semestre
  'calculo_integral_series': 8,
  'quimica_general': 4,
  'fisica_mecanica': 7,
  'administracion_sistemas_organizacionales': 4,
  'taller_creatividad_emprendimiento': 3,
  'idioma2': 2,

  // 4° Semestre
  'calculo_varias_variables': 8,
  'ecuaciones_diferenciales': 8,
  'fisica_calor_ondas_optica': 7,
  'informatica2': 5,
  'idioma3': 4,

  // 5° Semestre
  'estadistica_probabilidades': 6,
  'contabilidad_financiera': 5,
  'fisica_electromagnetismo': 7,
  'ciencia_tecnologia_materiales': 6,
  'taller_aplicacion_ingenieria_industrial': 5,
  'tipe1': 2,
  'practica1': 9,

  // 6° Semestre
  'inferencia_estadistica': 6,
  'costos_presupuestos': 5,
  'termodinamica_procesos': 6,
  'sistemas_info_bases_datos': 6,
  'microeconomia': 4,
  'tipe2': 2,

  // 7° Semestre
  'modelamiento': 6,
  'analisis_estrategia_negocios': 6,
  'mecanica_fluidos': 5,
  'tecnologias_info_inteligencia_negocios': 5,
  'macroeconomia': 4,
  'tipe3': 2,

  // 8° Semestre
  'investigacion_operaciones': 5,
  'gestion_operaciones': 6,
  'marco_legal_organizaciones': 4,
  'procesos_industriales': 6,
  'gestion_innovacion': 5,
  'taller_integracion_ingenieria_industrial2': 6,

  // 9° Semestre
  'gestion_riesgos': 5,
  'gestion_operaciones2': 5,
  'gestion_recursos_humanos': 4,
  'automatizacion_control_procesos': 4,
  'finanzas1': 5,
  'marketing_estrategico': 5,
  'optativo1': 4,

  // 10° Semestre
  'direccion_estrategica': 4,
  'evaluacion_gestion_proyectos': 5,
  'gestion_energetica': 4,
  'finanzas2': 5,
  'optativo2': 5,
  'optativo3': 5,

  // 11° Semestre
  'taller_integracion_ingenieria_industrial3': 25,
  'optativo4': 5,
  'practica2': 12
};

// Prerrequisitos de cada ramo (ramos que deben estar aprobados para desbloquear este)
const prerequisitos = {

// 2° Semestre
  'calculo_diferencial': ['fundamentos_matematicas', 'algebra'],
  'algebra_lineal': ['algebra'],
  'mundo_contemporaneo_ingenieria': ['introduccion_ingenieria_industrial'],
  'desarrollo_personal2': ['desarrollo_personal1'],

  // 3° Semestre
  'calculo_integral_series': ['calculo_diferencial'],
  'fisica_mecanica': ['calculo_diferencial', 'fundamentos_fisica'],
  'administracion_sistemas_organizacionales': ['idioma1', 'mundo_contemporaneo_ingenieria'],
  'taller_creatividad_emprendimiento': ['desarrollo_personal2', 'introduccion_ingenieria_industrial'],
  'idioma2': ['idioma1'],

  // 4° Semestre
  'calculo_varias_variables': ['calculo_integral_series', 'algebra_lineal'],
  'ecuaciones_diferenciales': ['calculo_integral_series', 'algebra_lineal'],
  'fisica_calor_ondas_optica': ['calculo_integral_series', 'fisica_mecanica'],
  'informatica2': ['informatica1', 'algebra_lineal'],
  'idioma3': ['idioma2'],

  // 5° Semestre
  'estadistica_probabilidades': ['calculo_varias_variables'],
  'contabilidad_financiera': ['fundamentos_matematicas', 'administracion_sistemas_organizacionales'],
  'fisica_electromagnetismo': ['fisica_mecanica', 'calculo_varias_variables'],
  'ciencia_tecnologia_materiales': ['fisica_calor_ondas_optica', 'fisica_mecanica'],
  'taller_aplicacion_ingenieria_industrial': ['fundamentos_matematicas', 'algebra', 'introduccion_ingenieria_industrial', 'informatica1', 'desarrollo_personal1', 'calculo_diferencial', 'algebra_lineal', 'fundamentos_fisica', 'mundo_contemporaneo_ingenieria', 'desarrollo_personal2', 'idioma1', 'calculo_integral_series', 'quimica_general', 'fisica_mecanica', 'administracion_sistemas_organizacionales', 'taller_creatividad_emprendimiento', 'idioma2'],
  'tipe1': ['desarrollo_personal2'],
  'practica1': ['fundamentos_matematicas', 'algebra', 'introduccion_ingenieria_industrial', 'informatica1', 'desarrollo_personal1', 'calculo_diferencial', 'algebra_lineal', 'fundamentos_fisica', 'mundo_contemporaneo_ingenieria', 'desarrollo_personal2', 'idioma1', 'calculo_integral_series', 'quimica_general', 'fisica_mecanica', 'administracion_sistemas_organizacionales', 'taller_creatividad_emprendimiento', 'idioma2', 'calculo_varias_variables', 'ecuaciones_diferenciales', 'fisica_calor_ondas_optica', 'informatica2', 'idioma3'],

  // 6° Semestre
  'inferencia_estadistica': ['estadistica_probabilidades'],
  'costos_presupuestos': ['contabilidad_financiera'],
  'termodinamica_procesos': ['fisica_calor_ondas_optica', 'quimica_general'],
  'sistemas_info_bases_datos': ['informatica2', 'idioma3', 'administracion_sistemas_organizacionales'],
  'tipe2': ['tipe1'],
  'microeconomia': ['contabilidad_financiera', 'administracion_sistemas_organizacionales', 'estadistica_probabilidades'],

  // 7° Semestre
  'modelamiento': ['ecuaciones_diferenciales', 'informatica2', 'inferencia_estadistica'],
  'analisis_estrategia_negocios': ['costos_presupuestos', 'microeconomia'],
  'mecanica_fluidos': ['termodinamica_procesos'],
  'tecnologias_info_inteligencia_negocios': ['sistemas_info_bases_datos'],
  'macroeconomia': ['microeconomia', 'contabilidad_financiera'],
  'tipe3': ['tipe2'],

  // 8° Semestre
  'investigacion_operaciones': ['modelamiento'],
  'gestion_operaciones': ['modelamiento', 'costos_presupuestos'],
  'marco_legal_organizaciones': ['analisis_estrategia_negocios'],
  'procesos_industriales': ['termodinamica_procesos', 'fisica_electromagnetismo'],
  'gestion_innovacion': ['tecnologias_info_inteligencia_negocios', 'taller_creatividad_emprendimiento'],
  'taller_integracion_ingenieria_industrial2': ['fundamentos_matematicas', 'algebra', 'introduccion_ingenieria_industrial', 'informatica1', 'desarrollo_personal1', 'calculo_diferencial', 'algebra_lineal', 'fundamentos_fisica', 'mundo_contemporaneo_ingenieria', 'desarrollo_personal2', 'idioma1', 'calculo_integral_series', 'quimica_general', 'fisica_mecanica', 'administracion_sistemas_organizacionales', 'taller_creatividad_emprendimiento', 'idioma2', 'calculo_varias_variables', 'ecuaciones_diferenciales', 'fisica_calor_ondas_optica', 'informatica2', 'idioma3', 'estadistica_probabilidades', 'contabilidad_financiera', 'fisica_electromagnetismo', 'ciencia_tecnologia_materiales', 'taller_aplicacion_ingenieria_industrial', 'tipe1', 'practica1', 'inferencia_estadistica', 'costos_presupuestos', 'termodinamica_procesos', 'sistemas_info_bases_datos', 'microeconomia', 'tipe2'],

  // 9° Semestre
  'gestion_riesgos': ['marco_legal_organizaciones', 'procesos_industriales'],
  'gestion_operaciones2': ['investigacion_operaciones', 'gestion_operaciones'],
  'gestion_recursos_humanos': ['marco_legal_organizaciones'],
  'automatizacion_control_procesos': ['procesos_industriales'],
  'finanzas1': ['microeconomia', 'analisis_estrategia_negocios'],
  'marketing_estrategico': ['macroeconomia', 'tecnologias_info_inteligencia_negocios', 'analisis_estrategia_negocios'],
  'optativo1': ['practica1'],

  // 10° Semestre
  'direccion_estrategica': ['finanzas1', 'marketing_estrategico'],
  'evaluacion_gestion_proyectos': ['finanzas1', 'marketing_estrategico'],
  'gestion_energetica': ['automatizacion_control_procesos'],
  'finanzas2': ['finanzas1'],
  'optativo2': ['optativo1'],
  'optativo3': ['optativo1'],

  // 11° Semestre
  'taller_integracion_ingenieria_industrial3': ['practica2'],
  'optativo4': ['optativo3', 'optativo2'],
  'practica2': ['practica1']
};

// Funciones para guardar y cargar progreso en localStorage
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// Calcula el total de créditos de ramos aprobados
function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

// Actualiza qué ramos están desbloqueados o bloqueados según prerrequisitos y créditos especiales
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    // Verificar si se cumplen prerrequisitos normales
    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    // Reglas especiales con créditos para ciertos módulos
    if (destino === 'modulo1') {
      puedeDesbloquear = totalCreditos >= 90;
    }
    if (destino === 'modulo2') {
      puedeDesbloquear = aprobados.includes('modulo1') && totalCreditos >= 170;
    }
    if (destino === 'internado_electivo' || destino === 'internado_electivo1') {
      puedeDesbloquear = totalCreditos >= 240;
    }

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) elem.classList.remove('bloqueado');
      else elem.classList.add('bloqueado');
    } else {
      // Si está aprobado, no debe estar bloqueado
      elem.classList.remove('bloqueado');
    }
  }
}

// Maneja el clic para aprobar o desaprobar un ramo (solo si no está bloqueado)
function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Al cargar la página, asignar eventos, cargar progreso y actualizar desbloqueos
window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
  });

  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });

  actualizarDesbloqueos();
});