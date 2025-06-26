document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.getElementById("sidebar-links");
  const contentDisplay = document.getElementById("content-display");
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  let data = {
    "sections": [
      {
        "title": "Direccionamiento Estratégico",
        "content": "Reinducción 2025. Corporación para la Investigación de la Corrosión."
      },
      {
        "title": "Planeación Estratégica",
        "content": {
          "mision_2024_2029": "La Corporación para la Investigación de la Corrosión – CIC es un Centro de Desarrollo Tecnológico dedicado a la prestación de servicios especializados, ejecución de proyectos y desarrollo de productos tecnológicos para la gestión de corrosión e integridad, que le aportan a la sociedad soluciones innovadoras para su desarrollo sostenible.",
          "vision_2024_2029": "Para el año 2029, la CIC será un centro de desarrollo tecnológico reconocido internacionalmente por su contribución a la solución de las problemáticas relacionadas con corrosión e integridad en el sector productivo."
        }
      },
      {
        "title": "Objetivos Estratégicos y Estrategias",
        "content": {
          "objetivos_estrategicos_2024_2029": [
            "Desarrollar e implementar productos y/o servicios confiables, innovadores y sostenibles para la industria a nivel internacional.",
            "Consolidar la institución como autoridad técnica a nivel internacional.",
            "Lograr reconocimiento científico a nivel internacional.",
            "Asegurar la sostenibilidad (rentabilidad)."
          ],
          "estrategias_2024_2029": [
            "COMERCIALIZACIÓN",
            "DESARROLLO DE PERSONAL"
          ]
        }
      },
      {
        "title": "Partes Interesadas CIC",
        "content": {
          "contribuyentes": ["Consejo Directivo", "Trabajadores"],
          "entidades_de_certificacion_y_acreditacion": [],
          "entidades_gubernamentales": ["Ministerio de Ciencia, Tecnología e Innovación", "Ambiente /ministerio del ambiente", "Ministerio del trabajo", "Ministerio de Salud y Protección Social", "Gobierno"],
          "organizaciones_de_salud_y_bienestar": ["ARL", "EPS", "Caja de compensación familiar", "Fondo de pensiones"],
          "grupos_externos": ["Aliados Estratégicos", "Clientes", "Sociedad/comunidad", "Cámara de comercio"],
          "entidades_de_emergencia_y_seguridad": ["Bomberos, defensa civil, policía, ejército, cruz roja y brigada."],
          "comites": ["COPASST (Comité Paritario Seguridad y Salud en el Trabajo)", "Comité de Convivencia Laboral", "Comité del Plan Estratégico de Seguridad Vial"],
          "proveedores": ["Proveedores externos", "Proveedores internos (líneas tecnológicas)"]
        }
      },
      {
        "title": "Consejo Directivo",
        "content": {
          "miembros_fundadores": ["SierraCol energy", "equion", "ECOPETROL", "Sika", "Universidad Industrial de Santander", "CONSTRUIMOS FUTURO", "CIF"],
          "miembro_especial": ["SENA"],
          "miembros_invitados": ["DNP", "El conocimiento es de todos", "Minciencias"]
        }
      },
      {
        "title": "Estructura Organizacional",
        "content": {
          "direccion_general": "CONSEJO DIRECTIVO -> Dirección",
          "asesor_cic": "Asesor CIC",
          "comites_cic": "Comités CIC",
          "unidades_estrategicas": {
            "uen_integridad": {
              "title": "Unidad Estratégica de Negocio UEN Integridad",
              "lineas": ["Línea Tecnológica Inspección y Monitoreo", "Línea Tecnológicade Análisis de Falla y Materiales", "Línea Tecnológica Aseguramiento de la Integridad", "Línea Tecnológica Desarrollo de Software y Simulación"]
            },
            "uen_corrosion": {
              "title": "Unidad Estratégica de Negocio UEN Corrosión",
              "lineas": ["Línea Tecnológica de Biocorrosión y Biotecnología", "Línea Tecnológica Fisicoquímica", "Línea Tecnológica Recubrimientos", "Línea Tecnológica Electroquímica", "Línea Tecnológica Protección Catódica"]
            },
            "uen_comercializacion": {
              "title": "Unidad Estratégica de Negocios UEN Comercialización",
              "lineas": ["Linea Tecnológica Bioproducto", "Línea Tecnológica Tecnologías de Inspección", "Línea Tecnológica Taller de Mecánica y Conformados", "Línea Tecnológica de Electrónica"]
            },
            "uen_administracion": {
              "title": "Unidad Estratégica de Negocios UEN Administración",
              "areas": ["Contabilidad", "Área Administrativa HSE", "Área Administrativa Calidad", "Área Administrativa Administración de Recursos Físicos", "Área Administrativa Tecnologías de la Información", "Área Administrativa Logística de Viajes"]
            }
          }
        }
      },
      {
        "title": "Valores Institucionales",
        "content": {
          "creatividad": "Generamos soluciones innovadoras para el sector productivo, rompiendo esquemas asumiendo retos. Desarrollamos ideas y les damos un valor para satisfacer las necesidades del cliente.",
          "respeto": "Reconocemos y otorgamos valor a los funcionarios, clientes y medio ambiente promoviendo una cultura de sana convivencia asertiva.",
          "honestidad": "Trabajamos bajo los parámetros legales, éticos e institucionales establecidos. La transparencia de nuestro trabajo se ve reflejada en la confianza depositada por nuestros clientes.",
          "responsabilidad": "Estamos comprometidos con el auto-cuidado y la seguridad de nuestros compañeros. Cumplimos con los requisitos de nuestros clientes y brindamos resultados de calidad con el fin de generar impacto en el desarrollo tecnológico del país. Promovemos el cuidado de los recursos naturales para un crecimiento y sostenibilidad organizacional."
        }
      },
      {
        "title": "Políticas Institucionales CIC",
        "content": [
          "Seguridad Vial",
          "Tratamiento y Protección de Datos Personales",
          "Sistemas Integrados de Gestión",
          "Seguridad de la Información",
          "Prevención del Consumo de Alcohol, Tabaquismo y Farmaco-dependencia",
          "Formación y Desarrollo de Competencias",
          "Prevención del Acoso Laboral",
          "Desconexión Laboral"
        ]
      },
      {
        "title": "Política de Sistemas Integrados de Gestión",
        "content": {
          "compromiso": "A través de su Sistema Integrado de Gestión, la CIC se compromete a:",
          "medio_ambiente_iso_14001": "Fomentar un entorno de trabajo seguro y sostenible. Proteger el medio ambiente reduciendo los impactos negativos.",
          "calidad_iso_9001": "Asegurar la satisfacción del cliente. Mejorar continuamente la eficacia del SIG. Gestionar recursos para la implementación del SIG. Cumplir con requisitos legales. Asegurar un balance financiero positivo y sostenido.",
          "seguridad_y_salud_iso_45001": "Promover el autocuidado. Identificar peligros, evaluar riesgos y establecer controles para proteger la salud y seguridad. Prevenir accidentes, enfermedades laborales y daños a la propiedad.",
          "guia_ruc": "Identificar peligros, evaluar riesgos y establecer controles para proteger la salud y seguridad. Promoción de calidad de vida laboral, prevenir accidentes, enfermedades laborales y daños a la propiedad, e impactos socioambientales. Cumplimiento de legislación Colombiana. Mejora continua."
        }
      },
      {
        "title": "Política Prevención de Consumo de Alcohol, Tabaquismo y Farmacodependencia",
        "content": {
          "directrices": "Con el fin de fomentar ambientes de trabajo sanos y seguros, se adoptan las siguientes directrices:",
          "no_permitido": [
            "Poseer, utilizar, distribuir y vender sustancias alucinógenas, dentro y fuera de las instalaciones.",
            "Consumir alcohol dentro y fuera de las instalaciones.",
            "Presentarse a trabajar bajo el efecto del alcohol o drogas."
          ],
          "obligatorio": [
            "Participar en las capacitaciones relacionadas.",
            "Facilitar la realización de las pruebas para confirmar el consumo de drogas o alcohol.",
            "Abstenerse de consumir tabaco en los puestos de trabajo y pasillos."
          ]
        }
      },
      {
        "title": "Política de Seguridad Vial",
        "content": {
          "aclaracion": "Para garantizar la seguridad de los pasajeros y conductores que hacen uso de los vehículos CIC, es obligatorio acatar lo siguiente:",
          "conductores_y_pasajeros": [
            "Cumplir las leyes colombianas para conductores y pasajeros.",
            "No consumir alcohol y/o drogas dentro de los vehículos. Comunicar de inmediato al área HSEQ si esto ocurre.",
            "Capacitar a los conductores en la aplicación de técnicas defensivas y seguras.",
            "Informar a los pasajeros, que no son funcionarios de la CIC, sobre las normas vigentes en materia de Seguridad Vial."
          ],
          "vehiculos": [
            "Realizar a los vehículos de la CIC el mantenimiento preventivo y correctivo estipulado por el fabricante.",
            "Solicitar autorización de la Dirección para el uso de los vehículos en actividades no institucionales."
          ]
        }
      },
      {
        "title": "Política de Formación y Desarrollo de competencias",
        "content": {
          "introduccion": "Con el fin de lograr el fortalecimiento del talento humano, se establecen 3 pilares fundamentales:",
          "pilares": [
            "Transmisión del Conocimiento: Garantizar que el conocimiento se transfiere al interior de las Líneas Tecnológicas, Laboratorios y Áreas de Conocimiento.",
            "Impulso de las Líneas Tecnológicas, Laboratorios y Áreas: Publicar los resultados de proyectos, programas y servicios.",
            "Estrategias para el desarrollo integral del talento humano: Fortalecer las competencias desde el Saber (conocimiento), Hacer (habilidad) y el Ser (actitud)."
          ]
        }
      },
      {
        "title": "Política de Prevención del Acoso Laboral",
        "content": {
          "para_promover": [
            "Respaldar la dignidad, intimidad, honra, libertad e integridad de sus funcionarios.",
            "Generar conciencia y compromiso por la sana convivencia.",
            "Prevenir y corregir toda conducta de acoso laboral."
          ],
          "para_lograr": [
            "Se ha conformado un Comité de Convivencia Laboral, de carácter bipartito.",
            "Se establece un procedimiento para tratar conductas de acoso laboral.",
            "Se realiza vigilancia periódica del ambiente de trabajo.",
            "Sensibilizar a los funcionarios con el acoso laboral.",
            "Realizar actividades de integración y apoyo social."
          ],
          "ley": "Ley 1010 del 2006"
        }
      },
      {
        "title": "Política de la seguridad de la Información",
        "content": "Para asegurar la integridad, confidencialidad y disponibilidad de la información, la CIC mitiga riesgos e implementa mejoras en: Infraestructura de red y datos. Capacitación del recurso humano en seguridad de la información. Adecuación física según las exigencias de seguridad. Manejo de medios y copias de respaldo. Niveles de acceso lógico. Actualización de software y sistemas de información."
      },
      {
        "title": "Política de Tratamiento y Protección de Datos Personales",
        "content": {
          "principios": [
            "Legalidad",
            "Finalidad",
            "Libertad",
            "Veracidad o Calidad",
            "Transparencia",
            "Acceso y Circulación restringida",
            "Seguridad y Confidencialidad"
          ],
          "importante": "Los titulares de la información pueden remitir sus consultas, quejas y peticiones a través del correo electrónico: protecciondedatoscic@corrosion.uis.edu.co"
        }
      },
      {
        "title": "Política de Desconexión Laboral",
        "content": {
          "ley": "Para asegurar el derecho que tienen los trabajadores a la desconexión laboral, según lo dispuesto en la LEY 2191 DE 2022.",
          "establece": [
            "Toda solicitud, requerimiento, mensaje o comunicación relacionado con el ámbito o actividad laboral, se realizará durante la jornada de trabajo.",
            "Se evitará establecer comunicación con los trabajadores para tratar asuntos relacionados con el ámbito o actividad laboral, durante los periodos de descanso, vacaciones y permisos.",
            "Finalizada la jornada laboral, el trabajador no estará obligado a estar en contacto o dar respuesta a requerimiento alguno relacionado con su actividad laboral."
          ],
          "excepciones": [
            "Personal de dirección, confianza y manejo.",
            "Personal que por naturaleza de sus funciones requiera cumplir deberes.",
            "Situaciones de fuerza mayor."
          ],
          "queja": "Si siente vulnerado su derecho a la desconexión laboral presentar queja al comité de convivencia laboral: Convivenvia.cic@corrosioncic.com"
        }
      },
      {
        "title": "Sistemas Integrados de Gestión",
        "content": "HSEQ (Salud, Seguridad, Medio Ambiente, Calidad). Grado en que un conjunto de características inherentes a un objeto cumple con los requisitos. NECESIDAD + EXPECTATIVA = REQUISITO. Sistema de Gestión: Dirigir y Controlar (P-H-V-A)"
      },
      {
        "title": "Mapa de Procesos CIC",
        "content": {
          "procesos_estrategicos": ["Direccionamiento Estratégico"],
          "procesos_misionales": ["Generación de Conocimiento", "Generación de Soluciones", "Productos Tecnológicos"],
          "procesos_de_apoyo": ["Gestión Adm. y Financiera", "Compras y Subcontratación", "Sistemas Integrados de Gestión", "Talento Humano"]
        }
      },
      {
        "title": "Alcance del Sistema Integrado de Gestión",
        "content": [
          "NTC ISO 45001:2018 Seguridad y Salud en el Trabajo",
          "NTC ISO 14001:2015 Gestión Ambiental",
          "Guía RUC - Consejo Colombiano Seguridad (Seguridad y Salud en el Trabajo, Gestión Ambiental, Responsabilidad Social Empresarial)",
          "NTC ISO 9001:2015 Satisfacción de Partes Interesadas",
          "NTC ISO 17025:2017 Desempeño Laboratorios"
        ]
      },
      {
        "title": "Principios: Éxito Sostenido",
        "content": ["Enfoque al cliente", "Liderazgo", "Compromiso de las personas", "Gestión de las relaciones", "Enfoque de los procesos", "Mejora", "Toma de acciones basada en la evidencia"]
      },
      {
        "title": "Beneficios de la Implementación del sistema de Gestión de Calidad",
        "content": [
          "Aumento de la satisfacción del cliente, cumpliendo expectativas.",
          "Obtención de nuevos clientes (buena imagen, diferenciación de competencia)",
          "Estandarización de procesos.",
          "Cultura del mejoramiento continuo, bajo la estructura: planear, hacer, verificar y actuar."
        ]
      },
      {
        "title": "Alcance de Servicios",
        "content": {
          "gestion_de_integridad": "Abarca: El diseño, el desarrollo y la implementación de estrategias y programas de gestión de corrosión e integridad, para sistemas de producción y transporte de fluidos.",
          "analisis_dinamico": "Comprende: Medición y análisis de vibraciones mecánicas en maquinarias industriales.",
          "analisis_de_falla": "Comprende: la determinación de causa raíz de fallas mediante ensayos destructivos y no destructivos.",
          "inspeccion": "Comprende: La inspección de estructuras metálicas utilizando ensayos no destructivos.",
          "proteccion_catodica": "Contiene: el diseño, la determinación de parámetros in situ, el diagnóstico, la inspección, incluyendo las técnicas CIPS y DCVG, el monitoreo, el mantenimiento, la construcción y puesta en marcha de Sistemas de Protección Catódica.",
          "monitoreo_de_corrosion": "Incluye: la evaluación de velocidades de corrosión y de la corrosividad de fluidos.",
          "recubrimientos": "Contempla: La inspección, el aseguramiento, y el control de calidad (QA/QC) en la preparación de superficies y aplicación de recubrimientos.",
          "servicios_de_laboratorio": "Involucra: los muestreos, el procesamiento y la interpretación de análisis fisicoquímicos, electroquímicos, microbiológicos y en recubrimientos.",
          "desarrollo_de_software_y_simulacion": "Implica: el diseño, el desarrollo, la implementación de software y el soporte técnico.",
          "fabricacion_y_suministros": "Contempla: El suministro de facilidades de monitoreo de corrosión y medios de cultivo para los grupos bacterianos BSR, BPA, BANT, BHT, BTR, BOH y el diseño y desarrollo de medios de cultivo para BSR y TTR; y el diseño, desarrollo, fabricación, implementación y soporte de equipos electrónicos de monitoreo e inspección."
        }
      },
      {
        "title": "Conceptos Claves",
        "content": {
          "sistema_de_gestion": "Conjunto de interrelacionados o que interactúan para procesos para lograr estos objetivos.",
          "politica": "Intenciones y dirección de una organización, como las expresa formalmente su alta dirección.",
          "calidad": "Grado en que un conjunto de características inherentes de un objeto cumple con los requisitos.",
          "requisito": "Necesidad o expectativa establecida, generalmente implícita u obligatoria.",
          "no_conformidad": "Incumplimiento de un requisito.",
          "eficiencia": "Relación entre el resultado alcanzado y los recursos utilizados.",
          "eficacia": "Grado en el que se realizan las actividades planificadas y se logran los resultados planificados.",
          "informacion_documentada": "Información que una organización tiene que controlar y mantener, y el medio que la contiene.",
          "auditoria": "Proceso sistemático, independiente y documentado para obtener evidencias objetivas y evaluarlas de manera objetiva con el fin de determinar el grado en que se cumplen los criterios de auditoría.",
          "queja": "Expresión de insatisfacción hecha a una organización, relativa a su producto o al propio proceso de tratamiento de quejas, donde explícita o implícitamente se espera una respuesta o resolución.",
          "accidente_de_trabajo": "Suceso repentino que sobrevenga por causa o con ocasión del trabajo y produzca en el trabajador una lesión orgánica, una perturbación funcional o psiquiátrica, una invalidez o la muerte. Es también accidente de trabajo aquel que se produce durante la ejecución de órdenes del empleador, o durante la ejecución de una labor bajo su autoridad, aún fuera del lugar y horas de trabajo. (Traslado, Función sindical, Actividades recreativas o deportivas - Ley 1562 del 2012)",
          "incidente_de_trabajo": "Acontecimiento no deseado que bajo condiciones ligeramente diferentes pudo haber resultado en un accidente de trabajo.",
          "enfermedad_laboral": "Es enfermedad laboral la contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar.",
          "peligro": "Es una fuente o situación con potencial de daño en términos de lesión o enfermedad, daño a la propiedad, al ambiente de trabajo o una combinación de éstos.",
          "condicion_insegura": "Condición del ambiente de trabajo que pone en riesgo la salud del personal que labora allí, la integridad de la infraestructura o el medio ambiente.",
          "riesgo": "Posibilidad de que suceda algo que tendrá impacto en los objetivos. Se mide en términos de consecuencias y posibilidad de ocurrencia. (NTC 5254 Gestión del Riesgo)",
          "acto_inseguro": "Son las fallas, olvidos, errores u omisiones que hacen las personas al realizar un trabajo, tarea o actividad y que pudieran ponerlas en riesgo de sufrir un accidente."
        }
      },
      {
        "title": "Reglamento de Higiene y Seguridad y Industrial",
        "content": [
          "Compromiso del cumplimiento de la legislación",
          "Constitución y funcionamiento del COPASST",
          "Desarrollo del Programa de Gestión en Seguridad y Salud en el Trabajo con los subprogramas de medicina preventiva y del trabajo y subprograma de Seguridad industrial.",
          "Identificación y control de los riesgos existentes en la CIC",
          "Ejecución del proceso de inducción al trabajador",
          "Ubicación del reglamento en sitios visibles"
        ]
      },
      {
        "title": "Normas de Seguridad en Laboratorios y TMC",
        "content": [
          "Leer las normas de seguridad.",
          "Identificar las rutas de evacuación, salidas de emergencia del área y extintores más cercanos.",
          "Anunciar su llegada al responsable del área.",
          "Está prohibido ingresar y/ o consumir alimentos y bebidas.",
          "La operación de los equipos y herramientas, es exclusiva del personal autorizado.",
          "Para ingresar y/o laborar en los laboratorios debe tener como mínimo: bata para laboratorio abotonada, pantalón largo, zapatos cerrados.",
          "Para ingresar/ laborar en el TMC debe tener como mínimo: overol manga larga o pantalón largo, zapatos cerrados y camisa manga larga."
        ]
      },
      {
        "title": "Normas de Seguridad y Prevención de Covid -19",
        "content": [
          "Usar permanentemente el tapabocas y el kit de desinfección.",
          "Realizar lavado de manos cada tres (3) horas.",
          "Mantener un distanciamiento mínimo de 1 metro.",
          "Limpiar y desinfectar superficies y equipos de trabajo.",
          "Si estornuda o tose, cubra su nariz y boca con un pañuelo desechable o el antebrazo.",
          "Si presenta síntomas gripales no asistir a la CIC, reportar a su EPS, HSE y jefe inmediato."
        ]
      },
      {
        "title": "Gestión del Riesgo",
        "content": {
          "riesgos_fisicos": {
            "peligros": ["Radiación solar, radiación proveniente de soldaduras (rayos X).", "Altas o bajas temperaturas.", "Iluminación deficiente o en exceso.", "Ruido.", "Vibraciones."],
            "controles": ["Realizar inspección pre-operacional del sitio de trabajo.", "Usar la dotación adecuada para la actividad.", "Usar adecuadamente los EPPs: Casco, gafas de seguridad lente oscuro, máscara para soldar y bloqueador solar.", "Hidratarse constantemente.", "Utilizar fuentes de luz artificial.", "Usar protección auditiva (simple o doble).", "Reducir las jornadas de exposición o realizar rotación de personal (relevos)."]
          },
          "riesgos_de_seguridad": {
            "peligros": ["Desplazamientos vehiculares.", "Trabajos en altura (≥1.5 m).", "Trabajo en espacio confinado.", "Mecánicos: Herramientas manuales, Equipos a alta presión /en movimiento, Proyección de partículas.", "Eléctricos: Energía eléctrica baja (25 V a 1000 V).", "Locativos: Falta de orden y aseo, Señalización deficiente, inexistente o inadecuada.", "Riesgo Público: Robos, asonadas, desordenes públicos, terrorismo."],
            "controles": ["Verificar el estado físico de los conductores.", "Personal certificado, capacitado y/o entrenado.", "Realizar inspección pre-operacional del sitio de trabajo, vehículos, equipos y herramientas.", "Realizar mantenimiento preventivo y correctivo de vehículos, equipos y herramientas.", "Usar y verificar equipos de protección contra caídas.", "Realizar monitoreo inicial/permanente de atmósferas peligrosas.", "Usar adecuadamente la dotación y EPPs.", "Mantener el orden y aseo.", "Señalizar adecuadamente las áreas, equipos averiados, etc.", "Informar situaciones de amenaza u hostigamiento.", "Manejar bajo perfil."]
          },
          "riesgos_biologicos": {
            "peligros": ["Presencia en el sitio de trabajo de: insectos, reptiles, semovientes, animales silvestres.", "Presencia de malezas.", "Elementos o fluidos contaminados con microorganismos tipo parásitos, bacterias, hongos, virus (Covid -19)."],
            "controles": ["Personal con esquema de vacunación vigente.", "Aplicarse repelente.", "Evitar la aplicación de perfumes durante las actividades en campo.", "Realizar inspección pre-operacional del lugar de trabajo.", "Usar adecuadamente la dotación y EPPs: Camisa manga larga, casco, botas de seguridad caña alta, gafas de seguridad y guantes de latex/nitrilo.", "Informar al encargado del área, la presencia de animales y/o insectos para su control.", "Cumplir con el Protocolo establecido, mantener el distanciamiento, mínimo de 1 m, realizar lavado de manos cada 3 horas y desinfectar el puesto de trabajo."]
          },
          "riesgos_psicosociales": {
            "peligros": ["Derivados del ambiente de trabajo (disconfort térmico, espacio, iluminación).", "Trabajo rutinario.", "Jornadas extendidas.", "Carga excesiva de trabajo."],
            "controles": ["Realizar pausas activas.", "Conciliar la vida familiar y laboral.", "Promover estilos de vida saludable.", "Fomentar el trabajo en equipo y la comunicación asertiva."]
          },
          "riesgos_quimicos": {
            "peligros": ["Sustancias químicas.", "Gases y/o vapores orgánicos/inorgánicos o inflamables.", "Material particulado.", "Humos."],
            "controles": ["Usar adecuadamente la dotación y EPPs: Camisa manga larga, bata de laboratorio, trajes desechables de seguridad, guantes de nitrilo, botas de seguridad/ calzado cerrado, gafas de seguridad, máscara para material particulado o vapores.", "Señalizar los productos químicos (SGA), áreas de trabajo y almacenamiento.", "Manipular de forma segura las sustancias químicas.", "Disponer de las MSDS y extintor en sitio.", "Disponer de forma correcta los residuos químicos (por compatibilidad)."]
          },
          "riesgos_biomecanicos": {
            "peligros": ["Esfuerzo físico asociado a la actividad.", "Postura prolongada y/o forzada.", "Movimiento repetitivo.", "Manipulación manual de cargas, equipos y herramientas."],
            "controles": ["Realizar ejercicios de calentamiento antes de comenzar la actividad.", "Adoptar posturas correctas durante la actividad.", "Realizar pausas activas.", "Poseer conocimientos del manejo de cargas e higiene postural."]
          },
          "riesgos_naturales": {
            "amenazas": ["Sismo.", "Inundación (desbordamiento de ríos y quebradas).", "Tormentas eléctricas.", "Deslizamientos de tierra.", "Fuertes vientos (vendaval).", "Granizadas."],
            "medidas_de_prevencion": ["Conocer el procedimiento de evacuación médica y contactos de emergencia.", "Identificar un punto de encuentro.", "Suspender las actividades ante evidencia de tormentas eléctricas/lluvia.", "Estar atento a cambios en las fuentes: Vientos, cuerpos de agua, movimientos.", "No realizar desplazamientos terrestres durante lluvias fuertes, granizadas y sismos."]
          }
        }
      },
      {
        "title": "Programas de Salud, Seguridad en el Trabajo y Ambiente",
        "content": [
          "Seguridad y Salud en el Trabajo",
          "Inducción, capacitación y entrenamiento",
          "Inspecciones",
          "Seguridad vial",
          "Gestión ambiental",
          "Riesgo cardiovascular",
          "Motivación, comunicación, participación y consulta",
          "Mantenimiento y calibración",
          "Prevención de lesiones osteomusculares",
          "Elementos de protección personal",
          "Riesgo psicosocial",
          "Trabajo seguro en alturas",
          "Prevención de alcoholismo, tabaquismo y farmacodependencia",
          "Riesgo auditivo",
          "Conservación visual",
          "Manejo de sustancias químicas",
          "Programa de responsabilidad social",
          "Programa uso eficiente de agua y energía",
          "Programa excavaciones y espacios confinados"
        ]
      },
      {
        "title": "Reportes",
        "content": {
          "tipos_de_reporte": [
            "Accidente de trabajo (AT)",
            "Incidente (INC)",
            "Condiciones Inseguras de Trabajo (CIT)",
            "Actos Inseguros (Al)",
            "Actos Seguros (AS)",
            "Oportunidades de Mejora (OM)"
          ],
          "formato_disponible": "Rodas -> 03 apoyo -> 04GAF -> CONSULTA -> 03. PROCEDIMIENTOS",
          "enviar_a": ["copasst@corrosioncic.com", "asarmiento@corrosioncic.com"]
        }
      },
      {
        "title": "Sistema General de Salud y Riesgos",
        "content": {
          "arl": "Colmena Seguros",
          "reporte_accidente_o_enfermedad": "Todo accidente o enfermedad laboral debe ser reportado a la ARL (Colmena) dentro de los dos (2) días hábiles siguientes a la ocurrencia del evento o el diagnóstico de la enfermedad.",
          "niveles_de_riesgo": {
            "nivel_v": "Personal de campo y Áreas Críticas en sede (Mayor Exposición al Riesgo)",
            "nivel_iii": "Personal Administrativo (Menor Exposición al Riesgo)"
          },
          "linea_gratuita_accidente": "018000919667"
        }
      },
      {
        "title": "Gestión Ambiental",
        "content": {
          "aspectos_e_impactos": {
            "actividades": ["Actividades de oficina y campo", "Ensayos de Laboratorio", "Fabricación Productos Tecnológicos", "Transporte"],
            "aspectos": ["Consumo de agua y energía", "Utilización de materia prima", "Generación de residuos sólidos reciclables y peligrosos", "Generación de residuos líquidos Derrames", "Generación de ruido", "Emisiones de Vapores", "Reutilización de residuos", "Vacantes laborales", "Formación del personal en prácticas ambientales"],
            "impactos": ["Agotamiento de recursos naturales", "Contaminación del suelo / vegetales y/o animales", "Contaminación del suelo y agua", "Contaminación atmosférica", "Aprovechamiento de los recursos", "Generación de empleo Oportunidades profesionales", "Fomento de buenas prácticas ambientales"]
          },
          "manejo_residuos_solidos": {
            "aprovechables": ["Cartón", "Papel", "Plástico", "Vidrio", "Metales"],
            "organicos_aprovechables": ["Restos de comida", "Desechos Agrícolas"],
            "no_aprovechables": ["Papel higiénico", "Servilletas", "Papeles y cartones contaminados con comida", "Papeles metalizados"],
            "peligrosos": ["Epp's contaminados", "Material absorbente contaminado", "Residuos COVID 19"]
          },
          "manejo_residuos_peligrosos": "Residuos Solventes y Acuosos -> Almacen Temporal de Residuos Peligrosos CIC -> Disposición final con Empresa de Gestión Integral de Residuos Peligrosos con las aprobaciones legales. IMPORTANTE: El almacenamiento de residuos debe realizarse teniendo en cuenta los lineamientos de la ficha de seguridad (MSDS) de cada producto."
        }
      },
      {
        "title": "Talento Humano",
        "content": {
          "proceso_seleccion_y_contratacion": {
            "inicio": "El proceso de Selección y contratación inicia con la identificación de una necesidad en cada área por contratación de personal, esta necesidad es identificada por la responsable de la UEN y Aprobada por el Director de la CIC. Una vez es autorizada la contratación, se crea el perfil vacante (TH-F-17).",
            "entrevista": "Todos los candidatos que asisten a un proceso de entrevista son evaluados por un panel entrevistador, este panel se encarga de evaluar a los candidatos en: educación, formación, experiencia y habilidades. El responsable de talento humano registra los resultados en el formato (TH-F 10) Consolidado de entrevista y según los resultados se toma la decisión de cuál es la persona que ocupará la vacante.",
            "ruta_formatos": "Rodas -> 03 apoyo -> 01TH -> CONSULTA -> 07. FORMATOS"
          },
          "tipos_de_contratacion": {
            "indefinido": "EPS, ARL, Caja Comp. Fam., F. Pensiones, F. Cesantías, Póliza de Vida",
            "fijo_a_6_meses_prorrogables": "EPS, ARL, Caja Comp. Fam., F. Pensiones, F. Cesantías, Póliza de Vida",
            "obra_o_labor": "EPS, ARL",
            "aprendizaje": "EPS, ARL",
            "pasantia": "ARL"
          },
          "horario_laboral": {
            "horario": "Lunes a Sábado (Días hábiles) 46 horas/semana – 188 horas/mes",
            "tiempo_nucleo": "El Tiempo Núcleo NO ES EQUIVALENTE al Horario de Trabajo. Debe emplearse exclusivamente para la realización de diligencias personales, programadas antes de las 09:30 a.m. o después de las 04:30 p.m.",
            "reporte_horas": "A través de MiSICIC realizamos el reporte de horas laborales: http://icaro.uis.edu.co/funcion/login",
            "nota": "El horario laboral está sujeto a la ley 2101 de 2021."
          },
          "cargos_y_roles": {
            "cargos": ["Director", "Responsable de UEN", "Responsable de Línea Tecnológica", "Responsable Administrativo de Área", "Coordinador de Laboratorio", "Profesional Experto", "Profesional Especialista", "Profesional Asistente", "Profesional en Formación", "Técnico Especialista", "Técnico Asistente", "Estudiante", "Mano de Obra no Calificada"],
            "roles": ["Representante de la Dirección", "Responsable de Proceso", "Responsable de Producto", "Auditor Interno", "Jefe de Brigada", "Brigadista", "Presidente del COPASST", "Presidente del CCL", "Responsable Plan estratégico Seguridad Vial", "Estudiante Pasante HSE", "Profesional Senior", "Analista", "Conductor", "Servicios Generales", "Administrador Programa de prevención y protección contra caídas.", "Coordinador trabajo en Alturas", "Jefe de área para trabajo en alturas", "Trabajo Autorizado para actividades en Alturas", "Persona Calificada para trabajo en alturas", "Rescatista o Brigada de rescate para trabajo en alturas", "Ayudante de Seguridad para trabajo en Alturas", "Administrador programa de gestión para trabajo en espacios confinados", "Supervisor de trabajo en espacios Confinados", "Trabajador entrante en espacios confinados", "Vigía de seguridad para trabajo en espacios confinados", "Capacitador Vial", "Investigador de Accidentes", "Líder de mantenimiento Vial", "Miembro Comité vial", "Planificador de Rutas"]
          }
        }
      },
      {
        "title": "Comités de la CIC",
        "content": {
          "comite_convivencia_laboral": {
            "periodo": "2024-2026",
            "descripcion": "Es el encargado de fomentar la armonía y la sana convivencia. Su interés es promover las relaciones positivas entre los funcionarios brindando espacios de conciliación y herramientas para la resolución de conflictos, así mismo respalda la dignidad e integridad de las personas en el trabajo.",
            "reportes": ["Clima Laboral", "Presunto Acoso Laboral", "Observación de Comportamiento"],
            "miembros": {
              "presidente": "Jonathan Marín",
              "secretaria": "Helen Flórez",
              "representantes_direccion": ["Adrián Sandoval", "Miguel Acuña", "Jose Miguel Jiménez"],
              "representantes_funcionarios": ["Máryury Blanco", "Lizeth Pinto", "Guillermo Acevedo"]
            }
          },
          "copasst": {
            "periodo": "2024 - 2026",
            "descripcion": "Es el comité encargado de la promoción y vigilancia de las normas en temas de seguridad y salud en el trabajo.",
            "miembros": {
              "presidente": "Adrián Sandoval",
              "secretaria": "Karen Gil",
              "elegidos_por_direccion": ["William García", "Ángela Pinzón", "Jenny Oviedo"],
              "elegidos_por_funcionarios": ["Daniela Mora", "William Flórez", "Viviana Vargas"]
            },
            "actividades": ["Vigilancia", "Capacitación y Promoción", "Investigación de los Accidentes e Incidentes de trabajo", "Inspecciones planeadas"],
            "contacto": "copasst@corrosioncic.com"
          },
          "comite_seguridad_vial": {
            "descripcion": "Es un Equipo de trabajo definido por la dirección, encargado de la implementación adecuada del Plan Estratégico de Seguridad Vial - PESV, así como de asegurar que las áreas respectivas cumplan las políticas y procedimientos establecidos en la Ley 1503 de 2011.",
            "objetivo": "Planificar, implementar y medir las acciones, que permitan generar conciencia entre el personal y lograr objetivos a favor de la seguridad vial en la empresa y la vida cotidiana de sus integrantes.",
            "miembros": ["Jorge Hernando Panqueva", "Liliana Estupiñan", "Adrian Sandoval", "Astrid Sarmiento", "Saray Martínez"]
          }
        }
      },
      {
        "title": "Brigada CIC",
        "content": {
          "gestion_de_emergencias": {
            "comite_de_emergencia": {
              "miembros": ["Jorge Hernando Panqueva Álvarez", "Liliana María Estupiñán", "Ronald Rueda"],
              "funciones": "Máxima autoridad en el plan de emergencia. Responsable de coordinar a nivel estratégico la ejecución de actividades antes, durante y después de una emergencia"
            },
            "brigada_de_emergencia": "Es la máxima instancia operacional durante as etapas de control y atención o mitigación de la emergencia. La Brigada CIC es una brigada integral conformada por funcionarios de forma voluntaria, que están capacitados para responder ante cualquier tipo de emergencia.",
            "jefe_de_brigada": "Miguel Acuña. Es el responsable de implementar el plan de emergencia, es el máximo nivel de decisión operativa en caso de una emergencia."
          },
          "brigadistas": [
              {"nombre": "Adrián Sandoval Rojas", "area": "Logística de Viajes"},
              {"nombre": "Ángela María Pinzón Gómez", "area": "Protección Catódica"},
              {"nombre": "Astrid Elena Sarmiento Caraballo", "area": "HSE"},
              {"nombre": "Brandon Esteban Vásquez Laguado", "area": "Taller de Mecánica y Conformados"},
              {"nombre": "Darcy Lucia Pinzón Sierra", "area": "Biocorrosión y Biotecnología"},
              {"nombre": "Fernando Corzo Álvarez", "area": "Electroquímica"},
              {"nombre": "Hernán Alfonso Garnica", "area": "Taller de Mecánica y Conformados"},
              {"nombre": "Helen Karina Flórez", "area": "Aseguramiento de la Integridad"},
              {"nombre": "Hugo Fernando Colmenares Cristancho", "area": "Biocorrosión y Biotecnología"},
              {"nombre": "Jefferson Mora Meza", "area": "Administración de Recursos Físicos"},
              {"nombre": "Jessica Paola Zúñiga", "area": "Fisicoquímica"},
              {"nombre": "Jorge Eliecer Tarazona Mogollon", "area": "Taller de Mecánica y Conformados"},
              {"nombre": "Julieth Camila Maldonado Pava", "area": "Biocorrosión y Biotecnología"},
              {"nombre": "Kelly Jhoanna Cañas", "area": "Fisicoquímica"},
              {"nombre": "Maicol Fabian Mejia Olayo", "area": "HSE"},
              {"nombre": "Uveseeler Stiven León", "area": "Inspección y Monitoreo"},
              {"nombre": "Viviana Vargas Alzate", "area": "Análisis de Falla y Materiales"}
          ]
        }
      },
      {
        "title": "Compras y Subcontratación",
        "content": {
          "seleccion_y_registro": "Establece la metodología y los lineamientos para llevar a cabo la selección y registro de los proveedores y contratistas, de conformidad con los requisitos básicos y específicos (legales, administrativos, técnicos y HSEQ) establecidos según los bienes y/o servicios requeridos por la CIC.",
          "ejecucion_de_compra": "Establece la metodología y los lineamientos para realizar la adquisición o subcontratación de los bienes y/o servicios requeridos por las diferentes Unidades Estratégicas de Negocio de la CIC, para llevar a cabo sus procesos estratégicos, misionales y/o de apoyo.",
          "evaluacion_de_proveedores": "Establece la metodología y los lineamientos para que la CIC pueda llevar a cabo la evaluación de desempeño de sus proveedores y contratistas, de conformidad con los criterios establecidos, a saber: Calidad, Tiempo de Entrega, Precios, Aspectos HSE, Soporte Técnico y Servicio al Cliente."
        }
      }
    ]
  };

  populateSidebar(data.sections);
  if (data.sections.length > 0) {
    showSection(data.sections[0]);
    // Marcar el primer elemento como activo
    const firstLink = sidebarLinks.querySelector("a");
    if (firstLink) {
      firstLink.classList.add("active");
    }
  }

  // Poblar el sidebar
  function populateSidebar(sections) {
    sidebarLinks.innerHTML = "";
    sections.forEach((section) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = section.title;
      a.classList.add("block", "p-2", "rounded-md", "hover:bg-secondary-color", "dark:hover:bg-light-color");
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(section);
        const links = sidebarLinks.querySelectorAll("a");
        links.forEach(link => link.classList.remove("active"));
        a.classList.add("active");
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("open");
      });
      li.appendChild(a);
      sidebarLinks.appendChild(li);
    });
  }

  // Mostrar el contenido de la sección
  function showSection(section) {
    contentDisplay.innerHTML = "";
    const title = document.createElement("h2");
    title.textContent = section.title;
    title.classList.add("text-2xl", "font-bold", "text-primary-color");
    contentDisplay.appendChild(title);
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("flex", "flex-col", "gap-2");
    contentDiv.innerHTML = formatContent(section.content);
    contentDisplay.appendChild(contentDiv);
  }

  // Función para crear elementos HTML
  function createElement(tag, content, classes = [], attributes = {}) {
    const element = document.createElement(tag);
    if (content) element.innerHTML = content;
    if (classes.length > 0) element.classList.add(...classes);
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    return element;
  }

  // Función para formatear listas
  function formatList(items, listClass = "list-disc", itemClass = "") {
    const ul = createElement("ul", "", [listClass]);
    items.forEach(item => {
      const li = createElement("li", item, [itemClass]);
      ul.appendChild(li);
    });
    return ul.outerHTML;
  }

  // Función para formatear tablas
  function formatTable(headers, rows) {
    const table = createElement("table", "", ["min-w-full", "table-auto", "border", "border-secondary-color", "dark:border-light-color"]);
    const thead = createElement("thead", "", ["bg-accent-color", "text-text-light-color"]);
    const headerRow = createElement("tr");

    headers.forEach(header => {
      const th = createElement("th", header, ["border", "px-4", "py-2", "text-left"]);
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = createElement("tbody");

    rows.forEach(row => {
      const tr = createElement("tr");
      Object.values(row).forEach(value => {
        const td = createElement("td", value, ["border", "px-4", "py-2"]);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table.outerHTML;
  }

  // Función para formatear objetos
  function formatObject(obj, depth = 0) {
    let html = "";
    for (const [key, value] of Object.entries(obj)) {
      const headerTag = depth === 0 ? "h3" : depth === 1 ? "h4" : "h5";
      const headerClasses = depth === 0 ? ["font-bold", "text-primary-color", "text-lg", "mt-4"]
        : depth === 1 ? ["font-semibold", "text-primary-color", "mt-2"]
        : ["font-medium", "text-primary-color", "mt-1"];
      const header = createElement(headerTag, key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " "), headerClasses).outerHTML;

      if (Array.isArray(value)) {
        html += header + formatList(value, "list-disc", "pl-6");
      } else if (typeof value === "object" && value !== null) {
        html += header + formatObject(value, depth + 1);
      } else {
        html += header + createElement("p", value, ["pl-6"]).outerHTML;
      }
    }
    return html;
  }

  // Función principal para formatear el contenido
  function formatContent(content) {
    if (typeof content === "string") {
      return createElement("p", content).outerHTML;
    } else if (Array.isArray(content)) {
      return content.map(item => createElement("p", item).outerHTML).join("");
    } else if (typeof content === "object" && content !== null) {
      let html = "";
      for (const [key, value] of Object.entries(content)) {
        const header = createElement("h3", key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " "), ["font-bold", "text-primary-color", "text-lg", "mt-4"]).outerHTML;

        if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
          // Si el valor es un array de objetos, formatear como tabla
          const headers = Object.keys(value[0]);
          html += header + formatTable(headers.map(h => h.charAt(0).toUpperCase() + h.slice(1)), value);
        } else if (Array.isArray(value)) {
          // Si el valor es un array, formatear como lista
          html += header + formatList(value, "list-disc", "pl-6");
        } else if (typeof value === "object" && value !== null) {
          // Si el valor es un objeto, formatear recursivamente
          html += header + formatObject(value);
        } else {
          // Si el valor es una cadena, formatear como párrafo
          html += header + createElement("p", value, ["pl-6"]).outerHTML;
        }
      }
      return html;
    }
    return "";
  }


  // Toggle de tema
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    themeToggleDarkIcon.classList.remove("hidden");
  }

  themeToggle.addEventListener("click", () => {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });

  // Toggle de menú de hamburguesa
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    sidebarOverlay.classList.toggle("open");
  });

  // Cerrar el menú de hamburguesa al hacer clic en el overlay
  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("open");
  });
});
