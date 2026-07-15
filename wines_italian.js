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

    // ── Rotweinsorten — Anbaufläche IT (ISTAT ca. 2020, 0 = keine Angabe)
    red: [
        { name: "Aglianico",             ha: 11000 }, // Basilikata, Kampanien — 'Barolo des Südens'
        { name: "Aleatico",              ha:   500 }, // Toskana, Latium, Apulien — aromatisch
        { name: "Barbarossa",            ha:     0 }, // ★ Emilia-Romagna — 'Rotbart' → rot ✓
        { name: "Barbera",               ha: 28000 }, // Piemont — Barbera d'Asti, d'Alba
        { name: "Bonarda",               ha:  4000 }, // Piemont
        { name: "Bovale Sardo",          ha:  1000 }, // Sardinien
        { name: "Brachetto",             ha:   500 }, // ★ Piemont — klingt neutral, ist ROT
        { name: "Cabernet Franc",        ha:  4000 }, // Lombardei, Friaul, Südtirol
        { name: "Cabernet Sauvignon",    ha: 15000 }, // in allen Regionen
        { name: "Calabrese",             ha:     0 }, // ★★ Sizilien — = Nero d'Avola (ROT)
        { name: "Canaiolo nero",         ha:  4000 }, // Toskana — Teil der Chianti-Cuvée
        { name: "Cannonau",              ha: 14000 }, // Sardinien (= Grenache)
        { name: "Carignano",             ha:  2000 }, // Sardinien, Toskana (= Carignan)
        { name: "Carménère",             ha:     0 }, // in allen Regionen
        { name: "Cesanese d'Affile",     ha:   500 }, // Latium
        { name: "Ciliegiolo",            ha:  1000 }, // ★ — 'ciliegia' = Kirsche (neutral)
        { name: "Colorino",              ha:   500 }, // Toskana — Färbertraube
        { name: "Corvina Veronese",      ha: 10000 }, // Venetien — Valpolicella/Amarone
        { name: "Corvinone Veronese",    ha:  2000 }, // Venetien — Ergänzung zur Corvina
        { name: "Croatina",              ha:  2000 }, // Emilia-Romagna, Lombardei, Piemont
        { name: "Diolinoir",             ha:     0 }, // ★ Aostatal — Schweizer Kreuzung
        { name: "Dolcetto",              ha:  5000 }, // ★★ Piemont — 'dolcetto' = kleines Süßes, ROT
        { name: "Doux d'Henry",          ha:     0 }, // ★★ Piemont — 'Doux' = süß/mild, ist ROT
        { name: "Franconia",             ha:     0 }, // ★ Friaul — = Blaufränkisch, ROT
        { name: "Frappato",              ha:  1000 }, // Sizilien — leichter Rotwein
        { name: "Freisa",                ha:   500 }, // Piemont — fruchtig
        { name: "Gaglioppo",             ha:  1000 }, // Kalabrien — Cirò-Sorte
        { name: "Gamay",                 ha:   300 }, // Aostatal, Toskana, Umbrien
        { name: "Grechetto Rosso",       ha:     0 }, // ★★★ Umbrien — 'Grechetto' als WEISS bekannt, ROSSO = ROT
        { name: "Greco Nero",            ha:     0 }, // ★★ Kalabrien — 'Greco' → Weißwein, NERO = ROT
        { name: "Grenache",              ha:  1000 }, // Toskana, Kampanien, Sizilien
        { name: "Grignolino",            ha:   500 }, // Piemont — hellfarben, fast rosé-artig
        { name: "Groppello Gentile",     ha:   500 }, // Lombardei — Chiaretto del Garda
        { name: "Incrocio Manzoni 2.15", ha:     0 }, // ★ Venetien — Kreuzungsbezeichnung
        { name: "Lacrima",               ha:   300 }, // ★ Marken — 'Träne', ROT
        { name: "Lagrein",               ha:   800 }, // Südtirol — kräftiger Rotwein
        { name: "Lambrusco di Sorbara",  ha:  2000 }, // Emilia-Romagna — prickelnder Rotwein
        { name: "Magliocco Dolce",       ha:     0 }, // ★★ Kalabrien — 'Dolce' = süß, ROT
        { name: "Malbec",                ha:   300 }, // in allen Regionen
        { name: "Malvasia di Casorzo",   ha:   200 }, // ★★ Piemont — 'Malvasia' → Weißwein, ROT/rosé
        { name: "Malvasia di Schierano", ha:     0 }, // ★★ Piemont — wie Malvasia di Casorzo, ROT
        { name: "Malvasia Nera",         ha:  4000 }, // ★★ Südtirol, Sardinien — 'Malvasia' weiß-assoziiert, NERA = ROT
        { name: "Marzemino",             ha:   500 }, // Trentino, Lombardei — Don Giovanni!
        { name: "Merlot",                ha: 27000 }, // in allen Regionen
        { name: "Molinara",              ha:  1000 }, // Venetien — Valpolicella-Sorte
        { name: "Monica Nera",           ha:  2000 }, // Sardinien
        { name: "Montepulciano",         ha: 33000 }, // Abruzzen, Marken — d'Abruzzo & Rosso Conero
        { name: "Moscato di Scanzo",     ha:     0 }, // ★★ Lombardei — 'Moscato' → Weißwein, ist ROT (Passito)
        { name: "Moscato Rosa",          ha:   100 }, // ★★ Südtirol, Friaul — 'Moscato' → Weiß, ROT/rosé
        { name: "Nebbiolo",              ha:  9000 }, // Piemont — Barolo, Barbaresco
        { name: "Negroamaro",            ha: 18000 }, // Apulien — 'nero-amaro' = schwarz-bitter
        { name: "Nerello Cappuccio",     ha:   500 }, // Kalabrien, Sizilien
        { name: "Nerello Mascalese",     ha:  3000 }, // Sizilien — Etna Rosso
        { name: "Nero d'Avola",          ha: 11000 }, // Sizilien — 'schwarz von Avola'
        { name: "Ottavianello",          ha:   500 }, // Apulien (= Cinsault)
        { name: "Pelaverga",             ha:     0 }, // Piemont — Verduno Pelaverga DOC
        { name: "Perricone",             ha:   500 }, // Sizilien
        { name: "Petit-Rouge",           ha:     0 }, // ★★ Aostatal — 'Petit' klingt weiß, ist ROT
        { name: "Piedirosso",            ha:  1000 }, // Kampanien — 'roter Fuß'
        { name: "Pinot Nero",            ha: 10000 }, // in allen Regionen (= Pinot Noir)
        { name: "Pignolo",               ha:     0 }, // Friaul-Julisch Venetien — tanninreich
        { name: "Primitivo",             ha: 15000 }, // Apulien — verwandt mit Zinfandel
        { name: "Raboso Piave",          ha:   500 }, // Emilia-Romagna, Friaul — tanninreich
        { name: "Refosco",               ha:  1000 }, // Friaul-Julisch Venetien
        { name: "Rondinella",            ha:  3000 }, // Venetien — Valpolicella-Ergänzung
        { name: "Rossese",               ha:   300 }, // Ligurien — Dolceacqua DOC
        { name: "Ruchè",                 ha:   300 }, // ★ Piemont — ungewöhnlicher Name, ROT
        { name: "Sagrantino",            ha:  1000 }, // Umbrien — Montefalco Sagrantino
        { name: "Sangiovese",            ha: 71000 }, // in allen Regionen — Chianti, Brunello, Morellino
        { name: "Schiava",               ha:  2000 }, // Südtirol-Trentino — leichter Rotwein (= Vernatsch)
        { name: "Schioppettino",         ha:   200 }, // ★ Friaul — 'kleines Gewehr', ROT
        { name: "Susumaniello",          ha:   200 }, // Apulien — 'kleiner Esel'
        { name: "Syrah",                 ha:  6000 }, // Sizilien, Toskana, Latium
        { name: "Tazzelenghe",           ha:     0 }, // ★★ Friaul — 'Zungenabschneider', ROT
        { name: "Teroldego",             ha:   700 }, // Trentino — Campo Rotaliano
        { name: "Terrano",               ha:   500 }, // Friaul-Julisch Venetien
        { name: "Tocai Rosso",           ha:     0 }, // ★★★ Venetien — 'Tocai' → WEISS, ist aber ROT!
        { name: "Uva di Troia",          ha:  1000 }, // Apulien
        { name: "Uva Rara",              ha:   200 }, // Piemont, Lombardei
        { name: "Vermentino nero",       ha:     0 }, // ★★★ Toskana — 'Vermentino' = WEISS, NERO = ROT
        { name: "Vernaccia Nera",        ha:     0 }, // ★★★ Marken — 'Vernaccia' = WEISS, NERA = ROT
        { name: "Vernatsch",             ha:  2000 }, // Südtirol — deutsche Bezeichnung für Schiava
        { name: "Vespolina",             ha:   300 }, // Piemont — Ghemme, Gattinara
    ],

    // ── Weißweinsorten — Anbaufläche IT (ISTAT ca. 2020, 0 = keine Angabe)
    white: [
        { name: "Albana",                        ha:  2000 }, // Emilia-Romagna — Albana di Romagna DOCG
        { name: "Ansonica",                      ha:  1000 }, // ★ Sizilien, Toskana (= Inzolia)
        { name: "Arneis",                        ha:  2000 }, // Piemont — 'Rascal' im Dialekt, Roero Arneis
        { name: "Barbera Bianca",                ha:     0 }, // ★★★ Piemont — 'Barbera' → ROT, ist aber WEISS!
        { name: "Bianco d'Alessano",             ha:   500 }, // Apulien
        { name: "Bombino Bianco",                ha:  2000 }, // Abruzzen, Apulien
        { name: "Bosco",                         ha:   300 }, // Ligurien — Cinque Terre
        { name: "Canaiolo Bianco",               ha:     0 }, // ★★ Umbrien — 'Canaiolo nero' = rot, BIANCA = WEISS
        { name: "Carica l'Asino",                ha:     0 }, // ★ Piemont — 'Lade den Esel', WEISS
        { name: "Carricante",                    ha:   500 }, // Sizilien — Etna Bianco
        { name: "Catarratto Bianco lucido",      ha: 22000 }, // Sizilien
        { name: "Chardonnay",                    ha: 15000 }, // in allen Regionen
        { name: "Coda di Volpe",                 ha:   500 }, // ★ Kampanien — 'Fuchsschwanz', WEISS
        { name: "Cortese",                       ha:  2000 }, // Piemont — Gavi DOCG
        { name: "Durella",                       ha:   500 }, // Venetien — Lessini Durello DOC
        { name: "Erbaluce",                      ha:   500 }, // Piemont — Caluso DOCG
        { name: "Falanghina",                    ha:  4000 }, // Kampanien — Falanghina del Sannio
        { name: "Favorita",                      ha:     0 }, // Piemont — Langhe Favorita
        { name: "Fiano",                         ha:  4000 }, // Kampanien — Fiano di Avellino DOCG
        { name: "Frühroter Veltliner",           ha:     0 }, // ★★ Südtirol — 'Früh-ROT-er' im Namen, ist WEISS
        { name: "Garganega",                     ha: 15000 }, // Venetien — Soave DOCG
        { name: "Glera",                         ha: 30000 }, // Venetien — Prosecco-Traube
        { name: "Grecanico Dorato",              ha:  3000 }, // Sizilien
        { name: "Grechetto",                     ha:  2000 }, // Umbrien, Latium, Toskana — Orvieto
        { name: "Greco Bianco",                  ha:  3000 }, // Kampanien, Kalabrien — Greco di Tufo DOCG
        { name: "Grillo",                        ha:  5000 }, // Sizilien — Marsala
        { name: "Groppello Bianco",              ha:     0 }, // ★★ Venetien — 'Groppello' = rot, BIANCO = WEISS
        { name: "Grüner Veltliner",              ha:   300 }, // Südtirol — WEISS
        { name: "Guarnaccia Bianca",             ha:     0 }, // ★★ Kampanien — 'Guarnaccia' = ROT, BIANCA = WEISS
        { name: "Inzolia",                       ha:  4000 }, // ★ Sizilien (= Ansonica)
        { name: "Kerner",                        ha:   500 }, // Südtirol — Kreuzung Trollinger × Riesling
        { name: "Malvasia Bianca di Candia",     ha: 13000 }, // Latium
        { name: "Malvasia del Lazio",            ha:  2000 }, // Latium — Frascati
        { name: "Malvasia Istriana",             ha:  4000 }, // Friaul, Venetien, Sardinien
        { name: "Manzoni Bianco",                ha:   300 }, // Südtirol-Trentino, Venetien
        { name: "Moscato bianco",                ha: 12000 }, // in allen Regionen — Asti Spumante DOCG
        { name: "Moscato Giallo",                ha:   500 }, // Venetien, Südtirol — 'Gelber Muskateller'
        { name: "Müller-Thurgau",                ha:  1000 }, // Südtirol, Friaul, Venetien
        { name: "Nascetta",                      ha:   200 }, // Piemont — Novello d'Alba
        { name: "Nosiola",                       ha:   200 }, // Trentino — Vin Santo Trentino
        { name: "Nuragus",                       ha:  1500 }, // Sardinien
        { name: "Ortrugo",                       ha:   500 }, // Emilia-Romagna — Colli Piacentini
        { name: "Pagadebito",                    ha:     0 }, // ★ Emilia-Romagna — 'zahlt Schulden', WEISS
        { name: "Passerina",                     ha:   500 }, // Abruzzen, Marken — Offida DOCG
        { name: "Pecorino",                      ha:   500 }, // ★★ Abruzzen — 'Schafskäse', ist aber WEISS
        { name: "Petite Arvine",                 ha:     0 }, // Aostatal — auch in Schweizer Wallis
        { name: "Pigato",                        ha:   500 }, // Ligurien — Rivera Ligure di Ponente
        { name: "Pinot bianco",                  ha:  3000 }, // Friaul, Südtirol, Venetien (= Pinot Blanc)
        { name: "Pinot grigio",                  ha: 24000 }, // Friaul, Südtirol, Venetien — 'grigio' = grau
        { name: "Prié Blanc",                    ha:     0 }, // Aostatal — höchster Weinberg Europas
        { name: "Ribolla Gialla",                ha:  2000 }, // Friaul — 'gelbe Ribolla'
        { name: "Riesling Renano",               ha:   500 }, // Südtirol, Friaul — Rhein-Riesling
        { name: "Rossese Bianco",                ha:     0 }, // ★★ Ligurien — 'Rossese' (rötlich), BIANCO = WEISS
        { name: "Sauvignon Blanc",               ha:  5000 }, // in allen Regionen
        { name: "Sauvignonasse",                 ha:  1000 }, // ★ Friaul — auch 'Friulano', WEISS
        { name: "Silvaner",                      ha:   800 }, // Südtirol, Abruzzen
        { name: "Timorasso",                     ha:   300 }, // Piemont — Colli Tortonesi
        { name: "Tocai Friulano",                ha:  4000 }, // ★ Friaul — WEISS (heute: Friulano)
        { name: "Traminer aromatico",            ha:   700 }, // Südtirol, Trentino (= Gewürztraminer)
        { name: "Trebbiano d'Abruzzo",           ha: 20000 }, // Abruzzen, Apulien
        { name: "Trebbiano Toscano",             ha: 28000 }, // Toskana, Latium — meistangebaute WEISS-Sorte
        { name: "Verdeca",                       ha:   500 }, // Apulien
        { name: "Verdicchio bianco",             ha:  5000 }, // Marken — Verdicchio dei Castelli di Jesi DOCG
        { name: "Verduzzo Friulano",             ha:   500 }, // Venetien, Friaul
        { name: "Vermentino",                    ha:  7000 }, // Ligurien, Sardinien, Toskana
        { name: "Vernaccia di San Gimignano",    ha:  1500 }, // Toskana — erste DOCG (1966)
        { name: "Vespaiola",                     ha:     0 }, // Venetien — Breganze Torcolato
        { name: "Viognier",                      ha:   500 }, // Toskana
        { name: "Vitovska",                      ha:     0 }, // Friaul-Julisch Venetien — Karst
        { name: "Zibibbo",                       ha:  1000 }, // ★ Sizilien — Pantelleria; arabischer Name, WEISS
    ],
};
