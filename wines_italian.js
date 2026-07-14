// ── Rebsorten Italiens (DOC-Liste / Wikipedia-Kompilation) ───────────────────
// Ca. 400 in DOC-Regelwerken zugelassene oder empfohlene Sorten;
// aus einer Gesamtheit von ~1000 registrierten Sorten.
//
// ★   = irreführender Name (guter Quiz-Kandidat)
// ★★  = Farbwort im Namen widerspricht dem Weintyp
// ★★★ = maximale Irreführung
// ─────────────────────────────────────────────────────────────────────────────

const IT_APPROVED = {

    // ── ~164 Rotweinsorten ────────────────────────────────────────────────────
    red: [
        "Abbuoto",               // Latium — alte Lokalsorte
        "Abrusco",               // Toskana — alte Sorte
        "Aglianico",             // Basilikata, Kampanien — 'Barolo des Südens'
        "Albaranzeuli Nero",     // Sardinien
        "Albarossa",             // Piemont — Neuzüchtung
        "Aleatico",              // Toskana, Latium, Apulien — aromatisch
        "Alicante",              // Toskana (= Grenache)
        "Alicante Bouschet",     // Färbertraube mit rotem Fruchtfleisch
        "Ancellotta",            // Emilia-Romagna, Lombardei — Färbertraube
        "Avana",                 // Piemont — seltene Lokalsorte
        "Avarengo",              // Piemont
        "Barbarossa",            // ★ Emilia-Romagna — 'Barbarossa' = Rotbart → rot ✓
        "Barbera",               // Piemont — Barbera d'Asti, d'Alba
        "Barbera Sarda",         // Sardinien
        "Barsaglina",            // Toskana
        "Bombino Nero",          // Apulien
        "Bonamico",              // Toskana
        "Bonarda",               // Piemont
        "Bonarda di Gattinara",  // Piemont (= Uva Rara / Croatina je nach Region)
        "Bonda",                 // Aostatal
        "Bovale Grande",         // Sardinien, Molise
        "Bovale Sardo",          // Sardinien
        "Bracciola Nera",        // Toskana
        "Brachetto",             // ★ Piemont — klingt neutral, ist ROT (Brachetto d'Acqui)
        "Bric",                  // Piemont — Neuzüchtung von Dalmasso
        "Cabernet Franc",        // Lombardei, Friaul, Südtirol u. a.
        "Cabernet Sauvignon",    // in allen Regionen
        "Caddiu",                // Sardinien
        "Cagnulari",             // Sardinien
        "Calabrese",             // ★★ Sizilien — Name = 'kalabrisch', ist aber = Nero d'Avola (ROT)
        "Caloria",               // Toskana
        "Canaiolo nero",         // Toskana — Teil der Chianti-Cuvée
        "Canina Nera",           // Toskana
        "Caricagiola",           // Sardinien
        "Cannonau",              // Sardinien (= Grenache) — 'cannone' = Kanone
        "Carignano",             // Sardinien, Toskana (= Carignan)
        "Carménère",             // in allen Regionen
        "Castiglione",           // Kalabrien
        "Catanese Nero",         // Sizilien
        "Cesanese Comune",       // Latium, Kampanien
        "Cesanese d'Affile",     // Latium
        "Chatus",                // Piemont, Ardèche
        "Ciliegiolo",            // ★ in allen Regionen — 'ciliegia' = Kirsche (neutral)
        "Cjanorie",              // Friaul-Julisch Venetien
        "Colombana Nera",        // Toskana
        "Colorino",              // Toskana — Färbertraube
        "Corinto Nero",          // Sizilien
        "Cornalin d'Aoste",      // Aostatal
        "Cornarea",              // Piemont — Neuzüchtung von Dalmasso
        "Cordenossa",            // Friaul-Julisch Venetien
        "Corvina Veronese",      // Venetien — Rückgrat des Valpolicella/Amarone
        "Corvinone Veronese",    // Venetien — Ergänzung zur Corvina
        "Croatina",              // Emilia-Romagna, Lombardei, Piemont
        "Crovassa",              // Aostatal
        "Dindarella",            // Venetien — Valpolicella-Ergänzungssorte
        "Diolinoir",             // ★ Aostatal — Schweizer Kreuzung, klingt neutral
        "Dolcetto",              // ★★ Piemont — 'dolcetto' = kleines Süßes, ist trockener ROT
        "Doux d'Henry",          // ★★ Piemont — 'Doux' = süß/mild (frz.), ist ROT
        "Durasa",                // Piemont
        "Enantio",               // Südtirol-Trentino — alte Sorte
        "Ervi",                  // Neuzüchtung von Fragoni
        "Fertilia",              // Neuzüchtung
        "Foglia Tonda",          // Toskana — 'rundes Blatt'
        "Forgiarin",             // Friaul-Julisch Venetien
        "Fortana",               // Emilia-Romagna, Lombardei
        "Franconia",             // ★ Friaul — geographischer Name (= Blaufränkisch), ROT
        "Frappato",              // Sizilien — leichter Rotwein
        "Freisa",                // Piemont — fruchtig, auch süß/prickelnd
        "Fumin",                 // Aostatal — 'Rauch-Traube'
        "Gaglioppo",             // Kalabrien — Cirò-Sorte
        "Gamay",                 // Aostatal, Toskana, Umbrien
        "Girò",                  // Sardinien
        "Grechetto Rosso",       // ★★★ Umbrien — 'Grechetto' ist als WEISS bekannt, ROSSO = ROT!
        "Greco Nero",            // ★★ Kalabrien, Kampanien — 'Greco' → Weißwein-Assoziation, NERO = ROT
        "Grenache",              // Toskana, Kampanien, Sizilien
        "Grignolino",            // Piemont — hellfarben, fast rosé-artig
        "Groppello di Mocasina", // Lombardei (Gardasee)
        "Groppello di Santo Stefano", // Lombardei
        "Groppello Gentile",     // Lombardei — Chiaretto del Garda
        "Grosso Nero",           // Sizilien
        "Guarnaccia",            // Kampanien
        "Incrocio Manzoni 2.15", // ★ Venetien — Kreuzungsbezeichnung, klingt neutral
        "Incrocio Terzi N. 1",   // Lombardei — Kreuzung
        "Lacrima",               // ★ Marken — 'Träne' (= Lacrima di Morro d'Alba), ROT
        "Lagrein",               // Südtirol — kräftiger Rotwein
        "Lambrusca di Alessandria", // Emilia-Romagna
        "Lambrusco di Sorbara",  // Emilia-Romagna — leichter prickelnder Rotwein
        "Lambrusco Grasparossa", // Emilia-Romagna
        "Lambrusco Maestri",     // Emilia-Romagna
        "Lambrusco Marani",      // Lombardei, Emilia-Romagna
        "Lambrusco Montericco",  // Emilia-Romagna
        "Lambrusco Oliva",       // Emilia-Romagna, Lombardei
        "Lambrusco Salamino",    // Emilia-Romagna
        "Lambrusco Viadanese",   // Lombardei, Emilia-Romagna
        "Magliocco Canino",      // Kalabrien
        "Magliocco Dolce",       // ★★ Kalabrien — 'Dolce' = süß (klingt nach Weißwein), ROT
        "Maiolica",              // Abruzzen, Marken
        "Malbec",                // in allen Regionen
        "Malbo Gentile",         // Emilia-Romagna
        "Malvasia di Casorzo",   // ★★ Piemont — 'Malvasia' → Weißwein-Assoziation, ROT/rosé
        "Malvasia di Schierano", // ★★ Piemont — wie Malvasia di Casorzo, ROT
        "Malvasia Nera",         // ★★ Südtirol, Sardinien, Toskana — 'Malvasia' = weiß-assoziiert, NERA = ROT
        "Malvasia Nera di Basilicata", // ★★ wie Malvasia Nera
        "Malvasia Nera di Brindisi",   // ★★ Apulien — wie Malvasia Nera
        "Malvasia Nera di Lecce",      // ★★ Apulien — wie Malvasia Nera
        "Marsigliana Nera",      // Kalabrien
        "Mammolo",               // Toskana — 'Veilchen-Traube'
        "Marzemino",             // Trentino, Lombardei — Don Giovanni!
        "Mayolet",               // Aostatal
        "Mazzese",               // Toskana
        "Merlot",                // in allen Regionen
        "Molinara",              // Venetien — Valpolicella-Sorte
        "Monica Nera",           // Sardinien
        "Montepulciano",         // Abruzzen, Marken — d'Abruzzo & Rosso Conero
        "Moscato di Scanzo",     // ★★ Lombardei — 'Moscato' → Weißwein-Assoziation, ist ROT (Passito)
        "Moscato Rosa",          // ★★ Südtirol, Friaul — 'Moscato' → Weiß, 'Rosa' = rosa, ROT/rosé
        "Nebbiolo",              // Piemont — Barolo, Barbaresco
        "Negrara",               // Südtirol-Trentino, Venetien
        "Negroamaro",            // Apulien — 'nero-amaro' = schwarz-bitter
        "Nerello Cappuccio",     // Kalabrien, Sizilien
        "Nerello Mascalese",     // Sizilien — Etna Rosso
        "Nero d'Avola",          // Sizilien — 'schwarz von Avola'
        "Neyret",                // Aostatal, Piemont
        "Nocera",                // Kalabrien, Sizilien
        "Notardomenico",         // Apulien
        "Oseleta",               // Venetien — seltene Valpolicella-Sorte
        "Ottavianello",          // Apulien (= Cinsault)
        "Pascale",               // Sardinien
        "Pelaverga",             // Piemont — Verduno Pelaverga DOC
        "Perricone",             // Sizilien
        "Petit-Rouge",           // ★★ Aostatal — 'Petit' klingt neutral/weiß (frz.), ist ROT
        "Piedirosso",            // Kampanien — 'roter Fuß'
        "Piculti Neri",          // Friaul-Julisch Venetien
        "Pinot Nero",            // in allen Regionen (= Pinot Noir / Spätburgunder)
        "Pignolo",               // Friaul-Julisch Venetien — tanninreich
        "Pollera Nera",          // Ligurien, Toskana
        "Prëmetta",              // Aostatal
        "Primitivo",             // Apulien — verwandt mit Zinfandel
        "Prunesta",              // Kalabrien
        "Quagliano",             // Piemont — süßer Schaumwein
        "Raboso Piave",          // Emilia-Romagna, Friaul — sehr tanninreich
        "Raboso Veronese",       // Venetien, Emilia-Romagna
        "Refosco",               // Friaul-Julisch Venetien
        "Rondinella",            // Venetien — Valpolicella-Ergänzung
        "Rossese",               // Ligurien — Dolceacqua DOC
        "Ruchè",                 // ★ Piemont — ungewöhnlicher Name, ROT (Ruchè di Castagnole Monferrato)
        "Sagrantino",            // Umbrien — Montefalco Sagrantino, sehr tanninreich
        "Sangiovese",            // in allen Regionen — Chianti, Brunello, Morellino
        "Sciascinoso",           // Kampanien
        "Schiava",               // Südtirol-Trentino — leichter Rotwein (= Vernatsch)
        "Schioppettino",         // ★ Friaul — 'schioppettino' = kleines Gewehr, ROT
        "Somarello",             // Apulien
        "Susumaniello",          // Apulien — 'kleiner Esel' (trägt viel)
        "Syrah",                 // Sizilien, Toskana, Latium
        "Tazzelenghe",           // ★★ Friaul — 'Zungenabschneider' (Dialekt), extrem tanninreich, ROT
        "Teroldego",             // Trentino — Campo Rotaliano
        "Terrano",               // Friaul-Julisch Venetien (= Refosco del Carso)
        "Tocai Rosso",           // ★★★ Venetien — 'Tocai' → Tocai Friulano (WEISS)! Ist aber ROT
        "Uva di Troia",          // Apulien
        "Uva Rara",              // Piemont, Lombardei
        "Uvalino",               // Piemont — seltene Lokalsorte
        "Vermentino nero",       // ★★★ Toskana — 'Vermentino' = bekannter WEISSWEIn, NERO = ROT!
        "Vernaccia Nera",        // ★★★ Marken — 'Vernaccia' (San Gimignano) = WEISS, NERA = ROT!
        "Vernatsch",             // Südtirol — deutsche Bezeichnung für Schiava
        "Vespolina",             // Piemont — Ghemme, Gattinara
        "Vien de Nus",           // Aostatal
    ],

    // ── ~144 Weißweinsorten ───────────────────────────────────────────────────
    white: [
        "Albana",                // Emilia-Romagna — Albana di Romagna DOCG
        "Albanello Bianco",      // Sizilien
        "Albaranzeuli Bianco",   // Sardinien
        "Albarola",              // Ligurien, Sizilien, Toskana
        "Alionza",               // Emilia-Romagna
        "Ansonica",              // ★ Sizilien, Toskana (= Inzolia) — klingt neutral
        "Arneis",                // Piemont — 'Rascal' im Dialekt, Roero Arneis
        "Arvesiniadu",           // Sardinien
        "Asprinio Bianco",       // Kampanien — 'herb/sauer'
        "Bariadorgia",           // Sardinien
        "Barbera Bianca",        // ★★★ Piemont — 'Barbera' → jeder denkt ROT, ist aber WEISS!
        "Bellone",               // Latium
        "Bervedino",             // Emilia-Romagna
        "Biancame",              // Emilia-Romagna, Marken
        "Bianchetta Genovese",   // Ligurien
        "Bianchetta Trevigiana", // Südtirol-Trentino, Venetien
        "Bianco d'Alessano",     // Apulien
        "Biancolella",           // Kampanien (Ischia)
        "Biancone di Portoferraio", // Toskana (Elba)
        "Bombino Bianco",        // Abruzzen, Apulien — 'Trebbiano d'Abruzzo' (DOC)
        "Bosco",                 // Ligurien — Cinque Terre
        "Bussanello",            // Neuzüchtung von Dalmasso
        "Canaiolo Bianco",       // ★★ Umbrien, Toskana — 'Canaiolo nero' = rot, BIANCA-Variante WEISS!
        "Carica l'Asino",        // ★ Piemont, Ligurien — 'Lade den Esel' — WEISS
        "Carricante",            // Sizilien — Etna Bianco
        "Catalanesca bianca",    // Kampanien
        "Catarratto Bianco comune",  // Sizilien — viel angebaut
        "Catarratto Bianco lucido",  // Sizilien — qualitativ besser
        "Chardonnay",            // in allen Regionen
        "Cividin",               // Friaul-Julisch Venetien
        "Clairette Blanche",     // in einigen DOC zugelassen
        "Cococciola",            // Abruzzen, Apulien
        "Coda di Volpe",         // ★ Kampanien — 'Fuchsschwanz', WEISS
        "Cortese",               // Piemont — Gavi DOCG
        "Cové",                  // Neuzüchtung von Dalmasso
        "Damaschino",            // Sizilien
        "Durella",               // Venetien — Lessini Durello DOC
        "Erbaluce",              // Piemont — Caluso DOCG
        "Falanghina",            // Kampanien — Falanghina del Sannio
        "Favorita",              // Piemont — Langhe Favorita
        "Fiano",                 // Kampanien — Fiano di Avellino DOCG
        "Flavis",                // Venetien — seltene Sorte
        "Forastera",             // Kampanien (Ischia), Sardinien
        "Francavilla",           // Apulien
        "Frühroter Veltliner",   // ★★ Südtirol — 'Früh-ROT-er' im Namen, ist aber WEISS!
        "Fubiano",               // Neuzüchtung von Dalmasso
        "Garganega",             // Venetien — Soave DOCG
        "Ginestra",              // Kampanien
        "Glera",                 // Venetien — Prosecco-Traube
        "Grecanico Dorato",      // Sizilien
        "Grechetto",             // Umbrien, Latium, Toskana — Orvieto
        "Greco Bianco",          // Kampanien, Kalabrien — Greco di Tufo DOCG
        "Greco Bianco di Novara", // Piemont
        "Grillo",                // Sizilien — Marsala, Frascati
        "Groppello Bianco",      // ★★ Venetien — 'Groppello' bekannt als roter Gardasee-Wein, BIANCO!
        "Grüner Veltliner",      // Südtirol — 'Grüner' = grün, WEISS
        "Guardavalle",           // Kalabrien
        "Guarnaccia Bianca",     // ★★ Kampanien, Kalabrien — 'Guarnaccia' (= Grenache) ist ROT, BIANCA = WEISS
        "Impigno",               // Apulien
        "Invernega",             // Lombardei
        "Inzolia",               // ★ Sizilien (= Ansonica) — neutral klingender Name
        "Italica",               // Neuzüchtung von Dalmasso
        "Livornese Bianca",      // Toskana
        "Lumassina",             // Ligurien
        "Kerner",                // Südtirol — Kreuzung aus Trollinger und Riesling
        "Maceratino",            // Marken
        "Malvasia Bianca di Basilicata", // Basilikata
        "Malvasia Bianca di Candia",     // Latium
        "Malvasia Bianca Lunga", // Toskana, Latium, Umbrien — Soave-Ergänzung
        "Malvasia del Lazio",    // Latium — Frascati
        "Malvasia di Candia Aromatica", // Emilia-Romagna
        "Malvasia di Sardegna",  // Sardinien
        "Malvasia Istriana",     // Friaul, Venetien, Sardinien
        "Mantonico bianco",      // Kalabrien, Sizilien
        "Manzoni Bianco",        // Südtirol-Trentino, Venetien — Kreuzung
        "Marsanne",              // in einigen Regionen
        "Minnella Bianca",       // Sizilien
        "Montonico Bianco",      // Abruzzen, Marken
        "Montù",                 // Emilia-Romagna
        "Moscatellone Bianco",   // Kampanien
        "Moscatello Selvatico",  // Apulien — 'wilde Muskattraube'
        "Moscato bianco",        // in allen Regionen — Asti Spumante DOCG
        "Moscato Giallo",        // Venetien, Südtirol — 'Gelber Muskateller'
        "Mostosa",               // Emilia-Romagna
        "Müller-Thurgau",        // Südtirol, Friaul, Venetien
        "Nascetta",              // Piemont — Novello d'Alba
        "Nasco",                 // Sardinien — seltene Dessertweins-Sorte
        "Nosiola",               // Trentino — Vin Santo Trentino
        "Nuragus",               // Sardinien — meistangebaute sardische Weißweinsorte
        "Ortrugo",               // Emilia-Romagna — Colli Piacentini
        "Pagadebito",            // ★ Emilia-Romagna, Apulien — 'zahlt Schulden', WEISS
        "Pampanuto",             // Apulien
        "Passerina",             // Abruzzen, Marken — Offida DOCG
        "Pecorello",             // Kalabrien — 'kleines Schaf'
        "Pecorino",              // ★★ Abruzzen, Marken — 'Schaf/Schafskäse'! Ist aber WEISS
        "Perera",                // Venetien
        "Petite Arvine",         // Aostatal — auch in Schweizer Wallis
        "Picolit Bianco",        // Friaul — seltener Dessertwein
        "Pigato",                // Ligurien — Rivera Ligure di Ponente
        "Pinella",               // Friaul
        "Pinello",               // Venetien
        "Pinot bianco",          // Friaul, Südtirol, Venetien u. a. (= Pinot Blanc)
        "Pinot grigio",          // Friaul, Südtirol, Venetien u. a. — 'grigio' = grau
        "Prié Blanc",            // Aostatal — höchster Weinberg Europas
        "Procanico",             // Umbrien (= Trebbiano Toscano)
        "Prosecco",              // Venetien — Glera ist der offizielle Sortenname
        "Retagliado bianco",     // Sardinien
        "Ribolla Gialla",        // Friaul — 'gelbe Ribolla'
        "Riesling Renano",       // Südtirol, Friaul — Rhein-Riesling
        "Riesling italico",      // Friaul, Venetien, Südtirol — Welschriesling
        "Rollo",                 // Ligurien
        "Roscetto",              // Latium
        "Rossese Bianco",        // ★★ Ligurien — 'Rossese' (rötlich), BIANCO = WEISS!
        "Saorin",                // Venetien
        "Sauvignon Blanc",       // in allen Regionen
        "Sauvignonasse",         // ★ Friaul, Venetien — auch 'Friulano' oder 'Tocai Friulano', WEISS
        "Sciaglin",              // Friaul-Julisch Venetien
        "Semidano",              // Sardinien
        "Silvaner",              // Südtirol, Abruzzen
        "Timorasso",             // Piemont — Colli Tortonesi — Renaissance-Sorte
        "Tocai Friulano",        // ★ Friaul — 'Tocai' klingt ungewiss; WEISS (heute: Friulano)
        "Torbato",               // Sardinien — Alghero DOC
        "Traminer aromatico",    // Südtirol, Trentino (= Gewürztraminer)
        "Trebbiano di Soave",    // Venetien, Lombardei
        "Trebbiano d'Abruzzo",   // Abruzzen, Apulien u. a.
        "Trebbiano Giallo",      // Latium — 'gelbes Trebbiano'
        "Trebbiano Romagnolo",   // Emilia-Romagna
        "Trebbiano Spoletino",   // Umbrien
        "Trebbiano Toscano",     // Toskana, Latium, Umbrien — meistangebaute WEISS-Sorte Italiens
        "Ucelùt",                // Friaul-Julisch Venetien
        "Veltliner",             // Abruzzen (= Grüner Veltliner)
        "Verdeca",               // Apulien
        "Verdello",              // Umbrien
        "Verdicchio bianco",     // Marken — Verdicchio dei Castelli di Jesi DOCG
        "Verdiso",               // Venetien
        "Verduzzo Friulano",     // Venetien, Friaul — auch Dessertwein
        "Verduzzo Trevigiano",   // Venetien, Friaul
        "Vermentino",            // Ligurien, Sardinien, Toskana
        "Vernaccia",             // ★ Toskana, Sardinien — Vernaccia di San Gimignano DOCG (WEISS)
        "Vernaccia di San Gimignano", // Toskana — erste italienische DOCG (1966)
        "Vespaiola",             // Venetien — Breganze Torcolato
        "Viognier",              // Toskana
        "Vitovska",              // Friaul-Julisch Venetien — Karst
        "Zibibbo",               // ★ Sizilien — Pantelleria; arabischer Name, WEISS (Moscato)
    ],
};
