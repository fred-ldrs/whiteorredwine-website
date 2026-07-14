// ── Rebsorten Frankreichs (ONIVINS 2009 / FranceAgriMer 2023) ────────────────
// Alle in Frankreich angebauten Weiß- und Rotweinsorten.
//
// ★   = irreführender Name (guter Quiz-Kandidat)
// ★★  = Farbwort im Namen widerspricht dem Weintyp
// ★★★ = maximale Irreführung
// ─────────────────────────────────────────────────────────────────────────────

const FR_APPROVED = {

    // ── ~121 Rotweinsorten ────────────────────────────────────────────────────
    red: [
        "Abouriou",               // Lot-et-Garonne, Südwest-Frankreich
        "Aleatico",               // Mittelmeerraum — aromatische Sorte
        "Alicante Bouschet",      // Languedoc — Färbertraube mit rotem Fruchtfleisch
        "Alphonse-Lavallée",      // Tafeltraube, auch vinifiziert
        "Aramon",                 // Languedoc — ertragreiche Sorte
        "Arinarnoa",              // Bordeaux-Kreuzung (Tannat × Cabernet Sauvignon)
        "Arrouya",                // Südwesten — seltene Lokalsorte
        "Aubun",                  // Côteaux du Languedoc
        "Bachet Noir",            // Burgund — alte Sorte
        "Barbaroux",              // Provence
        "Béclan",                 // Rhône — alte Regionalsorte
        "Béquignol",              // Bordeaux — alte Sorte
        "Bouchalès",              // Südwesten
        "Bouillet",               // seltene Lokalsorte
        "Bouquettraube",          // ★ klingt neutral — ist ROT
        "Bouteillan Noir",        // Provence
        "Braquet Noir",           // Nizza / Bellet AOC
        "Brun Argenté",           // Jura-Sorte
        "Cabernet Franc",         // Bordeaux & Loire — 33.248 ha
        "Cabernet Sauvignon",     // Médoc — 48.890 ha
        "Caladoc",                // Kreuzung Malbec × Grenache
        "Calitor",                // Provence, Korsika
        "Carcajolo Noir",         // Korsika
        "Cardinal",               // Tafeltraube
        "Carignan",               // Languedoc — 30.852 ha
        "Carménère",              // Bordeaux (kaum noch) — jetzt vor allem Chile
        "Castets",                // Gironde
        "César",                  // ★ Burgund (Irancy) — Personenname
        "Chambourcin",            // pilzwiderstandsfähige Hybridsorte
        "Chatus",                 // Ardèche
        "Chenanson",              // Languedoc-Kreuzung
        "Cinsault",               // Südfrankreich, Korsika — 20.800 ha
        "Clairette Rose",         // ★★ 'Rose' klingt nach Weiß/Rosé — ist ROT
        "Colobel",                // Hybridsorte
        "Couderc Noir",           // Hybridsorte
        "Counoise",               // Provence, Châteauneuf-du-Pape
        "Courbu Noir",            // Südwesten
        "Duras",                  // Gaillac — 923 ha
        "Durif",                  // Provence (= Petite Sirah in Kalifornien)
        "Egiodola",               // Südwest-Kreuzung
        "Ekigaïna",               // Baskenland
        "Étraire de la Dui",      // Isère — sehr alte Sorte
        "Fer Servadou",           // Marcillac, Entraygues, Gaillac — 1.610 ha
        "Feunate",                // Baskenland
        "Florental",              // Languedoc-Kreuzung
        "Franc Noir de la Haute Saône", // Burgund — alte Sorte
        "Fuella",                 // Nizza / Bellet AOC
        "Gamay",                  // Beaujolais, Loire, Savoie — 30.443 ha
        "Gamay de Bouze",         // Gamay-Mutation aus der Côte d'Or
        "Gamay de Chaudenay",     // Gamay-Mutation
        "Gamay Fréaux",           // Gamay-Mutation
        "Ganson",                 // seltene Sorte
        "Garonnet",               // Bordeaux-Kreuzung
        "Gascon",                 // Südwesten — alte Lokalsorte
        "Gouget Noir",            // seltene Burgund-Sorte
        "Gramon",                 // seltene Sorte
        "Grassen",                // Südwesten
        "Grenache",               // Südfrankreich, Rhône — 87.862 ha (Nr. 3)
        "Grenache Gris",          // ★ 'Gris' = grau — wird als Rotweinsorte geführt
        "Grolleau",               // Loire, Anjou — 2.350 ha
        "Grolleau Gris",          // ★ 'Gris' = grau — rötlich klassifiziert
        "Joubertin",              // Savoie — sehr seltene Lokalsorte
        "Jurançon Noir",          // ★★ 'Jurançon' → berühmter Weißwein! Ist aber ROT — 706 ha
        "Landal Noir",            // Hybridsorte
        "Léon Millot",            // Hybridsorte
        "Lival",                  // seltene Sorte
        "Lledoner Pelut",         // Roussillon — Grenache-Verwandter
        "Malbec",                 // Cahors, Bordeaux — 6.155 ha ('Côt' auf Französisch)
        "Mancin",                 // Provence
        "Manseng Noir",           // Südwesten
        "Maréchal Foch",          // ★ Hybridsorte — Titel-Name, klingt neutral
        "Marselan",               // Languedoc — Cabernet S. × Grenache — 2.375 ha
        "Mérille",                // Sud-Ouest
        "Merlot",                 // Bordeaux — 117.369 ha (Nr. 1 in Frankreich!)
        "Milgranet",              // Cahors — alte Sorte
        "Mollard",                // Savoie
        "Mondeuse",               // Savoie, Bugey — 299 ha
        "Monerac",                // seltene Sorte
        "Morrastel",              // Languedoc (= Graciano)
        "Mourvaison",             // Rhône-Sorte
        "Mourvèdre",              // Bandol, Rhône — 9.363 ha
        "Mouyssaguès",            // Aveyron — Lokalsorte
        "Muresconu",              // Korsika
        "Muscardin",              // ★★ Châteauneuf-du-Pape — klingt nach Muskat (Weiß), ist ROT
        "Muscat à petits grains noir", // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT
        "Muscat de Hambourg",     // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT — 3.504 ha
        "Négrette",               // Fronton — 1.227 ha
        "Nielluccio",             // ★ Korsika — klingt weder weiß noch rot (= Sangiovese) — 1.589 ha
        "Noir de Listan",         // Mittelmeerraum — 'Noir' korrekt
        "Noir Fleurien",          // seltene Sorte
        "Oberlin Noir",           // Hybridsorte
        "Petit Verdot",           // Médoc — Bordeaux-Cuvée-Sorte — 862 ha
        "Pineau d'Aunis",         // ★★ Loire — 'Pineau' klingt nach Weißwein, ist ROT — 435 ha
        "Pinot Meunier",          // ★ Champagne — 'Meunier' = Müller (neutral), ROT — 11.088 ha
        "Pinot Noir",             // Burgund, Champagne — 25.295 ha
        "Piquepoul Noir",         // ★★ 'Piquepoul/Picpoul' kennt man als Weißwein — ist ROT!
        "Plant Droit",            // Savoie
        "Plantet",                // Hybridsorte — 1.105 ha
        "Portan",                 // Languedoc-Kreuzung
        "Portugais bleu",         // ★ 'Portugais' = portugiesisch (neutral), ROT — 88 ha
        "Poulsard",               // Jura — sehr helle Farbe — 311 ha
        "Prunelard",              // Gaillac, Cahors
        "Ribol",                  // seltene Sorte
        "Rubilande",              // Hybridsorte
        "Saint-Macaire",          // ★ Bordeaux — Heiligenname, klanglich neutral
        "Sciaccarello",           // Korsika — 773 ha
        "Segalin",                // Languedoc-Kreuzung
        "Seinoir",                // Languedoc-Kreuzung
        "Semebat",                // Südwesten
        "Servanin",               // Savoie
        "Syrah",                  // Rhône, Provence, Languedoc — 70.785 ha (Nr. 4)
        "Tannat",                 // Madiran, Irouléguy — 2.914 ha
        "Tempranillo",            // Südwesten — spanische Sorte — 766 ha
        "Téoulier",               // Provence
        "Terret Noir",            // Languedoc, Provence — 264 ha
        "Tibouren",               // Provence — bekannt für Rosé — 443 ha
        "Tressot",                // Burgund — alte Sorte
        "Trousseau",              // Jura — 172 ha
        "Valdiguié",              // Languedoc (= Napa Gamay in Kalifornien)
        "Varousset",              // Südwesten
        "Villard Noir",           // Hybridsorte — 1.320 ha
    ],

    // ── ~120 Weißweinsorten ───────────────────────────────────────────────────
    white: [
        "Aligoté",                // Burgund — Bourgogne Aligoté — 1.952 ha
        "Altesse",                // Savoie — Roussette de Savoie — 356 ha
        "Aramon Blanc",           // ★★ 'Aramon' kennt man als ROT — weiße Variante!
        "Aramon Gris",            // ★★ wie Aramon Blanc — graue Variante, trotzdem weiß
        "Aranel",                 // Languedoc-Kreuzung
        "Arbane",                 // Champagne — seltene alte Sorte
        "Arbois",                 // ★★ Loire — 'Arbois' kennt man als Jura-Region (auch Rotwein!)
        "Arriloba",               // Baskenland
        "Arrufiat",               // Südwesten
        "Aubin Blanc",            // Lothringen
        "Aubin Vert",             // Lothringen
        "Auxerrois",              // Elsass, Lothringen — 2.351 ha
        "Baco Blanc",             // Armagnac, Cognac — 773 ha
        "Baroque",                // Sud-Ouest (Tursan AOC)
        "Biancu Gentile",         // Korsika
        "Blanc Dame",             // seltene Sorte
        "Bourboulenc",            // Provence, Languedoc — 596 ha
        "Calitor Blanc",          // ★★ 'Calitor' bekannt als Rotwein — weiße Variante
        "Calitor Gris",           // ★★ wie Calitor Blanc — graue Variante
        "Camaralet de Lasseube",  // Jurançon
        "Carcajolo Blanc",        // Korsika
        "Carignan Blanc",         // ★★ 'Carignan' → fast immer Rotwein — weiße Variante! — 411 ha
        "Carignan Gris",          // ★★ wie Carignan Blanc — graue Variante
        "Chardonnay",             // Burgund, Champagne — 49.595 ha (Nr. 5 in FR)
        "Chasan",                 // Languedoc-Roussillon — 801 ha
        "Chasselas",              // Elsass, Savoie — 2.445 ha
        "Chenin Blanc",           // Loire — Vouvray, Savennières — 9.828 ha
        "Clairette Blanche",      // Languedoc — 2.405 ha
        "Clarin",                 // seltene Sorte
        "Claverie",               // Südwesten
        "Codivarta",              // Korsika
        "Colombard",              // Armagnac, Cognac, Bordeaux — 7.790 ha
        "Colombaud",              // seltene Sorte
        "Courbu",                 // Südwesten
        "Crouchen",               // Südwesten
        "Danlas",                 // ★ klingt wie ein Personenname — Weißweinsorte — 254 ha
        "Elbling",                // Elsass, Mosel (in FR zugelassen)
        "Folignan",               // Languedoc-Kreuzung
        "Folle Blanche",          // Armagnac, Cognac, Pays Nantais — 1.770 ha
        "Genovèse",               // Korsika
        "Gewürztraminer",         // ★ Elsass — deutsch klingender Name, WEISS — 3.083 ha
        "Goldriesling",           // Elsass — Riesling-Kreuzung
        "Graisse",                // Südwesten
        "Grenache Blanc",         // ★★ 'Grenache' → fast immer Rot-Assoziation, ist WEISS — 4.976 ha
        "Gringet",                // Savoie (Ayze AOC)
        "Gros Manseng",           // Jurançon, Südwest-Frankreich — 2.919 ha
        "Gros Vert",              // seltene Sorte
        "Isabelle",               // Hybridsorte — kaum noch verwendet
        "Jacquère",               // Savoie, Bugey — 1.027 ha
        "Jurançon Blanc",         // ★ Armagnac/Cognac — nicht die Jurançon-AOC-Traube!
        "Knipperlé",              // Elsass — alte Sorte (Synonym: Räuschling)
        "Lauzet",                 // Südwesten
        "Len de l'El",            // ★ Gaillac — okzitanisch: 'loin de l'œil' — 640 ha
        "Liliorila",              // Kreuzung Folle Blanche × Ugni Blanc
        "Maccabeu",               // ★ Roussillon, Languedoc — neutral klingend — 2.628 ha
        "Malvoisie",              // Mittelmeerraum — Malvasia-Familie
        "Marsanne",               // Rhône (Hermitage blanc), Savoie — 1.341 ha
        "Mauzac",                 // Gaillac, Limoux (Blanquette de Limoux) — 1.991 ha
        "Mauzac Rose",            // ★★ 'Rose' im Namen — trotzdem WEISSW!
        "Mayorquin",              // seltene Sorte
        "Melon de Bourgogne",     // Loire — die Muscadet-Traube — 12.364 ha
        "Merlot Blanc",           // ★★★ 'Merlot' → alle denken sofort ROT — ist WEISS! — 54 ha
        "Meslier-Saint-François", // Champagne, Orléanais
        "Molette",                // Savoie
        "Mondeuse Blanche",       // ★★ 'Mondeuse' kennt man als roten Savoie-Wein — weiße Variante
        "Montils",                // Charentes
        "Müller-Thurgau",         // Elsass (in FR zugelassen)
        "Muscadelle",             // ★ Bordeaux, Sauternes — klingt wie Muscat — 'cadelle' = neutral
        "Muscat d'Alexandrie",    // Roussillon, Languedoc — 2.610 ha
        "Muscat blanc à petits grains", // Elsass, Beaumes-de-Venise, Frontignan — 7.620 ha
        "Muscat rose à petits grains",  // ★★ 'Rose' im Namen — Weißweinsorte!
        "Muscat rouge à petits grains", // ★★★ 'Rouge' = rot — trotzdem WEISSW klassifiziert! — 314 ha
        "Muscat Cendré",          // seltene Muskat-Variante
        "Muskat Ottonel",         // Elsass — nur dort zugelassen
        "Oeillade Blanche",       // Châteauneuf-du-Pape, Palette
        "Ondenc",                 // Südwesten (Gaillac)
        "Paga Debiti",            // seltene Sorte
        "Pascal Blanc",           // Provence
        "Perdea",                 // seltene Sorte
        "Petit Courbu",           // Jurançon
        "Petit Manseng",          // Jurançon, Pacherenc du Vic-Bilh — 1.019 ha
        "Petit Meslier",          // Champagne — sehr seltene alte Sorte
        "Pinot Blanc",            // Elsass, Champagne — 1.292 ha
        "Pinot Gris",             // ★ Elsass — 'Gris' = grau, aber Weißwein — 2.617 ha
        "Piquepoul Blanc",        // Languedoc (Picpoul de Pinet AOC) — 1.455 ha
        "Piquepoul Gris",         // ★ graue Variante des Picpoul
        "Précoce Bousquet",       // seltene Sorte
        "Précoce de Malingre",    // frühreife Sorte
        "Raffiat de Moncade",     // Béarn, Jurançon
        "Ravat Blanc",            // Hybridsorte
        "Rayon d'Or",             // ★ 'Rayon d'Or' = Goldener Strahl — Hybridsorte, weiß
        "Riesling",               // Elsass, Mosel — 3.490 ha (nur Elsass/Moselle)
        "Riminèse",               // seltene Sorte
        "Rolle",                  // ★ Provence, Korsika — franz. Name für Vermentino — 3.126 ha
        "Romorantin",             // Cour-Cheverny AOC, Loire
        "Rosé du Var",            // ★★ 'Rosé' im Namen — gilt als Weißweinsorte
        "Roublot",                // seltene Sorte
        "Roussanne",              // ★ Rhône, Savoie — 'rousse' = rötlich, ist WEISS — 1.352 ha
        "Roussette d'Ayze",       // Savoie
        "Sacy",                   // Burgund, Champagne
        "Saint-Pierre Doré",      // Auvergne
        "Savagnin",               // Jura — Basis des Vin Jaune — 481 ha
        "Savagnin Rose",          // ★★ 'Rose' im Namen — Elsass (Klevener de Heiligenstein)
        "Sauvignon Blanc",        // Loire, Bordeaux — 34.368 ha (Nr. 7)
        "Sauvignon Gris",         // Mutation des Sauvignon Blanc — 463 ha
        "Select",                 // seltene Sorte
        "Sémillon",               // Bordeaux — Sauternes, Graves — 11.693 ha
        "Servant",                // seltene Sorte
        "Seyval Blanc",           // Hybridsorte
        "Sylvaner",               // ★ Elsass — franz. Schreibweise, WEISS — 1.399 ha
        "Terret Blanc",           // Languedoc — 1.451 ha
        "Terret Gris",            // ★ graue Terret-Variante
        "Tourbat",                // Roussillon (= Malvoisie du Roussillon)
        "Ugni Blanc",             // ★ Cognac, Armagnac — 106.879 ha (Nr. 2 in FR = Trebbiano)
        "Valérien",               // seltene Sorte
        "Velteliner rouge précoce", // ★★★ 'Rouge' = rot im Namen — ist aber WEISSW!
        "Verdesse",               // Savoie
        "Vermentino",             // Provence, Languedoc, Korsika — 3.569 ha
        "Villard Blanc",          // Hybridsorte — 309 ha
        "Viognier",               // Condrieu, Côte-Rôtie, Languedoc — 4.395 ha
    ],
};
