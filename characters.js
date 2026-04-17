// ═══════════════════════════════════════════════════
// Personajes Bíblicos — Character Data
// All 5 packs · 84 characters
// Source: Perspicacia para comprender las Escrituras (JW.ORG)
// ═══════════════════════════════════════════════════

// Image paths — add your Midjourney illustrations here
const IMAGES = {
  'Adán':           'images/Adán.jpg',
  'Eva':            'images/Eva.jpg',
  'Abel':           'images/Abel.jpg',
  'Caín':           'images/Caín.jpg',
  'Noé':            'images/Noé.jpg',
  'Abraham':        'images/Abraham.jpg',
  'Sara':           'images/Sara.jpg',
  'Lot':            'images/Lot.jpg',
  'Isaac':          'images/Isaac.jpg',
  'Jacob':          'images/Jacob.jpg',
  'José':           'images/José.jpg',
  'Rebeca':         'images/Rebeca.jpg',
  'Raquel':         'images/Raquel.jpg',
  'Agar':           'images/Agar.jpg',
  'Esaú':           'images/Esaú.jpg',
  'Lea':            'images/Lea.jpg',
  'Judá':           'images/Judá.jpg',
  'Benjamín':       'images/Benjamín.jpg',
  'Nemrod':         'images/Nimrod.jpg',
  'Ismael':         'images/Ismael.jpg',
  'Enoc':           'images/Enoc.jpg',
  'Matusalén':      'images/Matusalén.jpg',
  'Sem':            'images/Sem.jpg',
  'Cam':            'images/Cam.jpg',
  'Jafet':          'images/Jafet.jpg',
  'Melquisedec':    'images/Melquisedec.jpg',
  'La mujer de Lot':'images/La mujer de Lot.jpg',
  'Set':            'images/Set.jpg',
  'Asenat':         'images/Asenat.jpg',
  'Jehová':         'images/Jehová.jpg',
  'Tamar':          'images/Tamar.jpg',
};

// ── Pack 1 · Génesis (30) ─────────────────────────
const CHARS = [
{name:"Adán",title:"El primer hombre",ref:"Génesis 2:7",verse:"Jehová Dios formó al hombre del polvo de la tierra y sopló en su nariz aliento de vida.",rarity:"legendaria",clues:[{diff:0,txt:"Mi nombre en hebreo proviene de una raíz que significa «rojo». Las Escrituras me llaman «hijo de Dios» (Lucas 3:38)."},
{diff:1,txt:"Fui el primero en pronunciar poesía registrada: «Esto por fin es hueso de mis huesos y carne de mi carne»."},
{diff:2,txt:"Jehová me trajo todas las bestias y criaturas voladoras. Les puse nombre a todas, pero no hallé ninguna ayudante según mi género."},
{diff:3,txt:"A diferencia de mi compañera, no fui engañado. Desobedecí con pleno conocimiento y de forma deliberada. (1 Timoteo 2:14)"},
{diff:4,txt:"Jehová me formó del polvo del suelo, sopló en mi nariz aliento de vida, y viví 930 años."}]},
{name:"Eva",title:"La madre de todos los vivientes",ref:"Génesis 3:20",verse:"El hombre llamó Eva a su esposa, porque ella sería la madre de todo ser viviente.",rarity:"legendaria",clues:[{diff:0,txt:"Llegué al mundo de una manera única: no del polvo, sino de algo tomado de otro ser humano."},{diff:1,txt:"Una conversación que tuve en un jardín perfecto cambió el destino de toda la humanidad."},{diff:2,txt:"Fui la primera en desear algo que me habían dicho que no tomara."},{diff:3,txt:"A diferencia de mi esposo, las Escrituras dicen que fui «cabalmente engañada». (1 Timoteo 2:14)"},{diff:4,txt:"Mi nombre significa «viviente». Soy la madre de toda la humanidad."}]},
{name:"Abel",title:"El pastor justo",ref:"Génesis 4:4",verse:"Jehová miró con agrado a Abel y a su ofrenda, pero a Caín y a su ofrenda no le prestó atención.",rarity:"epica",clues:[{diff:0,txt:"Mi ofrenda fue aceptada, aunque no pareciera la más valiosa en apariencia."},{diff:1,txt:"Era pastor; mi trabajo era cuidar ovejas en el campo."},{diff:2,txt:"Hebreos 11:4 dice que mediante mi fe, aunque muerto, aún hablo."},{diff:3,txt:"Mi sangre clamó desde la tierra después de lo que me hizo mi hermano."},{diff:4,txt:"Soy el segundo hijo de los primeros padres de la humanidad. Mi hermano me mató por envidia."}]},
{name:"Caín",title:"El primer asesino",ref:"Génesis 4:8",verse:"Caín se levantó contra su hermano Abel y lo mató.",rarity:"epica",clues:[{diff:0,txt:"Cultivaba la tierra. Mi trabajo era hacer crecer frutos y cosechas del suelo."},{diff:1,txt:"Dios me preguntó directamente: «¿Por qué ha decaído tu semblante?»"},{diff:2,txt:"Después de lo que hice, construí la primera ciudad de la historia."},{diff:3,txt:"Cometí el primer asesinato de la historia humana."},{diff:4,txt:"Maté a mi propio hermano por celos y envidia, tras presentar ofrendas a Dios."}]},
{name:"Noé",title:"El constructor del arca",ref:"Génesis 6:9",verse:"Noé era un hombre justo y sin tacha entre sus contemporáneos. Caminó con el verdadero Dios.",rarity:"legendaria",clues:[{diff:0,txt:"Trabajé 120 años en un proyecto que nadie a mi alrededor comprendía ni creía."},{diff:1,txt:"Construí una estructura de madera de dimensiones monumentales siguiendo especificaciones precisas."},{diff:2,txt:"Fui responsable de preservar representantes de todas las especies animales de la tierra."},{diff:3,txt:"Después del mayor desastre de la humanidad, Dios puso una señal en el cielo como promesa."},{diff:4,txt:"Sobreviví el diluvio universal junto a mi familia dentro del arca que construí."}]},
{name:"Abraham",title:"El padre de la fe",ref:"Génesis 12:1",verse:"Sal de tu tierra, de entre tus parientes, hacia la tierra que yo te mostraré.",rarity:"legendaria",clues:[{diff:0,txt:"Dios me prometió que mis descendientes serían tan numerosos como las estrellas del cielo."},{diff:1,txt:"A los 75 años dejé todo lo conocido para ir a una tierra que no conocía, obedeciendo a Dios."},{diff:2,txt:"Estuve a punto de sacrificar a mi hijo en una montaña, pero Dios proveyó un sustituto."},{diff:3,txt:"Soy considerado padre espiritual en tres de las principales religiones del mundo."},{diff:4,txt:"Soy el padre de la fe, primero del linaje que llevaría al pueblo de Israel."}]},
{name:"Sara",title:"La madre de las naciones",ref:"Génesis 17:15",verse:"A Sarai tu esposa ya no la llamarás Sarai, sino que su nombre será Sara.",rarity:"epica",clues:[{diff:0,txt:"Escuché algo desde la entrada de una tienda que me hizo reír de incredulidad."},{diff:1,txt:"Dios cambió mi nombre como parte de su promesa hacia mí."},{diff:2,txt:"Di a luz por primera vez a una edad humanamente imposible: tenía 90 años."},{diff:3,txt:"Viajé por el desierto junto a mi esposo obedeciendo la llamada de Dios."},{diff:4,txt:"Soy esposa del padre de la fe y se me llama madre de naciones."}]},
{name:"Lot",title:"El sobrino de Abraham",ref:"Génesis 19:16",verse:"Los ángeles lo tomaron de la mano y lo sacaron fuera de la ciudad.",rarity:"rara",clues:[{diff:0,txt:"Algo muy cercano a mí se convirtió en una estatua de sal por desobedecer una advertencia."},{diff:1,txt:"Huí de una ciudad destruida con fuego y azufre caídos del cielo."},{diff:2,txt:"Dos ángeles llegaron a mi casa la noche antes de la destrucción para rescatarme."},{diff:3,txt:"Escapé a las montañas con mis dos hijas. Mi esposa no llegó."},{diff:4,txt:"Soy sobrino de Abraham. Él intercedió por mí ante Dios."}]},
{name:"Isaac",title:"El hijo de la promesa",ref:"Génesis 21:6",verse:"Dios me ha hecho reír, y todos los que se enteren se reirán conmigo.",rarity:"legendaria",clues:[{diff:0,txt:"Mi nombre viene de la risa que provocó el anuncio de mi nacimiento."},{diff:1,txt:"Nací de una madre que tenía 90 años."},{diff:2,txt:"Fui atado sobre un altar en un monte sin comprender del todo lo que pasaba."},{diff:3,txt:"Un animal apareció entre los arbustos y ocupó mi lugar en el momento decisivo."},{diff:4,txt:"Soy el hijo que Dios prometió a Abraham, el hijo de la promesa."}]},
{name:"Jacob",title:"El que lucha con Dios",ref:"Génesis 32:28",verse:"Tu nombre ya no será Jacob, sino Israel, porque has luchado con Dios y con hombres.",rarity:"legendaria",clues:[{diff:0,txt:"Una noche vi una escalera que llegaba hasta el cielo con ángeles subiendo y bajando."},{diff:1,txt:"Trabajé 14 años para poder casarme con la mujer que amaba."},{diff:2,txt:"Luché toda una noche con un ser divino y no cedí hasta recibir su bendición."},{diff:3,txt:"Dios cambió mi nombre como señal de transformación espiritual."},{diff:4,txt:"Mis doce hijos se convirtieron en las doce tribus del pueblo de Israel."}]},
{name:"José",title:"El soñador",ref:"Génesis 37:19",verse:"¡Miren, viene ese soñador!",rarity:"legendaria",clues:[{diff:0,txt:"Soñé que el sol, la luna y once estrellas se inclinaban ante mí."},{diff:1,txt:"Mi padre me hizo una prenda especial que despertó la envidia de mis hermanos."},{diff:2,txt:"Fui vendido como esclavo por quienes más debían protegerme."},{diff:3,txt:"Pasé de esclavo y preso a ser el segundo hombre más poderoso de Egipto."},{diff:4,txt:"Dios me dio la capacidad de interpretar sueños, lo que cambió mi destino."}]},
{name:"Rebeca",title:"La novia elegida por Dios",ref:"Génesis 24:67",verse:"Isaac la amó. Así se consoló Isaac después de la muerte de su madre.",rarity:"epica",clues:[{diff:0,txt:"Un día di agua a un extraño junto a un pozo sin saber que cambiaría mi vida."},{diff:1,txt:"Ofrecí dar agua también a los camellos del extraño, un gesto que lo convenció todo."},{diff:2,txt:"Decidí dejar a mi familia y viajar lejos para casarme con alguien que no conocía."},{diff:3,txt:"Tuve dos hijos gemelos que lucharon dentro de mí antes de nacer."},{diff:4,txt:"Soy la esposa de Isaac, el hijo de la promesa."}]},
{name:"Raquel",title:"El amor de Jacob",ref:"Génesis 29:18",verse:"Jacob amó a Raquel y trabajó siete años por ella, y le parecieron pocos días.",rarity:"epica",clues:[{diff:0,txt:"Conocí al amor de mi vida mientras cuidaba ovejas junto a un pozo."},{diff:1,txt:"Durante mucho tiempo no pude tener hijos, lo que me causó gran dolor."},{diff:2,txt:"Un hombre trabajó siete años por mí y le parecieron pocos días por el amor que me tenía."},{diff:3,txt:"Morí dando a luz a mi segundo hijo en un camino lejos de casa."},{diff:4,txt:"Soy el gran amor de Jacob, madre de José y Benjamín."}]},
{name:"Agar",title:"La esclava que habló con Dios",ref:"Génesis 16:13",verse:"Tú eres el Dios que me ve.",rarity:"epica",clues:[{diff:0,txt:"Fui abandonada en el desierto con mi hijo y pensé que íbamos a morir."},{diff:1,txt:"Un ángel me mostró un pozo de agua en el momento más desesperado."},{diff:2,txt:"Puse a Dios un nombre que significa «el Dios que me ve»."},{diff:3,txt:"Soy madre de un hijo cuya descendencia forma una gran nación."},{diff:4,txt:"Soy esclava egipcia que sirvió a Sara, esposa de Abraham."}]},
{name:"Esaú",title:"El primogénito que vendió su herencia",ref:"Génesis 25:34",verse:"Así menospreció Esaú su derecho de primogenitura.",rarity:"rara",clues:[{diff:0,txt:"Un día llegué del campo tan hambriento que tomé una decisión que nunca pude deshacer."},{diff:1,txt:"Era un hábil cazador, un hombre del campo que amaba la naturaleza."},{diff:2,txt:"Nací junto a mi hermano gemelo; él salió agarrando mi talón."},{diff:3,txt:"Me apodaban Edom —«rojo»— por lo que pedí aquel día."},{diff:4,txt:"Vendí mi derecho de primogenitura a mi hermano Jacob por un plato de lentejas."}]},
{name:"Lea",title:"La esposa no amada",ref:"Génesis 29:31",verse:"Cuando Jehová vio que Lea era la que no era amada, hizo que pudiera concebir.",rarity:"rara",clues:[{diff:0,txt:"La Biblia menciona mis ojos de manera especial al describirme."},{diff:1,txt:"Mi esposo amaba a mi hermana más que a mí."},{diff:2,txt:"Fui madre de seis hijos y una hija, más que cualquier otra esposa de Jacob."},{diff:3,txt:"Dios vio mi sufrimiento y me hizo fértil para consolarme."},{diff:4,txt:"De mi hijo Judá desciende el linaje del Mesías."}]},
{name:"Judá",title:"El antepasado del Mesías",ref:"Génesis 49:10",verse:"El cetro no se apartará de Judá, hasta que llegue el que tiene el derecho a él.",rarity:"epica",clues:[{diff:0,txt:"Propuse una alternativa a matar a mi hermano: venderlo por veinte piezas de plata."},{diff:1,txt:"Mi padre me comparó con un cachorro de león en su bendición final."},{diff:2,txt:"La profecía dice que el cetro real nunca se apartará de mi tribu."},{diff:3,txt:"Reconocí públicamente mi culpa cuando la situación me confrontó con la verdad."},{diff:4,txt:"De mi linaje descienden el rey David y, siglos después, Jesucristo."}]},
{name:"Benjamín",title:"El hijo del dolor",ref:"Génesis 35:18",verse:"Al morir, lo llamó Ben-oni, hijo de mi dolor, pero su padre lo llamó Benjamín.",rarity:"rara",clues:[{diff:0,txt:"Mi madre murió en el momento de darme a luz, lejos de casa."},{diff:1,txt:"Mi padre tardó años en dejarme ir a Egipto por miedo a perderme."},{diff:2,txt:"En Egipto hallaron algo valioso escondido en mi saco que yo no había puesto."},{diff:3,txt:"Soy el hijo menor de Jacob, el duodécimo patriarca."},{diff:4,txt:"Mi tribu dio a Israel su primer rey: el rey Saúl."}]},
{name:"Nemrod",title:"El primer poderoso de la tierra",ref:"Génesis 10:9",verse:"Como Nemrod, poderoso cazador delante de Jehová.",rarity:"epica",clues:[{diff:0,txt:"Era famoso por cazar animales salvajes. Nadie lo hacía como yo."},{diff:1,txt:"Fundé y gobernaba las primeras grandes ciudades: Babel y Nínive."},{diff:2,txt:"Fui el primer hombre de la historia en construir un reino e imponer su poder."},{diff:3,txt:"Mi nombre se convirtió en sinónimo de poder y dominio."},{diff:4,txt:"Soy nieto de Noé, hijo de Cus, bisnieto del que sobrevivió el diluvio."}]},
{name:"Ismael",title:"El hijo del desierto",ref:"Génesis 16:12",verse:"Será un hombre indómito como asno salvaje.",rarity:"rara",clues:[{diff:0,txt:"Crecí en el desierto y me convertí en hábil arquero."},{diff:1,txt:"De pequeño, un ángel salvó mi vida mostrando a mi madre un pozo de agua."},{diff:2,txt:"Soy el primer hijo de Abraham, pero no el hijo de la promesa."},{diff:3,txt:"Me reuní con mi hermano Isaac para enterrar a nuestro padre Abraham."},{diff:4,txt:"Padre de doce príncipes; se me considera antepasado de los pueblos árabes."}]},
{name:"Enoc",title:"El que caminó con Dios",ref:"Génesis 5:24",verse:"Enoc caminó con el verdadero Dios, y luego desapareció porque Dios se lo llevó.",rarity:"legendaria",clues:[{diff:0,txt:"La Biblia dice que hice algo especial junto a Dios durante 300 años."},{diff:1,txt:"A diferencia de mis contemporáneos, viví relativamente poco: 365 años."},{diff:2,txt:"Soy padre de Matusalén, el hombre más anciano de la Biblia."},{diff:3,txt:"Soy una de las únicas dos personas en la Biblia que no murieron de forma natural."},{diff:4,txt:"Desaparecí sin morir porque Dios se me llevó."}]},
{name:"Matusalén",title:"El hombre más anciano",ref:"Génesis 5:27",verse:"Matusalén vivió en total 969 años, y luego murió.",rarity:"rara",clues:[{diff:0,txt:"Si calculas el año de mi muerte según la Biblia, coincide con el año del diluvio."},{diff:1,txt:"Mi nombre se usa en muchos idiomas para describir algo muy, muy anciano."},{diff:2,txt:"Soy hijo de Enoc, el hombre que caminó con Dios y desapareció sin morir."},{diff:3,txt:"Viví más que cualquier otra persona registrada en la Biblia."},{diff:4,txt:"Llegué a los 969 años, el récord absoluto de longevidad en las Escrituras."}]},
{name:"Sem",title:"El antepasado de los semitas",ref:"Génesis 9:26",verse:"Bendito sea Jehová, el Dios de Sem.",rarity:"rara",clues:[{diff:0,txt:"Sobreviví uno de los eventos más catastróficos de la historia dentro de una estructura de madera."},{diff:1,txt:"Junto a un hermano cubrí la desnudez de nuestro padre caminando hacia atrás."},{diff:2,txt:"De mi descendencia vienen los patriarcas más importantes del Antiguo Testamento."},{diff:3,txt:"Viví 600 años después del gran diluvio."},{diff:4,txt:"Soy el hijo mayor de Noé y navegué con él en el arca."}]},
{name:"Cam",title:"El hijo maldecido",ref:"Génesis 9:22",verse:"Cam vio la desnudez de su padre y se lo contó a sus dos hermanos.",rarity:"comun",clues:[{diff:0,txt:"Vi algo que no debía y lo conté a mis hermanos en lugar de remediarlo con discreción."},{diff:1,txt:"Mi falta de respeto tuvo consecuencias para mi hijo y sus descendientes."},{diff:2,txt:"De mí descienden los pueblos que habitaron África y Canaán."},{diff:3,txt:"Sobreviví el diluvio dentro del arca junto a mi padre y mis hermanos."},{diff:4,txt:"Soy el segundo hijo de Noé, hermano de Sem y Jafet."}]},
{name:"Jafet",title:"El padre de los pueblos del norte",ref:"Génesis 9:27",verse:"Que Dios amplíe el territorio de Jafet.",rarity:"comun",clues:[{diff:0,txt:"Junto a un hermano cubrí la desnudez de nuestro padre caminando de espaldas."},{diff:1,txt:"De mí descienden los pueblos que poblaron Europa y Asia."},{diff:2,txt:"La bendición de mi padre decía que Dios ampliaría mi territorio."},{diff:3,txt:"Sobreviví el diluvio universal dentro del arca de mi padre Noé."},{diff:4,txt:"Soy el tercer hijo de Noé."}]},
{name:"Melquisedec",title:"El rey-sacerdote misterioso",ref:"Génesis 14:18",verse:"Melquisedec, rey de Salem, sacó pan y vino. Era sacerdote del Dios Altísimo.",rarity:"legendaria",clues:[{diff:0,txt:"La Biblia no menciona quiénes fueron mis padres ni cuándo nací o morí."},{diff:1,txt:"Salí a recibir a un guerrero victorioso ofreciéndole pan y vino."},{diff:2,txt:"El hombre más importante de la fe me dio la décima parte de todo lo que había ganado."},{diff:3,txt:"Era rey de Salem, ciudad que más tarde se llamaría Jerusalén."},{diff:4,txt:"Soy rey y sacerdote a la vez; las Escrituras me consideran tipo profético del Mesías."}]},
{name:"La mujer de Lot",title:"La que miró atrás",ref:"Génesis 19:26",verse:"La esposa de Lot miró hacia atrás, y se convirtió en una estatua de sal.",rarity:"rara",clues:[{diff:0,txt:"Huí de una ciudad que ardía completamente destruida por el cielo."},{diff:1,txt:"Un ángel nos advirtió que no mirásemos atrás bajo ningún concepto."},{diff:2,txt:"Quizá pensé en mis otras hijas que se quedaron en la ciudad."},{diff:3,txt:"Me convertí en símbolo bíblico del apego al mundo pasado."},{diff:4,txt:"Desobedecí la única instrucción que me dieron y me convertí en estatua de sal."}]},
{name:"Set",title:"El linaje de esperanza",ref:"Génesis 4:25",verse:"Dios me ha dado otra descendencia en lugar de Abel, a quien mató Caín.",rarity:"rara",clues:[{diff:0,txt:"Nací para reemplazar a alguien que había sido asesinado."},{diff:1,txt:"En mi época los hombres comenzaron a invocar el nombre de Dios."},{diff:2,txt:"De mi línea descienden Noé, Abraham y todos los patriarcas importantes."},{diff:3,txt:"Soy el tercer hijo de los primeros padres de la humanidad."},{diff:4,txt:"Mi madre dijo que Dios me dio en lugar de Abel, a quien mató Caín."}]},
{name:"Asenat",title:"La esposa del soñador",ref:"Génesis 41:45",verse:"El faraón le dio por esposa a Asenat, hija de Potifera, sacerdote de On.",rarity:"comun",clues:[{diff:0,txt:"Soy hija de un sacerdote del templo de la ciudad egipcia de Heliópolis."},{diff:1,txt:"Soy egipcia, de la élite religiosa y política de Egipto."},{diff:2,txt:"El faraón organizó mi matrimonio con el hombre más poderoso de Egipto tras el rey."},{diff:3,txt:"Fui madre de Manasés y Efraín, dos de las doce tribus de Israel."},{diff:4,txt:"Soy la esposa de José, el soñador que pasó de esclavo a gobernador."}]},
{name:"Tamar",title:"La nuera valiente",ref:"Génesis 38:26",verse:"Ella es más justa que yo, ya que no la di a mi hijo Sela.",rarity:"rara",clues:[{diff:0,txt:"Me disfracé con un velo para que no me reconocieran en un cruce de caminos."},{diff:1,txt:"Cuando se descubrió lo que había hecho, el que me acusaba admitió que yo era más justa."},{diff:2,txt:"Guardé como prueba un cordón carmesí, un sello y un bastón."},{diff:3,txt:"Tuve gemelos: a uno le ataron el cordón primero, pero salió el otro."},{diff:4,txt:"Soy nuera de Judá y aparezco en el linaje ancestral de Jesucristo."}]}
];

// ═══════════════════════════════════════════════════
// PACK 2 — Éxodo a Deuteronomio (12 personajes)
// ═══════════════════════════════════════════════════
const PACK2 = [
{name:"Moisés",title:"El libertador de Israel",ref:"Éxodo 3:10",verse:"Ven, pues, y te enviaré a Faraón para que saques a mi pueblo, los hijos de Israel, de Egipto.",rarity:"legendaria",pack:"p2",
clues:[
{diff:0,txt:"Escribí los primeros cinco libros de la Biblia, así como el libro de Job y el Salmo 90. Ningún escritor humano redactó más páginas de las Escrituras que yo. (Deuteronomio 31:9)"},
{diff:1,txt:"La Biblia me describe como «con mucho el más manso de todos los hombres que había sobre la superficie del suelo». No era debilidad: era una fortaleza cultivada durante 40 años en el desierto. (Números 12:3)"},
{diff:2,txt:"Un cometido que me encargaron al final de mi vida me impidió entrar en la Tierra Prometida. Golpeé una roca cuando Dios me había dicho que le hablara. (Números 20:11,12)"},
{diff:3,txt:"Durante 40 años guié a quizás tres millones de personas por el desierto. Antes había pasado otros 40 años como pastor en Madián, lejos de Egipto, tras huir por matar a un egipcio."},
{diff:4,txt:"Fui salvado de la muerte cuando era bebé, puesto en una cesta de papiro en el Nilo. La hija del faraón me rescató y mi propia madre me crió pagada por la princesa."}
]},
{name:"Aarón",title:"El primer sumo sacerdote",ref:"Éxodo 28:1",verse:"Tú harás que se acerquen a ti Aarón tu hermano, y sus hijos con él, de entre los hijos de Israel, para que ejerzan el sacerdocio en mi favor.",rarity:"epica",pack:"p2",
clues:[
{diff:0,txt:"Fui el portavoz de mi hermano porque él sentía que era «lento de boca y lento de lengua». Dios me dijo: «Él hablará por ti al pueblo». (Éxodo 4:14-16)"},
{diff:1,txt:"Mientras mi hermano estaba 40 días en la montaña, cometí el mayor error de mi vida: fundí los pendientes de oro del pueblo y construí una imagen de becerro para que la adoraran."},
{diff:2,txt:"Muerto a los 123 años, no en cama sino en la cima del monte Hor, donde mi hermano le quitó mis ropas sacerdotales y vistió con ellas a mi hijo Eleazar, mi sucesor."},
{diff:3,txt:"Con mi hermano, sostuve en alto sus brazos durante una batalla. Cuando los bajaban, Israel perdía; cuando los manteníamos levantados, Israel vencía. (Éxodo 17:12)"},
{diff:4,txt:"Soy hermano mayor de Moisés y Miriam. Dios me consagró como primer sumo sacerdote de Israel, cargo que heredaron mis descendientes durante siglos."}
]},
{name:"Miriam",title:"La profetisa que cantó",ref:"Éxodo 15:20",verse:"Miriam la profetisa, hermana de Aarón, tomó en su mano el tamboril, y todas las mujeres salieron detrás de ella con tamboriles y en danzas.",rarity:"rara",pack:"p2",
clues:[
{diff:0,txt:"De niña, vigilé desde la orilla del Nilo la canasta que flotaba con un bebé dentro, y cuando la hija del faraón lo encontró, propuse a nuestra propia madre como nodriza."},
{diff:1,txt:"Lideré a las mujeres de Israel en canto y danza al cruzar el Mar Rojo, entonando uno de los primeros himnos de victoria registrados en las Escrituras."},
{diff:2,txt:"Critiqué a mi hermano por la mujer con quien se había casado. Como castigo, quedé cubierta de lepra durante siete días, tiempo durante el cual todo Israel esperó sin moverse."},
{diff:3,txt:"Soy la mayor de los tres hijos de Amram y Jocabed. Desde pequeña demostré iniciativa y valentía al vigilar al bebé en el Nilo sin que nadie se lo pidiera."},
{diff:4,txt:"Soy hermana de Moisés y Aarón. La Biblia me llama «profetisa» y lideré a las mujeres israelitas. Morí en el desierto de Zin antes de llegar a la Tierra Prometida."}
]},
{name:"Jocabed",title:"La madre que desafió al faraón",ref:"Éxodo 2:3",verse:"Cuando ya no pudo ocultarlo más, tomó para él un arca de junco y la calafateó con asfalto y brea.",rarity:"rara",pack:"p2",
clues:[
{diff:0,txt:"El faraón de Egipto ordenó matar a todos los bebés varones hebreos al nacer. Yo ignoré ese decreto durante tres meses, arriesgando mi vida para proteger a mi hijo."},
{diff:1,txt:"Cuando ya no pude ocultarlo más, construí una pequeña embarcación de papiro impermeabilizada con asfalto y brea, y lo coloqué entre los juncos del río Nilo."},
{diff:2,txt:"El plan funcionó: la hija del faraón encontró al bebé, se compadeció de él, y gracias a la astucia de mi hija mayor, me contrataron para criarle y amamantarle yo misma."},
{diff:3,txt:"Soy hija de la tribu de Leví. Mis tres hijos —Miriam, Aarón y el más pequeño— se convirtieron en los tres grandes líderes del éxodo de Israel de Egipto."},
{diff:4,txt:"Soy la madre de Moisés. La Biblia me llama en Hebreos 11:23 como ejemplo de fe, pues no temí el edicto del rey al esconder a mi hijo recién nacido durante tres meses."}
]},
{name:"Séfora",title:"La esposa de Moisés",ref:"Éxodo 4:25",verse:"Séfora tomó un pedernal y cortó el prepucio de su hijo.",rarity:"comun",pack:"p2",
clues:[
{diff:0,txt:"Conocí a mi futuro esposo cuando era un fugitivo que llegó al pozo donde yo y mis hermanas abrevábamos el rebaño de nuestro padre. Él defendió a las mujeres de unos pastores."},
{diff:1,txt:"En un momento de crisis durante el viaje a Egipto, actué con rapidez para salvar la vida de mi esposo: circuncidé a nuestro hijo con un pedernal y toqué los pies de mi esposo."},
{diff:2,txt:"Mi padre Jetro era sacerdote de Madián. Cuando me casé con el fugitivo hebreo que llegó a nuestra tierra, tuve dos hijos con él: Gersón y Eliezer."},
{diff:3,txt:"Soy hija de Jetro. Estuve separada de mi esposo durante parte del éxodo y mi padre me llevó con mis hijos para reencontrarme con él en el desierto."},
{diff:4,txt:"Soy la esposa madianita de Moisés. Aunque era de un pueblo diferente, me uní al pueblo de Dios junto con mi esposo y mis hijos."}
]},
{name:"Jetro",title:"El suegro sabio",ref:"Éxodo 18:17",verse:"Lo que estás haciendo no es bueno. Tanto tú como este pueblo que está contigo ciertamente se agotarán.",rarity:"rara",pack:"p2",
clues:[
{diff:0,txt:"Al ver a mi yerno juzgando al pueblo de la mañana a la noche, sin descanso, le di un consejo de gestión que sigue siendo válido: delega en personas capaces y no trates de hacerlo todo tú solo."},
{diff:1,txt:"Soy sacerdote de Madián. Cuando un fugitivo extranjero llegó a mi tierra, lo acogí, le di trabajo como pastor, y más tarde le di a mi hija en matrimonio."},
{diff:2,txt:"Cuando me enteré de los milagros que Dios había hecho por Israel, pronuncié una de las declaraciones de fe más notables del Éxodo: «¡Ahora sé que Jehová es más grande que todos los dioses!»"},
{diff:3,txt:"Fui el primero en sugerirle a Moisés que nombrara jueces subordinados para gobernar grupos de mil, cien, cincuenta y diez personas, aliviando así la carga del liderazgo."},
{diff:4,txt:"Soy el suegro de Moisés y padre de Séfora. También llamado Reuel, fui un hombre sabio que reconoció la mano de Dios en el éxodo y aportó un consejo organizativo invaluable."}
]},
{name:"Caleb",title:"El espía de corazón diferente",ref:"Números 14:24",verse:"A mi siervo Caleb, por cuanto hubo en él un espíritu diferente y me siguió de todo corazón, lo introduciré en la tierra a la que él fue, y su descendencia la heredará.",rarity:"epica",pack:"p2",
clues:[
{diff:0,txt:"Fui uno de los doce espías enviados a explorar Canaán. Mientras diez volvieron con un informe que aterrorizó al pueblo, solo yo y otro compañero dimos un informe de fe."},
{diff:1,txt:"Dios prometió que yo entraría en la tierra prometida porque tuve «un espíritu diferente». Esa promesa se cumplió 45 años después, cuando a los 85 años pedí el monte más difícil."},
{diff:2,txt:"A los 85 años declaré: «Estoy tan fuerte hoy como el día en que Moisés me envió». Y pedí el monte habitado por los anaquitas gigantes, diciéndoles que con Jehová los echaría."},
{diff:3,txt:"Soy de la tribu de Judá. Junto con Josué, fui el único de mi generación que sobrevivió los 40 años de vagar por el desierto como castigo por la incredulidad del pueblo."},
{diff:4,txt:"Soy Caleb, hijo de Jefone. Mi fe inquebrantable contrastó con el miedo de los otros diez espías. Por seguir a Dios de todo corazón, Dios me prometió que vería la tierra prometida."}
]},
{name:"Coré",title:"El rebelde del tabernáculo",ref:"Números 16:3",verse:"¡Basta ya de vosotros! Porque toda la congregación, todos ellos son santos, y Jehová está entre ellos.",rarity:"rara",pack:"p2",
clues:[
{diff:0,txt:"Me rebelé contra el liderazgo de Moisés y Aarón argumentando que todos en Israel eran igualmente santos y que ellos se habían exaltado demasiado. Reuní 250 líderes respetados para respaldarme."},
{diff:1,txt:"Dios propuso una prueba definitiva: que cada uno de los 250 rebeldes tomara un incensario con fuego y se presentara ante el tabernáculo. El resultado del juicio divino sería inequívoco."},
{diff:2,txt:"La tierra se abrió bajo mis pies, bajo los de mis compañeros y bajo todos los de mi casa, y la tierra los tragó vivos. Los 250 que sostenían incensarios fueron consumidos por fuego."},
{diff:3,txt:"Soy levita de la familia de Quehat, primo de Moisés y Aarón. No me bastaba con el privilegio de servir en el tabernáculo; quería también el sacerdocio."},
{diff:4,txt:"Soy Coré, el rebelde que desafió la autoridad de Moisés y Aarón. Mi rebelión se convirtió en un ejemplo permanente de lo que le sucede a quien desafía la autoridad designada por Dios."}
]},
{name:"Balaam",title:"El profeta de las naciones",ref:"Números 22:38",verse:"¿Tengo yo ahora algún poder para decir algo? Las palabras que Dios ponga en mi boca, eso hablaré.",rarity:"rara",pack:"p2",
clues:[
{diff:0,txt:"El rey de Moab me contrató con regalos para que maldijera a Israel. Intenté hacerlo tres veces, pero cada vez que abría la boca, brotaban bendiciones en lugar de maldiciones."},
{diff:1,txt:"En mi camino hacia el rey, el asna que montaba se detuvo tres veces porque vio un ángel que yo no podía ver. La golpeé las tres veces. Entonces Dios abrió la boca del animal y el asna me habló."},
{diff:2,txt:"Aunque transmití las palabras de Dios fielmente, en secreto le aconsejé al rey de Moab cómo hacer que Israel pecara: enviando mujeres moabitas que sedujeron al pueblo a la idolatría."},
{diff:3,txt:"Pronuncié una de las profecías mesiánicas más antiguas del Antiguo Testamento: «Una estrella saldrá de Jacob, un cetro se levantará de Israel». (Números 24:17)"},
{diff:4,txt:"Soy Balaam, hijo de Beor, un vidente contratado por Balac para maldecir a Israel. Mi historia enseña que Dios puede usar incluso a personas motivadas por codicia para transmitir su mensaje."}
]},
{name:"Finees",title:"El celo que detuvo la plaga",ref:"Números 25:11",verse:"Finees ha apartado mi cólera de los hijos de Israel, al tomar celo en medio de ellos con mi celo.",rarity:"comun",pack:"p2",
clues:[
{diff:0,txt:"Una plaga mataba israelitas porque el pueblo se había unido a los baales de Moab. Vi a un príncipe de Israel entrar con una mujer madianita al campamento y actué de inmediato."},
{diff:1,txt:"Tomé una lanza, entré en la tienda de aquel israelita y los traspasé a ambos con una sola lanzada. En ese momento la plaga que había matado a 24.000 personas se detuvo."},
{diff:2,txt:"Dios me hizo un pacto especial: el «pacto de paz» y el «pacto del sacerdocio permanente» para mí y mis descendientes, como recompensa por haber mostrado celo por su nombre."},
{diff:3,txt:"Soy nieto de Aarón e hijo de Eleazar. También fui quien lideró la campaña contra los madianitas después de que se descubrió el consejo de Balaam de usar a las mujeres para corromper a Israel."},
{diff:4,txt:"Soy Finees, sumo sacerdote de Israel. Mi acto impulsivo de celo detiene una plaga mortal y me convierte en símbolo bíblico del fervor por la pureza de adoración."}
]},
{name:"Bezalel",title:"El artesano del tabernáculo",ref:"Éxodo 31:3",verse:"Lo he llenado del espíritu de Dios, en sabiduría, en inteligencia, en conocimiento y en todo oficio.",rarity:"comun",pack:"p2",
clues:[
{diff:0,txt:"Dios me eligió específicamente y me llenó de su espíritu para diseñar y construir el lugar más sagrado de Israel. Era la primera vez registrada en la Biblia que el espíritu divino capacitaba a alguien para arte y artesanía."},
{diff:1,txt:"Construí el arca del pacto, el candelabro de oro de siete brazos, el altar de incienso, la mesa del pan de la proposición y todos los utensilios del tabernáculo. (Éxodo 37)"},
{diff:2,txt:"Trabajé con Aholiab y con todos los artesanos dotados de Israel. Según el relato, el pueblo trajo tantas ofrendas voluntarias para el tabernáculo que Moisés tuvo que decirles que pararan."},
{diff:3,txt:"Soy de la tribu de Judá, nieto de Hur. Mi nombre significa «a la sombra de Dios». Fui el director principal del proyecto de construcción del tabernáculo en el desierto."},
{diff:4,txt:"Soy Bezalel, el maestro artesano ungido por Dios para construir el tabernáculo. Mi habilidad en trabajo con oro, plata, bronce, piedra y madera quedó registrada como don del espíritu divino."}
]},
{name:"Las parteras Sifra y Fúa",title:"Las que desafiaron al faraón",ref:"Éxodo 1:17",verse:"Pero las parteras temieron a Dios y no hicieron como el rey de Egipto les había mandado, sino que dejaron vivir a los niños.",rarity:"comun",pack:"p2",
clues:[
{diff:0,txt:"El faraón nos convocó en privado y nos ordenó matar a todos los bebés varones hebreos en el momento de nacer. Era un decreto real en el país más poderoso del mundo."},
{diff:1,txt:"Desobedecimos la orden del hombre más poderoso de la Tierra porque temíamos más a Dios que al faraón. Cuando el rey nos interrogó, respondimos con astucia que las mujeres hebreas daban a luz antes de que llegáramos."},
{diff:2,txt:"Nuestra desobediencia civil fue la primera del tipo registrada en la Biblia. Fue motivada no por rebeldía sino por conciencia moral y temor a Dios."},
{diff:3,txt:"Dios recompensó nuestra valentía: «Dios trató bien a las parteras, y el pueblo se multiplicó y se hizo muy fuerte». Además, Dios nos dio casas, es decir, familias y descendencia. (Éxodo 1:20,21)"},
{diff:4,txt:"Somos Sifra y Fúa, dos parteras hebreas o que atendían partos de hebreas en Egipto. Nuestra desobediencia salvó la vida de los bebés varones hebreos, posiblemente incluyendo al mismo Moisés."}
]}
];

// ═══════════════════════════════════════════════════
// PACK 3 — Josué, Jueces y Rut (12 personajes)
// ═══════════════════════════════════════════════════
const PACK3 = [
{name:"Josué",title:"El conquistador fiel",ref:"Josué 1:9",verse:"¿No te lo he mandado yo? Sé animoso y fuerte. No temas ni te desmayes, porque Jehová tu Dios estará contigo adondequiera que vayas.",rarity:"legendaria",pack:"p3",
clues:[
{diff:0,txt:"Durante la batalla de Gabaón pedí algo que nunca nadie había pedido: que el sol y la luna se detuvieran. «El sol se detuvo y la luna se paró» hasta que la nación tomó venganza. (Josué 10:12-14)"},
{diff:1,txt:"Antes de la conquista envié dos espías a Jericó. Ellos se alojaron en casa de una mujer cuya ayuda fue crucial para la supervivencia de ellos y de toda su familia."},
{diff:2,txt:"Bajo mi mando, el pueblo rodeó Jericó en silencio durante seis días. Al séptimo, lo rodearon siete veces, los sacerdotes tocaron las trompetas y el pueblo gritó. Los muros cayeron."},
{diff:3,txt:"Serví fielmente a Moisés durante décadas como su asistente antes de ser su sucesor. Fui uno de los dos espías que dieron un informe de fe cuando los otros diez sembraron terror."},
{diff:4,txt:"Soy Josué hijo de Nun, sucesor de Moisés y líder de la conquista de Canaán. Mi vida completa es un ejemplo de lo que significa confiar en Dios y mantener una fe inquebrantable de principio a fin."}
]},
{name:"Rahab",title:"La que escondió a los espías",ref:"Josué 2:11",verse:"Jehová vuestro Dios es Dios arriba en los cielos y abajo en la tierra.",rarity:"epica",pack:"p3",
clues:[
{diff:0,txt:"Vivía en la muralla de la ciudad más temida de Canaán. Cuando llegaron dos extranjeros a mi casa, los escondí bajo los tallos de lino en el tejado y mentí a los soldados que los buscaban."},
{diff:1,txt:"Como señal de protección, colgué un cordón de hilo escarlata en mi ventana, tal como los espías me instruyeron. Toda mi familia reunida en mi casa quedó a salvo cuando cayeron los muros."},
{diff:2,txt:"Era conocida como prostituta en Jericó. Sin embargo, la carta a los Hebreos la menciona en la lista de los héroes de la fe, junto con Abraham y Moisés. (Hebreos 11:31)"},
{diff:3,txt:"Declaré a los espías que todo Canaán temblaba de miedo ante Israel porque habían oído lo que Dios había hecho con Egipto y en el desierto. Era mi demostración de fe."},
{diff:4,txt:"Soy Rahab, la prostituta de Jericó que protegió a los espías de Josué. Terminé siendo antepasada del rey David y, según el Evangelio de Mateo, del propio Jesucristo."}
]},
{name:"Acán",title:"El que tomó lo consagrado",ref:"Josué 7:21",verse:"Cuando vi entre los despojos un manto babilónico muy bueno, y doscientos siclos de plata y un lingote de oro, los codicié y los tomé.",rarity:"rara",pack:"p3",
clues:[
{diff:0,txt:"Antes de atacar Jericó, Dios había declarado que todo en la ciudad estaba «dedicado a la destrucción». Nada debía tomarse para uso personal. Yo ignoré esa orden."},
{diff:1,txt:"Escondí bajo tierra, dentro de mi tienda, un manto de Babilonia, 200 siclos de plata y un lingote de oro de cincuenta siclos. Pensé que nadie lo sabría."},
{diff:2,txt:"A causa de lo que hice, Israel sufrió una derrota vergonzosa ante la pequeña ciudad de Hai. Dios le dijo a Josué que alguien había tomado cosas consagradas. La investigación terminó en mi tienda."},
{diff:3,txt:"Cuando Josué me interrogó, confesé todo. Pero la confesión llegó demasiado tarde. Fui llevado con toda mi familia y mis posesiones al valle de Acor, donde todos fuimos lapidados y quemados."},
{diff:4,txt:"Soy Acán, de la tribu de Judá. Mi codicia secreta causó la derrota de un ejército entero y la muerte de 36 soldados. Mi historia enseña que el pecado oculto tiene consecuencias colectivas."}
]},
{name:"Débora",title:"La jueza y profetisa de Israel",ref:"Jueces 4:4",verse:"Débora, profetisa, mujer de Lapidot, ella juzgaba a Israel en aquel tiempo.",rarity:"legendaria",pack:"p3",
clues:[
{diff:0,txt:"Vivía bajo una palmera en la región montañosa. La gente venía de todo Israel a consultarme sus casos. Era la única mujer en toda la Biblia que ejerció simultáneamente como jueza y profetisa."},
{diff:1,txt:"Convoqué a un general llamado Barac y le transmití la orden de Dios de atacar al comandante cananeo Sísara con sus 900 carros de hierro. Él se negó a ir sin mí, así que fui con él."},
{diff:2,txt:"Predije que la victoria definitiva sobre Sísara no sería de Barac sino de una mujer. Así fue: una ama de casa llamada Jael mató al comandante enemigo mientras dormía en su tienda."},
{diff:3,txt:"Compuse y canté con Barac uno de los poemas más antiguos de la Biblia, el Cántico de Débora, que describe la batalla y celebra a quienes ayudaron y condena a quienes no lo hicieron."},
{diff:4,txt:"Soy Débora, la cuarta jueza de Israel. Me llaman «madre de Israel» en el cántico que lleva mi nombre. Mi historia muestra que el liderazgo fiel no depende del género sino del carácter."}
]},
{name:"Gedeón",title:"El guerrero de los 300",ref:"Jueces 6:14",verse:"Ve con esta tu fuerza y salva a Israel de la mano de los madianitas. ¿No te envío yo?",rarity:"epica",pack:"p3",
clues:[
{diff:0,txt:"Un ángel me llamó «valiente guerrero» mientras yo trillaba trigo en secreto dentro de un lagar para que los madianitas no me lo robaran. Era una imagen irónica de alguien que no se sentía valioso."},
{diff:1,txt:"Pedí dos señales antes de confiar en el llamado: primero que el vellón se mojara pero el suelo quedara seco; luego lo contrario. Dios accedió a ambas peticiones."},
{diff:2,txt:"Dios redujo mi ejército de 32.000 hombres a solo 300. Derrotamos a los madianitas no con espadas sino haciendo sonar trompetas y rompiendo jarras para mostrar antorchas encendidas."},
{diff:3,txt:"Después de la victoria, el pueblo quiso hacerme rey. Rechacé la oferta diciendo que ni yo ni mi hijo reinaríamos: «Jehová reinará sobre vosotros». Pero luego cometí un grave error: fabriqué un efod de oro."},
{diff:4,txt:"Soy Gedeón, juez de Israel, también llamado Jerobaal. Mi historia enseña que Dios puede usar a personas que dudan de sí mismas y que las victorias más grandes no requieren de los mayores ejércitos."}
]},
{name:"Jefté",title:"El caudillo del voto trágico",ref:"Jueces 11:30",verse:"Si pones a los amonitas en mis manos, lo primero que salga por la puerta de mi casa a recibirme cuando regrese victorioso será de Jehová.",rarity:"rara",pack:"p3",
clues:[
{diff:0,txt:"Era hijo de un hombre valioso pero nacido de una prostituta. Mis medio hermanos me expulsaron del hogar para que no heredara con ellos. Viví como jefe de una banda de aventureros."},
{diff:1,txt:"Cuando los amonitas amenazaron a Israel, los mismos ancianos que antes me habían rechazado vinieron a pedirme que los liderara. Acepté a condición de que me hicieran su jefe permanente."},
{diff:2,txt:"Hice un voto precipitado antes de la batalla. Al volver victorioso, la primera en salir a recibirme fue mi hija única, danzando con tamboriles. Cuando vi esto rasgué mis vestiduras."},
{diff:3,txt:"Intenté primero resolver el conflicto con los amonitas mediante negociación diplomática, enviando mensajeros. Solo cuando falló recurrí a la guerra. (Jueces 11:12-28)"},
{diff:4,txt:"Soy Jefté, juez de Israel. Hebreos 11:32 me menciona entre los héroes de la fe. Mi historia tiene el contraste de una gran fe en la batalla y un error de juicio en el voto que marcaría su vida."}
]},
{name:"Sansón",title:"El nazireo de fuerza sobrenatural",ref:"Jueces 13:5",verse:"El niño será nazireo de Dios desde el vientre hasta el día de su muerte.",rarity:"legendaria",pack:"p3",
clues:[
{diff:0,txt:"Mi nacimiento fue anunciado por un ángel a mis padres que no podían tener hijos. Desde antes de nacer estaba consagrado a Dios como nazireo, lo que significaba, entre otras cosas, que nunca debía cortarme el cabello."},
{diff:1,txt:"Maté a un león con las manos desnudas y no se lo dije a nadie. Más tarde, al pasar por ese lugar, encontré panales de miel en la carcasa del animal. De ese hecho nació mi famosa adivinanza."},
{diff:2,txt:"En una sola ocasión maté a mil filisteos con la quijada de un asno que encontré en el suelo. Soy el único personaje bíblico registrado que mató a tantos en un solo encuentro."},
{diff:3,txt:"Me enamoré de una mujer del valle de Sorec que aceptó dinero de los filisteos para averiguar mi secreto. Después de tres intentos fallidos, finalmente le revelé la fuente de mi fuerza."},
{diff:4,txt:"Soy Sansón, juez de Israel. Ciego y encadenado en el templo de Dagón, oré por última vez para que Dios restaurara mi fuerza. Derribé las columnas y maté más filisteos en mi muerte que en toda su vida."}
]},
{name:"Dalila",title:"La que traicionó a Sansón",ref:"Jueces 16:18",verse:"Dalila vio que él le había descubierto todo su corazón, y mandó llamar a los principales de los filisteos.",rarity:"epica",pack:"p3",
clues:[
{diff:0,txt:"Los gobernantes filisteos vinieron a mí con una oferta: me pagarían 1.100 piezas de plata cada uno —más de 5.000 en total— si averiguaba el secreto de la fuerza de mi amante."},
{diff:1,txt:"Pregunté tres veces por el secreto. Las tres primeras veces él me engañó con respuestas falsas. La cuarta vez, agotado por mi insistencia diaria, me dijo la verdad."},
{diff:2,txt:"Mientras dormía sobre mis rodillas, mandé que le rasurase el cabello. Al despertar e intentar liberarse como antes, descubrió que Jehová se había apartado de él."},
{diff:3,txt:"Soy del valle de Sorec. Mi nombre podría derivar del hebreo para «debilitar» o «la que cuelga». La Biblia no aclara si era filistea o israelita, aunque claramente cooperé con los enemigos de Israel."},
{diff:4,txt:"Soy Dalila, la mujer que por dinero entregó a Sansón a sus enemigos. Mi historia se convirtió en el arquetipo literario de la traición femenina, aunque la Biblia la cuenta sin juzgar explícitamente."}
]},
{name:"Rut",title:"La leal moabita",ref:"Rut 1:16",verse:"No insistas en que te deje, o que me aparte de ti; porque adondequiera que tú fueres, iré yo.",rarity:"legendaria",pack:"p3",
clues:[
{diff:0,txt:"Era de Moab, un pueblo que históricamente tenía una relación tensa con Israel. Al morir mi esposo, mi suegra me animó a volver a mi familia. Me negué."},
{diff:1,txt:"Para mantener a mi suegra, fui a los campos a recoger las espigas que los segadores dejaban atrás, un derecho legal que la Ley de Moisés reservaba para los pobres y extranjeros."},
{diff:2,txt:"El dueño del campo donde trabajaba notó mi devoción hacia mi suegra y dio instrucciones secretas a sus segadores para que dejaran espigas extra para que yo las encontrara."},
{diff:3,txt:"Siguiendo el consejo de mi suegra, me acosté a los pies del hombre mientras dormía en el campo como señal de que le pedía que ejerciera sus derechos de pariente redentor."},
{diff:4,txt:"Soy Rut, la moabita. Me casé con Booz y tuve un hijo llamado Obed, que fue padre de Isaí, que fue padre del rey David. Estoy en la genealogía de Jesucristo según el Evangelio de Mateo."}
]},
{name:"Noemí",title:"La que regresó vacía",ref:"Rut 1:20",verse:"No me llaméis Noemí, sino llamadme Mara; porque en grande amargura me ha puesto el Todopoderoso.",rarity:"rara",pack:"p3",
clues:[
{diff:0,txt:"Salí de Belén con mi esposo y mis dos hijos hacia Moab a causa del hambre. En Moab perdí primero a mi esposo, luego a mis dos hijos. Quedé sin nadie, en tierra extraña."},
{diff:1,txt:"Cuando decidí regresar a Belén, animé a mis dos nueras a volver a sus familias. Una aceptó, pero la otra me dijo unas palabras que se han repetido a través de los siglos como ejemplo de lealtad."},
{diff:2,txt:"Al llegar a Belén, las mujeres de la ciudad me reconocieron con alegría. Pero yo les dije que no me llamaran por mi nombre antiguo, que significaba «agradable», sino «Mara», que significa «amarga»."},
{diff:3,txt:"Conocía perfectamente las leyes del «go'el» o pariente redentor. Guié a mi nuera paso a paso para que este sistema legal pudiera protegerlas a ambas y devolverles dignidad y sustento."},
{diff:4,txt:"Soy Noemí, la suegra de Rut. Mi historia va de la amargura a la plenitud: la mujer que regresó «vacía» terminó acunando a su nieto Obed, abuelo del rey David."}
]},
{name:"Booz",title:"El pariente redentor",ref:"Rut 2:12",verse:"Jehová recompense tu obra, y tu remuneración sea cumplida de parte de Jehová Dios de Israel, bajo cuyas alas has venido a refugiarte.",rarity:"epica",pack:"p3",
clues:[
{diff:0,txt:"Era un hombre rico e influyente de Belén de la tribu de Judá. Cuando vi a una desconocida recoger espigas en mi campo, pregunté quién era. Al enterarme de su historia, di instrucciones para protegerla."},
{diff:1,txt:"Le ordené a mis criados que la dejaran beber del agua que habían sacado, que la invitaran a comer con los segadores, y que intencionalmente dejaran espigas caídas en el camino para que ella las recogiera."},
{diff:2,txt:"Cuando descubrí a la mujer dormida a mis pies en el campo nocturno, comprendí el significado del gesto. Le prometí que, si el pariente más cercano no quería ejercer su derecho, yo lo haría."},
{diff:3,txt:"Fui a la puerta de la ciudad —el tribunal de la época— con diez ancianos como testigos. Cuando el pariente más cercano rechazó su derecho por razones financieras, me quité la sandalia según la costumbre y tomé la responsabilidad."},
{diff:4,txt:"Soy Booz de Belén, pariente redentor de Noemí que me casé con su nuera Rut. Fui antepasado del rey David. Mi historia ilustra el concepto bíblico del «go'el», el que redime al pariente necesitado."}
]},
{name:"Barac",title:"El general que necesitó a Débora",ref:"Jueces 4:14",verse:"Levántate, porque este es el día en que Jehová ha entregado a Sísara en tu mano.",rarity:"comun",pack:"p3",
clues:[
{diff:0,txt:"La profetisa de Israel me transmitió una orden divina: reunir diez mil hombres en el monte Tabor y atacar al comandante cananeo con sus 900 carros de hierro. Era una misión que parecía suicida."},
{diff:1,txt:"Mi respuesta a la orden no fue exactamente heroica. Le dije a la profetisa: «Si tú vas conmigo, yo iré; pero si no vas conmigo, no iré». Ella aceptó, pero anunció que la gloria no sería para mí."},
{diff:2,txt:"A pesar de mi vacilación inicial, me uní a la batalla con fe y lideré a los diez mil hombres cuesta abajo desde el monte Tabor. El ejército cananeo, con sus superiores carros de hierro, fue completamente derrotado."},
{diff:3,txt:"El comandante enemigo Sísara huyó a pie y se refugió en la tienda de una mujer llamada Jael. Mientras dormía, Jael tomó una estaca de la tienda y lo mató, cumpliendo la profecía de Débora."},
{diff:4,txt:"Soy Barac hijo de Abinoam. A pesar de mi falta de valentía inicial, soy mencionado en Hebreos 11:32 entre los héroes de la fe. Mi historia muestra que Dios puede usarnos incluso cuando dudamos."}
]}
];

// ═══════════════════════════════════════════════════
// PACK 4 — 1 Samuel a 2 Reyes (16 personajes)
// ═══════════════════════════════════════════════════
const PACK4 = [
{name:"Ana",title:"La madre que oró con angustia",ref:"1 Samuel 1:20",verse:"Pedí a Jehová este niño, y Jehová me dio lo que le pedí.",rarity:"epica",pack:"p4",
clues:[
{diff:0,txt:"Tenía una rival en casa que constantemente me provocaba y se burlaba de que no podía tener hijos. Año tras año, en el santuario de Dios, la angustia se hacía insoportable."},
{diff:1,txt:"Un año lloré tanto mientras oraba que el sacerdote del santuario me observó desde lejos y, al ver que mis labios se movían sin emitir sonido, me acusó de estar borracha."},
{diff:2,txt:"Hice un voto: si Dios me daba un hijo varón, lo devolvería a Dios todos los días de su vida y no pasaría navaja por su cabeza. Dios me concedió lo que pedí."},
{diff:3,txt:"Cumplí mi voto: en cuanto el niño fue destetado, lo llevé al sacerdote Elí en Siló. Le dije: «Por este niño oraba yo, y Jehová me lo dio». Lo dejé allí para que sirviera a Dios."},
{diff:4,txt:"Soy Ana, la madre de Samuel. Mi cántico de acción de gracias, que aparece en 1 Samuel 2, es considerado el precursor del Magnificat de María, la madre de Jesús."}
]},
{name:"Samuel",title:"El último juez y primer profeta",ref:"1 Samuel 3:10",verse:"Habla, porque tu siervo oye.",rarity:"legendaria",pack:"p4",
clues:[
{diff:0,txt:"De niño, escuché mi nombre llamado tres veces durante la noche. Las tres veces corrí hacia el sacerdote anciano pensando que había sido él. Él fue quien me explicó que era la voz de Dios."},
{diff:1,txt:"La primera profecía que transmití fue un mensaje de juicio contra la misma familia que me había criado. Era el anuncio del castigo de Dios contra el sacerdote Elí por no haber reprendido a sus hijos malvados."},
{diff:2,txt:"Ungí en secreto a dos reyes distintos: el primero fue una elección del pueblo que terminó siendo rechazada por Dios; el segundo fue un joven pastor que encontré entre los hijos de Jesé de Belén."},
{diff:3,txt:"Soy la transición entre dos eras. Soy el último de los jueces y el primero de los profetas de Israel. La Biblia dice que «ninguna de sus palabras cayó al suelo», es decir, todas se cumplieron."},
{diff:4,txt:"Soy Samuel, nacido de la oración angustiada de mi madre Ana y dedicado al servicio de Dios desde la infancia. Establecí escuelas de profetas y guié a Israel durante décadas como profeta y juez."}
]},
{name:"Saúl",title:"El rey que perdió el favor de Dios",ref:"1 Samuel 15:26",verse:"Jehová te ha rechazado hoy para que no seas rey sobre Israel.",rarity:"epica",pack:"p4",
clues:[
{diff:0,txt:"Era el hombre más alto de Israel, un benjaminita que se escondió entre el equipaje el día que fue presentado como rey. Al principio parecía un líder prometedor: humilde y valiente."},
{diff:1,txt:"En mi primer gran error, ofrecí un holocausto sin esperar al profeta porque el ejército se estaba desbandando. Samuel llegó justo cuando terminaba y anunció que mi reino no duraría."},
{diff:2,txt:"Me ordenaron exterminar completamente a los amalecitas y no guardar nada. Conservé al rey vivo y lo mejor del ganado «para sacrificárselo a Jehová». Samuel me dijo: «La obediencia es mejor que los sacrificios»."},
{diff:3,txt:"Perseguí al hombre que Dios había elegido para reemplazarme durante años, intentando matarlo en múltiples ocasiones. Paradójicamente, ese hombre me perdonó la vida dos veces cuando podría haberme matado."},
{diff:4,txt:"Soy Saúl, el primer rey de Israel. Terminé mis días consultando a una médium en Endor, disfrazado, en la víspera de la batalla que mataría a mis hijos y me llevaría a quitarme la vida."}
]},
{name:"David",title:"El hombre según el corazón de Dios",ref:"1 Samuel 13:14",verse:"Jehová se ha buscado un hombre conforme a su corazón.",rarity:"legendaria",pack:"p4",
clues:[
{diff:0,txt:"Compuse más de 70 de los 150 Salmos. Antes de ser ungido rey, fui pastor, músico de la corte y guerrero. La Biblia me describe como «hombre de guerra» pero también como el más grande poeta de Israel."},
{diff:1,txt:"Cuando el gigante filisteo desafiaba al ejército de Israel durante 40 días, vine al campamento a llevar comida a mis hermanos. Escuché el desafío y me ofrecí a pelear, con una honda y cinco piedras de un arroyo."},
{diff:2,txt:"Durante años huí por el desierto con una banda de hombres leales, perseguido por el rey que yo había servido fielmente. En dos ocasiones lo tuve a mi merced en la oscuridad y elegí no matarlo."},
{diff:3,txt:"El peor capítulo de mi vida comenzó una tarde que caminaba por la terraza de mi palacio. Lo que vi desde allí desencadenó adulterio, engaño y asesinato premeditado. Un profeta me confrontó con una parábola."},
{diff:4,txt:"Soy David, segundo rey de Israel. Siendo el más joven de ocho hermanos, el profeta me ungió porque Dios no mira la apariencia exterior sino el corazón. Establecí Jerusalén como capital y deseé construir el templo."}
]},
{name:"Jonatán",title:"La amistad más fiel de la Biblia",ref:"1 Samuel 18:1",verse:"El alma de Jonatán quedó ligada con el alma de David, y Jonatán le amó como a sí mismo.",rarity:"epica",pack:"p4",
clues:[
{diff:0,txt:"Era el príncipe heredero de Israel. Por derecho y posición, el trono me correspondía a mí cuando muriera mi padre. Sin embargo, reconocí que Dios había elegido a otro y lo acepté con generosidad de espíritu."},
{diff:1,txt:"Le quité mi propio manto y se lo di a mi amigo, junto con su armadura, su espada, su arco y su cinturón. Era un gesto simbólico profundo: renunciaba a mi posición en su favor."},
{diff:2,txt:"Cuando mi padre decidió matar a mi amigo, yo lo protegí activamente. Usé señales con flechas para advertirle del peligro. Me puse en contra de mi propio padre por hacer lo correcto."},
{diff:3,txt:"Muerto en la batalla del monte Gilboa junto a mi padre y mis hermanos, mi amigo lloró mi muerte con unas de las palabras más conmovedoras de la Biblia: «Tu amor para conmigo fue maravilloso»."},
{diff:4,txt:"Soy Jonatán, hijo del rey Saúl. Mi amistad con David es considerada el ejemplo supremo de amistad desinteresada en las Escrituras. Tuve un hijo llamado Mefi-boset al que David cuidó por amor a mí."}
]},
{name:"Goliat",title:"El gigante de Gat",ref:"1 Samuel 17:4",verse:"Un hombre poderoso salió de entre las filas de los filisteos, cuyo nombre era Goliat de Gat.",rarity:"rara",pack:"p4",
clues:[
{diff:0,txt:"Medía unos 2,90 metros de altura. Mi armadura de bronce pesaba unos 57 kilogramos. La punta de mi lanza pesaba unos 7 kilogramos. Era literalmente el guerrero más imponente de su época."},
{diff:1,txt:"Durante 40 días consecutivos, mañana y tarde, salí a desafiar a Israel. Mi propuesta era simple: que Israel mandara a un hombre a pelear conmigo. El vencedor ganaría la batalla para su bando."},
{diff:2,txt:"Cuando finalmente vi a quien Israel enviaba contra mí —un muchacho sin armadura— me burlé de él. Le dije: «¿Soy yo un perro para que vengas a mí con varas?»"},
{diff:3,txt:"La primera piedra lanzada por el muchacho se hundió en mi frente. Caí de bruces en tierra. El joven no llevaba espada, así que sacó la mía de su vaina y me cortó la cabeza con ella."},
{diff:4,txt:"Soy Goliat de Gat, el campeón filisteo. Mi muerte a manos de un joven pastor con una honda se convirtió en el símbolo bíblico más poderoso de que con Dios, los débiles pueden vencer a los poderosos."}
]},
{name:"Abigail",title:"La sabia mediadora",ref:"1 Samuel 25:33",verse:"Bendito sea tu discernimiento, y bendita tú, que me has impedido hoy ir a derramar sangre.",rarity:"epica",pack:"p4",
clues:[
{diff:0,txt:"Mi esposo insultó gravemente a un líder guerrillero que le había protegido. El guerrillero juró matar a todos los hombres de nuestra casa antes del amanecer. Ninguno de mis criados se atrevió a decírselo a mi esposo."},
{diff:1,txt:"Sin decirle nada a mi esposo, cargué 200 panes, dos odres de vino, cinco ovejas preparadas, grano tostado, uvas pasas e higos y salí al encuentro del guerrillero con una caravana de regalos."},
{diff:2,txt:"Me postré ante el guerrillero y asumí la culpa del insulto de mi esposo. Le argumenté que si me escuchaba y no se vengaba, cuando llegara a ser rey no tendría que lamentar haber derramado sangre innecesariamente."},
{diff:3,txt:"Al regresar encontré a mi esposo de fiesta «como un rey». Por la mañana, sobrio, le conté lo que había hecho. Diez días después, Dios hirió a mi esposo y murió. El guerrillero me pidió que me casara con él."},
{diff:4,txt:"Soy Abigail, la esposa del insensato Nabal. Mi intervención salvó la vida de docenas de hombres y evitó que David, el futuro rey de Israel, manchara su reinado antes de comenzarlo con una venganza sangrienta."}
]},
{name:"Salomón",title:"El rey más sabio",ref:"1 Reyes 3:12",verse:"Te daré un corazón sabio y entendido, como no ha habido antes de ti, ni después de ti se levantará otro igual.",rarity:"legendaria",pack:"p4",
clues:[
{diff:0,txt:"Al inicio de mi reinado, Dios se me apareció en sueños y me preguntó qué quería que me diera. Podría haber pedido riqueza, larga vida o la muerte de mis enemigos. Pedí sabiduría para gobernar al pueblo."},
{diff:1,txt:"El primer gran caso que juzgué involucró a dos mujeres que reclamaban ser madre del mismo bebé vivo. Mi veredicto fue proponer cortar al niño por la mitad. La reacción de las dos mujeres reveló cuál era la madre verdadera."},
{diff:2,txt:"Construí el Templo de Jerusalén en siete años, el lugar más sagrado de Israel durante siglos. También construí mi propio palacio, que tardó 13 años. Traje cedros del Líbano y artesanos de Tiro."},
{diff:3,txt:"Pronuncié 3.000 proverbios y compuse 1.005 cánticos. La reina de Sabá viajó desde el extremo sur del mundo conocido para comprobar mi sabiduría y regresó diciendo que la realidad superaba la fama."},
{diff:4,txt:"Soy Salomón, tercer rey de Israel. Mi reinado comenzó en esplendor pero terminó en tragedia: mis 700 esposas y 300 concubinas extranjeras desviaron mi corazón hacia dioses ajenos en mi vejez."}
]},
{name:"Elías",title:"El profeta del Carmelo",ref:"1 Reyes 18:36",verse:"Jehová, Dios de Abraham, de Isaac y de Israel, sea hoy manifiesto que tú eres Dios en Israel.",rarity:"legendaria",pack:"p4",
clues:[
{diff:0,txt:"Anuncié al rey más malvado de Israel que no caería lluvia ni rocío salvo a mi palabra. Y así fue: hubo sequía durante tres años y medio. No estaba en palacio, sino escondido junto a un arroyo, alimentado por cuervos."},
{diff:1,txt:"Convoqué en el monte Carmelo a 450 profetas de Baal y 400 de Asera. Propuse una prueba: que cada grupo preparara un sacrificio y el dios que respondiera con fuego sería el Dios verdadero. Solo uno respondió."},
{diff:2,txt:"Después del mayor triunfo de mi vida, una amenaza de muerte me lanzó a una depresión tan profunda que bajo un árbol de enebro pedí a Dios que me quitara la vida. Un ángel me atendió con comida."},
{diff:3,txt:"Soy uno de los dos únicos humanos de quien la Biblia registra que no murió de forma natural. Fui llevado al cielo en un carro de fuego mientras caminaba con mi sucesor y un torbellino me arrebató."},
{diff:4,txt:"Soy Elías el tisbita. Junto con Moisés, aparecí transfigurado junto a Jesús en la montaña, siglos después de mi muerte aparente. Mi nombre significa «Mi Dios es Jehová»."}
]},
{name:"Eliseo",title:"El sucesor de Elías",ref:"2 Reyes 2:9",verse:"Te ruego que una doble porción de tu espíritu sea sobre mí.",rarity:"epica",pack:"p4",
clues:[
{diff:0,txt:"Cuando mi maestro fue arrebatado al cielo, tomé su manto, golpeé el río con él y dije «¿Dónde está Jehová?». El río se dividió. Era la señal de que había recibido la doble porción que había pedido."},
{diff:1,txt:"Un general sirio con lepra vino desde Damasco a buscarme. Le mandé un mensaje a través de un criado diciéndole que se sumergiera siete veces en el río Jordán. Se enojó y casi se fue, pero sus siervos le convencieron."},
{diff:2,txt:"Resucité al hijo de la mujer sunamita que me había preparado una habitación en su casa. Años después, cuando ese hijo ya era adulto, también intercedí por ella ante el rey para que le devolvieran sus tierras."},
{diff:3,txt:"Realicé exactamente el doble de milagros registrados que mi maestro, cumpliendo así el significado de la «doble porción» que pedí. La Biblia registra 16 milagros míos frente a 8 de mi predecesor."},
{diff:4,txt:"Soy Eliseo hijo de Safat. Estaba arando con 12 yuntas de bueyes cuando mi maestro echó su manto sobre mí. Maté los bueyes, quemé los arados y le seguí. Serví durante más de 50 años como profeta en Israel."}
]},
{name:"Jezabel",title:"La reina que persiguió a los profetas",ref:"1 Reyes 21:25",verse:"No hubo nadie como Acab, que se vendió para hacer lo malo ante los ojos de Jehová, al cual su mujer Jezabel incitó.",rarity:"epica",pack:"p4",
clues:[
{diff:0,txt:"Era princesa fenicia, hija del rey de Sidón. Al casarme con el rey de Israel traje conmigo a 450 profetas de Baal y 400 de Asera, y los mantuve a costa del tesoro real."},
{diff:1,txt:"Cuando el profeta más temido de Israel derrotó y mató a mis profetas en el Carmelo, le mandé un mensajero con estas palabras: «Así me hagan los dioses, si mañana a estas horas no he puesto tu vida como la vida de uno de ellos»."},
{diff:2,txt:"Cuando mi esposo quería un viñedo que un vecino se negaba a vender, intervine. Organicé un juicio amañado con dos testigos falsos, acusé al hombre de blasfemia y lo lapidaron. Luego le entregué el viñedo a mi esposo."},
{diff:3,txt:"Mi muerte fue profetizada con detalle. Fue cumplida al pie de la letra: me arrojaron por una ventana, los caballos me pisotearon, y cuando fueron a sepultarme solo encontraron el cráneo, los pies y las palmas de mis manos."},
{diff:4,txt:"Soy Jezabel, reina de Israel. Mi nombre se convirtió en sinónimo de maldad y corrupción religiosa. En el libro de Apocalipsis se usa mi nombre para describir a alguien que enseña inmoralidad dentro de la congregación."}
]},
{name:"Naamán",title:"El general sirio sanado",ref:"2 Reyes 5:14",verse:"Naamán descendió y se sumergió siete veces en el Jordán, conforme a la palabra del varón de Dios; y su carne se volvió como la carne de un niño, y quedó limpio.",rarity:"rara",pack:"p4",
clues:[
{diff:0,txt:"Era el comandante del ejército del rey de Siria, respetado y victorioso. Pero tenía lepra. Una niña esclava israelita que servía a mi esposa mencionó casualmente que en Israel había un profeta que podía curarme."},
{diff:1,txt:"El rey de Siria me envió con una carta al rey de Israel y diez talentos de plata, seis mil piezas de oro y diez mudas de ropa. El rey de Israel rasgó sus vestiduras al leer la carta, pensando que era un pretexto para la guerra."},
{diff:2,txt:"El profeta ni siquiera salió a recibirme. Me mandó un mensajero diciéndome que me sumergiera siete veces en el río Jordán. Me enojé: los ríos de Damasco eran mejores que todos los ríos de Israel."},
{diff:3,txt:"Mis propios siervos me convencieron de intentarlo. Me sumergí siete veces y quedé limpio. Volví al profeta y declaré: «En toda la tierra no hay Dios sino en Israel». Le ofrecí regalos. Los rechazó."},
{diff:4,txt:"Soy Naamán, el general sirio. Mi historia tiene un giro irónico: mi fe fue iniciada por una niña esclava, rechacé el remedio por orgullo, y solo la insistencia de mis siervos me hizo seguir el simple consejo que me sanó."}
]},
{name:"Betsabé",title:"La madre del rey Salomón",ref:"2 Samuel 12:24",verse:"Y consoló David a Betsabé su mujer, y llegándose a ella, durmió con ella; y ella le dio a luz un hijo, y llamó su nombre Salomón.",rarity:"rara",pack:"p4",
clues:[
{diff:0,txt:"Estaba bañándome en la azotea de mi casa cuando el rey desde su terraza me vio. El rey me mandó llamar. Era una orden del hombre más poderoso del reino. No podía negarme."},
{diff:1,txt:"Cuando me quedé embarazada, el rey intentó cubrir la situación haciendo volver del frente a mi esposo para que durmiera en su casa. El soldado, leal a su rey, se negó a ir a su casa mientras sus compañeros dormían en el campo."},
{diff:2,txt:"El rey entonces firmó una carta que selló la muerte de mi esposo: ordenó que lo pusieran en el lugar más peligroso del combate y que los demás se retiraran. Mi esposo murió en batalla poco después."},
{diff:3,txt:"El profeta Natán fue ante el rey y le contó una parábola sobre un hombre rico que robó la única ovejita de un hombre pobre. El rey se indignó y el profeta le dijo: «Tú eres ese hombre»."},
{diff:4,txt:"Soy Betsabé, la madre de Salomón. Aunque mi historia comenzó en tragedia y pecado, mi hijo se convirtió en el rey más sabio de Israel. En la vejez del rey David, fui instrumental para asegurar que Salomón heredara el trono."}
]},
{name:"Natán",title:"El profeta que confrontó al rey",ref:"2 Samuel 12:7",verse:"Tú eres ese hombre. Así ha dicho Jehová Dios de Israel.",rarity:"epica",pack:"p4",
clues:[
{diff:0,txt:"Cuando el rey cometió adulterio y organizó el asesinato de un hombre inocente, Dios me envió con un mensaje. No lo confronté directamente. Le conté una historia sobre una oveja."},
{diff:1,txt:"La parábola que narré era sobre un hombre rico que, teniendo grandes rebaños, no tomó de los suyos para alimentar a su huésped, sino que robó la única ovejita de un hombre pobre que la amaba como a una hija."},
{diff:2,txt:"Cuando el rey se indignó ante la historia y declaró que ese hombre merecía morir, le apunté y le dije cuatro palabras que nadie antes le había dicho a su cara: «Tú eres ese hombre»."},
{diff:3,txt:"También fui el profeta que le comunicó al rey que, aunque él quería construir el templo, ese honor no le correspondía a él sino a su hijo. Dios construiría una «casa» dinástica para el rey, no al contrario."},
{diff:4,txt:"Soy Natán el profeta. La valentía de confrontar al hombre más poderoso del reino con sus propios pecados me convierte en uno de los ejemplos más notables de integridad profética en toda la Biblia."}
]},
{name:"La reina de Sabá",title:"La que probó la sabiduría de Salomón",ref:"1 Reyes 10:7",verse:"Ni aun se me dijo la mitad; es mayor tu sabiduría y bien que la fama que yo había oído.",rarity:"rara",pack:"p4",
clues:[
{diff:0,txt:"Cuando llegó a mis oídos la fama de un rey lejano, no me contentaba con lo que contaban otros. Decidí comprobar la sabiduría con mis propios ojos, preguntando con todas las preguntas difíciles que pudiera formular."},
{diff:1,txt:"Preparé una caravana con camellos cargados de especias, oro en gran cantidad y piedras preciosas. Nadie antes había venido a visitar a ese rey con tan grande comitiva desde tan lejos."},
{diff:2,txt:"Le presenté todas mis preguntas y me respondió a todas. No hubo ninguna cuestión que fuera demasiado difícil. Vi también la magnificencia de su corte, su palacio, su mesa, sus servidores."},
{diff:3,txt:"Al verlo todo, quedé sin aliento. Le dije que la realidad superaba en mucho lo que había oído. Declaré que sus siervos y sus servidores eran dichosos de poder oír su sabiduría a diario."},
{diff:4,txt:"Soy la reina de Sabá, cuya identidad exacta sigue siendo debatida por historiadores (Yemen, Etiopía o Arabia). Jesús me mencionó siglos después diciendo que yo me levantaría en el juicio para condenar a los incrédulos."}
]},
{name:"Acab",title:"El rey débil",ref:"1 Reyes 16:33",verse:"Acab hizo más para provocar a Jehová Dios de Israel que todos los reyes de Israel que le precedieron.",rarity:"rara",pack:"p4",
clues:[
{diff:0,txt:"Era militarmente competente y construyó una ciudad de marfil. Pero la Biblia dice que hice más mal que todos los reyes que me precedieron. Gran parte de ese mal se debió a la influencia de la mujer con quien me casé."},
{diff:1,txt:"Quería el viñedo de mi vecino pero él se negó a vendérmelo diciendo que era la herencia de sus padres. Le dije a mi esposa que estaba disgustado y ella se encargó de que apareciera el viñedo en mis manos."},
{diff:2,txt:"El profeta más temido de Israel me llamó «perturbador de Israel» en nuestra primera reunión. En nuestra última reunión, el profeta me predijo que donde los perros lamieron la sangre de mi vecino, también lamerían la mía."},
{diff:3,txt:"Cuando el profeta me anunció la destrucción de mi casa por el asunto del viñedo, me humillé tanto que Dios le dijo al profeta que, dado que me había humillado, el desastre no vendría en mis días sino en los de mi hijo."},
{diff:4,txt:"Soy Acab, rey de Israel. Muerto en batalla por una flecha disparada al azar que se coló entre las junturas de mi armadura, mi sangre se acumuló en el fondo de mi carro de guerra. El cumplimiento de la profecía fue preciso."}
]}
];

// ═══════════════════════════════════════════════════
// PACK 5 — Escritos y Profetas (14 personajes)
// ═══════════════════════════════════════════════════
const PACK5 = [
{name:"Job",title:"El hombre íntegro que fue probado",ref:"Job 1:8",verse:"No hay ninguno como él en la tierra, un hombre íntegro y recto, que teme a Dios y se aparta del mal.",rarity:"legendaria",pack:"p5",
clues:[
{diff:0,txt:"Vivía en la tierra de Uz. Dios mismo dio el mejor testimonio posible sobre mi carácter. Satanás entonces preguntó: «¿Acaso teme Job a Dios sin recibir nada a cambio?» Y Dios le dio permiso para ponerme a prueba."},
{diff:1,txt:"En un solo día perdí todo: mis siete mil ovejas, tres mil camellos, quinientos bueyes, quinientas asnas y todos mis siervos. Un último mensajero llegó para decirme que el viento había derrumbado la casa donde estaban mis diez hijos."},
{diff:2,txt:"Tres amigos vinieron a consolarme y se sentaron en silencio conmigo durante siete días. Cuando finalmente hablaron, intentaron convencerme de que mis sufrimientos eran prueba de pecados ocultos. Yo lo negué."},
{diff:3,txt:"Al final del libro, Dios habló a mis amigos y les dijo que habían hablado de él de manera incorrecta, mientras que yo había dicho lo recto. Luego Dios restauró el doble de todo lo que había perdido."},
{diff:4,txt:"Soy Job, el símbolo bíblico de la integridad bajo sufrimiento. La carta de Santiago me menciona como ejemplo de paciencia. El final de mi historia revela la misericordia de Jehová: «el Señor es muy compasivo y misericordioso»."}
]},
{name:"Ester",title:"La reina que salvó a su pueblo",ref:"Ester 4:14",verse:"¿Y quién sabe si para esta hora has llegado al reino?",rarity:"legendaria",pack:"p5",
clues:[
{diff:0,txt:"Era judía huérfana criada por mi primo mayor como una hija. Nunca imaginé que un día me presentaría ante el rey más poderoso del mundo para evitar el genocidio de mi pueblo."},
{diff:1,txt:"Un decreto firmado con el anillo del rey ordenaba la muerte de todos los judíos del imperio en una fecha determinada. El decreto era irrevocable. La única esperanza era llegar al rey sin ser convocada, algo que se castigaba con la muerte."},
{diff:2,txt:"Me preparé durante tres días de ayuno con todo mi pueblo. Luego me vestí con mis ropas reales y me presenté en el patio interior del palacio. El rey extendió su cetro dorado. Había aceptado verme."},
{diff:3,txt:"No pedí nada ese día. Invité al rey y al primer ministro a un banquete. Y en ese banquete los invité a otro. Solo en el segundo banquete revelaría mi petición: la vida de mi pueblo y la mía propia."},
{diff:4,txt:"Soy Ester, reina de Persia. Mi historia tiene la peculiaridad de ser uno de los dos libros de la Biblia donde el nombre de Dios no aparece explícitamente, pero su providencia es evidente en cada capítulo."}
]},
{name:"Mardoqueo",title:"El primo fiel",ref:"Ester 10:3",verse:"Mardoqueo el judío ocupaba el segundo lugar después del rey Asuero.",rarity:"epica",pack:"p5",
clues:[
{diff:0,txt:"Todos en el palacio se inclinaban ante el primer ministro del rey. Yo era el único que no lo hacía. Mis colegas me preguntaban cada día por qué ignoraba la orden del rey. Yo no cedía."},
{diff:1,txt:"Un día, al escuchar una conversación en la puerta del palacio, descubrí una conspiración para asesinar al rey. Lo informé a través de mi prima. El complot fue investigado y los traidores ejecutados. Mi nombre quedó registrado en las crónicas."},
{diff:2,txt:"Cuando el decreto de muerte contra los judíos fue publicado, me vestí de cilicio y me senté frente a la puerta del palacio lamentando en voz alta. No podía entrar vestido de luto."},
{diff:3,txt:"Le envié un mensaje a mi prima con palabras que se convirtieron en proféticas: «Si ahora callares del todo, de otro lugar vendrá el alivio para los judíos; pero tú y la casa de tu padre pereceréis»."},
{diff:4,txt:"Soy Mardoqueo, primo y padre adoptivo de Ester. Terminé mis días como el segundo hombre más poderoso del Imperio Persa. El hombre que tramó mi muerte murió en la horca que había preparado para mí."}
]},
{name:"Amán",title:"El orgulloso que cayó",ref:"Ester 7:10",verse:"Así colgaron a Amán en la horca que él había preparado para Mardoqueo.",rarity:"rara",pack:"p5",
clues:[
{diff:0,txt:"Era el primer ministro del Imperio Persa, el hombre más honrado del reino después del rey. El rey había dado órdenes de que todos se inclinaran ante mí. Un solo hombre en toda la ciudad se negaba."},
{diff:1,txt:"Cuando supe la identidad de ese hombre y que era judío, decidí que no bastaba con matarlo a él solo. Tramé el exterminio de todos los judíos del imperio en una fecha específica, determinada por sorteo."},
{diff:2,txt:"El rey me dio su anillo de sello para que autorizara el decreto. Hice preparar los documentos y los envié a las 127 provincias del imperio. El decreto era irrevocable."},
{diff:3,txt:"Preparé una horca de 22 metros de altura frente a mi casa para colgar al hombre que se negaba a inclinarme. La noche antes de usarla, el rey no podía dormir y se hizo leer las crónicas reales."},
{diff:4,txt:"Soy Amán, de origen amalecita. Terminé ahorcado en la misma horca que construí para mi enemigo. Mi historia ilustra el proverbio bíblico: «el orgullo precede a la destrucción y el espíritu altivo, a la caída»."}
]},
{name:"Nehemías",title:"El reconstructor de los muros",ref:"Nehemías 2:17",verse:"Venid y edifiquemos el muro de Jerusalén, para que no sigamos siendo motivo de burla.",rarity:"epica",pack:"p5",
clues:[
{diff:0,txt:"Era copero del rey de Persia, un cargo de confianza absoluta. Cuando me llegaron noticias de que los muros de mi ciudad natal estaban en ruinas y sus puertas quemadas, el rey notó mi rostro triste y me preguntó por qué."},
{diff:1,txt:"Antes de responder al rey, hice una oración breve y silenciosa. Luego pedí permiso para ir a reconstruir la ciudad de mis antepasados. El rey no solo me lo concedió, sino que me dio cartas de protección y materiales."},
{diff:2,txt:"Llegué de noche a Jerusalén sin decirle a nadie por qué había venido. Por la noche, monté en una bestia y recorrí en secreto los muros en ruinas para evaluar la situación antes de revelar mis planes."},
{diff:3,txt:"Mientras reconstruíamos, los enemigos se burlaban, conspiraban y amenazaban. Con una mano sosteníamos la herramienta de construcción y con la otra la espada. Los constructores llevaban la espada ceñida mientras trabajaban."},
{diff:4,txt:"Soy Nehemías. Reconstruí los muros de Jerusalén en solo 52 días, algo que los enemigos reconocieron como obra de Dios. También implementé reformas sociales y religiosas que el profeta Esdras complementó."}
]},
{name:"Esdras",title:"El escriba reformador",ref:"Esdras 7:10",verse:"Esdras había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos.",rarity:"rara",pack:"p5",
clues:[
{diff:0,txt:"Era sacerdote y escriba perito en la Ley de Moisés. El rey de Persia me concedió todo lo que pedí y me envió a Jerusalén con una carta que me daba autoridad casi ilimitada para restaurar la adoración."},
{diff:1,txt:"Al llegar a Jerusalén descubrí que el pueblo, incluyendo sacerdotes y levitas, se había mezclado con los pueblos de la tierra tomando esposas extranjeras. Rasgué mis vestiduras, me arranqué pelo y barba y me senté atónito."},
{diff:2,txt:"Oré públicamente en el atrio del templo, confesando los pecados del pueblo. Mientras oraba y lloraba, una gran multitud se fue reuniendo. Uno de los hombres propuso disolver los matrimonios contrarios a la Ley."},
{diff:3,txt:"Reuní a todo el pueblo en la plaza y les hablé sobre su transgresión. El pueblo respondió en voz alta: «Así se hará conforme a tu palabra». Se tomó tres meses investigar cada caso y separarlos de sus esposas extranjeras."},
{diff:4,txt:"Soy Esdras, el sacerdote escriba. Junto con Nehemías, soy responsable de la restauración espiritual de Israel después del exilio babilónico. Se me atribuye también la preservación y organización del canon de las Escrituras Hebreas."}
]},
{name:"Daniel",title:"El intérprete de sueños y visiones",ref:"Daniel 6:10",verse:"Daniel... tres veces al día se arrodillaba y oraba, y daba gracias ante su Dios, como lo solía hacer antes.",rarity:"legendaria",pack:"p5",
clues:[
{diff:0,txt:"De joven, en Babilonia, me negué a contaminarte con la comida asignada por el rey. Pedí que me dieran solo vegetales y agua durante diez días, y al final del tiempo mi apariencia era mejor que la de quienes comían la comida real."},
{diff:1,txt:"Cuando el rey vio una escritura misteriosa aparecer en la pared durante su banquete, llamé para que leyeran e interpretaran las palabras. Yo le di la interpretación: «Mené Mené Tekel Uparsin»."},
{diff:2,txt:"Mis enemigos buscaron en qué acusarme pero no pudieron encontrar ningún fallo en mi trabajo. Entonces lograron que el rey firmara un decreto que prohibía orar a cualquier dios durante 30 días."},
{diff:3,txt:"Cuando me arrojaron al foso de los leones, el rey pasó la noche en ayuno y fue el primero en correr al foso al amanecer. Salí ileso. Los que me habían acusado fueron arrojados al foso con sus familias y los leones los destruyeron."},
{diff:4,txt:"Soy Daniel, cuyo nombre significa «Dios es mi juez». Serví fielmente en las cortes de al menos cuatro reyes durante más de 70 años. Mis profecías abarcan desde el Imperio Babilónico hasta los tiempos del fin."}
]},
{name:"Los tres jóvenes hebreos",title:"Los que no se inclinaron",ref:"Daniel 3:17",verse:"Nuestro Dios puede librarnos del horno de fuego ardiente; y de tu mano, oh rey, nos librará.",rarity:"epica",pack:"p5",
clues:[
{diff:0,txt:"Éramos tres jóvenes hebreos que servíamos en la corte de Babilonia. El rey construyó una estatua de oro de 27 metros de altura y ordenó que todos se inclinaran ante ella al sonar la música, bajo pena de muerte en el horno."},
{diff:1,txt:"Cuando el rey nos interrogó furioso, le respondimos que no necesitábamos prepararle ninguna defensa. Añadimos: «Si nos arroja al horno, nuestro Dios puede librarnos. Y aunque no lo hiciera, nosotros no adoraríamos tu imagen»."},
{diff:2,txt:"El rey mandó calentar el horno siete veces más de lo normal. El calor del fuego mató a los soldados que nos arrojaron dentro. Pero cuando el rey miró al horno, vio cuatro figuras caminando libremente, y la cuarta «parecía un hijo de los dioses»."},
{diff:3,txt:"Al salir del horno, los nobles del reino inspeccionaron nuestros cuerpos y ropas. No había en nosotros señal alguna de fuego. Nuestro pelo no estaba chamuscado, nuestras ropas no estaban afectadas, y ni siquiera olíamos a humo."},
{diff:4,txt:"Somos Sadrac, Mesac y Abed-nego, los tres jóvenes que entraron en el horno de fuego y salieron ilesos. Nuestros nombres hebreos originales eran Ananías, Misael y Azarías, cambiados por el gobierno babilónico cuando éramos jóvenes."}
]},
{name:"Nabucodonosor",title:"El rey que aprendió humildad",ref:"Daniel 4:37",verse:"Ahora yo Nabucodonosor alabo, engrandezco y glorifico al Rey del cielo, porque todas sus obras son verdaderas, y sus caminos justos.",rarity:"rara",pack:"p5",
clues:[
{diff:0,txt:"Era el rey más poderoso del mundo conocido. Conquisté Jerusalén, destruí el templo de Salomón, deporté miles de judíos a Babilonia y construí los jardines colgantes, una de las maravillas del mundo antiguo."},
{diff:1,txt:"Tuve un sueño angustiante de una gran estatua hecha de diferentes materiales. Ninguno de mis sabios pudo interpretarlo. Un joven hebreo no solo reveló el sueño sin que yo se lo contara, sino que también lo interpretó."},
{diff:2,txt:"Construí una enorme estatua de oro y exigí que todo mi gobierno se postrara ante ella. Tres jóvenes hebreos se negaron. Mandé calentar el horno, los arrojé, y vi cuatro figuras caminando dentro del fuego."},
{diff:3,txt:"Tuve otro sueño que me perturbó: un árbol enorme que fue cortado hasta dejar solo el tocón, y la mente del árbol sería cambiada por la de una bestia durante siete tiempos. El intérprete me dijo que el árbol era yo."},
{diff:4,txt:"La profecía se cumplió: durante siete años comí hierba como buey, mi pelo creció como plumas de águila y mis uñas como garras de ave. Al final, alcé los ojos al cielo, recobré la razón y alabé a Dios."}
]},
{name:"Isaías",title:"El evangelio del Antiguo Testamento",ref:"Isaías 53:5",verse:"Él fue herido por nuestras transgresiones, molido por nuestras iniquidades; el castigo que nos trajo paz cayó sobre él, y por sus llagas fuimos sanados.",rarity:"legendaria",pack:"p5",
clues:[
{diff:0,txt:"Profetizé durante más de 60 años, bajo cuatro reyes distintos de Judá. Escribí el libro más citado en el Nuevo Testamento después de los Salmos. Describí con detalle eventos que ocurrirían siglos después de mi muerte."},
{diff:1,txt:"Predije por nombre al rey que libertaría a Israel del exilio babilónico más de 150 años antes de que ese rey naciera. El nombre que usé era Ciro. Ningún historiador secular ha podido explicar satisfactoriamente esta coincidencia."},
{diff:2,txt:"Cuando el ángel tocó mis labios con una brasa del altar, exclamé: «¡Ay de mí! Estoy perdido, porque soy hombre de labios impuros». Luego escuché la pregunta de Dios: «¿A quién enviaré?» Respondí: «Aquí estoy yo, envíame a mí»."},
{diff:3,txt:"En el capítulo 53 de mi libro describí a un «siervo sufriente» que sería despreciado, rechazado, que cargaría los pecados de otros y moriría entre malhechores. Los primeros cristianos vieron en esas palabras una descripción precisa de Jesús."},
{diff:4,txt:"Soy Isaías, hijo de Amoz. Tradición judía dice que fui asesinado siendo aserrado por la mitad durante el reinado del malvado Manasés. Hebreos 11:37 podría aludir a ese martirio."}
]},
{name:"Jeremías",title:"El profeta que lloró por su pueblo",ref:"Jeremías 1:5",verse:"Antes que te formara en el vientre te conocí, y antes que nacieras te santifiqué, te puse por profeta a las naciones.",rarity:"epica",pack:"p5",
clues:[
{diff:0,txt:"Fui llamado siendo aún joven y me resistí diciendo que no sabía hablar. Dios extendió su mano, tocó mi boca y me dijo que había puesto sus palabras en mi boca. Profetiqué durante más de 40 años."},
{diff:1,txt:"Proclamé una verdad impopular: que Jerusalén sería destruida por Babilonia y que resistir era inútil. Por eso me acusaron de traición, me golpearon, me encerraron en el cepo y me arrojaron a una cisterna llena de barro."},
{diff:2,txt:"En el momento más oscuro del sitio de Jerusalén, cuando la ciudad estaba a punto de caer, compré un campo en mi ciudad natal. Era un acto simbólico de fe: los campos serían comprados y vendidos de nuevo en esa tierra."},
{diff:3,txt:"Mis palabras fueron a menudo quemadas literalmente: el rey cortó el rollo que yo había dictado y lo arrojó al fuego trozo a trozo. Dios me ordenó dictar de nuevo todo el libro, con más añadiduras."},
{diff:4,txt:"Soy Jeremías, el «profeta llorón». Escribí el libro de Jeremías y el de las Lamentaciones. Predije el exilio babilónico de 70 años con precisión y anuncié el «nuevo pacto» que Dios haría con su pueblo."}
]},
{name:"Ezequiel",title:"El profeta de las visiones",ref:"Ezequiel 37:4",verse:"Di profecía sobre estos huesos, y diles: Huesos secos, oíd palabra de Jehová.",rarity:"epica",pack:"p5",
clues:[
{diff:0,txt:"Mi primer capítulo describe una visión tan compleja y vívida que ha intrigado a comentaristas durante siglos: un torbellino con fuego y relámpagos, cuatro criaturas aladas con cuatro caras cada una, y ruedas dentro de ruedas."},
{diff:1,txt:"Dios me usó para realizar actos simbólicos que actuaban como mensajes: me acosté sobre mi lado izquierdo durante 390 días y sobre el derecho durante 40 días, cocinando sobre estiércol, para ilustrar el pecado de Israel."},
{diff:2,txt:"Fui llevado en visión a un valle lleno de huesos secos. Dios me preguntó: «¿Pueden vivir estos huesos?» Me ordenó profetizar a los huesos. Al hacerlo, sonó un ruido, se juntaron los huesos y se cubrieron de carne y luego de vida."},
{diff:3,txt:"A diferencia de Jeremías, profeticé desde el exilio en Babilonia, no desde Jerusalén. Dios me llamó «hijo de hombre» más de 90 veces, recordándome mi condición humana frente a la majestad divina."},
{diff:4,txt:"Soy Ezequiel, sacerdote y profeta del exilio. Mi libro termina con una visión detallada de un templo futuro idealizado de proporciones perfectas, que ha sido interpretada de muchas formas a lo largo de la historia."}
]},
{name:"Jonás",title:"El profeta que huyó de Dios",ref:"Jonás 1:3",verse:"Jonás se levantó para huir a Tarsis, lejos de la presencia de Jehová.",rarity:"rara",pack:"p5",
clues:[
{diff:0,txt:"Dios me ordenó ir a la ciudad más poderosa y malvada del mundo asirio para predicarles. En lugar de obedecer, subí a un barco que iba en la dirección exactamente opuesta."},
{diff:1,txt:"Cuando el barco fue azotado por una tormenta terrible, los marineros echaron suertes para saber quién era el culpable. La suerte cayó sobre mí. Pedí que me arrojaran al mar para salvarlos."},
{diff:2,txt:"Dentro del vientre del gran pez oré desde las profundidades del mar. No pedí ser rescatado de la bestia; reconocí que yo mismo me había metido en ese aprieto y me comprometí a cumplir lo que había prometido."},
{diff:3,txt:"Fui el más exitoso predicador de arrepentimiento de la Biblia: 120.000 personas en la capital asiria se arrepintieron, desde el rey hasta el más humilde. Curiosamente, esto me disgustó enormemente."},
{diff:4,txt:"Soy Jonás hijo de Amitai. Mi disgusto por la misericordia de Dios hacia mis enemigos se hizo tan evidente que Dios me enseñó una lección final con una planta de ricino que creció y murió en un día."}
]},
{name:"Ciro el Grande",title:"El rey que libertó al pueblo de Dios",ref:"Isaías 44:28",verse:"Que dice de Ciro: Es mi pastor, y cumplirá todo lo que yo quiero; al decir a Jerusalén: Serás edificada; y al templo: Serás fundado.",rarity:"rara",pack:"p5",
clues:[
{diff:0,txt:"Mi nombre aparece en la Biblia en una profecía escrita más de 150 años antes de mi nacimiento, en la que se me describe como el que permitiría que Jerusalén fuera reconstruida."},
{diff:1,txt:"En mi primer año como rey de Babilonia, emití un decreto histórico: cualquier judío que quisiera podía regresar a Jerusalén y reconstruir el templo. Además, les devolvimos los utensilios de oro y plata que Nabucodonosor había tomado."},
{diff:2,txt:"El cilindro de arcilla que describe mi política de tolerancia religiosa fue descubierto en el siglo XIX y se conserva en el Museo Británico. Confirma arqueológicamente lo que la Biblia dice sobre mi carácter."},
{diff:3,txt:"La Biblia me llama el «ungido» de Jehová, un título extraordinario para un rey gentil que probablemente no adoraba al Dios hebreo. Soy el único rey extranjero que recibe ese título en las Escrituras hebreas."},
{diff:4,txt:"Soy Ciro II de Persia, fundador del Imperio Aqueménide. La Biblia me presenta como instrumento de Dios para cumplir la profecía de Jeremías del regreso de Israel del exilio de 70 años."}
]}
];

