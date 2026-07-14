// ── Rebsorten Frankreichs (ONIVINS 2009 / FranceAgriMer 2023) ────────────────
// Alle in Frankreich angebauten Weiß- und Rotweinsorten.
//
// ★   = irreführender Name (guter Quiz-Kandidat)
// ★★  = Farbwort im Namen widerspricht dem Weintyp
// ★★★ = maximale Irreführung
// ─────────────────────────────────────────────────────────────────────────────
//
// QUIZ-KURATIERUNG (2026-07-14):
// Alle seltenen Lokalsorten, Hybridsorten, Tafeltrauben, Basken-Sorten,
// Gamay-Mutationen und obskuren Regional-Kreuzungen entfernt.
// Ziel: nur bekannte AOC-Sorten, die ein Weinenthusiast kennt.
// Alle ★/★★/★★★-Einträge (irreführende Namen) wurden vollständig beibehalten.

const FR_APPROVED = {

    // ── Rotweinsorten ────────────────────────────────────────────────────────
    red: [
        "Abouriou",               // Lot-et-Garonne, Südwest-Frankreich
        "Aleatico",               // Mittelmeerraum — aromatische Sorte
        "Alicante Bouschet",      // Languedoc — Färbertraube mit rotem Fruchtfleisch
        "Aramon",                 // Languedoc — ertragreiche Sorte
        "Arinarnoa",              // Bordeaux-Kreuzung (Tannat × Cabernet Sauvignon)
        "Bouquettraube",          // ★ klingt neutral — ist ROT
        "Cabernet Franc",         // Bordeaux & Loire — 33.248 ha
        "Cabernet Sauvignon",     // Médoc — 48.890 ha
        "Caladoc",                // Kreuzung Malbec × Grenache
        "Calitor",                // Provence, Korsika
        "Carignan",               // Languedoc — 30.852 ha
        "Carménère",              // Bordeaux (kaum noch) — jetzt vor allem Chile
        "César",                  // ★ Burgund (Irancy) — Personenname
        "Cinsault",               // Südfrankreich, Korsika — 20.800 ha
        "Clairette Rose",         // ★★ 'Rose' klingt nach Weiß/Rosé — ist ROT
        "Counoise",               // Provence, Châteauneuf-du-Pape
        "Duras",                  // Gaillac — 923 ha
        "Durif",                  // Provence (= Petite Sirah in Kalifornien)
        "Fer Servadou",           // Marcillac, Entraygues, Gaillac — 1.610 ha
        "Gamay",                  // Beaujolais, Loire, Savoie — 30.443 ha
        "Grenache",               // Südfrankreich, Rhône — 87.862 ha (Nr. 3)
        "Grenache Gris",          // ★ 'Gris' = grau — wird als Rotweinsorte geführt
        "Grolleau",               // Loire, Anjou — 2.350 ha
        "Grolleau Gris",          // ★ 'Gris' = grau — rötlich klassifiziert
        "Jurançon Noir",          // ★★ 'Jurançon' → berühmter Weißwein! Ist aber ROT — 706 ha
        "Malbec",                 // Cahors, Bordeaux — 6.155 ha ('Côt' auf Französisch)
        "Manseng Noir",           // Südwesten
        "Marselan",               // Languedoc — Cabernet S. × Grenache — 2.375 ha
        "Merlot",                 // Bordeaux — 117.369 ha (Nr. 1 in Frankreich!)
        "Mondeuse",               // Savoie, Bugey — 299 ha
        "Mourvèdre",              // Bandol, Rhône — 9.363 ha
        "Muscardin",              // ★★ Châteauneuf-du-Pape — klingt nach Muskat (Weiß), ist ROT
        "Muscat à petits grains noir", // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT
        "Muscat de Hambourg",     // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT — 3.504 ha
        "Négrette",               // Fronton — 1.227 ha
        "Nielluccio",             // ★ Korsika — klingt weder weiß noch rot (= Sangiovese) — 1.589 ha
        "Petit Verdot",           // Médoc — Bordeaux-Cuvée-Sorte — 862 ha
        "Pineau d'Aunis",         // ★★ Loire — 'Pineau' klingt nach Weißwein, ist ROT — 435 ha
        "Pinot Meunier",          // ★ Champagne — 'Meunier' = Müller (neutral), ROT — 11.088 ha
        "Pinot Noir",             // Burgund, Champagne — 25.295 ha
        "Piquepoul Noir",         // ★★ 'Piquepoul/Picpoul' kennt man als Weißwein — ist ROT!
        "Portugais bleu",         // ★ 'Portugais' = portugiesisch (neutral), ROT — 88 ha
        "Poulsard",               // Jura — sehr helle Farbe — 311 ha
        "Saint-Macaire",          // ★ Bordeaux — Heiligenname, klanglich neutral
        "Sciaccarello",           // Korsika — 773 ha
        "Syrah",                  // Rhône, Provence, Languedoc — 70.785 ha (Nr. 4)
        "Tannat",                 // Madiran, Irouléguy — 2.914 ha
        "Tempranillo",            // Südwesten — spanische Sorte — 766 ha
        "Terret Noir",            // Languedoc, Provence — 264 ha
        "Tibouren",               // Provence — bekannt für Rosé — 443 ha
        "Trousseau",              // Jura — 172 ha
    ],

    // ── Weißweinsorten ───────────────────────────────────────────────────────
    white: [
        "Aligoté",                // Burgund — Bourgogne Aligoté — 1.952 ha
        "Altesse",                // Savoie — Roussette de Savoie — 356 ha
        "Aramon Blanc",           // ★★ 'Aramon' kennt man als ROT — weiße Variante!
        "Aramon Gris",            // ★★ wie Aramon Blanc — graue Variante, trotzdem weiß
        "Arbois",                 // ★★ Loire — 'Arbois' kennt man als Jura-Region (auch Rotwein!)
        "Auxerrois",              // Elsass, Lothringen — 2.351 ha
        "Baco Blanc",             // Armagnac, Cognac — 773 ha
        "Bourboulenc",            // Provence, Languedoc — 596 ha
        "Calitor Blanc",          // ★★ 'Calitor' bekannt als Rotwein — weiße Variante
        "Calitor Gris",           // ★★ wie Calitor Blanc — graue Variante
        "Carignan Blanc",         // ★★ 'Carignan' → fast immer Rotwein — weiße Variante! — 411 ha
        "Carignan Gris",          // ★★ wie Carignan Blanc — graue Variante
        "Chardonnay",             // Burgund, Champagne — 49.595 ha (Nr. 5 in FR)
        "Chasan",                 // Languedoc-Roussillon — 801 ha
        "Chasselas",              // Elsass, Savoie — 2.445 ha
        "Chenin Blanc",           // Loire — Vouvray, Savennières — 9.828 ha
        "Clairette Blanche",      // Languedoc — 2.405 ha
        "Colombard",              // Armagnac, Cognac, Bordeaux — 7.790 ha
        "Courbu",                 // Südwesten
        "Danlas",                 // ★ klingt wie ein Personenname — Weißweinsorte — 254 ha
        "Folle Blanche",          // Armagnac, Cognac, Pays Nantais — 1.770 ha
        "Gewürztraminer",         // ★ Elsass — deutsch klingender Name, WEISS — 3.083 ha
        "Grenache Blanc",         // ★★ 'Grenache' → fast immer Rot-Assoziation, ist WEISS — 4.976 ha
        "Gros Manseng",           // Jurançon, Südwest-Frankreich — 2.919 ha
        "Jacquère",               // Savoie, Bugey — 1.027 ha
        "Jurançon Blanc",         // ★ Armagnac/Cognac — nicht die Jurançon-AOC-Traube!
        "Len de l'El",            // ★ Gaillac — okzitanisch: 'loin de l'œil' — 640 ha
        "Maccabeu",               // ★ Roussillon, Languedoc — neutral klingend — 2.628 ha
        "Malvoisie",              // Mittelmeerraum — Malvasia-Familie
        "Marsanne",               // Rhône (Hermitage blanc), Savoie — 1.341 ha
        "Mauzac",                 // Gaillac, Limoux (Blanquette de Limoux) — 1.991 ha
        "Mauzac Rose",            // ★★ 'Rose' im Namen — trotzdem WEISSW!
        "Melon de Bourgogne",     // Loire — die Muscadet-Traube — 12.364 ha
        "Merlot Blanc",           // ★★★ 'Merlot' → alle denken sofort ROT — ist WEISS! — 54 ha
        "Mondeuse Blanche",       // ★★ 'Mondeuse' kennt man als roten Savoie-Wein — weiße Variante
        "Müller-Thurgau",         // Elsass (in FR zugelassen)
        "Muscadelle",             // ★ Bordeaux, Sauternes — klingt wie Muscat — 'cadelle' = neutral
        "Muscat d'Alexandrie",    // Roussillon, Languedoc — 2.610 ha
        "Muscat blanc à petits grains", // Elsass, Beaumes-de-Venise, Frontignan — 7.620 ha
        "Muscat rose à petits grains",  // ★★ 'Rose' im Namen — Weißweinsorte!
        "Muscat rouge à petits grains", // ★★★ 'Rouge' = rot — trotzdem WEISSW klassifiziert! — 314 ha
        "Muskat Ottonel",         // Elsass — nur dort zugelassen
        "Ondenc",                 // Südwesten (Gaillac)
        "Petit Courbu",           // Jurançon
        "Petit Manseng",          // Jurançon, Pacherenc du Vic-Bilh — 1.019 ha
        "Pinot Blanc",            // Elsass, Champagne — 1.292 ha
        "Pinot Gris",             // ★ Elsass — 'Gris' = grau, aber Weißwein — 2.617 ha
        "Piquepoul Blanc",        // Languedoc (Picpoul de Pinet AOC) — 1.455 ha
        "Piquepoul Gris",         // ★ graue Variante des Picpoul
        "Riesling",               // Elsass, Mosel — 3.490 ha (nur Elsass/Moselle)
        "Rolle",                  // ★ Provence, Korsika — franz. Name für Vermentino — 3.126 ha
        "Romorantin",             // Cour-Cheverny AOC, Loire
        "Rosé du Var",            // ★★ 'Rosé' im Namen — gilt als Weißweinsorte
        "Roussanne",              // ★ Rhône, Savoie — 'rousse' = rötlich, ist WEISS — 1.352 ha
        "Savagnin",               // Jura — Basis des Vin Jaune — 481 ha
        "Savagnin Rose",          // ★★ 'Rose' im Namen — Elsass (Klevener de Heiligenstein)
        "Sauvignon Blanc",        // Loire, Bordeaux — 34.368 ha (Nr. 7)
        "Sauvignon Gris",         // Mutation des Sauvignon Blanc — 463 ha
        "Sémillon",               // Bordeaux — Sauternes, Graves — 11.693 ha
        "Sylvaner",               // ★ Elsass — franz. Schreibweise, WEISS — 1.399 ha
        "Terret Blanc",           // Languedoc — 1.451 ha
        "Terret Gris",            // ★ graue Terret-Variante
        "Tourbat",                // Roussillon (= Malvoisie du Roussillon)
        "Ugni Blanc",             // ★ Cognac, Armagnac — 106.879 ha (Nr. 2 in FR = Trebbiano)
        "Velteliner rouge précoce", // ★★★ 'Rouge' = rot im Namen — ist aber WEISSW!
        "Verdesse",               // Savoie
        "Vermentino",             // Provence, Languedoc, Korsika — 3.569 ha
        "Viognier",               // Condrieu, Côte-Rôtie, Languedoc — 4.395 ha
    ],
};
