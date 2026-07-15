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
// Kriterium: Würde ein Weinenthusiast diese Sorte kennen?
// ★/★★/★★★ (irreführender Name) erhöht den Quiz-Wert, schützt aber nicht vor
// Entfernung — unbekannte Sorten bleiben draußen, egal ob mit Stern oder ohne.
// Stand: 51 Rotwein- + 66 Weißweinsorten = 117 Sorten gesamt.

const FR_APPROVED = {

    // ── Rotweinsorten — Anbaufläche FR (FranceAgriMer 2023, 0 = keine Angabe)
    red: [
        { name: "Abouriou",                    ha:     0 }, // Lot-et-Garonne, Südwest-Frankreich
        { name: "Aleatico",                    ha:     0 }, // Mittelmeerraum — aromatische Sorte
        { name: "Alicante Bouschet",           ha:     0 }, // Languedoc — Färbertraube
        { name: "Aramon",                      ha:     0 }, // Languedoc — ertragreiche Sorte
        { name: "Arinarnoa",                   ha:     0 }, // Bordeaux-Kreuzung (Tannat × Cabernet Sauvignon)
        { name: "Bouquettraube",               ha:     0 }, // ★ klingt neutral — ist ROT
        { name: "Cabernet Franc",              ha: 33248 }, // Bordeaux & Loire
        { name: "Cabernet Sauvignon",          ha: 48890 }, // Médoc
        { name: "Caladoc",                     ha:     0 }, // Kreuzung Malbec × Grenache
        { name: "Calitor",                     ha:     0 }, // Provence, Korsika
        { name: "Carignan",                    ha: 30852 }, // Languedoc
        { name: "Carménère",                   ha:     0 }, // Bordeaux (kaum noch) — jetzt vor allem Chile
        { name: "César",                       ha:     0 }, // ★ Burgund (Irancy) — Personenname
        { name: "Cinsault",                    ha: 20800 }, // Südfrankreich, Korsika
        { name: "Clairette Rose",              ha:     0 }, // ★★ 'Rose' klingt nach Weiß/Rosé — ist ROT
        { name: "Counoise",                    ha:     0 }, // Provence, Châteauneuf-du-Pape
        { name: "Duras",                       ha:   923 }, // Gaillac
        { name: "Durif",                       ha:     0 }, // Provence (= Petite Sirah in Kalifornien)
        { name: "Fer Servadou",                ha:  1610 }, // Marcillac, Entraygues, Gaillac
        { name: "Gamay",                       ha: 30443 }, // Beaujolais, Loire, Savoie
        { name: "Grenache",                    ha: 87862 }, // Südfrankreich, Rhône
        { name: "Grenache Gris",               ha:     0 }, // ★ 'Gris' = grau — als Rotweinsorte geführt
        { name: "Grolleau",                    ha:  2350 }, // Loire, Anjou
        { name: "Grolleau Gris",               ha:     0 }, // ★ 'Gris' = grau — rötlich klassifiziert
        { name: "Jurançon Noir",               ha:   706 }, // ★★ 'Jurançon' → berühmter Weißwein, ist aber ROT
        { name: "Malbec",                      ha:  6155 }, // Cahors, Bordeaux
        { name: "Manseng Noir",                ha:     0 }, // Südwesten
        { name: "Marselan",                    ha:  2375 }, // Languedoc — Cabernet S. × Grenache
        { name: "Merlot",                      ha: 117369 }, // Bordeaux — Nr. 1 in Frankreich
        { name: "Mondeuse",                    ha:   299 }, // Savoie, Bugey
        { name: "Mourvèdre",                   ha:  9363 }, // Bandol, Rhône
        { name: "Muscardin",                   ha:     0 }, // ★★ Châteauneuf — klingt nach Muskat, ist ROT
        { name: "Muscat à petits grains noir", ha:     0 }, // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT
        { name: "Muscat de Hambourg",          ha:  3504 }, // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT
        { name: "Négrette",                    ha:  1227 }, // Fronton
        { name: "Nielluccio",                  ha:  1589 }, // ★ Korsika — = Sangiovese
        { name: "Petit Verdot",                ha:   862 }, // Médoc — Bordeaux-Cuvée-Sorte
        { name: "Pineau d'Aunis",              ha:   435 }, // ★★ Loire — 'Pineau' klingt nach Weißwein, ist ROT
        { name: "Pinot Meunier",               ha: 11088 }, // ★ Champagne — 'Meunier' = Müller, ROT
        { name: "Pinot Noir",                  ha: 25295 }, // Burgund, Champagne
        { name: "Piquepoul Noir",              ha:     0 }, // ★★ 'Picpoul' kennt man als Weißwein — ist ROT
        { name: "Portugais bleu",              ha:    88 }, // ★ 'Portugais' = portugiesisch, ROT
        { name: "Poulsard",                    ha:   311 }, // Jura — sehr helle Farbe
        { name: "Saint-Macaire",               ha:     0 }, // ★ Bordeaux — Heiligenname
        { name: "Sciaccarello",                ha:   773 }, // Korsika
        { name: "Syrah",                       ha: 70785 }, // Rhône, Provence, Languedoc
        { name: "Tannat",                      ha:  2914 }, // Madiran, Irouléguy
        { name: "Tempranillo",                 ha:   766 }, // Südwesten — spanische Sorte
        { name: "Terret Noir",                 ha:   264 }, // Languedoc, Provence
        { name: "Tibouren",                    ha:   443 }, // Provence — bekannt für Rosé
        { name: "Trousseau",                   ha:   172 }, // Jura
    ],

    // ── Weißweinsorten — Anbaufläche FR (FranceAgriMer 2023, 0 = keine Angabe)
    white: [
        { name: "Aligoté",                          ha:  1952 }, // Burgund — Bourgogne Aligoté
        { name: "Altesse",                          ha:   356 }, // Savoie — Roussette de Savoie
        { name: "Aramon Blanc",                     ha:     0 }, // ★★ 'Aramon' kennt man als ROT — weiße Variante
        { name: "Aramon Gris",                      ha:     0 }, // ★★ wie Aramon Blanc — graue Variante
        { name: "Arbois",                           ha:     0 }, // ★★ Loire — 'Arbois' bekannt als Jura-Region
        { name: "Auxerrois",                        ha:  2351 }, // Elsass, Lothringen
        { name: "Baco Blanc",                       ha:   773 }, // Armagnac, Cognac
        { name: "Bourboulenc",                      ha:   596 }, // Provence, Languedoc
        { name: "Calitor Blanc",                    ha:     0 }, // ★★ 'Calitor' bekannt als Rotwein — weiße Variante
        { name: "Calitor Gris",                     ha:     0 }, // ★★ wie Calitor Blanc — graue Variante
        { name: "Carignan Blanc",                   ha:   411 }, // ★★ 'Carignan' → fast immer Rotwein — weiße Variante
        { name: "Carignan Gris",                    ha:     0 }, // ★★ wie Carignan Blanc — graue Variante
        { name: "Chardonnay",                       ha: 49595 }, // Burgund, Champagne
        { name: "Chasan",                           ha:   801 }, // Languedoc-Roussillon
        { name: "Chasselas",                        ha:  2445 }, // Elsass, Savoie
        { name: "Chenin Blanc",                     ha:  9828 }, // Loire — Vouvray, Savennières
        { name: "Clairette Blanche",                ha:  2405 }, // Languedoc
        { name: "Colombard",                        ha:  7790 }, // Armagnac, Cognac, Bordeaux
        { name: "Courbu",                           ha:     0 }, // Südwesten
        { name: "Danlas",                           ha:   254 }, // ★ klingt wie ein Personenname — Weißweinsorte
        { name: "Folle Blanche",                    ha:  1770 }, // Armagnac, Cognac, Pays Nantais
        { name: "Gewürztraminer",                   ha:  3083 }, // ★ Elsass — deutsch klingender Name, WEISS
        { name: "Grenache Blanc",                   ha:  4976 }, // ★★ 'Grenache' → Rot-Assoziation, ist WEISS
        { name: "Gros Manseng",                     ha:  2919 }, // Jurançon, Südwest-Frankreich
        { name: "Jacquère",                         ha:  1027 }, // Savoie, Bugey
        { name: "Jurançon Blanc",                   ha:     0 }, // ★ Armagnac/Cognac — nicht die AOC-Traube
        { name: "Len de l'El",                      ha:   640 }, // ★ Gaillac — okzitanisch: 'loin de l'œil'
        { name: "Maccabeu",                         ha:  2628 }, // ★ Roussillon, Languedoc — neutral klingend
        { name: "Malvoisie",                        ha:     0 }, // Mittelmeerraum — Malvasia-Familie
        { name: "Marsanne",                         ha:  1341 }, // Rhône (Hermitage blanc), Savoie
        { name: "Mauzac",                           ha:  1991 }, // Gaillac, Limoux
        { name: "Mauzac Rose",                      ha:     0 }, // ★★ 'Rose' im Namen — trotzdem WEISS
        { name: "Melon de Bourgogne",               ha: 12364 }, // Loire — die Muscadet-Traube
        { name: "Mondeuse Blanche",                 ha:     0 }, // ★★ 'Mondeuse' kennt man als roten Savoie-Wein
        { name: "Müller-Thurgau",                   ha:     0 }, // Elsass (in FR zugelassen)
        { name: "Muscadelle",                       ha:     0 }, // ★ Bordeaux, Sauternes — klingt wie Muscat
        { name: "Muscat d'Alexandrie",              ha:  2610 }, // Roussillon, Languedoc
        { name: "Muscat blanc à petits grains",     ha:  7620 }, // Elsass, Beaumes-de-Venise, Frontignan
        { name: "Muscat rouge à petits grains",     ha:   314 }, // ★★★ 'Rouge' = rot — trotzdem WEISS klassifiziert
        { name: "Muskat Ottonel",                   ha:     0 }, // Elsass — nur dort zugelassen
        { name: "Ondenc",                           ha:     0 }, // Südwesten (Gaillac)
        { name: "Petit Courbu",                     ha:     0 }, // Jurançon
        { name: "Petit Manseng",                    ha:  1019 }, // Jurançon, Pacherenc du Vic-Bilh
        { name: "Pinot Blanc",                      ha:  1292 }, // Elsass, Champagne
        { name: "Pinot Gris",                       ha:  2617 }, // ★ Elsass — 'Gris' = grau, aber Weißwein
        { name: "Piquepoul Blanc",                  ha:  1455 }, // Languedoc (Picpoul de Pinet AOC)
        { name: "Piquepoul Gris",                   ha:     0 }, // ★ graue Variante des Picpoul
        { name: "Riesling",                         ha:  3490 }, // Elsass, Mosel
        { name: "Rolle",                            ha:  3126 }, // ★ Provence — franz. Name für Vermentino
        { name: "Romorantin",                       ha:     0 }, // Cour-Cheverny AOC, Loire
        { name: "Rosé du Var",                      ha:     0 }, // ★★ 'Rosé' im Namen — gilt als Weißweinsorte
        { name: "Roussanne",                        ha:  1352 }, // ★ Rhône, Savoie — 'rousse' = rötlich, ist WEISS
        { name: "Savagnin",                         ha:   481 }, // Jura — Basis des Vin Jaune
        { name: "Savagnin Rose",                    ha:     0 }, // ★★ 'Rose' im Namen — Elsass
        { name: "Sauvignon Blanc",                  ha: 34368 }, // Loire, Bordeaux
        { name: "Sauvignon Gris",                   ha:   463 }, // Mutation des Sauvignon Blanc
        { name: "Sémillon",                         ha: 11693 }, // Bordeaux — Sauternes, Graves
        { name: "Sylvaner",                         ha:  1399 }, // ★ Elsass — franz. Schreibweise, WEISS
        { name: "Terret Blanc",                     ha:  1451 }, // Languedoc
        { name: "Terret Gris",                      ha:     0 }, // ★ graue Terret-Variante
        { name: "Tourbat",                          ha:     0 }, // Roussillon (= Malvoisie du Roussillon)
        { name: "Ugni Blanc",                       ha: 106879 }, // ★ Cognac, Armagnac — Nr. 2 in Frankreich
        { name: "Velteliner rouge précoce",         ha:     0 }, // ★★★ 'Rouge' = rot im Namen — ist aber WEISS
        { name: "Verdesse",                         ha:     0 }, // Savoie
        { name: "Vermentino",                       ha:  3569 }, // Provence, Languedoc, Korsika
        { name: "Viognier",                         ha:  4395 }, // Condrieu, Côte-Rôtie, Languedoc
    ],
};
