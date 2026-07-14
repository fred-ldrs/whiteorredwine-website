// ── Rebsorten Italiens (DOC-Liste / Wikipedia-Kompilation) ───────────────────
// Ca. 400 in DOC-Regelwerken zugelassene oder empfohlene Sorten;
// aus einer Gesamtheit von ~1000 registrierten Sorten.
//
// ★   = irreführender Name (guter Quiz-Kandidat)
// ★★  = Farbwort im Namen widerspricht dem Weintyp
// ★★★ = maximale Irreführung
// ─────────────────────────────────────────────────────────────────────────────
//
// QUIZ-KURATIERUNG (2026-07-14):
// Alle seltenen Lokalsorten, obskuren Regionalsorten und Neuzüchtungen entfernt.
// Redundante Untervarianten konsolidiert (Lambrusco → di Sorbara, Magliocco → Dolce,
// Bovale → Sardo, Malvasia Nera Subvarianten, 4 von 6 Trebbiano, 4 von 7 Malvasia).
// Kriterium: Würde ein Weinenthusiast diese Sorte kennen?
// ★/★★/★★★ (irreführender Name) erhöht den Quiz-Wert, schützt aber nicht vor
// Entfernung — unbekannte Sorten bleiben draußen, egal ob mit Stern oder ohne.
// Stand: 83 Rotwein- + 70 Weißweinsorten = 153 Sorten gesamt.

const IT_APPROVED = {

    // ── Rotweinsorten ────────────────────────────────────────────────────────
    red: [
        "Aglianico",             // Basilikata, Kampanien — 'Barolo des Südens'
        "Aleatico",              // Toskana, Latium, Apulien — aromatisch
        "Barbarossa",            // ★ Emilia-Romagna — 'Barbarossa' = Rotbart → rot ✓
        "Barbera",               // Piemont — Barbera d'Asti, d'Alba
        "Bonarda",               // Piemont
        "Bovale Sardo",          // Sardinien
        "Brachetto",             // ★ Piemont — klingt neutral, ist ROT (Brachetto d'Acqui)
        "Cabernet Franc",        // Lombardei, Friaul, Südtirol u. a.
        "Cabernet Sauvignon",    // in allen Regionen
        "Calabrese",             // ★★ Sizilien — Name = 'kalabrisch', ist aber = Nero d'Avola (ROT)
        "Canaiolo nero",         // Toskana — Teil der Chianti-Cuvée
        "Cannonau",              // Sardinien (= Grenache) — 'cannone' = Kanone
        "Carignano",             // Sardinien, Toskana (= Carignan)
        "Carménère",             // in allen Regionen
        "Cesanese d'Affile",     // Latium
        "Ciliegiolo",            // ★ in allen Regionen — 'ciliegia' = Kirsche (neutral)
        "Colorino",              // Toskana — Färbertraube
        "Corvina Veronese",      // Venetien — Rückgrat des Valpolicella/Amarone
        "Corvinone Veronese",    // Venetien — Ergänzung zur Corvina
        "Croatina",              // Emilia-Romagna, Lombardei, Piemont
        "Diolinoir",             // ★ Aostatal — Schweizer Kreuzung, klingt neutral
        "Dolcetto",              // ★★ Piemont — 'dolcetto' = kleines Süßes, ist trockener ROT
        "Doux d'Henry",          // ★★ Piemont — 'Doux' = süß/mild (frz.), ist ROT
        "Franconia",             // ★ Friaul — geographischer Name (= Blaufränkisch), ROT
        "Frappato",              // Sizilien — leichter Rotwein
        "Freisa",                // Piemont — fruchtig, auch süß/prickelnd
        "Gaglioppo",             // Kalabrien — Cirò-Sorte
        "Gamay",                 // Aostatal, Toskana, Umbrien
        "Grechetto Rosso",       // ★★★ Umbrien — 'Grechetto' ist als WEISS bekannt, ROSSO = ROT!
        "Greco Nero",            // ★★ Kalabrien, Kampanien — 'Greco' → Weißwein-Assoziation, NERO = ROT
        "Grenache",              // Toskana, Kampanien, Sizilien
        "Grignolino",            // Piemont — hellfarben, fast rosé-artig
        "Groppello Gentile",     // Lombardei — Chiaretto del Garda
        "Incrocio Manzoni 2.15", // ★ Venetien — Kreuzungsbezeichnung, klingt neutral
        "Lacrima",               // ★ Marken — 'Träne' (= Lacrima di Morro d'Alba), ROT
        "Lagrein",               // Südtirol — kräftiger Rotwein
        "Lambrusco di Sorbara",  // Emilia-Romagna — leichter prickelnder Rotwein
        "Magliocco Dolce",       // ★★ Kalabrien — 'Dolce' = süß (klingt nach Weißwein), ROT
        "Malbec",                // in allen Regionen
        "Malvasia di Casorzo",   // ★★ Piemont — 'Malvasia' → Weißwein-Assoziation, ROT/rosé
        "Malvasia di Schierano", // ★★ Piemont — wie Malvasia di Casorzo, ROT
        "Malvasia Nera",         // ★★ Südtirol, Sardinien, Toskana — 'Malvasia' = weiß-assoziiert, NERA = ROT
        "Marzemino",             // Trentino, Lombardei — Don Giovanni!
        "Merlot",                // in allen Regionen
        "Molinara",              // Venetien — Valpolicella-Sorte
        "Monica Nera",           // Sardinien
        "Montepulciano",         // Abruzzen, Marken — d'Abruzzo & Rosso Conero
        "Moscato di Scanzo",     // ★★ Lombardei — 'Moscato' → Weißwein-Assoziation, ist ROT (Passito)
        "Moscato Rosa",          // ★★ Südtirol, Friaul — 'Moscato' → Weiß, 'Rosa' = rosa, ROT/rosé
        "Nebbiolo",              // Piemont — Barolo, Barbaresco
        "Negroamaro",            // Apulien — 'nero-amaro' = schwarz-bitter
        "Nerello Cappuccio",     // Kalabrien, Sizilien
        "Nerello Mascalese",     // Sizilien — Etna Rosso
        "Nero d'Avola",          // Sizilien — 'schwarz von Avola'
        "Ottavianello",          // Apulien (= Cinsault)
        "Pelaverga",             // Piemont — Verduno Pelaverga DOC
        "Perricone",             // Sizilien
        "Petit-Rouge",           // ★★ Aostatal — 'Petit' klingt neutral/weiß (frz.), ist ROT
        "Piedirosso",            // Kampanien — 'roter Fuß'
        "Pinot Nero",            // in allen Regionen (= Pinot Noir / Spätburgunder)
        "Pignolo",               // Friaul-Julisch Venetien — tanninreich
        "Primitivo",             // Apulien — verwandt mit Zinfandel
        "Raboso Piave",          // Emilia-Romagna, Friaul — sehr tanninreich
        "Refosco",               // Friaul-Julisch Venetien
        "Rondinella",            // Venetien — Valpolicella-Ergänzung
        "Rossese",               // Ligurien — Dolceacqua DOC
        "Ruchè",                 // ★ Piemont — ungewöhnlicher Name, ROT (Ruchè di Castagnole Monferrato)
        "Sagrantino",            // Umbrien — Montefalco Sagrantino, sehr tanninreich
        "Sangiovese",            // in allen Regionen — Chianti, Brunello, Morellino
        "Schiava",               // Südtirol-Trentino — leichter Rotwein (= Vernatsch)
        "Schioppettino",         // ★ Friaul — 'schioppettino' = kleines Gewehr, ROT
        "Susumaniello",          // Apulien — 'kleiner Esel' (trägt viel)
        "Syrah",                 // Sizilien, Toskana, Latium
        "Tazzelenghe",           // ★★ Friaul — 'Zungenabschneider' (Dialekt), extrem tanninreich, ROT
        "Teroldego",             // Trentino — Campo Rotaliano
        "Terrano",               // Friaul-Julisch Venetien (= Refosco del Carso)
        "Tocai Rosso",           // ★★★ Venetien — 'Tocai' → Tocai Friulano (WEISS)! Ist aber ROT
        "Uva di Troia",          // Apulien
        "Uva Rara",              // Piemont, Lombardei
        "Vermentino nero",       // ★★★ Toskana — 'Vermentino' = bekannter WEISSWEIn, NERO = ROT!
        "Vernaccia Nera",        // ★★★ Marken — 'Vernaccia' (San Gimignano) = WEISS, NERA = ROT!
        "Vernatsch",             // Südtirol — deutsche Bezeichnung für Schiava
        "Vespolina",             // Piemont — Ghemme, Gattinara
    ],

    // ── Weißweinsorten ───────────────────────────────────────────────────────
    white: [
        "Albana",                // Emilia-Romagna — Albana di Romagna DOCG
        "Ansonica",              // ★ Sizilien, Toskana (= Inzolia) — klingt neutral
        "Arneis",                // Piemont — 'Rascal' im Dialekt, Roero Arneis
        "Barbera Bianca",        // ★★★ Piemont — 'Barbera' → jeder denkt ROT, ist aber WEISS!
        "Bianco d'Alessano",     // Apulien
        "Bombino Bianco",        // Abruzzen, Apulien — 'Trebbiano d'Abruzzo' (DOC)
        "Bosco",                 // Ligurien — Cinque Terre
        "Canaiolo Bianco",       // ★★ Umbrien, Toskana — 'Canaiolo nero' = rot, BIANCA-Variante WEISS!
        "Carica l'Asino",        // ★ Piemont, Ligurien — 'Lade den Esel' — WEISS
        "Carricante",            // Sizilien — Etna Bianco
        "Catarratto Bianco lucido",  // Sizilien — qualitativ besser
        "Chardonnay",            // in allen Regionen
        "Coda di Volpe",         // ★ Kampanien — 'Fuchsschwanz', WEISS
        "Cortese",               // Piemont — Gavi DOCG
        "Durella",               // Venetien — Lessini Durello DOC
        "Erbaluce",              // Piemont — Caluso DOCG
        "Falanghina",            // Kampanien — Falanghina del Sannio
        "Favorita",              // Piemont — Langhe Favorita
        "Fiano",                 // Kampanien — Fiano di Avellino DOCG
        "Frühroter Veltliner",   // ★★ Südtirol — 'Früh-ROT-er' im Namen, ist aber WEISS!
        "Garganega",             // Venetien — Soave DOCG
        "Glera",                 // Venetien — Prosecco-Traube
        "Grecanico Dorato",      // Sizilien
        "Grechetto",             // Umbrien, Latium, Toskana — Orvieto
        "Greco Bianco",          // Kampanien, Kalabrien — Greco di Tufo DOCG
        "Grillo",                // Sizilien — Marsala, Frascati
        "Groppello Bianco",      // ★★ Venetien — 'Groppello' bekannt als roter Gardasee-Wein, BIANCO!
        "Grüner Veltliner",      // Südtirol — 'Grüner' = grün, WEISS
        "Guarnaccia Bianca",     // ★★ Kampanien, Kalabrien — 'Guarnaccia' (= Grenache) ist ROT, BIANCA = WEISS
        "Inzolia",               // ★ Sizilien (= Ansonica) — neutral klingender Name
        "Kerner",                // Südtirol — Kreuzung aus Trollinger und Riesling
        "Malvasia Bianca di Candia",     // Latium
        "Malvasia del Lazio",    // Latium — Frascati
        "Malvasia Istriana",     // Friaul, Venetien, Sardinien
        "Manzoni Bianco",        // Südtirol-Trentino, Venetien — Kreuzung
        "Moscato bianco",        // in allen Regionen — Asti Spumante DOCG
        "Moscato Giallo",        // Venetien, Südtirol — 'Gelber Muskateller'
        "Müller-Thurgau",        // Südtirol, Friaul, Venetien
        "Nascetta",              // Piemont — Novello d'Alba
        "Nosiola",               // Trentino — Vin Santo Trentino
        "Nuragus",               // Sardinien — meistangebaute sardische Weißweinsorte
        "Ortrugo",               // Emilia-Romagna — Colli Piacentini
        "Pagadebito",            // ★ Emilia-Romagna, Apulien — 'zahlt Schulden', WEISS
        "Passerina",             // Abruzzen, Marken — Offida DOCG
        "Pecorino",              // ★★ Abruzzen, Marken — 'Schaf/Schafskäse'! Ist aber WEISS
        "Petite Arvine",         // Aostatal — auch in Schweizer Wallis
        "Pigato",                // Ligurien — Rivera Ligure di Ponente
        "Pinot bianco",          // Friaul, Südtirol, Venetien u. a. (= Pinot Blanc)
        "Pinot grigio",          // Friaul, Südtirol, Venetien u. a. — 'grigio' = grau
        "Prié Blanc",            // Aostatal — höchster Weinberg Europas
        "Ribolla Gialla",        // Friaul — 'gelbe Ribolla'
        "Riesling Renano",       // Südtirol, Friaul — Rhein-Riesling
        "Rossese Bianco",        // ★★ Ligurien — 'Rossese' (rötlich), BIANCO = WEISS!
        "Sauvignon Blanc",       // in allen Regionen
        "Sauvignonasse",         // ★ Friaul, Venetien — auch 'Friulano' oder 'Tocai Friulano', WEISS
        "Silvaner",              // Südtirol, Abruzzen
        "Timorasso",             // Piemont — Colli Tortonesi — Renaissance-Sorte
        "Tocai Friulano",        // ★ Friaul — 'Tocai' klingt ungewiss; WEISS (heute: Friulano)
        "Traminer aromatico",    // Südtirol, Trentino (= Gewürztraminer)
        "Trebbiano d'Abruzzo",   // Abruzzen, Apulien u. a.
        "Trebbiano Toscano",     // Toskana, Latium, Umbrien — meistangebaute WEISS-Sorte Italiens
        "Verdeca",               // Apulien
        "Verdicchio bianco",     // Marken — Verdicchio dei Castelli di Jesi DOCG
        "Verduzzo Friulano",     // Venetien, Friaul — auch Dessertwein
        "Vermentino",            // Ligurien, Sardinien, Toskana
        "Vernaccia di San Gimignano", // Toskana — erste italienische DOCG (1966)
        "Vespaiola",             // Venetien — Breganze Torcolato
        "Viognier",              // Toskana
        "Vitovska",              // Friaul-Julisch Venetien — Karst
        "Zibibbo",               // ★ Sizilien — Pantelleria; arabischer Name, WEISS (Moscato)
    ],
};
