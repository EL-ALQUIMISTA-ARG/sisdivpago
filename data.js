const originalRepresentativesData = {
    "1": "Padre", "2": "Madre", "3": "Abuelo Paterno", "4": "Abuela Paterna", "5": "Padre de Abuelo Paterno", "6": "Madre de Abuelo Paterno", "7": "Padre de Abuela Paterna", "8": "Madre de Abuela Paterna", "9": "4ta Generación Paterna (varón)", "10": "4ta Generación Paterna (mujer)", "11": "Abuelo Materno", "12": "Abuela Materna", "13": "Padre de Abuelo Materno", "14": "Madre de Abuelo Materno", "15": "Padre de Abuela Materna", "16": "Madre de Abuela Materna", "17": "4ta Generación Materna (varón)", "18": "4ta Generación Materna (mujer)", "19": "Bisabuelo/a", "20": "Tatarabuelo/a", "21": "Padres adoptivos", "22": "Padrastro / Madrastra", "23": "Donante", "24": "Ancestro omitido/excluido", "25": "Hermano/a", "26": "Hermano/a fallecido/a", "27": "Hermano/a no nacido/a", "28": "Medio hermano/a", "29": "Hermano/a gemelo/a o mellizo/a", "30": "Primos hermanos", "31": "Tío/a", "32": "Sobrinos/as", "33": "Cuñados/as", "34": "Hijo/a", "35": "Hijo/a fallecido/a", "36": "Hijo/a abortado/a", "37": "Hijo/a no reconocido/a", "38": "Nieto/a", "39": "Bisnieto/a", "40": "Hijos adoptivos", "41": "Hijos no nacidos por intención", "42": "Pareja actual", "43": "Parejas anteriores con hijos", "44": "Esposo/a", "45": "Abuelos adoptivos (rol)", "46": "Tíos abuelos (rol)", "47": "Perpetrador", "48": "Magia oscura en el sistema", "49": "victima", "50": "Secretos en el arbol", "51": "Te protejemos desde la Luz", "52": "Ajenos al sistema que fueron incluidos", "53": "Aun no esta listo para mostrarse", "54": "Abusados de diferentes maneras puede ser fisica psiquica o mental", "55": "Me siento en peligro", "56": "Desaparecidos", "57": "Caidos", "58": "Traiciones al sistema", "59": "Personas desplazadas o migrantes", "60": "Expulsados / excluidos por normas sociales o familiares", "61": "Enfermos crónicos / discapacitados", "62": "Suicidas", "63": "Abortos naturales", "64": "Niños entregados en adopción", "65": "Excluidos por religión o creencias", "66": "Pueblos originarios o ancestros no reconocidos", "67": "Amantes ocultos / relaciones secretas", "68": "Personas encarceladas", "69": "Victimarios del propio clan", "70": "Guerreros / combatientes sobrevivientes", "71": "Sacrificados por otros", "72": "Dinero o bienes perdidos", "73": "Líderes o figuras de poder en el clan", "74": "Personas con dones espirituales o místicos", "75": "Víctimas de abusos de poder fuera del clan"
};

const originalStellarCodesData = {
        "1": { "id": "emotion-1", "title": "Herida primaria de origen", "phrase": "“Me anclo al dolor de cómo empezó todo”", "act": "Frase: Me libero del anclaje al dolor del pasado. Reconozco que cada inicio, aunque difícil, me ha fortalecido. Honro mi historia y elijo crear un nuevo inicio, lleno de luz y esperanza. Mi presente es mi poder. Me doy permiso para reescribir mi historia desde el amor y la paz. Mi origen no me define, mi evolución sí. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino. Gracias, gracias, gracias.", "colorClass": "emotion-color-1" },
        "2": { "id": "emotion-2", "title": "Miedo ancestral a fallar", "phrase": "“Si lo hago mal, destruyo todo”", "act": "Frase: Rompo el miedo ancestral al fracaso. Entiendo que mis acciones son parte de un aprendizaje, no de una destrucción. Cada error es un paso hacia el crecimiento. Me perdono por no ser perfecto y me libero de la carga de tener que hacerlo todo bien. Me atrevo a intentar, a equivocarme y a volver a empezar, porque mi valor no se mide por mis fallos. El fracaso es un maestro. Elijo la valentía en lugar del miedo. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-2" },
        "3": { "id": "emotion-3", "title": "El cuerpo como mensajero", "phrase": "“Siento lo que otros callan”", "act": "Frase: Honro mi cuerpo como un sabio mensajero. Escucho sus susurros y atiendo sus necesidades. Libero las emociones de otros que he cargado. Mi cuerpo es mi santuario, y lo habito con amor y conciencia. Permito que mi cuerpo me guíe hacia la sanación. Agradezco a mi cuerpo por hablar por mí. Le pido a la consciencia y la energía que se aloja en ese lugar de mi cuerpo que vuelva al lugar donde pertenece y reclamo toda mi energia y todo mi poder. Me escucho, me sano. Mi cuerpo y yo somos uno. Gracias, Gracias, Gracias.", "colorClass": "emotion-color-3" },
        "4": { "id": "emotion-4", "title": "Memoria de pérdida no procesada", "phrase": "“Algo se fue, y no lo despedí”", "act": "Frase: Con amor, honro la pérdida y le doy su lugar sagrado en mi corazón. Me permito sentir el dolor, la tristeza y el vacío sin juzgarme. Hoy, le digo adiós a lo que se fue, con gratitud por lo que fue. Libero la energía estancada del duelo y me abro a la paz. El recuerdo vive en mí, pero el dolor se va. Me doy un nuevo comienzo. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Gracias, te suelto con amor.", "colorClass": "emotion-color-4" },
        "5": { "id": "emotion-5", "title": "Lealtad invisible al dolor del clan", "phrase": "“Si sano, traiciono al sistema”", "act": "Frase: Con profundo amor y respeto, honro a mi linaje. Agradezco sus vidas y sus enseñanzas. Hoy, elijo sanar, no para traicionar, sino para liberar a las generaciones futuras. Elijo vivir una vida plena, y al hacerlo, honro su legado de la mejor manera. Soy el eslabón que sana. Mi sanación es su sanación. Me libero y los libero a todos. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino. Con amor, lo hago diferente.", "colorClass": "emotion-color-5" },
        "6": { "id": "emotion-6", "title": "Expectativa heredada", "phrase": "“Tengo que cumplir lo que otros no pudieron”", "act": "Frase: Suelto las expectativas heredadas que no me pertenecen. Honro a quienes vinieron antes, pero elijo mi propio camino. Vivo mi vida, no la de otros. Me doy permiso para fracasar y para triunfar en mis propios términos. Soy libre de ser yo mismo y de seguir mis propios sueños. Mis decisiones son mi camino. Me libero de lo que no me representa. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-6" },
        "7": { "id": "emotion-7", "title": "Protección que limita", "phrase": "“No puedo avanzar porque me enseñaron a tener miedo”", "act": "Frase: Dejo ir las protecciones que me limitan. La valentía es mi nuevo escudo. Elijo avanzar con confianza, sabiendo que el miedo fue un maestro, pero ya no me define. Me abro a nuevas experiencias con el corazón abierto. Me doy permiso para volar alto, más allá de mis miedos. Elijo la confianza en lugar del miedo. Estoy a salvo en mi camino. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-7" },
        "8": { "id": "emotion-8", "title": "Ausencia emocional temprana", "phrase": "“Nadie estuvo realmente para mí”", "act": "Frase: Me convierto en mi propio refugio seguro. Me doy el amor y la presencia que me faltaron. Me abrazo con compasión, me veo, me escucho. Soy mi mejor amigo y mi mayor sostén. Mi corazón es un lugar de amor incondicional para mí mismo. Me reconozco y me honro. Me doy la bienvenida a mi propia vida. Estoy aquí para mí, siempre. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-1" },
        "9": { "id": "emotion-9", "title": "Campo congelado por duelo no expresado", "phrase": "“El tiempo se detuvo en un dolor que no se lloró”", "act": "Frase: Descongelo el dolor que se quedó estancado en mi alma. Me permito llorar las lágrimas que no lloré, y sentir la tristeza que no sentí. El duelo es un río que debe fluir. Libero esta energía para que mi vida pueda seguir adelante. Honro el pasado, pero vivo el presente. Me doy el permiso de soltar y de avanzar. El dolor se transforma en paz. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-2" },
        "10": { "id": "emotion-10", "title": "Identidad prestada", "phrase": "“Soy quien esperaban que fuera, no quien soy”", "act": "Frase: Me libero de la identidad prestada y me reconecto con mi verdadera esencia. Dejo ir la máscara y me muestro al mundo tal como soy. Honro a mi alma auténtica. No necesito la aprobación de los demás para ser quien soy. Mi verdad es mi mayor poder. Elijo ser mi yo auténtico, con orgullo y amor. Mi nombre es mi verdad. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-3" },
        "11": { "id": "emotion-11", "title": "Lazo simbiótico con el sufrimiento", "phrase": "“Solo existo si sufro”", "act": "Frase: Rompo el lazo simbiótico con el sufrimiento. Elijo la paz y la alegría como mi estado natural. La vida es un regalo, y merezco vivirla en plenitud. Suelto la necesidad de sufrimiento para sentirme vivo. Mi existencia es mi derecho de nacimiento. Me doy permiso para ser feliz. Mi vida es una historia de amor, no de dolor. Elijo la paz. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-4" },
        "12": { "id": "emotion-12", "title": "Miedo a brillar por herida ancestral", "phrase": "“Si me muestro, me lastiman”", "act": "Frase: Me libero del miedo a brillar y me permito mostrar mi luz al mundo. Mi resplandor no es una amenaza, es un regalo. Soy un faro para los demás. Elijo ser visible, ser valiente y ser auténtico. Me protejo con mi propia luz y mi amor. Es seguro brillar. Mi luz es mi poder, y me comprometo a compartirla sin miedo. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-5" },
        "13": { "id": "emotion-13", "title": "Autoexigencia extrema como sustituto de amor", "phrase": "“Si no hago más, no valgo”", "act": "Frase: Respeto a los que pasaron por esas situaciones de mi arbol. Con amor les suelto y libero esa auto exigencia. 'Mi valor no se mide por lo que hago, sino por quien soy.' 'Soy suficiente tal como soy, incluso en mis momentos de descanso.' Me doy permiso para ser humano, para descansar y para nutrir mi alma. Soy valioso, con o sin mis logros. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino. Gracias, gracias, gracias.", "colorClass": "emotion-color-6" },
        "14": { "id": "emotion-14", "title": "Secreto familiar bloqueando la expresión", "phrase": "“No se puede hablar de esto”", "act": "Frase: Libero la carga de los secretos familiares que no me corresponden. Entiendo que el silencio fue una forma de protección, pero ahora elijo mi paz. 'Me perdono por guardar este secreto y me libero del peso que conlleva.' 'Este secreto ya no define mi paz; mi paz me define a mí.' Mi verdad me libera. Escribo lo no dicho y lo suelto para mi sanación. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-7" },
        "15": { "id": "emotion-15", "title": "Carga energética que no me pertenece", "phrase": "“Llevo algo que no es mío”", "act": "Frase: Dejo con ustedes lo que es de ustedes. Dejo los mandatos heredados y ahora elijo hacer mi propia vida. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino. Libero toda carga energética que no es mía. Corto los lazos que me atan y me vuelvo a mi centro. Mi energía es mi tesoro. Me protejo con mi luz y mi verdad. Soy libre de ser yo mismo.", "colorClass": "emotion-color-1" },
        "16": { "id": "emotion-16", "title": "Fragmentación interna", "phrase": "“Una parte de mí quedó atrapada en el pasado”", "act": "Frase: Dejo en el pasado lo que es del pasado. En el lugar donde pertenece. Y reclamo lo que me corresponde, por derecho divino. Lo quiero de vuelta aquí y ahora. En este preciso momento. Reúno mis partes y me convierto en un ser completo. Mi alma está intacta. Me acepto con todas mis experiencias, y me doy el permiso de sanar y de unirme. Soy uno. Me vuelvo a mi centro. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-2" },
        "17": { "id": "emotion-17", "title": "Desconexión del propósito", "phrase": "“No sé para qué estoy aquí”", "act": "Frase: Mi propósito se revela en cada paso que doy. No necesito una meta final, sino una intención clara en el presente. Conecto con la pasión que enciende mi alma y me dejo guiar por ella. Mi propósito es vivir con alegría, con amor y con autenticidad. Cada día, elijo vivir mi propósito. Mi existencia es mi propósito.", "colorClass": "emotion-color-3" },
        "18": { "id": "emotion-18", "title": "No merecimiento por lealtad a alguien excluido", "phrase": "“No puedo tener lo que otros no tuvieron”", "act": "Frase: Honro a quien fue excluido y lo integro en mi corazón. Te veo, te honro y sigo adelante. Elijo tener la vida que deseo, no para traicionar, sino para celebrar la vida que ambos merecemos. Suelto esta lealtad inconsciente y me abro a la abundancia y al merecimiento. Mi felicidad es un homenaje a tu vida. Me permito tener, ser y brillar. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-4" },
        "19": { "id": "emotion-19", "title": "Ruptura de confianza con lo espiritual", "phrase": "“Me fallaron desde lo divino”", "act": "Frase: Restauro mi relación con lo divino desde el amor y la confianza. Entiendo que lo sagrado no me falló, sino que me guió a través de una lección difícil. Me entrego a la fe, sabiendo que el universo siempre me apoya. Abro mi corazón a la guía espiritual. La confianza en lo divino es mi ancla. Mi camino es sagrado y estoy protegido. Elijo la fe. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Gracias, gracias, gracias.", "colorClass": "emotion-color-5" },
        "20": { "id": "emotion-20", "title": "Dualidad no resuelta entre amor y dolor", "phrase": "“Si amo, sufro”", "act": "Frase: Rompo la falsa creencia de que el amor y el sufrimiento van de la mano. Elijo que el amor sea mi única verdad, sin dolor ni sacrificio. Merezco un amor sano, pleno y consciente. Abro mi corazón a relaciones que me nutren y me hacen crecer. El amor es una fuente de alegría, no de dolor. Mi amor es mi poder. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-6" },
        "21": { "id": "emotion-21", "title": "Frontera simbólica de expansión limitada", "phrase": "“Más allá de cierto punto, no puedo avanzar”", "act": "Frase: Rompo la frontera invisible que me limita. Me doy permiso para expandirme y para crecer sin miedo. Mi potencial es infinito. Me atrevo a cruzar la línea y a explorar nuevos territorios. El universo me apoya en mi crecimiento. Cada paso hacia adelante es una victoria. Soy un ser sin límites. Rompo las cadenas, soy libre.", "colorClass": "emotion-color-7" },
        "22": { "id": "emotion-22", "title": "Inversión energética estancada", "phrase": "“Doy mucho, pero no fluye”", "act": "Frase: Equilibrio la balanza entre dar y recibir. Entiendo que recibir es tan importante como dar. Me doy permiso para recibir con gratitud y alegría. Libero el estancamiento energético y permito que la abundancia fluya libremente en mi vida. Mi energía se nutre de la reciprocidad. Me abro a dar y a recibir en perfecta armonía. Soy un canal de luz. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-1" },
        "23": { "id": "emotion-23", "title": "Identidad asociada al rechazo", "phrase": "“No pertenezco a ningún lugar”", "act": "Frase: Mi hogar está en mi corazón. Me doy la bienvenida a mí mismo. Mi pertenencia no depende de un lugar o de una persona, sino de mi aceptación interior. Soy un ser único y mi lugar en el universo es sagrado. Me acepto, me amo y me honro. Soy mi propio hogar. Mi tribu es el universo. Pertenecer a mí mismo es mi mayor regalo. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-2" },
        "24": { "id": "emotion-24", "title": "Fuga de energía por culpa inconsciente", "phrase": "“No puedo sostener lo bueno”", "act": "Frase: Me libero de la culpa inconsciente que me drena. Merezco todo lo bueno que me llega. Agradezco en voz alta por las bendiciones en mi vida. La prosperidad es mi derecho de nacimiento. Me doy permiso para ser feliz, para tener y para sostener todo lo que es bueno para mí. Mi corazón es un imán de bendiciones. Elijo ser feliz. Gracias, gracias, gracias.", "colorClass": "emotion-color-3" },
        "25": { "id": "emotion-25", "title": "Negación de la alegría como protección", "phrase": "“Si me alegro, algo malo pasará”", "act": "Frase: Rompo la creencia de que la alegría atrae el dolor. La felicidad es mi estado natural y elijo abrazarla sin miedo. Me doy permiso para reír, para bailar y para disfrutar cada momento. La alegría es mi protección y mi medicina. Mi felicidad es un faro de luz. Abro mi corazón a la alegría y la celebro con gratitud. Es seguro ser feliz. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-4" },
        "26": { "id": "emotion-26", "title": "Resonancia con un arquetipo de víctima", "phrase": "“Siempre me pasa a mí”", "act": "Frase: Me libero del arquetipo de víctima y me convierto en el protagonista de mi propia vida. Asumo mi poder personal. Mis elecciones me definen. Soy el creador de mi realidad. Me doy permiso para tomar el control, para sanar y para avanzar. Elijo ser el héroe de mi historia. Rompo el patrón de la queja y abrazo el de la acción. Mi poder es mi verdad. Mi narrativa es de empoderamiento. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-5" },
        "27": { "id": "emotion-27", "title": "Fijación con el pasado como refugio", "phrase": "“Lo único seguro es lo que ya pasó”", "act": "Frase: Dejo de vivir en el pasado como un refugio. Me abro a la magia y a la seguridad del presente. El presente es mi único hogar. Me doy permiso para vivir el ahora, con toda su incertidumbre y su belleza. El pasado es una lección, no una prisión. Elijo la vida en el presente. Abro mi corazón al ahora. Soy mi propio refugio en el aquí y el ahora. Camino hacia adelante.", "colorClass": "emotion-color-6" },
        "28": { "id": "emotion-28", "title": "Voto inconsciente de sufrimiento o pobreza", "phrase": "“Elegí limitarme por una causa sagrada”", "act": "Frase: Cancelo, limpio y libero todo voto inconsciente de sufrimiento o pobreza. Declaro mi soberanía espiritual y mi derecho a la plenitud. Elijo la abundancia, la salud y la alegría como mi estado natural. Merezco todo lo bueno que el universo tiene para mí. Mi prosperidad es mi derecho. Soy un ser abundante y libre. Elijo la plenitud en todas las áreas de mi vida. Gracias. Gracias por mostrarme el camino. Gracias por hacérmelo saber. Ahora entiendo. Ahora los veo. Ahora elegimos la vida. Dejo en el pasado con ustedes lo que es de ustedes. Y reclamo lo que me corresponde por derecho divino.", "colorClass": "emotion-color-7" },
        "29": { "id": "emotion-29", "title": "Sombra del perfeccionismo", "phrase": "“Si no es perfecto, no es digno de ser.”", "act": "Frase: Me libero de la carga de la perfección. Mi valor no depende de mi impecabilidad, sino de mi autenticidad y mi esfuerzo. Abrazo mis imperfecciones como parte de mi luz. Me doy permiso para ser humano, para aprender y para crecer sin juzgarme. Soy completo ahora. Mi valor reside en mi esencia. Suelto el perfeccionismo y abrazo mi verdad. Soy suficiente.", "colorClass": "emotion-color-1" },
        "30": { "id": "emotion-30", "title": "Miedo a la abundancia", "phrase": "“El dinero trae problemas y envidias.”", "act": "Frase: Rompo el pacto inconsciente con la escasez. Declaro mi merecimiento de abundancia en todas sus formas. Elijo que la prosperidad fluya en mi vida con facilidad y alegría, para mi mayor bien y el de todos. Confío en que soy digno de la riqueza y que puedo manejarla con sabiduría y gratitud. Mi relación con el dinero es sana y armónica. La abundancia es mi estado natural. Me abro a recibir. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-2" },
        "31": { "id": "emotion-31", "title": "Resistencia al cambio", "phrase": "“Es mejor lo malo conocido que lo bueno por conocer.”", "act": "Frase: Me abro con valentía a las nuevas oportunidades que la vida me presenta. Dejo ir el control sobre el futuro y confío en que el universo me guía hacia mi mayor evolución. Fluyo con los cambios como el río fluye hacia el mar, sabiendo que cada transformación me acerca a la plenitud. Acepto el cambio como un mensajero de crecimiento y sanación. Suelto el pasado y abrazo el futuro con confianza.", "colorClass": "emotion-color-3" },
        "32": { "id": "emotion-32", "title": "Auto sabotaje recurrente", "phrase": "“Cuando estoy a punto de lograrlo, me echo para atrás.”", "act": "Frase: Identifico y libero los patrones de auto sabotaje que me impiden avanzar. Reconozco que merezco el éxito y que puedo sostenerlo. Elijo conscientemente tomar el control de mis acciones y mis pensamientos para manifestar la vida que deseo. Me comprometo conmigo mismo a cruzar la línea de meta y a celebrar cada victoria, por pequeña que sea. Mi éxito es mi responsabilidad. Me libero de las cadenas que yo mismo me pongo.", "colorClass": "emotion-color-4" },
        "33": { "id": "emotion-33", "title": "Negación de la propia intuición", "phrase": "“Siempre escucho a los demás y no a mí mismo.”", "act": "Frase: Honro la voz de mi corazón y mi sabiduría interior. Mi intuición es mi brújula más fiel. Me comprometo a escucharme, a confiar en mis corazonadas y a seguir mi guía interna. Calla el ruido externo para oír la música de mi alma. Mi verdad es mi poder y mi sanación. Mi guía interior es mi mayor tesoro. Confío en mí mismo.", "colorClass": "emotion-color-5" },
        "34": { "id": "emotion-34", "title": "Falta de límites saludables", "phrase": "“No puedo decir que no, por miedo a lastimar a otros.”", "act": "Frase: Digo ‘sí’ a mi bienestar y ‘no’ a lo que me drena. Establezco límites claros y amorosos para proteger mi energía y mi espacio sagrado. Entiendo que mi 'no' a otros es un 'sí' a mí mismo, y eso es un acto de amor propio. Me honro y me respeto al defender mis fronteras. Mis límites son un acto de amor y respeto hacia mí mismo y hacia los demás. Me doy permiso para priorizarme.", "colorClass": "emotion-color-6" },
        "35": { "id": "emotion-35", "title": "Sentimiento de no pertenencia", "phrase": "“Siempre me siento como un extraño en mi propia vida.”", "act": "Frase: Honro mi singularidad y celebro mi propia esencia. Mi lugar en el mundo no es algo que deba buscar afuera, sino que lo creo con mi propia existencia. Pertenecerme a mí mismo es el hogar más seguro que puedo habitar. Soy una pieza única en el gran rompecabezas del universo y mi presencia es fundamental. Soy mi hogar. Pertenezco a mí mismo y a la vida misma.", "colorClass": "emotion-color-7" },
        "36": { "id": "emotion-36", "title": "Desconexión con la alegría", "phrase": "“La felicidad es fugaz y no es para mí.”", "act": "Frase: Me abro para recibir y para sentir la alegría en su forma más pura. Me permito reír a carcajadas, bailar sin música y disfrutar de los pequeños placeres de la vida. La alegría es mi derecho de nacimiento y la elijo como mi estado natural. Abrazo cada momento de felicidad con gratitud, sabiendo que la merezco plenamente. Elijo ser feliz. Mi corazón se abre a la alegría.", "colorClass": "emotion-color-1" },
        "37": { "id": "emotion-37", "title": "Exceso de responsabilidad por el otro", "phrase": "“Debo cargar con los problemas de los demás.”", "act": "Frase: Libero la carga que no me corresponde llevar. Respeto el proceso de los demás, pero me concentro en mi propio camino. Suelto la necesidad de rescatar a otros y me permito sanar mis propias heridas. Mi mayor servicio es ser un faro de luz, no un salvador. Ayudo desde mi bienestar, no desde la carga. Me libero de lo que no es mío. Mi paz es mi prioridad.", "colorClass": "emotion-color-2" },
        "38": { "id": "emotion-38", "title": "Duda sobre el propio poder creador", "phrase": "“Mis sueños son imposibles, es solo fantasía.”", "act": "Frase: Despierto al creador que vive en mí. Conecto con mi poder interior para manifestar mis sueños en la realidad. Mis pensamientos y mis intenciones son semillas que planto en el universo, y sé que florecerán en el momento perfecto. Confío en mi capacidad para construir la vida que anhelo, paso a paso, con fe y determinación. Mi magia es real. Soy un creador. Creo en mí mismo y en mi poder.", "colorClass": "emotion-color-3" },
        "39": { "id": "emotion-39", "title": "Dependencia emocional", "phrase": "“No puedo ser feliz si estoy solo.”", "act": "Frase: Construyo mi felicidad desde mi interior. Me nutro de mi propia compañía y encuentro la plenitud en mi soledad. La felicidad es mi responsabilidad y mi elección, no un estado que depende de otra persona. Soy mi propio compañero de vida, mi gran amor. Mi felicidad es un regalo que me doy a mí mismo. Me amo, me nutro, me valoro. No necesito a nadie para ser feliz. Soy mi fuente de felicidad.", "colorClass": "emotion-color-4" },
        "40": { "id": "emotion-40", "title": "Miedo a la vulnerabilidad", "phrase": "“Si muestro mi debilidad, me romperán.”", "act": "Frase: La vulnerabilidad es mi mayor fortaleza. Me permito sentir y expresar mis emociones sin miedo al juicio. Al abrir mi corazón, permito que la luz entre y la sanación comience. Soy lo suficientemente fuerte para ser frágil. Mi verdad es mi escudo. Conectar con mi corazón me hace indestructible. Me atrevo a ser vulnerable. La vulnerabilidad me hace auténtico. Si, veo tu dolor, veo tu sufrimiento. Que tu dolor no sea el mío. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida. Con amor ahora elegimos la vida.", "colorClass": "emotion-color-5" },
        "41": { "id": "emotion-41", "title": "Campo de pánico ancestral", "phrase": "“El peligro siempre está aquí, no puedo relajarme.”", "act": "Frase: Reconozco el miedo que vibra en mi interior y que viene de tiempos antiguos. Lo veo, lo escucho, y lo libero de mi cuerpo y de mi alma. Agradezco a mis ancestros por haber vivido en alerta para sobrevivir, pero hoy ya no necesito esa alarma encendida. Hoy me permito respirar profundo y habitar la calma. En mi cuerpo hay espacio para la serenidad. Con amor ahora elijo la paz. Con amor ahora elegimos la vida. Reclamo la tranquilidad que me corresponde por derecho divino. Estoy a salvo en mí mismo.", "colorClass": "emotion-color-6" },
        "42": { "id": "emotion-42", "title": "Ansiedad por futuro incierto", "phrase": "“Si no controlo todo, algo malo va a pasar.”", "act": "Frase: Agradezco la voz que intenta protegerme desde la anticipación, pero libero la carga de querer controlarlo todo. Elijo confiar en la vida y en mis pasos presentes. Mi seguridad no está en la previsión, sino en mi conexión interior. Me abrazo en este instante y lo declaro suficiente. El presente es mi ancla. Con amor ahora elijo confiar. Con amor ahora elegimos la vida. Reclamo mi serenidad y mi confianza en el fluir divino.", "colorClass": "emotion-color-7" },
        "43": { "id": "emotion-43", "title": "Trauma congelado en la memoria celular", "phrase": "“Una parte de mí quedó atrapada en el dolor del trauma.”", "act": "Frase: Veo a la parte de mí que quedó detenida en aquel momento de dolor. La abrazo con ternura y la invito a regresar al presente. Libero de mi cuerpo la energía atrapada en el trauma y la devuelvo a su origen. Reúno mis fragmentos y los abrazo en unidad. Hoy soy completo. Con amor ahora elijo sanar. Con amor ahora elegimos la vida. Reclamo mi vitalidad y mi energía en este instante, por derecho divino.", "colorClass": "emotion-color-1" },
        "44": { "id": "emotion-44", "title": "Estrés heredado de supervivencia", "phrase": "“Debo estar siempre en alerta porque algo va a faltar.”", "act": "Frase: Honro a mis ancestros que vivieron tiempos de lucha y escasez. Los veo y agradezco sus esfuerzos por sobrevivir. Hoy reconozco que esas alarmas ya no son necesarias en mi vida. Elijo vivir con confianza y abundancia. Declaro que hay suficiente para mí y para todos. Con amor ahora elijo la calma. Con amor ahora elegimos la vida. Dejo con ustedes su dolor y tomo lo que me corresponde por derecho divino: la certeza de la abundancia.", "colorClass": "emotion-color-2" },
        "45": { "id": "emotion-45", "title": "Eco de violencia no expresada", "phrase": "“El mundo es hostil, debo protegerme a toda costa.”", "act": "Frase: Reconozco la huella de la violencia que aún late en mi memoria y en la de mi clan. Los veo, los escucho y devuelvo con amor ese peso. Hoy declaro que mi vida es segura, que mis vínculos son sanos y que merezco vivir en confianza. Con amor ahora elijo la paz. Con amor ahora elegimos la vida. Reclamo mi derecho divino a la seguridad y al amor.", "colorClass": "emotion-color-3" },
        "46": { "id": "emotion-46", "title": "Rechazo del propio cuerpo", "phrase": "“Mi cuerpo no merece ser amado.”", "act": "Frase: A mi cuerpo le digo: te veo, te escucho, te agradezco. Perdono las veces que te rechacé y me reconcilio contigo. Hoy elijo amarte como la morada sagrada de mi alma. Eres digno de amor, de cuidado y de placer. Con amor ahora elijo habitarte plenamente. Con amor ahora elegimos la vida. Reclamo la belleza y la fuerza que me corresponden por derecho divino.", "colorClass": "emotion-color-4" },
        "47": { "id": "emotion-47", "title": "Adicción a la aprobación externa", "phrase": "“Si no me validan, no existo.”", "act": "Frase: Suelto la necesidad de vivir según la mirada de otros. Me reconozco, me valido y me apruebo a mí mismo. Mi existencia no depende de los demás, sino de mi conexión con mi verdad. Con amor ahora elijo ser libre de juicios. Con amor ahora elegimos la vida. Reclamo mi soberanía interior y la fuerza de mi autenticidad.", "colorClass": "emotion-color-5" },
        "48": { "id": "emotion-48", "title": "Dependencia a ser visto", "phrase": "“Solo existo si me ven .”", "act": "Frase: Reconozco la ilusión de buscar validación en las personas. Hoy me reconecto con la vida real, con mis sentidos, con la naturaleza y con los vínculos de verdad. Mi existencia es valiosa aunque nadie me observe. Con amor ahora elijo lo auténtico. Con amor ahora elegimos la vida. Reclamo mi presencia plena aquí y ahora, por derecho divino.", "colorClass": "emotion-color-6" },
        "49": { "id": "emotion-49", "title": "Vacío existencial", "phrase": "“Nada tiene sentido, la vida está vacía.”", "act": "Frase: Reconozco la sensación de vacío como un llamado a despertar. Hoy decido llenar mi vida de propósito, de amor y de experiencias sagradas. El sentido no viene de afuera, sino de mi elección de vivir con conciencia. Con amor ahora elijo el propósito. Con amor ahora elegimos la vida. Reclamo la plenitud que me corresponde por derecho divino.", "colorClass": "emotion-color-7" },
        "50": { "id": "emotion-50", "title": "Herida de abandono espiritual", "phrase": "“Dios me dejó solo en lo peor.”", "act": "Frase: Honro mi dolor y el de los involucrados en el clan por sentirme abandonado en momentos difíciles. Hoy elijo reconciliarme con lo divino, comprendiendo que siempre estuve acompañado aunque no lo percibiera. Restauro mi fe como ancla de mi alma. Con amor ahora elijo confiar en la Presencia. Con amor ahora elegimos la vida. Reclamo mi derecho divino a sentirme acompañado y sostenido.", "colorClass": "emotion-color-1" },
        "51": { "id": "emotion-51", "title": "Bloqueo en la creatividad", "phrase": "“No puedo crear nada nuevo, todo está hecho.”", "act": "Frase: Despierto la chispa creativa en mi interior. Reconozco que soy un canal de lo nuevo, un puente entre lo invisible y lo visible. Mis ideas son únicas y valiosas,. Libero los bloqueos y me abro a la inspiración. Con amor ahora elijo crear. Con amor ahora elegimos la vida. Reclamo mi poder creativo por derecho divino.", "colorClass": "emotion-color-2" },
        "52": { "id": "emotion-52", "title": "Miedo al éxito y a ser visto", "phrase": "“Si triunfo, me destruirán.”", "act": "Frase: Reconozco el miedo que asocia éxito con peligro. Hoy declaro que es seguro brillar, que es seguro triunfar y mostrarme. Mi luz no amenaza, inspira. Con amor ahora elijo brillar. Con amor ahora elegimos la vida. Reclamo mi derecho divino a expandirme y ser visto en plenitud.", "colorClass": "emotion-color-3" },
        "53": { "id": "emotion-53", "title": "Dificultad para recibir amor sano", "phrase": "“El amor siempre duele.”", "act": "Frase: Libero la creencia de que el amor es sufrimiento. Declaro que merezco un amor sano, respetuoso y verdadero. Abro mi corazón a recibir y dar en equilibrio. Con amor ahora elijo un nuevo amor. Con amor ahora elegimos la vida. Reclamo el amor pleno que me corresponde por derecho divino.", "colorClass": "emotion-color-4" },
        "54": { "id": "emotion-54", "title": "Vínculo con la muerte como salida", "phrase": "“La única forma de descanso es morir.”", "act": "Frase: Reconozco la atracción hacia la muerte como alivio. La veo, la honro y la suelto. Hoy elijo la vida como camino de descanso, paz y transformación. Encuentro refugio en el amor y en la respiración. Con amor ahora elijo vivir. Con amor ahora elegimos la vida. Reclamo la paz y la plenitud que me corresponden en esta existencia.", "colorClass": "emotion-color-5" },
        "55": { "id": "emotion-55", "title": "Corte con la abundancia universal", "phrase": "“La vida no me da lo suficiente.”", "act": "Frase: Rompo el pacto inconsciente con la escasez. Reconozco que la abundancia fluye desde la fuente divina y está disponible para mí. Declaro que merezco prosperidad, gozo y plenitud. Con amor ahora elijo la abundancia. Con amor ahora elegimos la vida. Reclamo la prosperidad que me corresponde por derecho divino.", "colorClass": "emotion-color-6" },
        "56": { "id": "emotion-56", "title": "Pérdida de lo material por robos, miedos o calumnias", "phrase": "“Nos han quitado lo que era nuestro.”", "act": "Frase: Reconozco el dolor y la injusticia de las pérdidas materiales que marcaron a mis ancestros y a mí. Honro a los que sufrieron robos, despojos o calumnias. Les digo gracias por sostener el dolor, hoy elijo soltarlo. Comprendo que nada externo define mi valor. Declaro que la abundancia verdadera no puede ser robada. Con amor ahora elijo recuperar la confianza y abrirme a nuevas formas de prosperidad. Con amor ahora elegimos la vida. Reclamo la abundancia que nos corresponde por derecho divino.", "colorClass": "emotion-color-7" },
        "57": { "id": "emotion-57", "title": "El cuerpo vacío reclamando el alma", "phrase": "“Siento que falta una parte de mí.”", "act": "Frase: Reconozco a mi cuerpo que ha sido un contenedor y un guardián en otros tiempos. Le agradezco por acompañar, por esperar y por sostener con nobleza. Agradezco también a los cuerpos de mis ancestros que quedaron vacíos y reclamaban un alma. A todos ellos les digo gracias. Con gratitud los entrego a la tierra para que cumplan su ciclo y encuentren descanso. Hoy me reconcilio con mi cuerpo presente, lo abrazo y lo lleno con mi alma. Con amor ahora elijo habitarme completo. Con amor ahora elegimos la vida. Reclamo la plenitud de ser alma y cuerpo unidos en esta existencia.", "colorClass": "emotion-color-1" },
        "58": { "id": "emotion-58", "title": "Dificultad para asimilar experiencias", "phrase": "“No puedo digerir lo que me pasó.”", "act": "Frase: Reconozco lo que me resulta difícil de aceptar. Hoy elijo integrar cada vivencia como parte de mi aprendizaje. Lo que antes me pesaba, ahora lo transformo en sabiduría. Con amor ahora elijo asimilar la vida. Con amor ahora elegimos la vida. Reclamo la ligereza que me corresponde por derecho divino.", "colorClass": "emotion-color-2" },
        "59": { "id": "emotion-59", "title": "Rabia contenida que me corroe", "phrase": "“El enojo me quema por dentro.”", "act": "Frase: Honro la rabia que no pude expresar y la suelto. Reconozco la injusticia que viví, la veo y la libero. Hoy decido transformar la rabia en fuerza creadora. Con amor ahora elijo la calma. Con amor ahora elegimos la vida. Reclamo la paz interior que me corresponde por derecho divino.", "colorClass": "emotion-color-3" },
        "60": { "id": "emotion-60", "title": "Miedo a soltar lo viejo", "phrase": "“Si dejo ir, me quedo vacío.”", "act": "Frase: Reconozco el apego al pasado y a lo que ya no me nutre. Hoy elijo soltar con gratitud, sabiendo que al liberar espacio llega lo nuevo. Con amor ahora elijo confiar en el fluir. Con amor ahora elegimos la vida. Reclamo la libertad que me corresponde por derecho divino.", "colorClass": "emotion-color-4" },
        "61": { "id": "emotion-61", "title": "Necesidad de expulsar lo indeseado", "phrase": "“Esto no lo quiero en mí.”", "act": "Frase: Reconozco lo que considero tóxico en mi vida y lo dejo ir. No necesito cargar con lo que me daña. Hoy me libero de lo ajeno y de lo pesado. Con amor ahora elijo purificar mi vida. Con amor ahora elegimos la vida. Reclamo la limpieza interior que me corresponde por derecho divino.", "colorClass": "emotion-color-5" },
        "62": { "id": "emotion-62", "title": "Conflicto con lo que me oprime", "phrase": "“Siento que no puedo respirar tranquilo.”", "act": "Frase: Reconozco la opresión que me rodea y la suelto. Declaro que es seguro abrirme al aire, al espacio y a la vida. Con amor ahora elijo respirar en libertad. Con amor ahora elegimos la vida. Reclamo la amplitud y la calma que me corresponden por derecho divino.", "colorClass": "emotion-color-6" },
        "63": { "id": "emotion-63", "title": "Silencio obligado", "phrase": "“No puedo decir lo que siento.”", "act": "Frase: Reconozco el miedo a expresarme y lo libero. Declaro que mi voz tiene derecho a existir. Hoy me atrevo a hablar mi verdad con amor. Con amor ahora elijo expresarme. Con amor ahora elegimos la vida. Reclamo la palabra libre que me corresponde por derecho divino.", "colorClass": "emotion-color-1" },
        "64": { "id": "emotion-64", "title": "Peso de demasiadas cargas", "phrase": "“Siento que cargo con todo.”", "act": "Frase: Reconozco el peso de las responsabilidades que me sobrecargan. Hoy elijo soltar lo que no me pertenece. Con amor ahora elijo aligerar mi vida. Con amor ahora elegimos la vida. Reclamo la ligereza y el equilibrio que me corresponden por derecho divino.", "colorClass": "emotion-color-7" },
        "65": { "id": "emotion-65", "title": "Rigidez ante la vida", "phrase": "“No me permito doblarme ni fluir.”", "act": "Frase: Reconozco la dureza con la que me enfrento a la vida. Hoy decido flexibilizarme, soltar la crítica y abrirme al cambio. Con amor ahora elijo la fluidez. Con amor ahora elegimos la vida. Reclamo la flexibilidad que me corresponde por derecho divino.", "colorClass": "emotion-color-2" },
        "66": { "id": "emotion-66", "title": "Rechazo de mí mismo", "phrase": "“No me acepto como soy.”", "act": "Frase: Reconozco las veces que me rechacé. Hoy elijo mirarme con amor y aceptarme plenamente. Soy digno de cariño, de ternura y de respeto. Con amor ahora elijo amarme. Con amor ahora elegimos la vida. Reclamo la belleza interior que me corresponde por derecho divino.", "colorClass": "emotion-color-3" },
        "67": { "id": "emotion-67", "title": "Miedo a ver la verdad", "phrase": "“Prefiero no mirar lo que duele.”", "act": "Frase: Reconozco mi resistencia a ver lo que está frente a mí. Hoy abro mis ojos internos y externos a la claridad. Con amor ahora elijo ver la verdad. Con amor ahora elegimos la vida. Reclamo la visión clara que me corresponde por derecho divino.", "colorClass": "emotion-color-4" },
	
"68": { "id": "systemic-68",
"title": "Pérdida del lugar en el mundo",
"phrase": "“Siento que no tengo un lugar claro donde pertenecer.”",
"act": "Frase: Reconozco que en mi árbol hubo quienes perdieron su tierra, su hogar o su lugar en el mundo. Honro su destino tal como fue y les devuelvo con respeto lo que les pertenece. Hoy tomo mi propio lugar en la vida y en la tierra que habito. Con amor ahora elijo enraizarme. Con amor ahora elegimos la vida. Reclamo el derecho a pertenecer y prosperar que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"69": {
"id": "systemic-69",
"title": "Exilio del clan",
"phrase": "“Hay una sensación de haber sido expulsado o apartado.”",
"act": "Frase: Reconozco que en mi linaje hubo quienes fueron expulsados, rechazados o exiliados. Honro su historia y les devuelvo con amor el dolor que cargaron. Hoy permito que cada miembro tenga su lugar y yo tomo el mío con dignidad. Con amor ahora elijo pertenecer. Con amor ahora elegimos la vida. Reclamo el derecho a ser parte que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"70": {
"id": "systemic-70",
"title": "Desarraigo ancestral",
"phrase": "“Siento que algo en mí nunca logra asentarse.”",
"act": "Frase: Reconozco que en mi árbol existieron movimientos forzados, migraciones dolorosas o pérdidas de raíces. Honro a quienes caminaron antes que yo buscando un lugar seguro. Hoy me permito plantar nuevas raíces en el presente. Con amor ahora elijo asentarte en mi vida. Con amor ahora elegimos la vida. Reclamo la estabilidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"71": {
"id": "systemic-71",
"title": "Miedo a ocupar mi lugar",
"phrase": "“Siento que no debería ocupar demasiado espacio.”",
"act": "Frase: Reconozco que en mi sistema hubo quienes fueron silenciados, desplazados o obligados a hacerse pequeños. Honro su destino con respeto. Hoy tomo mi lugar completo en la vida y permito que mi presencia exista con dignidad. Con amor ahora elijo ocupar mi lugar. Con amor ahora elegimos la vida. Reclamo mi espacio legítimo que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"72": {
"id": "systemic-72",
"title": "Lealtad a la pérdida",
"phrase": "“Algo dentro de mí evita prosperar.”",
"act": "Frase: Reconozco que en mi árbol hubo pérdidas profundas, quiebras o despojos que marcaron a la familia. Honro a quienes lo vivieron y les devuelvo con respeto su destino. Hoy me permito avanzar más allá de esa historia. Con amor ahora elijo abrirme a la prosperidad. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"73": {
"id": "systemic-73",
"title": "Carga de destinos ajenos",
"phrase": "“Siento que llevo algo que no me pertenece.”",
"act": "Frase: Reconozco que en mi sistema familiar he podido cargar historias, dolores o destinos que pertenecen a otros miembros. Hoy los miro con respeto y los devuelvo amorosamente a quienes corresponden. Tomo solo lo que es mío y honro lo demás. Con amor ahora elijo la ligereza. Con amor ahora elegimos la vida. Reclamo mi propio destino que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"74": {
"id": "systemic-74",
"title": "Silencio del clan",
"phrase": "“Hay historias que nunca se pudieron contar.”",
"act": "Frase: Reconozco que en mi árbol existen secretos, silencios y verdades ocultas que pesaron sobre generaciones. Honro a quienes callaron por miedo o dolor. Hoy permito que la verdad encuentre su lugar sin juicio. Con amor ahora elijo la claridad. Con amor ahora elegimos la vida. Reclamo la transparencia que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"75": {
"id": "systemic-75",
"title": "Vergüenza heredada",
"phrase": "“Cargo una vergüenza que no logro explicar.”",
"act": "Frase: Reconozco que en mi sistema familiar hubo situaciones que generaron vergüenza o humillación profunda. Honro a quienes lo vivieron y les devuelvo su experiencia con respeto. Hoy libero esa carga de mi corazón. Con amor ahora elijo la dignidad. Con amor ahora elegimos la vida. Reclamo el honor interior que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"76": {
"id": "systemic-76",
"title": "Miedo a destacar",
"phrase": "“Si brillo demasiado algo malo puede pasar.”",
"act": "Frase: Reconozco que en mi árbol hubo quienes fueron castigados o perseguidos por sobresalir. Honro su historia y les devuelvo ese destino con respeto. Hoy me permito brillar desde mi verdad sin miedo. Con amor ahora elijo mostrar mi luz. Con amor ahora elegimos la vida. Reclamo mi derecho a brillar que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"77": {
"id": "systemic-77",
"title": "Memoria de persecución",
"phrase": "“Algo en mí teme ser atacado sin razón.”",
"act": "Frase: Reconozco que en mi linaje hubo persecuciones, injusticias o ataques que marcaron profundamente al sistema. Honro a quienes vivieron ese dolor. Hoy libero el miedo heredado de mi cuerpo y de mi mente. Con amor ahora elijo la paz. Con amor ahora elegimos la vida. Reclamo la seguridad que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"78": {
"id": "systemic-78",
"title": "Renuncia al poder personal",
"phrase": "“Es mejor no tener demasiado poder.”",
"act": "Frase: Reconozco que en mi sistema pudo existir miedo al poder o al liderazgo. Honro a quienes renunciaron a su fuerza para sobrevivir. Hoy recupero mi poder personal con respeto y conciencia. Con amor ahora elijo mi fuerza interior. Con amor ahora elegimos la vida. Reclamo la autoridad interior que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"79": {
"id": "systemic-79",
"title": "Conflicto con la autoridad",
"phrase": "“Toda autoridad me genera resistencia.”",
"act": "Frase: Reconozco que en mi árbol pudieron existir abusos de autoridad o injusticias que dejaron heridas profundas. Honro a quienes lo vivieron. Hoy me permito relacionarme con la autoridad desde el equilibrio y la claridad. Con amor ahora elijo el orden. Con amor ahora elegimos la vida. Reclamo la armonía con la autoridad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"80": {
"id": "systemic-80",
"title": "Desconfianza en la vida",
"phrase": "“Siento que la vida puede quitarlo todo.”",
"act": "Frase: Reconozco que en mi sistema familiar existieron pérdidas repentinas que quebraron la confianza en la vida. Honro a quienes atravesaron ese dolor. Hoy permito que mi corazón vuelva a confiar en el movimiento de la vida. Con amor ahora elijo confiar. Con amor ahora elegimos la vida. Reclamo la fe profunda que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"81": {
"id": "systemic-81",
"title": "Miedo a prosperar",
"phrase": "“Si me va demasiado bien, algo malo podría suceder.”",
"act": "Frase: Reconozco que en mi árbol familiar hubo momentos en los que prosperar trajo consecuencias dolorosas o pérdidas inesperadas. Honro a quienes vivieron esas experiencias y respeto su destino. Hoy comprendo que mi camino es diferente y que puedo avanzar con seguridad. Con amor ahora elijo abrirme al bienestar. Con amor ahora elegimos la vida. Reclamo la prosperidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"82": {
"id": "systemic-82",
"title": "Culpa por tener más",
"phrase": "“No debería tener más que los demás.”",
"act": "Frase: Reconozco que en mi sistema familiar existieron injusticias, carencias o pérdidas que marcaron profundamente al clan. Honro a quienes tuvieron menos y les doy un lugar en mi corazón. Hoy me permito recibir lo que la vida tiene para ofrecerme. Con amor ahora elijo aceptar lo que llega. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"83": {
"id": "systemic-83",
"title": "Memoria de pobreza",
"phrase": "“Siempre existe el temor de que todo pueda faltar.”",
"act": "Frase: Reconozco que en mi árbol hubo épocas de escasez, privación o lucha constante por sobrevivir. Honro a quienes atravesaron esos tiempos difíciles y agradezco la fuerza que transmitieron. Hoy permito que la historia cambie en mí. Con amor ahora elijo abrirme a la abundancia. Con amor ahora elegimos la vida. Reclamo la provisión que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"84": {
"id": "systemic-84",
"title": "Herencias bloqueadas",
"phrase": "“Siento que lo que debería llegar a mí no llega.”",
"act": "Frase: Reconozco que en mi linaje pudieron existir conflictos, disputas o injusticias relacionadas con herencias y recursos. Honro a quienes estuvieron involucrados en esas historias. Hoy libero mi corazón de esa carga y tomo solo lo que la vida desea darme. Con amor ahora elijo la justicia interior. Con amor ahora elegimos la vida. Reclamo lo que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"85": {
"id": "systemic-85",
"title": "Dinero con dolor",
"phrase": "“El dinero parece venir acompañado de sufrimiento.”",
"act": "Frase: Reconozco que en mi sistema familiar el dinero pudo estar asociado a sacrificio, conflicto o dolor. Honro a quienes lo vivieron y agradezco lo que hicieron para sostener la vida. Hoy permito que la relación con el dinero sea diferente. Con amor ahora elijo la armonía. Con amor ahora elegimos la vida. Reclamo la prosperidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"86": {
"id": "systemic-86",
"title": "Desconfianza en la abundancia",
"phrase": "“La abundancia parece algo inestable.”",
"act": "Frase: Reconozco que en mi árbol hubo pérdidas repentinas o momentos en que todo se derrumbó inesperadamente. Honro a quienes atravesaron esas experiencias. Hoy permito que mi corazón vuelva a confiar en el flujo de la vida. Con amor ahora elijo la estabilidad. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"87": {
"id": "systemic-87",
"title": "Destino interrumpido",
"phrase": "“Siento que algo quedó inconcluso en mi historia.”",
"act": "Frase: Reconozco que en mi sistema familiar hubo destinos que quedaron interrumpidos o caminos que no pudieron completarse. Honro profundamente a quienes vivieron esas historias. Hoy tomo la vida con fuerza y continúo mi propio camino. Con amor ahora elijo avanzar. Con amor ahora elegimos la vida. Reclamo mi destino pleno que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"88": {
"id": "systemic-88",
"title": "Repetición de ciclos",
"phrase": "“La historia parece repetirse generación tras generación.”",
"act": "Frase: Reconozco que en mi árbol existen patrones que se repiten a través del tiempo. Honro a quienes vivieron esas experiencias antes que yo. Hoy tomo conciencia y elijo un nuevo camino. Con amor ahora elijo transformar la historia. Con amor ahora elegimos la vida. Reclamo la libertad que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"89": {
"id": "systemic-89",
"title": "Carga del pasado",
"phrase": "“El pasado pesa demasiado sobre el presente.”",
"act": "Frase: Reconozco que las historias del pasado pueden seguir viviendo en la memoria del sistema familiar. Honro a quienes las atravesaron y respeto su destino. Hoy permito que el pasado encuentre su lugar y que el presente se abra con ligereza. Con amor ahora elijo soltar. Con amor ahora elegimos la vida. Reclamo la paz que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"90": {
"id": "systemic-90",
"title": "Desorden generacional",
"phrase": "“Algo en el sistema parece estar fuera de lugar.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron haberse alterado los órdenes naturales entre generaciones. Honro a cada miembro y reconozco su lugar en el sistema. Hoy restablezco el orden dentro de mí. Con amor ahora elijo el equilibrio. Con amor ahora elegimos la vida. Reclamo el orden que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"91": {
"id": "systemic-91",
"title": "Niño que sostiene al sistema",
"phrase": "“Siento que tuve que ser fuerte demasiado pronto.”",
"act": "Frase: Reconozco que en mi historia pude haber asumido responsabilidades que no correspondían a mi edad o lugar. Honro el amor que me llevó a hacerlo. Hoy devuelvo con respeto lo que pertenece a los adultos del sistema. Con amor ahora elijo ser quien soy. Con amor ahora elegimos la vida. Reclamo la libertad que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"92": {
"id": "systemic-92",
"title": "Lealtad invisible",
"phrase": "“Algo dentro de mí sigue fiel a un dolor antiguo.”",
"act": "Frase: Reconozco que en mi sistema familiar existen lealtades profundas que conectan generaciones. Honro ese amor silencioso que une al clan. Hoy libero aquello que ya no necesita repetirse. Con amor ahora elijo la libertad. Con amor ahora elegimos la vida. Reclamo mi propio camino que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"93": {
"id": "systemic-93",
"title": "Vergüenza del cuerpo",
"phrase": "“Algo en mí rechaza o esconde mi propio cuerpo.”",
"act": "Frase: Reconozco que en mi árbol pudieron existir historias de vergüenza, juicio o dolor relacionadas con el cuerpo. Honro a quienes atravesaron esas experiencias. Hoy miro mi cuerpo con respeto y gratitud. Con amor ahora elijo aceptarme. Con amor ahora elegimos la vida. Reclamo la dignidad corporal que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"94": {
"id": "systemic-94",
"title": "Memoria de abuso",
"phrase": "“Existe una sensación profunda de vulnerabilidad.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir abusos o injusticias que dejaron una huella profunda. Honro a quienes vivieron esas experiencias con respeto y compasión. Hoy libero ese dolor de mi historia. Con amor ahora elijo la protección. Con amor ahora elegimos la vida. Reclamo la seguridad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"95": {
"id": "systemic-95",
"title": "Silencio de las mujeres",
"phrase": "“Las voces femeninas fueron calladas.”",
"act": "Frase: Reconozco que en mi linaje pudieron existir mujeres silenciadas o invisibilizadas. Honro profundamente su fuerza y su historia. Hoy permito que su voz encuentre un lugar en la memoria del sistema. Con amor ahora elijo honrar lo femenino. Con amor ahora elegimos la vida. Reclamo la dignidad femenina que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"96": {
"id": "systemic-96",
"title": "Dolor del linaje masculino",
"phrase": "“Los hombres del sistema cargaron grandes pesos.”",
"act": "Frase: Reconozco que los hombres de mi árbol familiar pudieron haber atravesado cargas, responsabilidades o silencios profundos. Honro su esfuerzo y su presencia en el sistema. Hoy permito que ese dolor encuentre descanso. Con amor ahora elijo honrar lo masculino. Con amor ahora elegimos la vida. Reclamo la fuerza equilibrada que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"97": {
"id": "systemic-97",
"title": "Desconexión del linaje",
"phrase": "“Siento distancia de mi propia historia familiar.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir rupturas, separaciones o distancias profundas entre generaciones. Honro a cada miembro tal como fue. Hoy permito que la conexión vuelva a existir desde el respeto. Con amor ahora elijo la reconciliación. Con amor ahora elegimos la vida. Reclamo la pertenencia que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"98": {
"id": "systemic-98",
"title": "Hijo de reemplazo",
"phrase": "“Siento que ocupo el lugar de alguien más.”",
"act": "Frase: Reconozco que en mi sistema pudo haber existido alguien que partió antes y cuyo lugar quedó vacío. Honro profundamente su existencia y le doy un lugar en el corazón del sistema. Hoy tomo mi propia vida con respeto. Con amor ahora elijo mi identidad. Con amor ahora elegimos la vida. Reclamo mi propio lugar que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"99": {
"id": "systemic-99",
"title": "Nombre heredado",
"phrase": "“Llevo un nombre que carga historia.”",
"act": "Frase: Reconozco que mi nombre puede estar unido a historias del sistema familiar. Honro a quienes lo llevaron antes que yo. Hoy tomo este nombre como expresión de mi propio destino. Con amor ahora elijo mi identidad. Con amor ahora elegimos la vida. Reclamo la autenticidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"100": {
"id": "systemic-100",
"title": "Rechazo a la vida",
"phrase": "“Una parte de mí duda de estar aquí.”",
"act": "Frase: Reconozco que en mi sistema pudieron existir momentos en los que la vida fue demasiado difícil o dolorosa. Honro a quienes atravesaron esas experiencias. Hoy miro la vida con nuevos ojos. Con amor ahora elijo la vida. Con amor ahora elegimos la vida. Reclamo el derecho a existir que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"101": {
"id": "systemic-101",
"title": "Culpa por existir",
"phrase": "“Siento que mi existencia causa peso o problema.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir situaciones en las que la llegada de un hijo fue vivida con miedo, dificultad o incertidumbre. Honro profundamente a quienes atravesaron esos momentos y reconozco el esfuerzo que hicieron para sostener la vida. Hoy tomo mi lugar en este mundo con humildad y dignidad. Con amor ahora elijo existir plenamente. Con amor ahora elegimos la vida. Reclamo el derecho a estar aquí que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"102": {
"id": "systemic-102",
"title": "Miedo a vivir plenamente",
"phrase": "“Si vivo demasiado intensamente algo podría perderse.”",
"act": "Frase: Reconozco que en mi árbol familiar hubo vidas interrumpidas, accidentes o pérdidas repentinas que pudieron generar temor a disfrutar plenamente. Honro con respeto a quienes partieron antes de tiempo. Hoy permito que mi vida continúe con gratitud. Con amor ahora elijo vivir plenamente. Con amor ahora elegimos la vida. Reclamo la plenitud que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"103": {
"id": "systemic-103",
"title": "Memoria de muerte temprana",
"phrase": "“Existe un temor profundo a no llegar lejos.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir muertes tempranas que dejaron huellas profundas en el clan. Honro a quienes partieron antes de tiempo y les doy un lugar en mi corazón. Hoy tomo la vida completa que me fue dada. Con amor ahora elijo continuar. Con amor ahora elegimos la vida. Reclamo la continuidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"104": {
"id": "systemic-104",
"title": "Duelo no resuelto",
"phrase": "“Algo en el sistema aún llora una pérdida antigua.”",
"act": "Frase: Reconozco que en mi árbol familiar existen duelos que no pudieron expresarse plenamente. Honro profundamente a quienes atravesaron esas pérdidas y respeto su dolor. Hoy permito que ese duelo encuentre descanso en la memoria del sistema. Con amor ahora elijo la paz. Con amor ahora elegimos la vida. Reclamo la serenidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"105": {
"id": "systemic-105",
"title": "Dolor por hijos no nacidos",
"phrase": "“Existe una presencia silenciosa en la historia familiar.”",
"act": "Frase: Reconozco que en mi sistema pudieron existir hijos que no llegaron a nacer o que partieron muy temprano. Honro profundamente su existencia y les doy un lugar digno en el corazón del sistema. Hoy permito que cada vida tenga su lugar. Con amor ahora elijo honrar a todos. Con amor ahora elegimos la vida. Reclamo el orden que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"106": {
"id": "systemic-106",
"title": "Destino repetido",
"phrase": "“Las mismas historias parecen volver una y otra vez.”",
"act": "Frase: Reconozco que en mi árbol familiar existen destinos que se han repetido a lo largo de generaciones. Honro profundamente a quienes vivieron esas historias. Hoy tomo conciencia y permito que el movimiento de la vida cambie en mí. Con amor ahora elijo un nuevo camino. Con amor ahora elegimos la vida. Reclamo la libertad que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"107": {
"id": "systemic-107",
"title": "Sacrificio excesivo",
"phrase": "“Siento que debo sacrificarme para que otros estén bien.”",
"act": "Frase: Reconozco que en mi sistema familiar hubo personas que se sacrificaron profundamente por el bienestar de los demás. Honro su amor y su entrega con respeto. Hoy comprendo que la vida también me permite recibir. Con amor ahora elijo el equilibrio. Con amor ahora elegimos la vida. Reclamo la reciprocidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"108": {
"id": "systemic-108",
"title": "Carga del salvador",
"phrase": "“Siento que debo salvar o sostener a otros.”",
"act": "Frase: Reconozco que en mi sistema familiar pude haber asumido el papel de sostener o salvar a otros miembros del clan. Honro el amor que motivó ese movimiento. Hoy devuelvo con respeto a cada uno su propio destino. Con amor ahora elijo mi camino. Con amor ahora elegimos la vida. Reclamo mi libertad que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"109": {
"id": "systemic-109",
"title": "Miedo a la felicidad",
"phrase": "“Cuando todo está bien algo parece inquietar.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haberse instalado la idea de que la felicidad es frágil o peligrosa. Honro a quienes vivieron pérdidas después de momentos de alegría. Hoy permito que la felicidad tenga espacio en mi vida. Con amor ahora elijo la alegría. Con amor ahora elegimos la vida. Reclamo la felicidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"110": {
"id": "systemic-110",
"title": "Desconfianza en el amor",
"phrase": "“El amor parece traer dolor o pérdida.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir historias de amor que terminaron en dolor, abandono o separación. Honro a quienes vivieron esas experiencias y respeto su destino. Hoy permito que el amor tenga una nueva oportunidad en mi vida. Con amor ahora elijo amar. Con amor ahora elegimos la vida. Reclamo el amor que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"111": {
"id": "systemic-111",
"title": "Miedo al abandono",
"phrase": "“Algo en mí teme quedarse solo.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir abandonos o separaciones dolorosas que dejaron huella en el corazón del clan. Honro profundamente a quienes vivieron esas experiencias. Hoy permito que el amor se exprese con confianza. Con amor ahora elijo vincularme desde la seguridad. Con amor ahora elegimos la vida. Reclamo la estabilidad afectiva que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"112": {
"id": "systemic-112",
"title": "Separación del padre",
"phrase": "“Existe distancia con la fuerza paterna.”",
"act": "Frase: Reconozco que en mi historia pudo haber existido distancia, ausencia o dolor en relación con la figura paterna. Honro al padre tal como fue y le doy un lugar en mi corazón. Hoy permito que la fuerza de la vida llegue a través de él. Con amor ahora elijo reconciliarme con esa energía. Con amor ahora elegimos la vida. Reclamo la fuerza que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"113": {
"id": "systemic-113",
"title": "Separación de la madre",
"phrase": "“Existe distancia con la energía materna.”",
"act": "Frase: Reconozco que en mi historia pudo haber existido dolor, distancia o dificultad con la figura materna. Honro profundamente a la madre tal como fue y le doy su lugar en el sistema. Hoy permito que su energía vuelva a fluir hacia mí. Con amor ahora elijo recibir. Con amor ahora elegimos la vida. Reclamo la nutrición emocional que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"114": {
"id": "systemic-114",
"title": "Rechazo del linaje",
"phrase": "“Siento resistencia hacia mi propia familia.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir historias difíciles que generaron distancia o rechazo. Honro a cada miembro del sistema tal como fue. Hoy permito que la reconciliación interior encuentre su lugar. Con amor ahora elijo honrar mis raíces. Con amor ahora elegimos la vida. Reclamo la pertenencia que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"115": {
"id": "systemic-115",
"title": "Desconexión espiritual",
"phrase": "“Siento distancia con lo sagrado.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir persecuciones, prohibiciones o conflictos relacionados con la espiritualidad. Honro profundamente a quienes vivieron esas experiencias. Hoy permito que mi conexión con lo sagrado se restablezca. Con amor ahora elijo abrir mi corazón. Con amor ahora elegimos la vida. Reclamo la conexión divina que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"116": {
"id": "systemic-116",
"title": "Miedo a los dones",
"phrase": "“Algo en mí teme mis propios talentos.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir personas con dones o talentos que fueron rechazados, perseguidos o incomprendidos. Honro su historia con respeto. Hoy permito que mis propios dones se expresen con amor. Con amor ahora elijo mostrar mis capacidades. Con amor ahora elegimos la vida. Reclamo mis dones que me corresponden por derecho divino.",
"colorClass": "systemic-color-4"
},
"117": {
"id": "systemic-117",
"title": "Ocultamiento de talentos",
"phrase": "“Es más seguro no mostrar lo que soy capaz de hacer.”",
"act": "Frase: Reconozco que en mi árbol familiar pudo haberse instalado la idea de que destacar o mostrar talentos era peligroso. Honro a quienes se ocultaron para sobrevivir. Hoy permito que mis capacidades encuentren su lugar en el mundo. Con amor ahora elijo expresarme. Con amor ahora elegimos la vida. Reclamo mi expresión auténtica que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"118": {
"id": "systemic-118",
"title": "Desconfianza en el futuro",
"phrase": "“El futuro parece incierto o amenazante.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir tiempos de crisis o incertidumbre que dejaron huella en la memoria del clan. Honro a quienes atravesaron esos momentos difíciles. Hoy permito que la esperanza vuelva a existir. Con amor ahora elijo confiar en el mañana. Con amor ahora elegimos la vida. Reclamo la esperanza que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"119": {
"id": "systemic-119",
"title": "Cierre del corazón",
"phrase": "“El corazón aprendió a protegerse demasiado.”",
"act": "Frase: Reconozco que en mi historia personal y familiar pudieron existir heridas que llevaron al corazón a cerrarse para protegerse. Honro a quienes vivieron esas experiencias y respeto su dolor. Hoy permito que el amor vuelva a fluir en mí. Con amor ahora elijo abrir mi corazón. Con amor ahora elegimos la vida. Reclamo el amor que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"120": {
"id": "systemic-120",
"title": "Renacimiento interior",
"phrase": "“Estoy listo para comenzar una nueva historia.”",
"act": "Frase: Reconozco profundamente todo lo que mi sistema familiar atravesó a lo largo del tiempo. Honro cada destino, cada historia y cada experiencia que hizo posible mi existencia. Hoy tomo la vida con gratitud y con respeto por quienes estuvieron antes. Con amor ahora elijo un nuevo comienzo. Con amor ahora elegimos la vida. Reclamo el renacimiento que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"121": {
"id": "systemic-121",
"title": "Miedo a ocupar mi destino",
"phrase": "“Si sigo mi verdadero camino algo podría romperse.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haber existido temor a seguir el propio destino por lealtad a otros miembros del clan. Honro profundamente a quienes no pudieron recorrer su camino completo. Hoy tomo la vida que me fue dada y permito que mi destino se despliegue con respeto. Con amor ahora elijo avanzar. Con amor ahora elegimos la vida. Reclamo mi destino pleno que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"122": {
"id": "systemic-122",
"title": "Lealtad a la escasez",
"phrase": "“Prosperar demasiado podría alejarme de mi familia.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haberse instalado la idea de que la escasez era parte inevitable de la vida. Honro a quienes sobrevivieron a tiempos difíciles. Hoy permito que la historia cambie a través de mí. Con amor ahora elijo la prosperidad. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"123": {
"id": "systemic-123",
"title": "Memoria de injusticia",
"phrase": "“Algo dentro de mí aún reclama justicia.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir injusticias profundas que dejaron una marca en la memoria del sistema. Honro a quienes atravesaron esas experiencias con dignidad. Hoy permito que el equilibrio vuelva a establecerse. Con amor ahora elijo la paz interior. Con amor ahora elegimos la vida. Reclamo la justicia que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"124": {
"id": "systemic-124",
"title": "Resistencia a recibir",
"phrase": "“Recibir demasiado puede generar incomodidad.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haberse valorado más dar que recibir, o que recibir fue asociado con deuda o culpa. Honro esa historia con respeto. Hoy permito que la vida también me nutra. Con amor ahora elijo recibir con gratitud. Con amor ahora elegimos la vida. Reclamo el derecho a recibir que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"125": {
"id": "systemic-125",
"title": "Dificultad para pedir ayuda",
"phrase": "“Es mejor arreglármelas solo.”",
"act": "Frase: Reconozco que en mi árbol familiar pudo haberse desarrollado una fuerte autosuficiencia para sobrevivir a tiempos difíciles. Honro profundamente esa fortaleza. Hoy comprendo que también puedo apoyarme en otros. Con amor ahora elijo la cooperación. Con amor ahora elegimos la vida. Reclamo el apoyo que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"126": {
"id": "systemic-126",
"title": "Carga del primogénito",
"phrase": "“Siento que debo sostener demasiado.”",
"act": "Frase: Reconozco que en mi historia familiar el lugar del primogénito pudo haber implicado grandes responsabilidades. Honro el amor que llevó a sostener al sistema. Hoy devuelvo con respeto lo que pertenece a los adultos. Con amor ahora elijo mi propio lugar. Con amor ahora elegimos la vida. Reclamo la libertad que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"127": {
"id": "systemic-127",
"title": "Comparación entre hermanos",
"phrase": "“Debo demostrar que soy suficiente.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir comparaciones entre hermanos que generaron tensión o competencia. Honro a cada uno tal como es. Hoy permito que cada destino sea único. Con amor ahora elijo mi propio valor. Con amor ahora elegimos la vida. Reclamo mi dignidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"128": {
"id": "systemic-128",
"title": "Competencia en el clan",
"phrase": "“Para pertenecer debo demostrar más.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir rivalidades que marcaron la relación entre sus miembros. Honro a quienes participaron de esas historias. Hoy elijo el respeto y el reconocimiento mutuo. Con amor ahora elijo la armonía. Con amor ahora elegimos la vida. Reclamo la cooperación que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"129": {
"id": "systemic-129",
"title": "Miedo a confiar",
"phrase": "“Confiar demasiado puede ser peligroso.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir traiciones o rupturas que dañaron la confianza. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la confianza vuelva a florecer en mi vida. Con amor ahora elijo confiar. Con amor ahora elegimos la vida. Reclamo la seguridad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"130": {
"id": "systemic-130",
"title": "Exceso de control",
"phrase": "“Si no controlo todo algo podría fallar.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haberse desarrollado la necesidad de controlar para evitar pérdidas o caos. Honro ese intento de proteger la vida. Hoy permito que el flujo natural de la vida actúe. Con amor ahora elijo confiar en el proceso. Con amor ahora elegimos la vida. Reclamo la paz interior que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"131": {
"id": "systemic-131",
"title": "Desconexión del propósito",
"phrase": "“No logro sentir con claridad para qué estoy aquí.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir vidas dedicadas únicamente a sobrevivir, donde el propósito personal quedó relegado. Honro profundamente a quienes sostuvieron la vida con esfuerzo y sacrificio. Hoy permito que el sentido de mi existencia se revele con claridad en mi camino. Con amor ahora elijo escuchar mi propósito. Con amor ahora elegimos la vida. Reclamo la dirección interior que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"132": {
"id": "systemic-132",
"title": "Fatiga ancestral",
"phrase": "“Existe un cansancio profundo que no parece mío.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir generaciones enteras dedicadas al esfuerzo extremo y a la supervivencia constante. Honro profundamente a quienes trabajaron sin descanso para sostener la vida. Hoy permito que ese cansancio encuentre descanso en su origen. Con amor ahora elijo la vitalidad. Con amor ahora elegimos la vida. Reclamo la energía que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"133": {
"id": "systemic-133",
"title": "Cargar con el dolor del clan",
"phrase": "“Siento tristeza sin razón aparente.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir dolores profundos que quedaron sin expresar. Honro a quienes atravesaron esas experiencias con respeto y compasión. Hoy devuelvo con amor al sistema lo que no me pertenece. Con amor ahora elijo la ligereza. Con amor ahora elegimos la vida. Reclamo la paz interior que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"134": {
"id": "systemic-134",
"title": "Desvalorización heredada",
"phrase": "“Algo dentro de mí duda de mi propio valor.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir momentos de humillación, rechazo o desvalorización que marcaron al sistema. Honro profundamente a quienes atravesaron esas experiencias. Hoy recupero la dignidad que siempre estuvo en mí. Con amor ahora elijo reconocer mi valor. Con amor ahora elegimos la vida. Reclamo la autoestima que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"135": {
"id": "systemic-135",
"title": "Desconfianza en el éxito",
"phrase": "“El éxito puede traer consecuencias.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir situaciones donde el éxito generó envidia, conflicto o pérdida. Honro profundamente a quienes vivieron esas experiencias. Hoy permito que el éxito se exprese con armonía en mi vida. Con amor ahora elijo prosperar. Con amor ahora elegimos la vida. Reclamo el éxito que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"136": {
"id": "systemic-136",
"title": "Memoria de traición",
"phrase": "“Algo en mí teme volver a confiar.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir traiciones que dejaron heridas profundas en el sistema. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la confianza vuelva a abrirse en mi corazón. Con amor ahora elijo confiar nuevamente. Con amor ahora elegimos la vida. Reclamo la confianza que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"137": {
"id": "systemic-137",
"title": "Silencio emocional",
"phrase": "“En mi familia no se hablaba de lo que se sentía.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haberse instalado el silencio como forma de protección frente al dolor. Honro profundamente a quienes guardaron sus emociones en el corazón. Hoy permito que la expresión emocional encuentre un lugar seguro. Con amor ahora elijo expresar lo que siento. Con amor ahora elegimos la vida. Reclamo la expresión emocional que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"138": {
"id": "systemic-138",
"title": "Negación del dolor",
"phrase": "“Es mejor no mirar lo que duele.”",
"act": "Frase: Reconozco que en mi árbol familiar pudo haberse aprendido a negar el dolor para poder continuar. Honro profundamente esa forma de sobrevivir. Hoy permito que el dolor sea visto con amor para poder transformarse. Con amor ahora elijo la verdad interior. Con amor ahora elegimos la vida. Reclamo la sanación que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"139": {
"id": "systemic-139",
"title": "Miedo al rechazo",
"phrase": "“Mostrar quién soy puede traer rechazo.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir exclusiones o rechazos que dejaron huellas profundas en el clan. Honro profundamente a quienes vivieron esas experiencias. Hoy permito que mi autenticidad se exprese con libertad. Con amor ahora elijo ser quien soy. Con amor ahora elegimos la vida. Reclamo la aceptación que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"140": {
"id": "systemic-140",
"title": "Autoexigencia excesiva",
"phrase": "“Debo esforzarme siempre más que los demás.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haberse valorado el esfuerzo extremo como forma de supervivencia. Honro profundamente esa fuerza que sostuvo la vida. Hoy permito que el equilibrio llegue a mi camino. Con amor ahora elijo el descanso y la armonía. Con amor ahora elegimos la vida. Reclamo el equilibrio que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"141": {
"id": "systemic-141",
"title": "Miedo a equivocarme",
"phrase": "“Un error puede tener consecuencias graves.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir momentos en los que un error generó grandes pérdidas o consecuencias difíciles. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que el aprendizaje sea parte natural de la vida. Con amor ahora elijo avanzar. Con amor ahora elegimos la vida. Reclamo la confianza que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"142": {
"id": "systemic-142",
"title": "Responsabilidad desmedida",
"phrase": "“Siento que todo depende de mí.”",
"act": "Frase: Reconozco que en mi sistema familiar pude haber asumido responsabilidades que excedían mi lugar dentro del sistema. Honro el amor que motivó ese movimiento. Hoy devuelvo a cada miembro su propio destino. Con amor ahora elijo mi propio camino. Con amor ahora elegimos la vida. Reclamo la libertad que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"143": {
"id": "systemic-143",
"title": "Miedo a perder lo logrado",
"phrase": "“Todo puede desaparecer de un momento a otro.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir pérdidas repentinas que generaron temor a disfrutar lo logrado. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la estabilidad tenga lugar en mi vida. Con amor ahora elijo confiar en lo que construyo. Con amor ahora elegimos la vida. Reclamo la estabilidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"144": {
"id": "systemic-144",
"title": "Desconexión con la alegría",
"phrase": "“La alegría parece algo lejano.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir largos periodos de tristeza o dificultad que apagaron la alegría del clan. Honro profundamente a quienes atravesaron esos tiempos. Hoy permito que la alegría vuelva a florecer en mi vida. Con amor ahora elijo la alegría. Con amor ahora elegimos la vida. Reclamo la alegría que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"145": {
"id": "systemic-145",
"title": "Distancia emocional",
"phrase": "“Es difícil abrir el corazón completamente.”",
"act": "Frase: Reconozco que en mi árbol familiar pudo haberse aprendido a mantener distancia emocional para evitar el dolor. Honro profundamente esa forma de proteger el corazón. Hoy permito que el amor vuelva a circular con confianza. Con amor ahora elijo abrir mi corazón. Con amor ahora elegimos la vida. Reclamo el amor que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"146": {
"id": "systemic-146",
"title": "Miedo a avanzar",
"phrase": "“Dar el siguiente paso genera incertidumbre.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir momentos en los que avanzar significó enfrentar grandes riesgos o pérdidas. Honro profundamente a quienes atravesaron esos desafíos con valentía. Hoy permito que mi camino se abra con claridad frente a mí. Con amor ahora elijo avanzar con confianza. Con amor ahora elegimos la vida. Reclamo el movimiento que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"147": {
"id": "systemic-147",
"title": "Fidelidad al sufrimiento",
"phrase": "“Ser feliz puede sentirse como una traición.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir generaciones que vivieron grandes sufrimientos. Honro profundamente sus historias y su fortaleza. Hoy comprendo que honrar también puede significar vivir mejor. Con amor ahora elijo abrirme a la felicidad. Con amor ahora elegimos la vida. Reclamo la alegría que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"148": {
"id": "systemic-148",
"title": "Carga del silencio familiar",
"phrase": "“Hay cosas que nunca se dijeron.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir historias que quedaron envueltas en silencio. Honro profundamente a quienes callaron para proteger al sistema. Hoy permito que la verdad encuentre su lugar con respeto. Con amor ahora elijo la claridad. Con amor ahora elegimos la vida. Reclamo la verdad que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"149": {
"id": "systemic-149",
"title": "Sensación de no pertenecer",
"phrase": "“Siento que no encajo en ningún lugar.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir exclusiones o separaciones que dejaron huella en la memoria del sistema. Honro profundamente a quienes fueron apartados. Hoy permito que la pertenencia vuelva a manifestarse en mi vida. Con amor ahora elijo pertenecer. Con amor ahora elegimos la vida. Reclamo mi lugar que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"150": {
"id": "systemic-150",
"title": "Negación de los ancestros",
"phrase": "“Me cuesta aceptar de dónde vengo.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir historias difíciles que generaron distancia o rechazo hacia el pasado. Honro profundamente a todos los que hicieron posible mi existencia. Hoy permito que mis raíces sean reconocidas con respeto. Con amor ahora elijo honrar a mis ancestros. Con amor ahora elegimos la vida. Reclamo la fuerza del linaje que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"151": {
"id": "systemic-151",
"title": "Memoria de pérdida del hogar",
"phrase": "“Existe una sensación de no tener un lugar estable.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir desplazamientos, migraciones o pérdidas del hogar que dejaron huella en el sistema. Honro profundamente a quienes vivieron esas experiencias. Hoy permito que la estabilidad encuentre su lugar en mi vida. Con amor ahora elijo enraizarme. Con amor ahora elegimos la vida. Reclamo el hogar que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"152": {
"id": "systemic-152",
"title": "Desorden en la pareja",
"phrase": "“Las relaciones parecen repetir conflictos.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir relaciones marcadas por dolor o separación. Honro profundamente a quienes atravesaron esas historias. Hoy permito que el amor encuentre un nuevo orden en mi vida. Con amor ahora elijo relaciones sanas. Con amor ahora elegimos la vida. Reclamo la armonía en el amor que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"153": {
"id": "systemic-153",
"title": "Culpa por avanzar",
"phrase": "“Ir más lejos que otros genera incomodidad.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir miembros que no pudieron avanzar o cumplir sus sueños. Honro profundamente sus destinos. Hoy permito que mi camino continúe más allá. Con amor ahora elijo avanzar. Con amor ahora elegimos la vida. Reclamo mi crecimiento que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"154": {
"id": "systemic-154",
"title": "Miedo a tomar decisiones",
"phrase": "“Elegir puede traer consecuencias difíciles.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir decisiones que generaron grandes impactos en la historia del clan. Honro profundamente a quienes las tomaron. Hoy permito que la claridad guíe mis elecciones. Con amor ahora elijo decidir con confianza. Con amor ahora elegimos la vida. Reclamo la claridad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"155": {
"id": "systemic-155",
"title": "Desconfianza en el cambio",
"phrase": "“Cambiar puede ser peligroso.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir cambios abruptos que trajeron dolor o pérdidas. Honro profundamente a quienes atravesaron esos momentos. Hoy permito que el cambio sea parte natural de la vida. Con amor ahora elijo transformarme. Con amor ahora elegimos la vida. Reclamo la evolución que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"156": {
"id": "systemic-156",
"title": "Exceso de sacrificio",
"phrase": "“Para que algo funcione debo sacrificarme.”",
"act": "Frase: Reconozco que en mi sistema familiar el sacrificio pudo haber sido una forma de amor. Honro profundamente esa entrega. Hoy permito que el equilibrio reemplace al sacrificio. Con amor ahora elijo la armonía. Con amor ahora elegimos la vida. Reclamo el equilibrio que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"157": {
"id": "systemic-157",
"title": "Miedo al poder personal",
"phrase": "“Tener poder puede ser peligroso.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir abusos o castigos relacionados con el poder. Honro profundamente a quienes atravesaron esas historias. Hoy permito que mi poder personal se exprese con responsabilidad. Con amor ahora elijo mi fuerza interior. Con amor ahora elegimos la vida. Reclamo mi poder que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"158": {
"id": "systemic-158",
"title": "Rechazo de los talentos",
"phrase": "“Mostrar mis capacidades puede generar problemas.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir talentos ocultos por miedo o persecución. Honro profundamente a quienes guardaron sus dones en silencio. Hoy permito que mis talentos se expresen con libertad. Con amor ahora elijo mostrar mis dones. Con amor ahora elegimos la vida. Reclamo mis talentos que me corresponden por derecho divino.",
"colorClass": "systemic-color-1"
},
"159": {
"id": "systemic-159",
"title": "Lealtad a los fracasos del clan",
"phrase": "“Triunfar podría alejarme de los míos.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir fracasos que marcaron la historia del sistema. Honro profundamente a quienes atravesaron esos momentos. Hoy permito que el éxito tenga un lugar diferente en mi vida. Con amor ahora elijo prosperar. Con amor ahora elegimos la vida. Reclamo el logro que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"160": {
"id": "systemic-160",
"title": "Temor a la libertad",
"phrase": "“Ser libre puede generar miedo.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir épocas en las que la libertad fue limitada o castigada. Honro profundamente a quienes vivieron esas restricciones. Hoy permito que la libertad vuelva a manifestarse en mi vida. Con amor ahora elijo la libertad. Con amor ahora elegimos la vida. Reclamo la autonomía que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"161": {
"id": "systemic-161",
"title": "Memoria de opresión",
"phrase": "“Algo en mí recuerda tiempos de sometimiento.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir periodos de opresión o sometimiento que dejaron huella en el sistema. Honro profundamente a quienes resistieron esas experiencias. Hoy permito que la dignidad vuelva a manifestarse en mi vida. Con amor ahora elijo la dignidad. Con amor ahora elegimos la vida. Reclamo el respeto que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"162": {
"id": "systemic-162",
"title": "Miedo a la visibilidad",
"phrase": "“Ser visto puede traer peligro.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir persecuciones que llevaron a ocultarse para sobrevivir. Honro profundamente a quienes se protegieron de esa manera. Hoy permito que mi presencia sea visible con seguridad. Con amor ahora elijo mostrarme. Con amor ahora elegimos la vida. Reclamo mi visibilidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"163": {
"id": "systemic-163",
"title": "Negación de la alegría",
"phrase": "“La felicidad puede sentirse inapropiada.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir tiempos de dolor tan profundos que la alegría fue olvidada. Honro profundamente a quienes atravesaron esos momentos. Hoy permito que la alegría vuelva a existir en mi vida. Con amor ahora elijo la felicidad. Con amor ahora elegimos la vida. Reclamo la alegría que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"164": {
"id": "systemic-164",
"title": "Miedo a confiar en la vida",
"phrase": "“La vida puede cambiar de un momento a otro.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir pérdidas repentinas que dañaron la confianza en la vida. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la confianza vuelva a florecer. Con amor ahora elijo confiar en la vida. Con amor ahora elegimos la vida. Reclamo la fe que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"165": {
"id": "systemic-165",
"title": "Sensación de carga familiar",
"phrase": "“Siento que llevo demasiado sobre mis hombros.”",
"act": "Frase: Reconozco que en mi sistema familiar pude haber tomado cargas que no me correspondían. Honro profundamente el amor que motivó ese gesto. Hoy devuelvo con respeto cada destino a quien pertenece. Con amor ahora elijo la ligereza. Con amor ahora elegimos la vida. Reclamo la libertad que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"166": {
"id": "systemic-166",
"title": "Miedo a la plenitud",
"phrase": "“Si todo está bien algo puede romperse.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir momentos en los que la felicidad fue seguida por dolor. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la plenitud tenga espacio en mi vida. Con amor ahora elijo disfrutar. Con amor ahora elegimos la vida. Reclamo la plenitud que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"167": {
"id": "systemic-167",
"title": "Resistencia al amor",
"phrase": "“Amar puede significar perder.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir pérdidas amorosas que dejaron huella en el corazón del clan. Honro profundamente a quienes vivieron esas experiencias. Hoy permito que el amor vuelva a entrar en mi vida. Con amor ahora elijo amar. Con amor ahora elegimos la vida. Reclamo el amor que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"168": {
"id": "systemic-168",
"title": "Miedo a formar familia",
"phrase": "“Crear una familia puede traer dolor.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir historias difíciles relacionadas con la familia. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que una nueva historia se abra frente a mí. Con amor ahora elijo construir. Con amor ahora elegimos la vida. Reclamo la armonía familiar que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"169": {
"id": "systemic-169",
"title": "Memoria de abandono",
"phrase": "“Existe temor a quedarme solo.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir abandonos que dejaron huella en el corazón del clan. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la seguridad emocional vuelva a mi vida. Con amor ahora elijo confiar en el vínculo. Con amor ahora elegimos la vida. Reclamo la estabilidad afectiva que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"170": {
"id": "systemic-170",
"title": "Desconexión con la misión",
"phrase": "“No logro sentir mi lugar en el mundo.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir vidas dedicadas solo a sobrevivir. Honro profundamente ese esfuerzo que sostuvo la vida. Hoy permito que el sentido de mi existencia se revele con claridad. Con amor ahora elijo mi misión. Con amor ahora elegimos la vida. Reclamo mi propósito que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"171": {
"id": "systemic-171",
"title": "Duda sobre el propio camino",
"phrase": "“No sé si voy en la dirección correcta.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir caminos interrumpidos o decisiones difíciles. Honro profundamente a quienes vivieron esas historias. Hoy permito que la claridad guíe mis pasos. Con amor ahora elijo confiar en mi camino. Con amor ahora elegimos la vida. Reclamo la dirección que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"172": {
"id": "systemic-172",
"title": "Memoria de persecución espiritual",
"phrase": "“Mostrar mi espiritualidad puede generar rechazo.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir persecuciones o juicios relacionados con la espiritualidad. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que mi conexión espiritual se exprese con libertad. Con amor ahora elijo abrir mi conciencia. Con amor ahora elegimos la vida. Reclamo mi conexión divina que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"173": {
"id": "systemic-173",
"title": "Temor al destino",
"phrase": "“Seguir mi destino puede cambiarlo todo.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir destinos que generaron temor o consecuencias difíciles. Honro profundamente a quienes caminaron antes que yo. Hoy permito que mi destino se despliegue con confianza. Con amor ahora elijo avanzar. Con amor ahora elegimos la vida. Reclamo mi destino que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"174": {
"id": "systemic-174",
"title": "Inseguridad existencial",
"phrase": "“El mundo puede parecer inestable.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir periodos de gran incertidumbre. Honro profundamente a quienes sobrevivieron a esos tiempos. Hoy permito que la seguridad interior vuelva a manifestarse en mí. Con amor ahora elijo la estabilidad. Con amor ahora elegimos la vida. Reclamo la seguridad que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"175": {
"id": "systemic-175",
"title": "Desconexión del cuerpo",
"phrase": "“Me cuesta sentir plenamente mi cuerpo.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir experiencias dolorosas relacionadas con el cuerpo. Honro profundamente a quienes atravesaron esas historias. Hoy permito que mi cuerpo vuelva a ser un lugar seguro. Con amor ahora elijo habitar mi cuerpo. Con amor ahora elegimos la vida. Reclamo la presencia que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"176": {
"id": "systemic-176",
"title": "Miedo a sentir",
"phrase": "“Sentir demasiado puede ser peligroso.”",
"act": "Frase: Reconozco que en mi árbol familiar pudo haberse aprendido a reprimir las emociones para sobrevivir. Honro profundamente esa forma de protección. Hoy permito que mis emociones fluyan con respeto. Con amor ahora elijo sentir. Con amor ahora elegimos la vida. Reclamo la sensibilidad que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"177": {
"id": "systemic-177",
"title": "Carga de secretos familiares",
"phrase": "“Hay historias que pesan en silencio.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir secretos que generaron peso en el corazón del clan. Honro profundamente a quienes guardaron silencio. Hoy permito que la verdad encuentre su lugar con respeto. Con amor ahora elijo la transparencia. Con amor ahora elegimos la vida. Reclamo la verdad que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"178": {
"id": "systemic-178",
"title": "Resistencia al cambio generacional",
"phrase": "“Cambiar puede sentirse como traición.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir formas de vida muy arraigadas. Honro profundamente esas tradiciones. Hoy permito que la evolución también sea parte del amor hacia el sistema. Con amor ahora elijo evolucionar. Con amor ahora elegimos la vida. Reclamo la transformación que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"179": {
"id": "systemic-179",
"title": "Sensación de destino pesado",
"phrase": "“La vida parece demasiado difícil.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir destinos muy duros que marcaron la historia del clan. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la vida sea más ligera para mí. Con amor ahora elijo la ligereza. Con amor ahora elegimos la vida. Reclamo la paz que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"180": {
"id": "systemic-180",
"title": "Falta de confianza interior",
"phrase": "“Dudo de mi propia capacidad.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir momentos de desvalorización o críticas constantes. Honro profundamente a quienes atravesaron esas experiencias. Hoy recupero la confianza en mí mismo. Con amor ahora elijo creer en mí. Con amor ahora elegimos la vida. Reclamo la confianza que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"181": {
"id": "systemic-181",
"title": "Miedo a recibir reconocimiento",
"phrase": "“Ser reconocido puede generar incomodidad.”",
"act": "Frase: Reconozco que en mi sistema familiar pudo haberse aprendido a evitar la visibilidad para protegerse. Honro profundamente esa estrategia de supervivencia. Hoy permito que el reconocimiento llegue con equilibrio. Con amor ahora elijo aceptar el reconocimiento. Con amor ahora elegimos la vida. Reclamo el valor que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"182": {
"id": "systemic-182",
"title": "Memoria de exclusión",
"phrase": "“Ser diferente puede significar quedar fuera.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir exclusiones que dejaron huella en el sistema. Honro profundamente a quienes fueron apartados. Hoy permito que la inclusión vuelva a manifestarse. Con amor ahora elijo pertenecer plenamente. Con amor ahora elegimos la vida. Reclamo mi lugar que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"183": {
"id": "systemic-183",
"title": "Cansancio existencial",
"phrase": "“A veces la vida se siente demasiado pesada.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir generaciones de gran esfuerzo y sacrificio. Honro profundamente a quienes sostuvieron la vida con tanta dedicación. Hoy permito que el descanso llegue a mi historia. Con amor ahora elijo la vitalidad. Con amor ahora elegimos la vida. Reclamo la energía que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"184": {
"id": "systemic-184",
"title": "Desconfianza en el amor duradero",
"phrase": "“El amor puede terminar en dolor.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir relaciones que terminaron en separación o sufrimiento. Honro profundamente a quienes atravesaron esas historias. Hoy permito que el amor tenga una nueva oportunidad en mi vida. Con amor ahora elijo confiar en el amor. Con amor ahora elegimos la vida. Reclamo el amor que me corresponde por derecho divino.",
"colorClass": "systemic-color-2"
},
"185": {
"id": "systemic-185",
"title": "Miedo a confiar en los demás",
"phrase": "“Abrirme puede ser peligroso.”",
"act": "Frase: Reconozco que en mi sistema familiar pudieron existir traiciones que dañaron profundamente la confianza. Honro profundamente a quienes atravesaron esas experiencias. Hoy permito que la confianza vuelva a florecer en mi vida. Con amor ahora elijo confiar nuevamente. Con amor ahora elegimos la vida. Reclamo la confianza que me corresponde por derecho divino.",
"colorClass": "systemic-color-3"
},
"186": {
"id": "systemic-186",
"title": "Desconexión con la esperanza",
"phrase": "“El futuro parece incierto.”",
"act": "Frase: Reconozco que en mi árbol familiar pudieron existir tiempos difíciles que apagaron la esperanza del sistema. Honro profundamente a quienes atravesaron esos momentos. Hoy permito que la esperanza vuelva a iluminar mi camino. Con amor ahora elijo confiar en el futuro. Con amor ahora elegimos la vida. Reclamo la esperanza que me corresponde por derecho divino.",
"colorClass": "systemic-color-4"
},
"187": {
"id": "systemic-187",
"title": "Integración del linaje",
"phrase": "“Todo lo que fue encuentra su lugar.”",
"act": "Frase: Reconozco profundamente a todos los miembros de mi sistema familiar, conocidos y desconocidos. Honro cada destino, cada historia y cada experiencia que hizo posible mi existencia. Hoy permito que el amor vuelva a ordenar el sistema. Con amor ahora elijo honrar a todos. Con amor ahora elegimos la vida. Reclamo la integración que me corresponde por derecho divino.",
"colorClass": "systemic-color-5"
},
"188": {
"id": "systemic-188",
"title": "Bloqueo por linaje sexual",
"phrase": "“El placer y la intimidad siempre traen culpa o miedo.”",
"act": "Frase: Reconozco que en mi árbol familiar hubo represión, culpa o abuso relacionados con la sexualidad. Honro a quienes vivieron estas experiencias, y libero las memorias que limitan mi disfrute y conexión. Hoy permito que mi cuerpo y mi corazón se abran a la intimidad sana, al placer consciente y al amor pleno. Con amor ahora elijo la libertad sexual. Con amor ahora elegimos la vida. Reclamo la plenitud que me corresponde por derecho divino.",
"colorClass": "systemic-color-6"
},
"189": {
"id": "systemic-189",
"title": "Herida por abuso sexual en el linaje",
"phrase": "“Algo en mí teme ser tocado o amar.”",
"act": "Frase: Honro a los miembros de mi familia que sufrieron abuso o violencia sexual. Libero el miedo, la vergüenza y la desconfianza heredada. Hoy me permito sentir seguridad, amor y placer sin culpa. Mi cuerpo es mío y mi energía es sagrada. Con amor ahora elijo abrir mi corazón a la vida. Con amor ahora elegimos la vida. Reclamo mi derecho a amar y ser amado plenamente.",
"colorClass": "systemic-color-7"
},
"190": {
"id": "systemic-190",
"title": "Endeudamiento repetido",
"phrase": "“Nunca hay suficiente, siempre debo más.”",
"act": "Frase: Reconozco que en mi linaje se repitieron patrones de pobreza, deuda o escasez. Honro la resiliencia de quienes sobrevivieron, y libero el miedo al dinero y a la abundancia. Hoy me permito recibir, gestionar y multiplicar recursos con sabiduría. Con amor ahora elijo prosperar sin culpa. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
"colorClass": "systemic-color-1"
},
"191": {
"id": "systemic-191",
"title": "Riqueza confiscada en la historia familiar",
"phrase": "“Lo que es mío siempre se pierde o me lo quitan.”",
"act": "Frase: Honro los linajes que sufrieron pérdidas materiales, robos o injusticias económicas. Libero el miedo a la pérdida y a la injusticia financiera. Hoy me permito conservar, crear y multiplicar lo que es mío con integridad. Con amor ahora elijo la estabilidad y la prosperidad. Con amor ahora elegimos la vida. Reclamo mi derecho a tener y mantener lo que es justo.",
"colorClass": "systemic-color-2"
},
"192": {
"id": "systemic-192",
"title": "Enfermedad heredada",
"phrase": "“Siento en mi cuerpo lo que otros sufrieron antes.”",
"act": "Frase: Reconozco las enfermedades o patrones de salud que se han repetido en mi linaje. Honro a mis ancestros y libero las memorias que afectan mi cuerpo. Hoy me permito la sanación, el bienestar y la fuerza vital plena. Con amor ahora elijo cuidar mi cuerpo y devolverle la libertad. Con amor ahora elegimos la vida. Reclamo la salud y la vitalidad que me corresponden por derecho divino.",
"colorClass": "systemic-color-3"
},
"193": {
"id": "systemic-193",
"title": "Rechazo del cuerpo",
"phrase": "“Mi cuerpo no merece amor ni cuidado.”",
"act": "Frase: Honro cada célula que lleva la historia de mi familia. Libero el resentimiento y el rechazo heredado. Hoy abrazo mi cuerpo con gratitud, respeto y amor. Con amor ahora elijo habitar mi cuerpo con alegría y presencia. Con amor ahora elegimos la vida. Reclamo el placer, la fuerza y la belleza que me corresponden por derecho divino.",
"colorClass": "systemic-color-4"
},
"194": {
"id": "systemic-194",
"title": "Exclusión social ancestral",
"phrase": "“Nunca encajé, siempre fui rechazado.”",
"act": "Frase: Reconozco que en mi linaje hubo exclusión, persecución o discriminación. Honro a quienes soportaron el dolor de no ser aceptados. Hoy me permito conectar con la comunidad y pertenecer plenamente. Con amor ahora elijo relacionarme con aceptación y confianza. Con amor ahora elegimos la vida. Reclamo mi lugar seguro en la sociedad y en la vida.",
"colorClass": "systemic-color-5"
},
"195": {
"id": "systemic-195",
"title": "Vocación reprimida",
"phrase": "“No puedo seguir lo que amo, debo complacer a otros.”",
"act": "Frase: Reconozco las vocaciones y talentos que fueron limitados por lealtad familiar o miedo. Honro esas historias y libero la culpa de elegir mi camino. Hoy sigo mi propósito con alegría y libertad. Con amor ahora elijo mi misión. Con amor ahora elegimos la vida. Reclamo la plenitud de vivir mi destino con autenticidad.",
"colorClass": "systemic-color-6"
},
"196": {
"id": "systemic-196",
"title": "Memoria de guerras familiares",
"phrase": "“La violencia y el conflicto persisten en mi sangre.”",
"act": "Frase: Honro a los ancestros que sufrieron guerras, conflictos o migraciones forzadas. Libero la tensión, la agresión y la lealtad al dolor colectivo. Hoy permito la paz, la reconciliación y la seguridad. Con amor ahora elijo sanar las memorias de mi linaje. Con amor ahora elegimos la vida. Reclamo la paz, el equilibrio y la liberación que me corresponden por derecho divino.",
"colorClass": "systemic-color-7"
},
"197": {
"id": "systemic-197",
"title": "Integración de ramas desconocidas",
"phrase": "“Hay partes de mi linaje que no conozco ni reconozco.”",
"act": "Frase: Reconozco los miembros excluidos, desconocidos o no integrados de mi árbol familiar. Honro sus vidas y experiencias. Hoy integro con amor y respeto cada rama para crear unidad y armonía en mi sistema. Con amor ahora elijo la integración. Con amor ahora elegimos la vida. Reclamo la plenitud y la conexión de todo mi linaje por derecho divino.",
"colorClass": "systemic-color-1"
},
"198": {
"id": "systemic-198",
"title": "Ruptura de vínculos ancestrales",
"phrase": "“Siento que algo en mí está desconectado de mi historia.”",
"act": "Frase: Honro a mis ancestros y los reconecto con mi corazón. Libero la desconexión y la separación. Hoy me permito sentir la unidad y la continuidad de mi linaje. Con amor ahora elijo la coherencia y la memoria completa de mi historia. Con amor ahora elegimos la vida. Reclamo la continuidad, la sabiduría y la fuerza de mi linaje por derecho divino.",
"colorClass": "systemic-color-2"
},
"199": {
    "id": "systemic-199",
    "title": "Miedo ancestral a la pobreza",
    "phrase": "“Siempre hay falta, la vida me quita todo.”",
    "act": "Frase: Reconozco que en mi linaje hubo tiempos de escasez, carencia y lucha por la supervivencia. Honro a mis ancestros que lo atravesaron con valentía. Hoy elijo la abundancia y la prosperidad en mi vida. Con amor ahora elijo recibir sin miedo. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "200": {
    "id": "systemic-200",
    "title": "Vergüenza ancestral por la riqueza",
    "phrase": "“La riqueza está mal vista, no merezco tener.”",
    "act": "Frase: Reconozco las creencias heredadas sobre la riqueza, la prosperidad y el dinero. Honro a aquellos que vivieron en la pobreza o la lucha constante. Hoy elijo vivir sin vergüenza por la abundancia que merezco. Con amor ahora elijo prosperar sin culpa. Con amor ahora elegimos la vida. Reclamo el derecho divino a vivir en abundancia.",
    "colorClass": "systemic-color-4"
  },
  "201": {
    "id": "systemic-201",
    "title": "Miedo a la muerte en el linaje",
    "phrase": "“Morir es una liberación.”",
    "act": "Frase: Honro las memorias de muerte violentas o inesperada en mi árbol familiar. Hoy elijo liberar el miedo a la muerte y recibir la vida con plenitud. Con amor ahora elijo vivir sin miedo. Con amor ahora elegimos la vida. Reclamo la paz con la muerte y la vida que me corresponde por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "202": {
    "id": "systemic-202",
    "title": "Desconfianza hacia lo divino",
    "phrase": "“Dios me ha fallado en momentos de necesidad.”",
    "act": "Frase: Honro el dolor de mi linaje al sentir abandono por lo divino. Hoy me reconcilio con lo divino, entendiendo que siempre estuve guiado. Con amor ahora elijo confiar en lo divino. Con amor ahora elegimos la vida. Reclamo la protección divina que me corresponde por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "203": {
    "id": "systemic-203",
    "title": "Miedo a la expresión personal",
    "phrase": "“Si soy yo mismo, me rechazarán.”",
    "act": "Frase: Reconozco las restricciones y temores familiares que limitan mi autenticidad. Hoy elijo expresarme libremente, sin temor al juicio o la exclusión. Con amor ahora elijo ser mi verdadero yo. Con amor ahora elegimos la vida. Reclamo la libertad de ser quien soy por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "204": {
    "id": "systemic-204",
    "title": "Desconexión con el linaje femenino",
    "phrase": "“Las mujeres en mi familia siempre fueron invisibles.”",
    "act": "Frase: Reconozco la invisibilidad, el rechazo o la limitación sufrida por las mujeres de mi linaje. Hoy elijo honrar a todas las mujeres que han sido olvidadas o silenciadas. Con amor ahora elijo conectarme con mi linaje femenino. Con amor ahora elegimos la vida. Reclamo el poder de las mujeres de mi árbol por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "205": {
    "id": "systemic-205",
    "title": "Ruptura de relaciones familiares",
    "phrase": "“He perdido contacto con mi familia.”",
    "act": "Frase: Honro las relaciones familiares rotas o distantes. Hoy me permito sanar las heridas del pasado y abrirme a la reconciliación. Con amor ahora elijo la integración familiar. Con amor ahora elegimos la vida. Reclamo la unidad y la armonía en mi árbol por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "206": {
    "id": "systemic-206",
    "title": "Lealtades ciegas al dolor familiar",
    "phrase": "“Siento que no puedo sanar porque traiciono a mi familia.”",
    "act": "Frase: Reconozco las lealtades inconscientes al dolor y la miseria del sistema familiar. Hoy elijo liberarme de esa lealtad. Con amor ahora elijo sanar y avanzar. Con amor ahora elegimos la vida. Reclamo mi sanación personal por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "207": {
    "id": "systemic-207",
    "title": "Sufrimiento colectivo ancestral",
    "phrase": "“El dolor de mi familia me define.”",
    "act": "Frase: Honro el sufrimiento colectivo y ancestral que ha marcado a mi familia. Hoy elijo liberarme de esa carga. Con amor ahora elijo vivir sin el peso del dolor heredado. Con amor ahora elegimos la vida. Reclamo mi libertad por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "208": {
    "id": "systemic-208",
    "title": "Miedo a la autodefinición",
    "phrase": "“No sé quién soy realmente.”",
    "act": "Frase: Reconozco los bloqueos que me impiden saber quién soy. Hoy elijo definir mi identidad sin miedo. Con amor ahora elijo ser quien realmente soy. Con amor ahora elegimos la vida. Reclamo la autodefinición que me corresponde por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "209": {
    "id": "systemic-209",
    "title": "Relaciones tóxicas y destructivas",
    "phrase": "“Mis relaciones siempre terminan en dolor.”",
    "act": "Frase: Reconozco las relaciones tóxicas y destructivas en mi linaje. Hoy elijo relaciones saludables y amorosas. Con amor ahora elijo sanar mis vínculos. Con amor ahora elegimos la vida. Reclamo el amor sano que me corresponde por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "210": {
    "id": "systemic-210",
    "title": "Miedo a perder el control",
    "phrase": "“Si pierdo el control, todo se derrumba.”",
    "act": "Frase: Reconozco el miedo a la pérdida de control que ha marcado mi linaje. Hoy elijo soltar ese control y confiar en el proceso de la vida. Con amor ahora elijo fluir. Con amor ahora elegimos la vida. Reclamo la paz y el equilibrio que me corresponden por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "211": {
    "id": "systemic-211",
    "title": "Dependencia emocional del pasado",
    "phrase": "“El pasado me define y me impide avanzar.”",
    "act": "Frase: Reconozco las cadenas emocionales del pasado que aún me atan. Hoy elijo soltar lo que me limita y avanzar con libertad. Con amor ahora elijo vivir en el presente. Con amor ahora elegimos la vida. Reclamo la libertad emocional que me corresponde por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "212": {
    "id": "systemic-212",
    "title": "Fragmentación de la identidad",
    "phrase": "“No soy completo, me falta algo para ser quien debo ser.”",
    "act": "Frase: Reconozco las partes fragmentadas de mi ser que fueron olvidadas o reprimidas. Hoy elijo integrar todas mis facetas y honrarme en mi totalidad. Con amor ahora elijo ser completo. Con amor ahora elegimos la vida. Reclamo la integración que me corresponde por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "213": {
    "id": "systemic-213",
    "title": "Miedo a ser auténtico",
    "phrase": "“Si soy auténtico, no seré aceptado.”",
    "act": "Frase: Reconozco el miedo a mostrarme tal como soy, con mi autenticidad. Hoy elijo liberarme de esa máscara y abrazar mi verdadera esencia. Con amor ahora elijo vivir en mi verdad. Con amor ahora elegimos la vida. Reclamo la libertad de ser quien soy por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "214": {
    "id": "systemic-214",
    "title": "Lealtades al sufrimiento",
    "phrase": "“Si sano, traiciono a mi familia.”",
    "act": "Frase: Reconozco las lealtades familiares al sufrimiento y al dolor. Hoy elijo sanar no para traicionar, sino para liberar a las generaciones futuras. Con amor ahora elijo la sanación. Con amor ahora elegimos la vida. Reclamo la paz emocional que me corresponde por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "215": {
    "id": "systemic-215",
    "title": "Miedo a la transformación",
    "phrase": "“El cambio siempre trae sufrimiento.”",
    "act": "Frase: Reconozco el miedo al cambio que se ha transmitido en mi linaje. Hoy elijo aceptar el cambio como una oportunidad de crecimiento. Con amor ahora elijo la transformación. Con amor ahora elegimos la vida. Reclamo la paz que me corresponde por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "216": {
    "id": "systemic-216",
    "title": "Exclusión social heredada",
    "phrase": "“Siempre estuve fuera de lugar, nunca pertenezco.”",
    "act": "Frase: Honro a mis ancestros que sufrieron exclusión social o estigmatización. Hoy me permito pertenecer al mundo y a mi comunidad. Con amor ahora elijo la inclusión. Con amor ahora elegimos la vida. Reclamo el derecho a ser aceptado por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "217": {
    "id": "systemic-217",
    "title": "Vergüenza ancestral por el cuerpo",
    "phrase": "“Mi cuerpo no es digno de amor ni de respeto.”",
    "act": "Frase: Honro a aquellos que vivieron la vergüenza por su cuerpo o por la sexualidad. Hoy elijo amar mi cuerpo y honrarlo como mi templo sagrado. Con amor ahora elijo la paz con mi cuerpo. Con amor ahora elegimos la vida. Reclamo la dignidad que me corresponde por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "218": {
    "id": "systemic-218",
    "title": "Miedo a la prosperidad",
    "phrase": "“Si tengo más, los demás sufrirán.”",
    "act": "Frase: Reconozco el miedo a la abundancia y el temor de que mis bienes traigan dolor a los demás. Hoy elijo prosperar sin culpa, compartiendo mi abundancia con amor. Con amor ahora elijo la prosperidad sin miedo. Con amor ahora elegimos la vida. Reclamo el derecho a vivir con abundancia por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "219": {
    "id": "systemic-219",
    "title": "Culpa por el éxito",
    "phrase": "“Si soy exitoso, decepciono a los demás.”",
    "act": "Frase: Reconozco la culpa inconsciente que me detiene de avanzar y ser exitoso. Hoy elijo honrar mis logros y mi éxito como un regalo. Con amor ahora elijo recibir mi éxito. Con amor ahora elegimos la vida. Reclamo el derecho al éxito y la abundancia por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "220": {
    "id": "systemic-220",
    "title": "Herida de abandono familiar",
    "phrase": "“Mis ancestros fueron abandonados y yo repito su dolor.”",
    "act": "Frase: Reconozco las heridas de abandono y pérdida que marcaron a mi familia. Hoy elijo sanar esas memorias y reclamar el amor que me pertenece. Con amor ahora elijo sanar el abandono. Con amor ahora elegimos la vida. Reclamo el amor familiar que me corresponde por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "221": {
    "id": "systemic-221",
    "title": "Miedo a perder el amor",
    "phrase": "“Si no me sacrifico, me dejarán.”",
    "act": "Frase: Reconozco los patrones de sacrificio en mi linaje. Hoy elijo amar sin necesidad de perderme a mí mismo. Con amor ahora elijo relaciones saludables y amorosas. Con amor ahora elegimos la vida. Reclamo el amor sin sacrificio por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "222": {
    "id": "systemic-222",
    "title": "Bloqueo en la expresión personal",
    "phrase": "“No puedo expresar quién soy, me rechazarán.”",
    "act": "Frase: Reconozco los miedos de rechazo que me impiden expresarme auténticamente. Hoy elijo liberar esa limitación y expresar mi verdad. Con amor ahora elijo ser quien soy. Con amor ahora elegimos la vida. Reclamo la libertad de expresión por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "223": {
    "id": "systemic-223",
    "title": "Abandono de la misión vital",
    "phrase": "“No sé cuál es mi propósito, todo parece confuso.”",
    "act": "Frase: Reconozco la confusión que me impide encontrar mi propósito en la vida. Hoy elijo conectar con mi misión vital y avanzar con claridad. Con amor ahora elijo seguir mi propósito. Con amor ahora elegimos la vida. Reclamo la claridad y el propósito por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "224": {
    "id": "systemic-224",
    "title": "Rechazo del linaje materno",
    "phrase": "“No quiero saber nada de las mujeres de mi linaje.”",
    "act": "Frase: Honro mi linaje materno, con sus dificultades y virtudes. Hoy elijo reconciliarme con él y recibir su sabiduría. Con amor ahora elijo integrar a mi linaje materno. Con amor ahora elegimos la vida. Reclamo la fuerza y el amor del linaje materno por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "225": {
    "id": "systemic-225",
    "title": "Lealtad a los muertos",
    "phrase": "“Si avanzo, dejo atrás a quienes ya no están.”",
    "act": "Frase: Reconozco las lealtades inconscientes hacia los ancestros que ya no están. Hoy elijo honrarlos, pero vivir mi propia vida. Con amor ahora elijo avanzar con libertad. Con amor ahora elegimos la vida. Reclamo el derecho a vivir plenamente por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "226": {
    "id": "systemic-226",
    "title": "Patrón de violencia heredada",
    "phrase": "“La violencia está en mis raíces, siempre me ha acompañado.”",
    "act": "Frase: Honro a los miembros de mi linaje que vivieron en un entorno de violencia y sufrimiento. Hoy elijo sanar ese patrón y liberarme de la violencia en todos sus aspectos. Con amor ahora elijo la paz. Con amor ahora elegimos la vida. Reclamo la paz interior que me corresponde por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "227": {
    "id": "systemic-227",
    "title": "Desconfianza en la familia",
    "phrase": "“No puedo confiar en los míos.”",
    "act": "Frase: Reconozco las heridas de traición y desconfianza que marcaron a mi familia. Hoy elijo sanar esas heridas y restaurar la confianza en los vínculos familiares. Con amor ahora elijo confiar. Con amor ahora elegimos la vida. Reclamo la confianza en mi familia por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "228": {
    "id": "systemic-228",
    "title": "Patrón de pobreza ancestral",
    "phrase": "“Siempre habrá escasez y lucha.”",
    "act": "Frase: Reconozco los patrones de pobreza y lucha por la supervivencia que han marcado a mi linaje. Hoy elijo soltar el miedo a la escasez y abrazar la abundancia. Con amor ahora elijo prosperar. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "229": {
    "id": "systemic-229",
    "title": "Conflictos con la autoridad",
    "phrase": "“La autoridad siempre está en mi contra.”",
    "act": "Frase: Reconozco los conflictos con figuras de autoridad en mi árbol familiar. Hoy elijo relacionarme con respeto y equilibrio con la autoridad. Con amor ahora elijo la paz con la autoridad. Con amor ahora elegimos la vida. Reclamo la armonía con la autoridad por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "230": {
    "id": "systemic-230",
    "title": "Miedo a la vulnerabilidad",
    "phrase": "“Si soy vulnerable, me van a herir.”",
    "act": "Frase: Reconozco el miedo a la vulnerabilidad que ha estado presente en mi linaje. Hoy elijo abrirme con confianza y ser auténtico. Con amor ahora elijo la vulnerabilidad como fortaleza. Con amor ahora elegimos la vida. Reclamo la paz y la conexión por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "231": {
    "id": "systemic-231",
    "title": "Bloqueo en la creación y la creatividad",
    "phrase": "“No soy capaz de crear, mis ideas son inútiles.”",
    "act": "Frase: Reconozco las memorias familiares que bloquearon la creatividad y la expresión artística. Hoy elijo liberar esos bloqueos y permitirme crear sin miedo. Con amor ahora elijo la creatividad. Con amor ahora elegimos la vida. Reclamo el derecho a la creación por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "232": {
    "id": "systemic-232",
    "title": "Miedo al abandono emocional",
    "phrase": "“Si me amo, me abandonarán.”",
    "act": "Frase: Reconozco el miedo al abandono que ha marcado mi vida y la de mi linaje. Hoy elijo liberarme de ese miedo y reconocer mi valor. Con amor ahora elijo amarme sin miedo. Con amor ahora elegimos la vida. Reclamo el amor incondicional por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "233": {
    "id": "systemic-233",
    "title": "Lealtades a la pobreza",
    "phrase": "“La pobreza es lo único que sé, debo mantenerla para honrar a mi familia.”",
    "act": "Frase: Reconozco las lealtades inconscientes que me atan a la pobreza. Hoy elijo liberar estas lealtades y abrirme a la abundancia. Con amor ahora elijo prosperar. Con amor ahora elegimos la vida. Reclamo el derecho a la abundancia por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "234": {
    "id": "systemic-234",
    "title": "Conflictos con la figura paterna",
    "phrase": "“Nunca fui lo suficientemente bueno para mi padre.”",
    "act": "Frase: Reconozco las heridas relacionadas con la figura paterna. Hoy elijo sanar esa relación y liberarme de cualquier carga emocional. Con amor ahora elijo honrar a mi padre. Con amor ahora elegimos la vida. Reclamo el derecho a la paz con la figura paterna por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "235": {
    "id": "systemic-235",
    "title": "Patrón de sumisión familiar",
    "phrase": "“Siempre tengo que ceder para evitar conflictos.”",
    "act": "Frase: Reconozco las memorias de sumisión y sacrificio que se han repetido en mi linaje. Hoy elijo expresar mis necesidades y deseos sin miedo. Con amor ahora elijo la autonomía. Con amor ahora elegimos la vida. Reclamo el derecho a la libertad personal por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "236": {
    "id": "systemic-236",
    "title": "Miedo al rechazo social",
    "phrase": "“Si me muestro tal como soy, seré rechazado.”",
    "act": "Frase: Reconozco el miedo al rechazo social que ha condicionado mis comportamientos. Hoy elijo vivir mi verdad y expresar mi autenticidad sin miedo. Con amor ahora elijo la aceptación de mi ser. Con amor ahora elegimos la vida. Reclamo el derecho a ser aceptado tal como soy por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "237": {
    "id": "systemic-237",
    "title": "Sufrimiento por abuso emocional",
    "phrase": "“El amor siempre trae dolor.”",
    "act": "Frase: Reconozco las memorias de abuso emocional que han afectado mi linaje. Hoy elijo sanar esas heridas y abrazar el amor sin sufrimiento. Con amor ahora elijo el amor sano y saludable. Con amor ahora elegimos la vida. Reclamo el amor pleno que me corresponde por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "238": {
    "id": "systemic-238",
    "title": "Miedo al éxito en la carrera profesional",
    "phrase": "“Si soy exitoso, me convertiré en alguien diferente.”",
    "act": "Frase: Reconozco el miedo al éxito profesional que me ha sido transmitido. Hoy elijo abrazar mi potencial y avanzar con confianza. Con amor ahora elijo tener éxito en lo que hago. Con amor ahora elegimos la vida. Reclamo el éxito profesional que me corresponde por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "239": {
    "id": "systemic-239",
    "title": "Miedo a la independencia emocional",
    "phrase": "“Si soy independiente, perderé a las personas que amo.”",
    "act": "Frase: Reconozco el miedo a la independencia emocional que ha influido en mis relaciones. Hoy elijo ser independiente y seguir mi camino sin miedo a perder. Con amor ahora elijo la autonomía emocional. Con amor ahora elegimos la vida. Reclamo la independencia que me corresponde por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "240": {
    "id": "systemic-240",
    "title": "Patrón de abandono afectivo",
    "phrase": "“Siempre estoy solo/a, nadie me necesita.”",
    "act": "Frase: Reconozco el patrón de abandono emocional que ha marcado mi vida. Hoy elijo sanar este patrón y abrirme a recibir amor y apoyo. Con amor ahora elijo ser acompañado/a en mi vida. Con amor ahora elegimos la vida. Reclamo el amor y la conexión que me corresponde por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "241": {
    "id": "systemic-241",
    "title": "Conflictos con la madre",
    "phrase": "“Nunca pude satisfacer las expectativas de mi madre.”",
    "act": "Frase: Reconozco las dificultades y tensiones con la figura materna. Hoy elijo sanar esa relación y liberarme del peso de las expectativas. Con amor ahora elijo honrar a mi madre. Con amor ahora elegimos la vida. Reclamo la paz con la figura materna por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "242": {
    "id": "systemic-242",
    "title": "Lealtad a la enfermedad",
    "phrase": "“Si sano, traiciono a quienes han vivido con la enfermedad.”",
    "act": "Frase: Reconozco las lealtades inconscientes hacia los patrones de enfermedad de mi linaje. Hoy elijo liberar esas lealtades y elegir la salud. Con amor ahora elijo sanar. Con amor ahora elegimos la vida. Reclamo la salud plena por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "243": {
    "id": "systemic-243",
    "title": "Patrón de abuso físico",
    "phrase": "“El dolor físico es parte de mi destino.”",
    "act": "Frase: Reconozco las memorias de abuso físico que han afectado mi linaje. Hoy elijo sanar esas heridas y liberarme del dolor. Con amor ahora elijo vivir sin sufrimiento físico. Con amor ahora elegimos la vida. Reclamo la libertad del dolor por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "244": {
    "id": "systemic-244",
    "title": "Desconfianza hacia los hombres",
    "phrase": "“Los hombres siempre traicionan o abandonan.”",
    "act": "Frase: Reconozco las heridas de desconfianza hacia los hombres de mi linaje. Hoy elijo liberar esas heridas y confiar en las relaciones saludables. Con amor ahora elijo la confianza en los hombres. Con amor ahora elegimos la vida. Reclamo la paz en mis relaciones por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "245": {
    "id": "systemic-245",
    "title": "Sentimiento de no ser suficiente",
    "phrase": "“Nunca soy lo suficientemente bueno/a.”",
    "act": "Frase: Reconozco las creencias de insuficiencia que han marcado mi vida. Hoy elijo liberar esas creencias y reconocer mi valor innato. Con amor ahora elijo saber que soy suficiente. Con amor ahora elegimos la vida. Reclamo la certeza de mi valor por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "246": {
    "id": "systemic-246",
    "title": "Miedo a la muerte en la familia",
    "phrase": "“La muerte es el fin, siempre hemos vivido con ese miedo.”",
    "act": "Frase: Reconozco el miedo a la muerte que ha marcado a mi familia. Hoy elijo sanar mi relación con la muerte y vivir sin miedo. Con amor ahora elijo aceptar la muerte como parte del ciclo. Con amor ahora elegimos la vida. Reclamo la paz con la muerte por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "247": {
    "id": "systemic-247",
    "title": "Miedo a ser abandonado por la pareja",
    "phrase": "“Si soy yo mismo/a, me van a dejar.”",
    "act": "Frase: Reconozco el miedo al abandono que afecta mis relaciones de pareja. Hoy elijo vivir sin miedo al abandono y darme permiso para ser quien soy. Con amor ahora elijo relaciones saludables. Con amor ahora elegimos la vida. Reclamo relaciones plenas por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "248": {
    "id": "systemic-248",
    "title": "Miedo a la intimidad emocional",
    "phrase": "“Si me abro emocionalmente, me lastiman.”",
    "act": "Frase: Reconozco el miedo a la intimidad emocional que ha marcado mis relaciones. Hoy elijo abrir mi corazón sin temor al daño. Con amor ahora elijo la conexión profunda. Con amor ahora elegimos la vida. Reclamo la intimidad emocional sana que me corresponde por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "249": {
    "id": "systemic-249",
    "title": "Dependencia emocional del pasado",
    "phrase": "“El pasado sigue controlando mi vida.”",
    "act": "Frase: Reconozco que las memorias del pasado aún me controlan y afectan mi presente. Hoy elijo soltar esas ataduras y vivir en el ahora. Con amor ahora elijo liberarme del pasado. Con amor ahora elegimos la vida. Reclamo el poder de vivir el presente por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "250": {
    "id": "systemic-250",
    "title": "Miedo a la abundancia en el linaje",
    "phrase": "“La abundancia trae problemas y sufrimiento.”",
    "act": "Frase: Reconozco las creencias familiares que limitan la abundancia. Hoy elijo liberar esos miedos y abrazar la prosperidad con amor. Con amor ahora elijo la abundancia. Con amor ahora elegimos la vida. Reclamo la prosperidad que me corresponde por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "251": {
    "id": "systemic-251",
    "title": "Conflicto con la figura paterna",
    "phrase": "“No puedo ser yo mismo/a porque mi padre no lo permite.”",
    "act": "Frase: Reconozco las tensiones con la figura paterna que han limitado mi autenticidad. Hoy elijo sanar esa relación y ser quien soy sin miedo. Con amor ahora elijo ser libre. Con amor ahora elegimos la vida. Reclamo la autonomía personal por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "252": {
    "id": "systemic-252",
    "title": "Sufrimiento ancestral por guerra",
    "phrase": "“La guerra marcó la historia de mi familia y el sufrimiento sigue.”",
    "act": "Frase: Honro a aquellos que vivieron las secuelas de la guerra y el sufrimiento. Hoy elijo sanar las memorias de conflicto y restablecer la paz. Con amor ahora elijo la paz en mi linaje. Con amor ahora elegimos la vida. Reclamo la paz profunda que me corresponde por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "253": {
    "id": "systemic-253",
    "title": "Miedo al fracaso",
    "phrase": "“Si fracaso, decepciono a todos.”",
    "act": "Frase: Reconozco el miedo al fracaso que ha condicionado mi vida. Hoy elijo abrazar los fracasos como oportunidades de aprendizaje y crecimiento. Con amor ahora elijo el éxito sin miedo. Con amor ahora elegimos la vida. Reclamo el derecho al éxito sin miedo por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "254": {
    "id": "systemic-254",
    "title": "Miedo a la independencia financiera",
    "phrase": "“Si tengo dinero, me perderé a mí mismo/a.”",
    "act": "Frase: Reconozco los miedos relacionados con la independencia financiera que han marcado mi vida. Hoy elijo tener libertad financiera y mantener mi identidad intacta. Con amor ahora elijo prosperar sin miedo. Con amor ahora elegimos la vida. Reclamo la independencia financiera por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "255": {
    "id": "systemic-255",
    "title": "Patrón de sacrificio por los demás",
    "phrase": "“Mi vida no es importante, debo poner a los demás primero.”",
    "act": "Frase: Reconozco las creencias de sacrificio y autosacrificio que han condicionado mi vida. Hoy elijo honrarme a mí mismo/a y cuidar de mí con amor. Con amor ahora elijo ponerme en primer lugar. Con amor ahora elegimos la vida. Reclamo mi derecho a cuidarme por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "256": {
    "id": "systemic-256",
    "title": "Miedo a la muerte en la familia",
    "phrase": "“La muerte siempre está al acecho, siempre me persigue.”",
    "act": "Frase: Reconozco el miedo a la muerte que ha marcado a mi linaje. Hoy elijo aceptar la muerte como parte del ciclo natural de la vida. Con amor ahora elijo vivir plenamente sin miedo a la muerte. Con amor ahora elegimos la vida. Reclamo la paz con la muerte por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "257": {
    "id": "systemic-257",
    "title": "Miedo a la expresión creativa",
    "phrase": "“Mis ideas no valen, no soy capaz de crear.”",
    "act": "Frase: Reconozco las creencias que limitan mi creatividad y expresión. Hoy elijo liberar esas restricciones y permitirme crear con libertad. Con amor ahora elijo ser creativo/a. Con amor ahora elegimos la vida. Reclamo el derecho a crear sin miedo por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "258": {
    "id": "systemic-258",
    "title": "Patrón de rechazo al éxito familiar",
    "phrase": "“Si soy exitoso/a, traiciono a mi familia.”",
    "act": "Frase: Reconozco las lealtades inconscientes que me atan a los patrones de mi familia. Hoy elijo avanzar sin miedo de traicionar a mis seres queridos. Con amor ahora elijo el éxito sin culpa. Con amor ahora elegimos la vida. Reclamo el derecho al éxito por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "259": {
    "id": "systemic-259",
    "title": "Miedo a la vulnerabilidad",
    "phrase": "“Si me muestro vulnerable, me lastiman.”",
    "act": "Frase: Reconozco el miedo a la vulnerabilidad que me impide ser auténtico/a. Hoy elijo liberarme de este miedo y abrirme al amor y la conexión. Con amor ahora elijo ser vulnerable. Con amor ahora elegimos la vida. Reclamo el derecho a la vulnerabilidad por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "260": {
    "id": "systemic-260",
    "title": "Desconfianza en la abundancia",
    "phrase": "“Si acepto la abundancia, perderé algo importante.”",
    "act": "Frase: Reconozco la desconfianza hacia la abundancia que ha existido en mi linaje. Hoy elijo aceptar la abundancia con gratitud y sin miedo. Con amor ahora elijo prosperar sin limitaciones. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "261": {
    "id": "systemic-261",
    "title": "Lealtades to la escasez",
    "phrase": "“La escasez es parte de mi vida, no puedo tener más.”",
    "act": "Frase: Reconozco las lealtades inconscientes a la escasez y a la pobreza en mi familia. Hoy elijo liberarme de esos patrones y abrazar la abundancia. Con amor ahora elijo prosperar sin miedo. Con amor ahora elegimos la vida. Reclamo la abundancia que me corresponde por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "262": {
    "id": "systemic-262",
    "title": "Conflictos con la figura materna",
    "phrase": "“Nunca fui lo suficientemente bueno/a para mi madre.”",
    "act": "Frase: Reconozco las tensiones con la figura materna que han afectado mi vida. Hoy elijo sanar esa relación y liberarme de sus expectativas. Con amor ahora elijo ser quien soy. Con amor ahora elegimos la vida. Reclamo la paz con la figura materna por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "263": {
    "id": "systemic-263",
    "title": "Patrón de autoexigencia",
    "phrase": "“Siempre tengo que ser perfecto/a, nunca puedo fallar.”",
    "act": "Frase: Reconozco los patrones de autoexigencia que me impiden ser feliz. Hoy elijo soltar la perfección y aceptar mis imperfecciones. Con amor ahora elijo ser suficiente tal como soy. Con amor ahora elegimos la vida. Reclamo la libertad de ser imperfecto por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "264": {
    "id": "systemic-264",
    "title": "Miedo a la autosuficiencia",
    "phrase": "“Si soy autosuficiente, perderé la conexión con los demás.”",
    "act": "Frase: Reconozco el miedo a ser autosuficiente que ha influido en mi vida. Hoy elijo ser independiente sin perder mis relaciones. Con amor ahora elijo la autosuficiencia con conexión. Con amor ahora elegimos la vida. Reclamo el derecho a la independencia sin sacrificios por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "265": {
    "id": "systemic-265",
    "title": "Lealtad a los sufrimientos del pasado",
    "phrase": "“Si no sufro como lo hicieron mis ancestros, les traiciono.”",
    "act": "Frase: Reconozco las lealtades que me atan a los sufrimientos del pasado. Hoy elijo sanar y vivir en la alegría sin la carga de esas lealtades. Con amor ahora elijo la sanación y la paz. Con amor ahora elegimos la vida. Reclamo la liberación de los sufrimientos del pasado por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "266": {
    "id": "systemic-266",
    "title": "Miedo a ser juzgado",
    "phrase": "“Si soy yo mismo/a, me juzgarán.”",
    "act": "Frase: Reconozco el miedo a ser juzgado que me ha condicionado. Hoy elijo vivir auténticamente sin miedo al juicio. Con amor ahora elijo la libertad de ser quien soy. Con amor ahora elegimos la vida. Reclamo el derecho a ser yo mismo/a por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "267": {
    "id": "systemic-267",
    "title": "Patrón de abandono espiritual",
    "phrase": "“Siempre he estado desconectado/a de lo divino.”",
    "act": "Frase: Reconozco el patrón de desconexión espiritual que ha marcado mi vida. Hoy elijo reconectar con lo divino, con amor y respeto. Con amor ahora elijo la conexión espiritual. Con amor ahora elegimos la vida. Reclamo el derecho a la conexión espiritual por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "268": {
    "id": "systemic-268",
    "title": "Conflictos con la figura paternal",
    "phrase": "“Nunca fui suficiente para mi padre.”",
    "act": "Frase: Reconozco las dificultades con la figura paterna que me han afectado profundamente. Hoy elijo sanar esa relación y liberarme de sus expectativas. Con amor ahora elijo la paz con mi padre. Con amor ahora elegimos la vida. Reclamo la libertad de ser quien soy por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "269": {
    "id": "systemic-269",
    "title": "Miedo a la autoaceptación",
    "phrase": "“No puedo aceptarme como soy.”",
    "act": "Frase: Reconozco el miedo a la autoaceptación que me ha limitado. Hoy elijo aceptarme tal como soy, con amor y compasión. Con amor ahora elijo la autoaceptación. Con amor ahora elegimos la vida. Reclamo la aceptación plena de mi ser por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "270": {
    "id": "systemic-270",
    "title": "Patrón de abuso psicológico",
    "phrase": "“Siempre me dicen que no soy capaz.”",
    "act": "Frase: Reconozco las memorias de abuso psicológico en mi linaje que me han marcado. Hoy elijo liberarme de esas creencias limitantes y abrazar mi poder personal. Con amor ahora elijo la fortaleza mental. Con amor ahora elegimos la vida. Reclamo el derecho a la paz mental por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "271": {
    "id": "systemic-271",
    "title": "Desconfianza en la vida",
    "phrase": "“La vida siempre me decepciona.”",
    "act": "Frase: Reconozco las creencias que me han llevado a desconfiar de la vida. Hoy elijo abrirme a recibir todo lo bueno que la vida tiene para ofrecer. Con amor ahora elijo confiar en la vida. Con amor ahora elegimos la vida. Reclamo el derecho a confiar en la vida por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "272": {
    "id": "systemic-272",
    "title": "Miedo al éxito profesional",
    "phrase": "“El éxito profesional solo trae problemas.”",
    "act": "Frase: Reconozco el miedo al éxito profesional que ha condicionado mis decisiones. Hoy elijo avanzar en mi carrera con confianza, sabiendo que el éxito trae solo oportunidades. Con amor ahora elijo el éxito. Con amor ahora elegimos la vida. Reclamo el derecho al éxito profesional por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "273": {
    "id": "systemic-273",
    "title": "Patrón de desconfianza en los demás",
    "phrase": "“No puedo confiar en nadie, siempre me fallan.”",
    "act": "Frase: Reconozco las experiencias de desconfianza que han marcado mi vida. Hoy elijo abrirme a confiar en los demás y en las relaciones genuinas. Con amor ahora elijo la confianza. Con amor ahora elegimos la vida. Reclamo el derecho a confiar en los demás por derecho divino.",
    "colorClass": "systemic-color-7"
  },
"274": {
    "id": "systemic-274",
    "title": "Miedo a ser abandonado/a por los demás",
    "phrase": "“Si soy yo mismo/a, me abandonarán.”",
    "act": "Frase: Reconozco el miedo al abandono que ha condicionado mi vida y mis relaciones. Hoy elijo vivir con la certeza de que soy digno/a de amor y apoyo. Con amor ahora elijo la seguridad emocional. Con amor ahora elegimos la vida. Reclamo el derecho a la seguridad afectiva por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "275": {
    "id": "systemic-275",
    "title": "Patrón de sumisión al dolor",
    "phrase": "“El dolor es inevitable, debo aceptarlo sin quejarme.”",
    "act": "Frase: Reconozco los patrones de sumisión al dolor que han marcado mi linaje. Hoy elijo liberar el sufrimiento y abrirme al bienestar. Con amor ahora elijo la salud y la alegría. Con amor ahora elegimos la vida. Reclamo el derecho a vivir sin el peso del dolor innecesario por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "276": {
    "id": "systemic-276",
    "title": "Miedo a la independencia personal",
    "phrase": "“Si soy independiente, perderé mi lugar en la familia.”",
    "act": "Frase: Reconozco el miedo a la independencia que ha influido en mi vida. Hoy elijo mi autonomía sin miedo a perder mi pertenencia. Con amor ahora elijo mi libertad. Con amor ahora elegimos la vida. Reclamo mi independencia por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "277": {
    "id": "systemic-277",
    "title": "Conflictos con la figura materna",
    "phrase": "“Mi madre nunca me aceptó tal como soy.”",
    "act": "Frase: Reconozco las heridas de rechazo relacionadas con la figura materna. Hoy elijo sanar este vínculo y aceptarme plenamente. Con amor ahora elijo la paz con mi madre. Con amor ahora elegimos la vida. Reclamo el derecho a ser aceptado por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "278": {
    "id": "systemic-278",
    "title": "Lealtad a la infelicidad familiar",
    "phrase": "“Si soy feliz, traiciono la tristeza de mis ancestros.”",
    "act": "Frase: Reconozco las lealtades inconscientes a la infelicidad de mi sistema familiar. Hoy elijo la felicidad como mi nueva forma de honrarlos. Con amor ahora elijo la alegría. Con amor ahora elegimos la vida. Reclamo el derecho a ser feliz por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "279": {
    "id": "systemic-279",
    "title": "Miedo al juicio social",
    "phrase": "“Lo que los demás piensen de mí define quién soy.”",
    "act": "Frase: Reconozco cómo el miedo al juicio ajeno ha limitado mi autenticidad. Hoy elijo valorarme por quien soy, no por lo que digan. Con amor ahora elijo la autoafirmación. Con amor ahora elegimos la vida. Reclamo el derecho a vivir sin el peso del juicio por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "280": {
    "id": "systemic-280",
    "title": "Patrón de carencia afectiva",
    "phrase": "“Nunca recibiré el amor que necesito.”",
    "act": "Frase: Reconozco las memorias de carencia afectiva en mi historia personal y familiar. Hoy elijo abrirme a recibir amor en todas sus formas. Con amor ahora elijo la plenitud afectiva. Con amor ahora elegimos la vida. Reclamo el derecho a ser amado por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "281": {
    "id": "systemic-281",
    "title": "Miedo a la responsabilidad personal",
    "phrase": "“Es más fácil que otros decidan por mí.”",
    "act": "Frase: Reconozco el miedo a asumir la responsabilidad de mi propia vida. Hoy elijo tomar las riendas de mi destino con confianza. Con amor ahora elijo mi poder personal. Con amor ahora elegimos la vida. Reclamo la autoridad sobre mi vida por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "282": {
    "id": "systemic-282",
    "title": "Culpa por disfrutar de la vida",
    "phrase": "“No merezco disfrutar si otros están sufriendo.”",
    "act": "Frase: Reconozco la culpa heredada por el placer y el disfrute. Hoy elijo celebrar la vida sin remordimientos. Con amor ahora elijo el disfrute. Con amor ahora elegimos la vida. Reclamo el derecho al placer por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "283": {
    "id": "systemic-283",
    "title": "Miedo a la traición en la amistad",
    "phrase": "“Los amigos siempre terminan fallándote.”",
    "act": "Frase: Reconozco las heridas de traición que han marcado mis vínculos sociales. Hoy elijo confiar en la lealtad y la amistad verdadera. Con amor ahora elijo vínculos sanos. Con amor ahora elegimos la vida. Reclamo el derecho a la amistad sincera por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "284": {
    "id": "systemic-284",
    "title": "Patrón de autosabotaje profesional",
    "phrase": "“Cada vez que estoy por lograrlo, algo sale mal.”",
    "act": "Frase: Reconozco los mecanismos de autosabotaje que detienen mi crecimiento profesional. Hoy elijo el éxito y la culminación de mis metas. Con amor ahora elijo prosperar. Con amor ahora elegimos la vida. Reclamo el éxito profesional por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "285": {
    "id": "systemic-285",
    "title": "Miedo al abandono de Dios/Universo",
    "phrase": "“Me siento solo y desprotegido ante el mundo.”",
    "act": "Frase: Reconozco el sentimiento de desamparo espiritual que he cargado. Hoy elijo sentir la presencia constante de la guía divina. Con amor ahora elijo la conexión espiritual. Con amor ahora elegimos la vida. Reclamo la protección divina por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "286": {
    "id": "systemic-286",
    "title": "Herida de injusticia ancestral",
    "phrase": "“A mi familia siempre le tocó lo más difícil de forma injusta.”",
    "act": "Frase: Honro a mis ancestros que vivieron situaciones de injusticia y abuso. Hoy elijo liberar ese resentimiento y vivir en equilibrio. Con amor ahora elijo la justicia. Con amor ahora elegimos la vida. Reclamo el trato justo por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "287": {
    "id": "systemic-287",
    "title": "Miedo a la pérdida de identidad",
    "phrase": "“Si cambio, dejaré de ser quien soy para mi familia.”",
    "act": "Frase: Reconozco el miedo a evolucionar por temor a perder mis raíces. Hoy elijo crecer manteniendo mi esencia. Con amor ahora elijo mi evolución. Con amor ahora elegimos la vida. Reclamo el derecho a transformarme por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "288": {
    "id": "systemic-288",
    "title": "Patrón de relaciones de dependencia",
    "phrase": "“No puedo vivir sin que alguien me guíe.”",
    "act": "Frase: Reconozco la dependencia emocional que ha limitado mi madurez. Hoy elijo mi propia fuerza y capacidad de decisión. Con amor ahora elijo la madurez emocional. Con amor ahora elegimos la vida. Reclamo el derecho a ser adulto y responsable por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "289": {
    "id": "systemic-289",
    "title": "Miedo a la vejez y el abandono",
    "phrase": "“Envejecer significa quedarse solo y sin recursos.”",
    "act": "Frase: Reconozco el temor ancestral a la vejez desprotegida. Hoy elijo ver el paso del tiempo como sabiduría y plenitud. Con amor ahora elijo la vitalidad. Con amor ahora elegimos la vida. Reclamo una vida plena en todas sus etapas por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "290": {
    "id": "systemic-290",
    "title": "Sentimiento de exclusión en el sistema",
    "phrase": "“Siento que no encajo en ninguna parte de mi familia.”",
    "act": "Frase: Reconozco el dolor de sentirme la 'oveja negra' o excluido. Hoy elijo mi lugar legítimo en mi árbol familiar. Con amor ahora elijo la pertenencia. Con amor ahora elegimos la vida. Reclamo mi lugar por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "291": {
    "id": "systemic-291",
    "title": "Miedo al poder personal",
    "phrase": "“Si uso mi poder, puedo hacer daño o ser castigado.”",
    "act": "Frase: Reconozco el temor a mi propia fuerza y liderazgo. Hoy elijo usar mi poder para el bien y el crecimiento. Con amor ahora elijo mi liderazgo. Con amor ahora elegimos la vida. Reclamo el uso de mi poder por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "292": {
    "id": "systemic-292",
    "title": "Lealtad a los secretos familiares",
    "phrase": "“Hay cosas de las que nunca se debe hablar.”",
    "act": "Frase: Reconozco el peso de los secretos guardados en mi linaje. Hoy elijo la verdad que libera y sana a las generaciones. Con amor ahora elijo la transparencia. Con amor ahora elegimos la vida. Reclamo la verdad por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "293": {
    "id": "systemic-293",
    "title": "Miedo a la envidia ajena",
    "phrase": "“Si brillo demasiado, los demás me atacarán.”",
    "act": "Frase: Reconozco el miedo a destacar por temor a la envidia o al ataque. Hoy elijo brillar con toda mi luz sin pedir permiso. Con amor ahora elijo mi brillo personal. Con amor ahora elegimos la vida. Reclamo el derecho a destacar por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "294": {
    "id": "systemic-294",
    "title": "Patrón de falta de merecimiento",
    "phrase": "“Las cosas buenas no son para alguien como yo.”",
    "act": "Frase: Reconozco las creencias de desvalorización que me impiden recibir lo mejor. Hoy elijo aceptarme como un ser digno de todas las bendiciones. Con amor ahora elijo el merecimiento. Con amor ahora elegimos la vida. Reclamo mi dignidad por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "295": {
    "id": "systemic-295",
    "title": "Miedo a la escasez de tiempo",
    "phrase": "“Siento que siempre llego tarde o que la vida se me escapa.”",
    "act": "Frase: Reconozco la ansiedad por el tiempo que ha marcado mi ritmo de vida. Hoy elijo vivir en el presente con calma y confianza. Con amor ahora elijo el tiempo presente. Con amor ahora elegimos la vida. Reclamo la paz en mi tiempo por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "296": {
    "id": "systemic-296",
    "title": "Conflictos con la figura de autoridad masculina",
    "phrase": "“Siempre choco con jefes o figuras de poder.”",
    "act": "Frase: Reconozco las tensiones no resueltas con el principio masculino de autoridad. Hoy elijo relacionarme desde el respeto mutuo y la paz. Con amor ahora elijo la armonía con la autoridad. Con amor ahora elegimos la vida. Reclamo el equilibrio por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "297": {
    "id": "systemic-297",
    "title": "Miedo al compromiso afectivo",
    "phrase": "“Si me comprometo, perderé mi libertad.”",
    "act": "Frase: Reconozco el miedo a la profundidad de los vínculos por temor a la asfixia. Hoy elijo amar con compromiso y libertad a la vez. Con amor ahora elijo la entrega consciente. Con amor ahora elegimos la vida. Reclamo el amor pleno por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "298": {
    "id": "systemic-298",
    "title": "Lealtad a la soledad ancestral",
    "phrase": "“En mi familia, siempre terminamos solos.”",
    "act": "Frase: Reconozco el patrón de soledad que se ha repetido en mi linaje. Hoy elijo la compañía amorosa y la formación de mi propia tribu. Con amor ahora elijo la compañía. Con amor ahora elegimos la vida. Reclamo la conexión humana por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "299": {
    "id": "systemic-299",
    "title": "Miedo a la enfermedad mental",
    "phrase": "“Tengo miedo de perder la cordura como otros en mi familia.”",
    "act": "Frase: Reconozco el temor heredado a los desequilibrios de la mente. Hoy elijo la claridad, la paz mental y la estabilidad emocional. Con amor ahora elijo la salud mental. Con amor ahora elegimos la vida. Reclamo mi equilibrio mental por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "300": {
    "id": "systemic-300",
    "title": "Sentimiento de carga familiar",
    "phrase": "“Siento que debo cargar con los problemas de todos.”",
    "act": "Frase: Reconozco el exceso de responsabilidad que he tomado sobre los hombros de otros. Hoy elijo devolver a cada uno su propia carga con amor. Con amor ahora elijo mi propia liviandad. Con amor ahora elegimos la vida. Reclamo mi libertad de cargas ajenas por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "301": {
    "id": "systemic-301",
    "title": "Miedo a la falta de protección",
    "phrase": "“Si algo malo pasa, nadie vendrá a ayudarme.”",
    "act": "Frase: Reconozco la desprotección sentida en mi infancia y en mi linaje. Hoy elijo confiar en el apoyo de la vida y de quienes me rodean. Con amor ahora elijo sentirme protegido. Con amor ahora elegimos la vida. Reclamo la seguridad por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "302": {
    "id": "systemic-302",
    "title": "Patrón de falta de dirección vital",
    "phrase": "“No sé qué hacer con mi vida, me siento perdido.”",
    "act": "Frase: Reconozco la confusión sobre mi propósito y camino. Hoy elijo conectar con mi brújula interna y avanzar con claridad. Con amor ahora elijo mi propósito. Con amor ahora elegimos la vida. Reclamo la dirección divina por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "303": {
    "id": "systemic-303",
    "title": "Culpa por ser diferente",
    "phrase": "“Me siento mal por no ser como mi familia espera que sea.”",
    "act": "Frase: Reconozco la culpa por mi singularidad y autenticidad. Hoy elijo celebrar mi diferencia como un aporte valioso al mundo. Con amor ahora elijo ser yo mismo. Con amor ahora elegimos la vida. Reclamo mi autenticidad por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "304": {
    "id": "systemic-304",
    "title": "Miedo a la carencia de ideas",
    "phrase": "“Siento que mi creatividad se ha secado por completo.”",
    "act": "Frase: Reconozco los bloqueos que impiden el flujo de mi inspiración. Hoy elijo abrirme a la fuente inagotable de creación. Con amor ahora elijo la fluidez creativa. Con amor ahora elegimos la vida. Reclamo mi genio creativo por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "305": {
    "id": "systemic-305",
    "title": "Herida de traición de pareja",
    "phrase": "“No puedo confiar en quien amo, siempre me engañarán.”",
    "act": "Frase: Reconozco las memorias de infidelidad y traición en mis relaciones. Hoy elijo sanar mi corazón y abrirme a la lealtad y la confianza plena. Con amor ahora elijo la fidelidad. Con amor ahora elegimos la vida. Reclamo el amor leal por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "306": {
    "id": "systemic-306",
    "title": "Miedo a la exposición pública",
    "phrase": "“Si me ven, me criticarán o me harán daño.”",
    "act": "Frase: Reconozco el temor ancestral a ser visto y perseguido. Hoy elijo mostrarme al mundo con seguridad y confianza. Con amor ahora elijo la visibilidad. Con amor ahora elegimos la vida. Reclamo el derecho a ser visto por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "307": {
    "id": "systemic-307",
    "title": "Patrón de esfuerzo extremo",
    "phrase": "“Para tener algo, tengo que sufrir y esforzarme al límite.”",
    "act": "Frase: Reconozco la creencia de que solo el sacrificio trae recompensas. Hoy elijo recibir con facilidad, gozo y gloria. Con amor ahora elijo la fluidez. Con amor ahora elegimos la vida. Reclamo la abundancia sin esfuerzo extremo por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "308": {
    "id": "systemic-308",
    "title": "Miedo a la pérdida de control emocional",
    "phrase": "“Si lloro o me enojo, perderé mi valor ante los demás.”",
    "act": "Frase: Reconozco las restricciones impuestas sobre mis emociones. Hoy elijo expresar mi sentir de forma sana y auténtica. Con amor ahora elijo la libertad emocional. Con amor ahora elegimos la vida. Reclamo mi derecho a sentir por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "309": {
    "id": "systemic-309",
    "title": "Lealtad al fracaso económico",
    "phrase": "“Si gano mucho dinero, no seré parte de mi familia humilde.”",
    "act": "Frase: Reconozco la lealtad inconsciente a la carencia para no sentirme diferente. Hoy elijo la prosperidad como una bendición para mí y para mi sistema. Con amor ahora elijo la riqueza. Con amor ahora elegimos la vida. Reclamo el éxito financiero por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "310": {
    "id": "systemic-310",
    "title": "Miedo al abandono de los hijos",
    "phrase": "“Tengo miedo de que mis hijos se alejen y me olviden.”",
    "act": "Frase: Reconozco el temor a la soledad en la etapa de paternidad/maternidad. Hoy elijo confiar en los vínculos de amor que he sembrado. Con amor ahora elijo la confianza filial. Con amor ahora elegimos la vida. Reclamo la unión familiar por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "311": {
    "id": "systemic-311",
    "title": "Sentimiento de no tener hogar",
    "phrase": "“No siento que pertenezca a ningún lugar físico.”",
    "act": "Frase: Reconozco el desarraigo sentido por mis ancestros migrantes o desplazados. Hoy elijo echar raíces y sentirme en casa donde sea que esté. Con amor ahora elijo mi hogar. Con amor ahora elegimos la vida. Reclamo mi lugar en la tierra por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "312": {
    "id": "systemic-312",
    "title": "Miedo a la competencia",
    "phrase": "“Siempre habrá alguien mejor que yo que me quitará mi lugar.”",
    "act": "Frase: Reconozco el miedo a la comparación y a la pérdida. Hoy elijo confiar en mi singularidad y en que hay lugar para todos. Con amor ahora elijo la autoconfianza. Con amor ahora elegimos la vida. Reclamo mi espacio único por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "313": {
    "id": "systemic-313",
    "title": "Patrón de postergación",
    "phrase": "“Mañana lo haré, hoy no me siento capaz.”",
    "act": "Frase: Reconozco el hábito de postergar por miedo al resultado. Hoy elijo la acción enfocada y el movimiento hacia mis metas. Con amor ahora elijo el presente. Con amor ahora elegimos la vida. Reclamo mi poder de acción por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "314": {
    "id": "systemic-314",
    "title": "Miedo al desamor",
    "phrase": "“Siento que el amor se acabará pronto y me quedaré solo.”",
    "act": "Frase: Reconozco la inseguridad sobre la permanencia del afecto. Hoy elijo confiar en el flujo eterno del amor en mi vida. Con amor ahora elijo la estabilidad amorosa. Con amor ahora elegimos la vida. Reclamo el amor duradero por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "315": {
    "id": "systemic-315",
    "title": "Herida de humillación ancestral",
    "phrase": "“En mi familia siempre fuimos rebajados por otros.”",
    "act": "Frase: Honro a mis ancestros que vivieron la humillación y el menosprecio. Hoy elijo mi dignidad y mi valor incondicional. Con amor ahora elijo el respeto. Con amor ahora elegimos la vida. Reclamo mi honor por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "316": {
    "id": "systemic-316",
    "title": "Miedo a la pérdida de salud repentina",
    "phrase": "“Todo está bien ahora, pero algo malo puede pasar de repente.”",
    "act": "Frase: Reconozco la ansiedad por la fragilidad del cuerpo. Hoy elijo confiar en mi salud y en la vitalidad de mis células. Con amor ahora elijo la sanidad. Con amor ahora elegimos la vida. Reclamo mi salud plena por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "317": {
    "id": "systemic-317",
    "title": "Lealtad a los excluidos del linaje",
    "phrase": "“Siento una tristeza que no es mía, como si alguien faltara.”",
    "act": "Frase: Reconozco a los miembros de mi árbol que fueron olvidados o borrados. Hoy los miro y les doy un lugar en mi corazón. Con amor ahora elijo la integración. Con amor ahora elegimos la vida. Reclamo la completitud de mi sistema por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "318": {
    "id": "systemic-318",
    "title": "Miedo a la libertad económica",
    "phrase": "“Si soy rico, tendré demasiadas responsabilidades y peligros.”",
    "act": "Frase: Reconozco el miedo al peso de la abundancia financiera. Hoy elijo manejar mi riqueza con sabiduría, paz y seguridad. Con amor ahora elijo la libertad financiera. Con amor ahora elegimos la vida. Reclamo mi derecho a la opulencia por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "319": {
    "id": "systemic-319",
    "title": "Patrón de falta de autocuidado",
    "phrase": "“Siempre cuido de los demás y me olvido de mí.”",
    "act": "Frase: Reconozco el descuido de mis propias necesidades básicas y emocionales. Hoy elijo ser mi prioridad y amarme profundamente. Con amor ahora elijo mi bienestar. Con amor ahora elegimos la vida. Reclamo el derecho al autocuidado por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "320": {
    "id": "systemic-320",
    "title": "Miedo al cambio de residencia o país",
    "phrase": "“Mudarse es perderlo todo y empezar de cero con dolor.”",
    "act": "Frase: Reconozco el dolor de los duelos migratorios en mi historia familiar. Hoy elijo ver el cambio de lugar como una oportunidad de expansión. Con amor ahora elijo la adaptabilidad. Con amor ahora elegimos la vida. Reclamo mi bienestar en cualquier lugar por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "321": {
    "id": "systemic-321",
    "title": "Sentimiento de insuficiencia intelectual",
    "phrase": "“No soy tan inteligente como los demás.”",
    "act": "Frase: Reconozco las etiquetas de incapacidad que me han puesto o me he puesto. Hoy elijo confiar en mi sabiduría y capacidad de aprendizaje. Con amor ahora elijo mi inteligencia. Con amor ahora elegimos la vida. Reclamo mi claridad mental por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "322": {
    "id": "systemic-322",
    "title": "Miedo al compromiso social",
    "phrase": "“Involucrarme con otros solo trae problemas y chismes.”",
    "act": "Frase: Reconozco el aislamiento defensivo que he construido. Hoy elijo participar de la vida social con confianza y alegría. Con amor ahora elijo la interacción sana. Con amor ahora elegimos la vida. Reclamo mi lugar en la comunidad por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "323": {
    "id": "systemic-323",
    "title": "Patrón de falta de límites",
    "phrase": "“No sé decir no, siempre dejo que pasen por encima de mí.”",
    "act": "Frase: Reconozco la dificultad de marcar mi espacio sagrado. Hoy elijo poner límites claros y amorosos que me protejan. Con amor ahora elijo mi respeto personal. Con amor ahora elegimos la vida. Reclamo mi derecho al NO por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "324": {
    "id": "systemic-324",
    "title": "Miedo a la pérdida de fe",
    "phrase": "“Siento que nada tiene sentido y que no hay nada más allá.”",
    "act": "Frase: Reconozco el vacío existencial y la falta de conexión con el sentido. Hoy elijo reconectar con la chispa divina que habita en mí. Con amor ahora elijo la fe. Con amor ahora elegimos la vida. Reclamo mi conexión con la fuente por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "325": {
    "id": "systemic-325",
    "title": "Herida de abandono paterno",
    "phrase": "“Mi padre se fue o estuvo ausente emocionalmente.”",
    "act": "Frase: Reconozco el dolor de la ausencia del padre en mi vida. Hoy elijo sanar ese vacío y ser mi propio sostén y protección. Con amor ahora elijo la seguridad interna. Con amor ahora elegimos la vida. Reclamo mi fuerza interna por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "326": {
    "id": "systemic-326",
    "title": "Miedo a los conflictos de pareja",
    "phrase": "“Discutir significa que la relación se va a terminar.”",
    "act": "Frase: Reconozco el temor al desacuerdo y a la confrontación. Hoy elijo ver los conflictos como oportunidades de comunicación y crecimiento. Con amor ahora elijo la comunicación honesta. Con amor ahora elegimos la vida. Reclamo la armonía en la pareja por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "327": {
    "id": "systemic-327",
    "title": "Lealtad a las enfermedades crónicas",
    "phrase": "“En mi familia todos sufrimos de lo mismo, es genético.”",
    "act": "Frase: Reconozco la lealtad inconsciente a las patologías del linaje. Hoy elijo romper ese ciclo y manifestar una salud radiante. Con amor ahora elijo la sanación total. Con amor ahora elegimos la vida. Reclamo mi salud perfecta por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "328": {
    "id": "systemic-328",
    "title": "Miedo a la falta de reconocimiento",
    "phrase": "“Hago mucho pero nadie parece notar mi esfuerzo.”",
    "act": "Frase: Reconozco la necesidad de aprobación externa que me agota. Hoy elijo reconocerme a mí mismo y validar mis propios logros. Con amor ahora elijo el autorreconocimiento. Con amor ahora elegimos la vida. Reclamo mi valor interno por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "329": {
    "id": "systemic-329",
    "title": "Patrón de desorden financiero",
    "phrase": "“El dinero se me va entre los dedos, nunca sé en qué lo gasto.”",
    "act": "Frase: Reconozco el caos en el manejo de mis recursos. Hoy elijo la maestría financiera, el orden y la multiplicación de mis bienes. Con amor ahora elijo la administración sabia. Con amor ahora elegimos la vida. Reclamo la claridad financiera por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "330": {
    "id": "systemic-330",
    "title": "Miedo a la pérdida de un hijo",
    "phrase": "“Vivo con el temor constante de que algo le pase a mis hijos.”",
    "act": "Frase: Reconozco el miedo ancestral a la pérdida de la descendencia. Hoy elijo entregar a mis hijos a la protección de la vida y vivir en paz. Con amor ahora elijo la confianza paternal. Con amor ahora elegimos la vida. Reclamo la seguridad de mi familia por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "331": {
    "id": "systemic-331",
    "title": "Sentimiento de parálisis vital",
    "phrase": "“Siento que la vida pasa y yo sigo en el mismo lugar.”",
    "act": "Frase: Reconozco el bloqueo que me impide avanzar y fluir con el tiempo. Hoy elijo el movimiento, el cambio y la renovación constante. Con amor ahora elijo avanzar. Con amor ahora elegimos la vida. Reclamo mi dinamismo por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "332": {
    "id": "systemic-332",
    "title": "Miedo a la propia sombra",
    "phrase": "“Tengo miedo de descubrir partes de mí que no me gustan.”",
    "act": "Frase: Reconozco el temor a mirar mi oscuridad y mis errores. Hoy elijo abrazar mi totalidad con compasión y luz. Con amor ahora elijo la integración de mi ser. Con amor ahora elegimos la vida. Reclamo mi completitud por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "333": {
    "id": "systemic-333",
    "title": "Patrón de exigencia perfeccionista",
    "phrase": "“Si no es perfecto, no sirve para nada.”",
    "act": "Frase: Reconozco la rigidez que me impide disfrutar del proceso. Hoy elijo la excelencia sobre la perfección y la amabilidad conmigo mismo. Con amor ahora elijo la flexibilidad. Con amor ahora elegimos la vida. Reclamo el derecho a equivocarme por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "334": {
    "id": "systemic-334",
    "title": "Miedo a la soledad en la madurez",
    "phrase": "“Me aterra pensar que nadie estará conmigo cuando sea mayor.”",
    "act": "Frase: Reconozco el miedo al aislamiento futuro. Hoy elijo cultivar relaciones sólidas y amarme para ser mi mejor compañía. Con amor ahora elijo la plenitud futura. Con amor ahora elegimos la vida. Reclamo la compañía amorosa por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "335": {
    "id": "systemic-335",
    "title": "Herida de rechazo por el cuerpo",
    "phrase": "“No me gusta lo que veo en el espejo y siento que otros me rechazan.”",
    "act": "Frase: Reconozco el dolor de no aceptar mi propio envase físico. Hoy elijo amar mi cuerpo tal como es y agradecer su función. Con amor ahora elijo la autoaceptación corporal. Con amor ahora elegimos la vida. Reclamo la belleza de mi ser por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "336": {
    "id": "systemic-336",
    "title": "Miedo a los desastres naturales o del entorno",
    "phrase": "“Siento que el mundo es un lugar peligroso y todo puede destruirse.”",
    "act": "Frase: Reconozco el miedo a las fuerzas externas que escapan a mi control. Hoy elijo sentirme seguro y a salvo en la tierra. Con amor ahora elijo la paz con el entorno. Con amor ahora elegimos la vida. Reclamo la protección universal por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "337": {
    "id": "systemic-337",
    "title": "Lealtad a los antepasados que sufrieron hambre",
    "phrase": "“Tengo una relación ansiosa con la comida, como si se fuera a acabar.”",
    "act": "Frase: Reconozco las memorias de hambre y escasez de mi linaje. Hoy elijo nutrirme con paz, sabiendo que siempre habrá sustento. Con amor ahora elijo la saciedad tranquila. Con amor ahora elegimos la vida. Reclamo la nutrición divina por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "338": {
    "id": "systemic-338",
    "title": "Miedo al éxito amoroso",
    "phrase": "“Si me va muy bien en el amor, algo malo pasará en otra área.”",
    "act": "Frase: Reconozco la creencia de que no puedo tenerlo todo. Hoy elijo la plenitud en todas las áreas de mi vida simultáneamente. Con amor ahora elijo la felicidad total. Con amor ahora elegimos la vida. Reclamo la plenitud por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "339": {
    "id": "systemic-339",
    "title": "Patrón de desconfianza en la medicina o sanación",
    "phrase": "“Nada de lo que haga me va a curar realmente.”",
    "act": "Frase: Reconozco el escepticismo y la desesperanza sobre mi propia sanación. Hoy elijo confiar en mi capacidad de regeneración y en la ayuda disponible. Con amor ahora elijo la curación. Con amor ahora elegimos la vida. Reclamo mi vitalidad por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "340": {
    "id": "systemic-340",
    "title": "Miedo a la envidia familiar",
    "phrase": "“Si prospero más que mis hermanos o padres, me dejarán de querer.”",
    "act": "Frase: Reconozco el miedo a destacar dentro de mi propio núcleo familiar. Hoy elijo mi éxito como una forma de elevar a todo mi sistema. Con amor ahora elijo la prosperidad compartida. Con amor ahora elegimos la vida. Reclamo el éxito sin culpas por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "341": {
    "id": "systemic-341",
    "title": "Sentimiento de no ser deseado",
    "phrase": "“Siento que mi nacimiento fue un error o una carga.”",
    "act": "Frase: Reconozco el dolor de no haberme sentido esperado o amado desde el inicio. Hoy elijo celebrar mi existencia y saber que soy un regalo para el mundo. Con amor ahora elijo mi vida. Con amor ahora elegimos la vida. Reclamo mi derecho a existir por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "342": {
    "id": "systemic-342",
    "title": "Miedo a la tecnología o al futuro",
    "phrase": "“El mundo está cambiando demasiado rápido y no podré adaptarme.”",
    "act": "Frase: Reconozco la resistencia al cambio y a lo nuevo. Hoy elijo fluir con la evolución tecnológica y social con facilidad. Con amor ahora elijo la actualización constante. Con amor ahora elegimos la vida. Reclamo mi capacidad de adaptación por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "343": {
    "id": "systemic-343",
    "title": "Patrón de relaciones con personas no disponibles",
    "phrase": "“Siempre me enamoro de quien no puede o no quiere estar conmigo.”",
    "act": "Frase: Reconozco el patrón de buscar amor donde no hay disponibilidad. Hoy elijo relaciones presentes, abiertas y recíprocas. Con amor ahora elijo la correspondencia amorosa. Con amor ahora elegimos la vida. Reclamo el amor recíproco por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "344": {
    "id": "systemic-344",
    "title": "Miedo a la pérdida de la memoria",
    "phrase": "“Tengo miedo de olvidar quién soy o de perder mi historia.”",
    "act": "Frase: Reconozco el temor a los trastornos cognitivos o al olvido. Hoy elijo la claridad mental y la preservación de mi sabiduría. Con amor ahora elijo la memoria lúcida. Con amor ahora elegimos la vida. Reclamo mi consciencia plena por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "345": {
    "id": "systemic-345",
    "title": "Lealtad al dolor de los niños del linaje",
    "phrase": "“No puedo ser feliz si pienso en lo que sufrieron los niños en mi familia.”",
    "act": "Frase: Reconozco el dolor por las infancias robadas o sufridas en mi árbol. Hoy elijo sanar a mi niño interno y vivir la alegría por todos ellos. Con amor ahora elijo la alegría infantil. Con amor ahora elegimos la vida. Reclamo la inocencia y el gozo por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "346": {
    "id": "systemic-346",
    "title": "Miedo al juicio de los muertos",
    "phrase": "“Siento que mis ancestros me observan y me juzgan desde donde estén.”",
    "act": "Frase: Reconozco la opresión que siento por las expectativas de quienes ya no están. Hoy elijo liberarme y saber que ellos solo desean mi felicidad. Con amor ahora elijo mi propia aprobación. Con amor ahora elegimos la vida. Reclamo mi libertad de juicio por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "347": {
    "id": "systemic-347",
    "title": "Patrón de falta de gratitud",
    "phrase": "“Siempre veo lo que falta y nunca lo que tengo.”",
    "act": "Frase: Reconozco la tendencia a la queja y a la insatisfacción. Hoy elijo la gratitud como mi estado natural y mi imán de bendiciones. Con amor ahora elijo agradecer. Con amor ahora elegimos la vida. Reclamo el estado de gracia por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "348": {
    "id": "systemic-348",
    "title": "Miedo a la propia luz",
    "phrase": "“Me da miedo descubrir lo grande y poderoso que realmente soy.”",
    "act": "Frase: Reconozco el temor a mi propia grandeza y potencial divino. Hoy elijo abrazar mi inmensidad y compartirla con el mundo. Con amor ahora elijo mi gran luz. Con amor ahora elegimos la vida. Reclamo mi divinidad por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "349": {
    "id": "systemic-349",
    "title": "Sentimiento de estar estancado en el pasado",
    "phrase": "“Mi mente siempre vuelve a lo que pudo ser y no fue.”",
    "act": "Frase: Reconozco la nostalgia y el arrepentimiento que me impiden vivir hoy. Hoy elijo soltar el pasado y habitar mi presente con esperanza. Con amor ahora elijo el aquí y ahora. Con amor ahora elegimos la vida. Reclamo mi libertad de tiempo por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "350": {
    "id": "systemic-350",
    "title": "Miedo a la competencia desleal",
    "phrase": "“Si trato de avanzar, otros usarán trampas para detenerme.”",
    "act": "Frase: Reconozco el miedo a la maldad o a la falta de ética ajena. Hoy elijo confiar en mi integridad y en que la vida me protege. Con amor ahora elijo la seguridad. Con amor ahora elegimos la vida. Reclamo el camino despejado por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "351": {
    "id": "systemic-351",
    "title": "Patrón de desvalorización del trabajo",
    "phrase": "“Mi trabajo no vale lo suficiente como para cobrar bien.”",
    "act": "Frase: Reconozco la dificultad para poner precio a mi talento y esfuerzo. Hoy elijo valorar mi tiempo y mis dones, recibiendo el pago justo. Con amor ahora elijo la valoración profesional. Con amor ahora elegimos la vida. Reclamo mi abundancia laboral por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "352": {
    "id": "systemic-352",
    "title": "Miedo a la traición de los socios",
    "phrase": "“No puedo hacer negocios con nadie, siempre me van a estafar.”",
    "act": "Frase: Reconozco las heridas de estafas y abusos comerciales en mi linaje. Hoy elijo socios honestos y relaciones comerciales basadas en la confianza. Con amor ahora elijo la prosperidad compartida. Con amor ahora elegimos la vida. Reclamo la honestidad en los negocios por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "353": {
    "id": "systemic-353",
    "title": "Lealtad a las penas de amor",
    "phrase": "“En mi familia las mujeres/hombres siempre sufren por amor.”",
    "act": "Frase: Reconozco la lealtad al desamor y al llanto por la pareja. Hoy elijo romper ese destino y vivir un amor alegre y correspondido. Con amor ahora elijo el amor feliz. Con amor ahora elegimos la vida. Reclamo la dicha amorosa por derecho divino.",
    "colorClass": "systemic-color-3"
  },
  "354": {
    "id": "systemic-354",
    "title": "Miedo a la falta de espacio personal",
    "phrase": "“Si vivo con alguien, sentiré que me roban el aire.”",
    "act": "Frase: Reconozco la claustrofobia emocional y física en los vínculos. Hoy elijo mi espacio y mi intimidad dentro de una relación sana. Con amor ahora elijo el equilibrio de espacio. Con amor ahora elegimos la vida. Reclamo mi lugar sagrado por derecho divino.",
    "colorClass": "systemic-color-4"
  },
  "355": {
    "id": "systemic-355",
    "title": "Sentimiento de ser un impostor",
    "phrase": "“Algún día se darán cuenta de que no sé nada y me rechazarán.”",
    "act": "Frase: Reconozco el miedo a ser descubierto en mi supuesta incapacidad. Hoy elijo confiar en mi conocimiento y en mi derecho a estar donde estoy. Con amor ahora elijo la autoconfianza. Con amor ahora elegimos la vida. Reclamo mi autoridad profesional por derecho divino.",
    "colorClass": "systemic-color-5"
  },
  "356": {
    "id": "systemic-356",
    "title": "Miedo a la agresión física",
    "phrase": "“El mundo es violento y puedo ser atacado en cualquier momento.”",
    "act": "Frase: Reconozco las memorias de violencia física sufridas en mi linaje. Hoy elijo vivir bajo el manto de la protección y la paz. Con amor ahora elijo la seguridad física. Con amor ahora elegimos la vida. Reclamo mi integridad corporal por derecho divino.",
    "colorClass": "systemic-color-6"
  },
  "357": {
    "id": "systemic-357",
    "title": "Patrón de falta de libertad",
    "phrase": "“Siempre hay algo o alguien que me impide hacer lo que quiero.”",
    "act": "Frase: Reconozco las ataduras externas e internas que limitan mi voluntad. Hoy elijo mi soberanía personal y mi libertad de acción. Con amor ahora elijo ser libre. Con amor ahora elegimos la vida. Reclamo el derecho a la libertad por derecho divino.",
    "colorClass": "systemic-color-7"
  },
  "358": {
    "id": "systemic-358",
    "title": "Miedo a perder la paz interior",
    "phrase": "“Si cambio o crezco, perderé mi paz.”",
    "act": "Frase: Reconozco el miedo a perder la paz interior que ha condicionado mi vida. Hoy elijo vivir mi crecimiento sin perder mi calma. Con amor ahora elijo la paz interior. Con amor ahora elegimos la vida. Reclamo el derecho a la paz en mi crecimiento por derecho divino.",
    "colorClass": "systemic-color-1"
  },
  "359": {
    "id": "systemic-359",
    "title": "Patrón de inseguridad profesional",
    "phrase": "“Nunca seré lo suficientemente bueno/a para avanzar.”",
    "act": "Frase: Reconozco las creencias de inseguridad profesional que me han detenido. Hoy elijo confiar en mi capacidad y avanzar con confianza. Con amor ahora elijo el éxito profesional. Con amor ahora elegimos la vida. Reclamo el derecho a avanzar sin miedo por derecho divino.",
    "colorClass": "systemic-color-2"
  },
  "360": {
    "id": "systemic-360",
    "title": "Miedo a no ser suficiente",
    "phrase": "“Nunca seré suficiente para los demás.”",
    "act": "Frase: Reconozco las creencias de insuficiencia que me han limitado. Hoy elijo reconocer mi valor y saber que soy suficiente. Con amor ahora elijo la suficiencia personal. Con amor ahora elegimos la vida. Reclamo mi valor incondicional por derecho divino.",
    "colorClass": "systemic-color-3"
  }

    };
