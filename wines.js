// ── Wine Pools (language-specific) ───────────────────────────────────────────
const WINE_POOLS = {

    // English: international / Italian / Spanish focus
    en: {
        white: [
            "Gewürztraminer",    // Alsace / Alto Adige — spicy aromatic white
            "Viognier",          // Northern Rhône — Condrieu's grape
            "Grüner Veltliner",  // Austria's flagship white
            "Roussanne",         // Rhône white — 'rousse' = reddish in French
            "Vermentino",        // Sardinia & Provence white
            "Torrontés",         // Argentina's signature aromatic white
            "Falanghina",        // Ancient Campanian white
            "Arneis",            // Piedmont white — 'rascal' in local dialect
            "Greco di Tufo",     // Campanian white from volcanic soil
            "Trebbiano",         // Italy's most widely planted white grape
            "Picpoul",           // Languedoc white — 'lip-stinger'
            "Marsanne",          // Northern Rhône white, rich and waxy
            "Pinot Grigio",      // NE Italy — 'grigio' means grey
            "Verdejo",           // Rueda, Spain
            "Muscadet",          // Loire — Melon de Bourgogne grape
            "Albariño",          // Galicia & Vinho Verde
            "Garganega",         // Soave's main grape, Veneto
            "Fiano",             // Ancient Campanian white
        ],
        red: [
            "Carménère",         // Chile's signature red, once a Bordeaux variety
            "Pinotage",          // South Africa — Pinot Noir × Cinsault cross
            "Tannat",            // Uruguay & Madiran — extremely tannic red
            "Touriga Nacional",  // Portugal's top red grape
            "Nero d'Avola",      // Sicily's flagship red — 'nero' means black
            "Lagrein",           // Alto Adige red, deep and full-bodied
            "Sagrantino",        // Umbria's most tannic native red
            "Xinomavro",         // Northern Greece — 'acid-black' red
            "Negroamaro",        // Puglia, Italy — 'negro' = black, 'amaro' = bitter
            "Primitivo",         // Puglia's powerful red, related to Zinfandel
            "Teroldego",         // Trentino red, Campo Rotaliano
            "Montepulciano",     // Central Italy red grape (d'Abruzzo)
            "Aglianico",         // Southern Italy — the 'Barolo of the South'
            "Baga",              // Bairrada, Portugal — tannic red
            "Mencía",            // Galicia & Portugal's aromatic red
            "Dolcetto",          // Piedmont red — 'little sweet one'
            "Corvina",           // Valpolicella / Amarone backbone grape
            "Zweigelt",          // Austria's most-planted red cross
        ],
    },

    // German: German / Austrian / Swiss wine culture focus
    de: {
        white: [
            "Riesling",          // Germany's flagship white grape
            "Silvaner",          // Franken & Rheinhessen white
            "Müller-Thurgau",    // most-planted German white cross
            "Grauburgunder",     // Pinot Gris — 'Grau' = grey
            "Scheurebe",         // aromatic German white cross
            "Kerner",            // fruity German white cross
            "Gewürztraminer",    // Alsace / Pfalz — 'Gewürz' = spice
            "Grüner Veltliner",  // Austria's flagship white
            "Gutedel",           // Baden — ancient Swiss / French variety
            "Elbling",           // Mosel's oldest white grape
            "Bacchus",           // aromatic German white — mythological name
            "Viognier",          // Northern Rhône white
            "Roussanne",         // Rhône white — 'rousse' = reddish
            "Auxerrois",         // Alsace white — place-name origin
            "Savagnin",          // Jura / Alsace — also known as 'Traminer'
            "Ortega",            // German white cross — philosopher's name
            "Solaris",           // climate-resistant German white variety
            "Morio-Muskat",      // aromatic German white cross
        ],
        red: [
            "Spätburgunder",     // Pinot Noir — Germany's top red
            "Dornfelder",        // popular dark German red cross
            "Trollinger",        // Württemberg light red
            "Lemberger",         // Baden-Württemberg red (= Blaufränkisch)
            "Schwarzriesling",   // Pinot Meunier — 'Schwarz' = black
            "Regent",            // climate-resistant German red hybrid
            "Portugieser",       // light German everyday red
            "Domina",            // powerful German red cross
            "Zweigelt",          // Austria's most-planted red cross
            "Lagrein",           // Alto Adige / Südtirol red
            "Teroldego",         // Trentino / Südtirol red
            "Sagrantino",        // Umbria's most tannic red
            "Corvina",           // Valpolicella / Amarone grape
            "Tannat",            // Madiran — extremely tannic
            "Carménère",         // Chile's signature red
            "Merlot",            // Bordeaux's most-planted red — Pomerol, Saint-Émilion
            "Aglianico",         // Southern Italy — 'Barolo of the South'
            "Nero d'Avola",      // Sicily — 'nero' means black
        ],
    },

    // French: French / Southern European wine culture focus
    fr: {
        white: [
            "Viognier",          // Condrieu, Northern Rhône
            "Roussanne",         // Rhône — 'rousse' = reddish
            "Marsanne",          // Northern Rhône, rich and waxy
            "Bourboulenc",       // Southern Rhône white
            "Clairette",         // Provence & Languedoc white
            "Picpoul",           // Languedoc — 'pique-lèvre' = lip-stinger
            "Colombard",         // Gascony & Charentes aromatic white
            "Gros Manseng",      // Jurançon, Southwest France
            "Mauzac",            // Limoux & Gaillac white
            "Jacquère",          // Savoie & Bugey white
            "Savagnin",          // Jura — base of Vin Jaune
            "Melon de Bourgogne",// Loire — Muscadet's grape
            "Aligoté",           // Burgundy secondary white
            "Rolle",             // Provence name for Vermentino
            "Muscat",            // Alsace & Rhône — Muscat d'Alsace, Beaumes-de-Venise
            "Auxerrois",         // Alsace & Lorraine white
            "Maccabeu",          // Roussillon & Languedoc white
            "Sémillon",          // Bordeaux white — Sauternes & Pessac-Léognan
        ],
        red: [
            "Carignan",          // Languedoc & Roussillon backbone red
            "Cinsault",          // Southern France light red
            "Mourvèdre",         // Bandol & Southern Rhône red
            "Nielluccio",        // Corsican red (= Sangiovese)
            "Counoise",          // Southern Rhône blending red
            "Négrette",          // Fronton & Gaillac fruity red
            "Mondeuse",          // Savoie structured red
            "Poulsard",          // Jura light-coloured red
            "Trousseau",         // Jura red — sounds like a trousseau
            "Pineau d'Aunis",    // Loire — 'Pineau' hints at white
            "Fer Servadou",      // Southwest France — Marcillac & Entraygues
            "Tannat",            // Madiran & Irouléguy — 'tannin' grape
            "Côt",               // Cahors & Loire — French name for Malbec
            "Jurançon Noir",     // Southwest France — tricky: Jurançon is a white wine!
            "Pinot Meunier",     // Champagne region — 'meunier' = miller
            "Grolleau",          // Loire — Anjou, Rosé d'Anjou
            "Duras",             // Gaillac, Southwest France
            "Abouriou",          // Southwest France — rare native red
        ],
    },
};

// ── Translations ─────────────────────────────────────────────────────────────
const TRANSLATIONS = {
    en: {
        pageTitle:      'White or Red Wine? – Free Online Wine Tasting Quiz',
        siteTitleHtml:  '🍷 <span class="hl-white">White</span> or <span class="hl-red">Red</span> Wine?',
        headerTagline:  'The free wine tasting quiz',
        introH1Html:    '<span class="hl-white">White</span> or <span class="hl-red">Red</span> Wine?',
        introPara:      '<em>Gewürztraminer. Primitivo. Viognier. Tannat.</em><br>Some are white wines. Some are red. Can you tell them apart?',
        questionOf:     'Question',
        questionOfSep:  'of',
        btnWhite:       '🥂 White Wine',
        btnRed:         '🍷 Red Wine',
        typeWhite:      'white wine',
        typeRed:        'red wine',
        correctFeedback: (name, type) => `✓ Right — ${name} is a ${type}!`,
        wrongFeedback:   (name, type) => `✗ Wrong — ${name} is actually a ${type}.`,
        outOf10:        'out of 10 correct',
        verdicts: [
            [10, 'Perfect! You\'re a true sommelier. 🏆'],
            [9,  'Excellent! Almost flawless.'],
            [7,  'Great! You clearly know your grapes.'],
            [5,  'Not bad — a few varieties tricked you.'],
            [3,  'Tricky, right? Give it another pour!'],
            [0,  'The grapes got you. Keep tasting!'],
        ],
        btnRestart:     '↺ Play again',
        aboutTitle:     'About White or Red Wine?',
        faq: [
            {
                q: 'What makes this quiz tricky?',
                a: 'Wine grape names come from many different languages and regions — Italian, French, German, Spanish, Greek and more. Without prior knowledge it\'s nearly impossible to tell from the name alone whether a grape produces a white or red wine. <em>Roussanne</em> sounds reddish in French, yet it\'s a white grape. <em>Grüner Veltliner</em> ("green" in German) is also white.',
            },
            {
                q: 'Are all the wine names real grape varieties?',
                a: 'Yes. Every name in the game is a genuine grape variety (<em>cépage</em>) used in real wine production worldwide — from Campanian <em>Falanghina</em> to Austrian <em>Zweigelt</em>.',
            },
            {
                q: 'How many questions are in the game?',
                a: 'Each round draws 10 random questions from a pool of 36 varieties (18 white + 18 red). The pool changes with the language — switch to German or French to discover a completely different set of grape names.',
            },
            {
                q: 'Which variety fools the most players?',
                a: '<em>Roussanne</em> (white) and <em>Blaufränkisch</em> (red) are among the most misguessed — their names strongly suggest the opposite colour. <em>Nero d\'Avola</em> ("black of Avola"), on the other hand, is almost always identified as red.',
            },
            {
                q: 'What do the difficulty levels mean?',
                a: 'Every variety in the German, French and Italian pools carries a cultivated area in hectares (ha) from official statistics (Destatis, FranceAgriMer, ISTAT). The ha values follow a three-part statistical distribution: varieties with a <em>known and above-median</em> area (≥ median), varieties with a <em>known but below-median</em> area (0 &lt; ha &lt; median), and varieties with <em>no recorded area at all</em> (ha = 0) — true outliers that are either too rare to appear in official statistics or no longer commercially cultivated. The three difficulty tiers map directly onto this split: <em>Normal</em> — at or above the median, the widely-planted classics; <em>Hard</em> — below the median but statistically tracked; <em>Expert</em> — the censored outliers with no data. The median is recalculated dynamically for each country pool. The <em>Classic</em> mode takes the top 10 most-planted white and red varieties from each of the three countries and merges them into a cross-country greatest-hits of the vine.',
            },
        ],
        catDeApproved:  'German Wines',
        catFrApproved:  'French Wines',
        catItApproved:  'Italian Wines',
        catClassic:     'Classics',
        catWorldApproved: 'European Wines',
        mapTitle:       'Wine Regions of Europe',
        mapSubtitle:    'Click France, Germany or Italy to launch that country’s wine quiz',
        moreQuizzes:    'More quizzes ↗',
        imprintLink:    'Imprint',
        privacyLink:    'Privacy Policy',
        madeBy:         'Made by',
        diffAll:        'All',
        diffNormal:     'Normal',
        diffHard:       'Hard',
        diffExpert:     'Expert',
    },

    de: {
        pageTitle:      'Weißwein oder Rotwein? – Kostenloses Weinprobe-Quiz',
        siteTitleHtml:  '🍷 <span class="hl-white">Weiß</span>- oder <span class="hl-red">Rot</span>wein?',
        headerTagline:  'Das kostenlose Weinprobe-Quiz',
        introH1Html:    '<span class="hl-white">Weiß</span>- oder <span class="hl-red">Rot</span>wein?',
        introPara:      '<em>Gewürztraminer. Primitivo. Viognier. Tannat.</em><br>Manche sind Weißweine, manche Rotweine. Können Sie die Rebsorten unterscheiden?',
        questionOf:     'Frage',
        questionOfSep:  'von',
        btnWhite:       '🥂 Weißwein',
        btnRed:         '🍷 Rotwein',
        typeWhite:      'Weißwein',
        typeRed:        'Rotwein',
        correctFeedback: (name, type) => `✓ Richtig — ${name} ist ein ${type}!`,
        wrongFeedback:   (name, type) => `✗ Falsch — ${name} ist eigentlich ein ${type}.`,
        outOf10:        'von 10 richtig',
        verdicts: [
            [10, 'Perfekt! Sie sind ein wahrer Sommelier. 🏆'],
            [9,  'Ausgezeichnet! Fast makellos.'],
            [7,  'Gut gemacht! Sie kennen Ihre Rebsorten.'],
            [5,  'Nicht schlecht — ein paar Sorten haben Sie getäuscht.'],
            [3,  'Knifflig, oder? Noch eine Verkostung!'],
            [0,  'Die Trauben haben Sie erwischt. Weiter degustieren!'],
        ],
        btnRestart:     '↺ Nochmal spielen',
        aboutTitle:     'Über Weiß- oder Rotwein?',
        faq: [
            {
                q: 'Was macht dieses Quiz so schwierig?',
                a: 'Weinrebsorten tragen Namen aus vielen verschiedenen Sprachen und Regionen — Italienisch, Französisch, Deutsch, Spanisch, Griechisch und mehr. Ohne Vorwissen ist es fast unmöglich, allein am Namen zu erkennen, ob eine Sorte Weiß- oder Rotwein ergibt. <em>Roussanne</em> klingt auf Französisch rötlich — ist aber eine Weißweinsorte. <em>Grüner Veltliner</em> ist ebenfalls weiß.',
            },
            {
                q: 'Sind alle Weinnamen echte Rebsorten?',
                a: 'Ja. Jeder Name im Spiel ist eine echte Rebsorte, die weltweit im Weinbau verwendet wird — von der kampanischen <em>Falanghina</em> bis zum österreichischen <em>Zweigelt</em>.',
            },
            {
                q: 'Wie viele Fragen hat das Spiel?',
                a: 'Jede Runde zieht 10 zufällige Fragen aus einem Pool von 36 Rebsorten (18 weiß + 18 rot). Der Pool richtet sich nach der gewählten Sprache — auf Deutsch stehen vor allem deutsche, österreichische und elsässische Sorten im Mittelpunkt.',
            },
            {
                q: 'Welche Rebsorte täuscht die meisten Spieler?',
                a: '<em>Roussanne</em> (Weiß) und <em>Blaufränkisch</em> (Rot) werden am häufigsten falsch geraten — ihre Namen legen die entgegengesetzte Farbe nahe. <em>Nero d\'Avola</em> („Schwarzer von Avola") hingegen wird fast immer korrekt als Rotweinsorte erkannt.',
            },
            {
                q: 'Was bedeuten die Schwierigkeitsgrade?',
                a: 'Jede Rebsorte in den deutschen, französischen und italienischen Pools trägt eine Anbaufläche (ha) aus offiziellen Statistiken (Destatis, FranceAgriMer, ISTAT). Die ha-Werte folgen einer dreiteiligen statistischen Verteilung: Sorten mit <em>bekannter, überdurchschnittlicher</em> Fläche (≥ Median), Sorten mit <em>bekannter, unterdurchschnittlicher</em> Fläche (0 &lt; ha &lt; Median) und Sorten <em>ohne erfasste Fläche</em> (ha = 0) — echte Ausreißer, die entweder zu selten für offizielle Statistiken sind oder nicht mehr kommerziell angebaut werden. Die drei Schwierigkeitsstufen bilden diese Verteilung direkt ab: <em>Normal</em> — ab dem Median, die meistangebauten Klassiker; <em>Schwer</em> — unter dem Median, aber statistisch erfasst; <em>Experte</em> — die zensierten Ausreißer ohne Datenpunkt. Der Median wird je Pool dynamisch neu berechnet. Der <em>Klassisch</em>-Modus zieht die jeweils 10 meistangebauten Weiß- und Rotsorten aus allen drei Ländern und kombiniert sie zu einem länderübergreifenden Pool der bekanntesten Rebsorten der Welt.',
            },
        ],
        catDeApproved:  'Deutsche Weine',
        catFrApproved:  'Französische Weine',
        catItApproved:  'Italienische Weine',
        catClassic:     'Klassiker',
        catWorldApproved: 'Europäische Weine',
        mapTitle:       'Weinregionen Europas',
        mapSubtitle:    'Frankreich, Deutschland oder Italien anklicken, um das Quiz zu starten',
        moreQuizzes:    'Mehr Quizze ↗',
        imprintLink:    'Impressum',
        privacyLink:    'Datenschutz',
        madeBy:         'Erstellt von',
        diffAll:        'Alle',
        diffNormal:     'Normal',
        diffHard:       'Schwer',
        diffExpert:     'Experte',
    },

    fr: {
        pageTitle:      'Blanc ou Rouge\u00a0? – Quiz Dégustation de Vin Gratuit',
        siteTitleHtml:  '🍷 <span class="hl-white">Blanc</span> ou <span class="hl-red">Rouge</span>\u00a0?',
        headerTagline:  'Le quiz dégustation de vin gratuit',
        introH1Html:    '<span class="hl-white">Blanc</span> ou <span class="hl-red">Rouge</span>\u00a0?',
        introPara:      '<em>Gewürztraminer. Primitivo. Viognier. Tannat.</em><br>Certains sont des vins blancs. D\'autres sont rouges. Pouvez-vous les différencier\u00a0?',
        questionOf:     'Question',
        questionOfSep:  'sur',
        btnWhite:       '🥂 Vin Blanc',
        btnRed:         '🍷 Vin Rouge',
        typeWhite:      'vin blanc',
        typeRed:        'vin rouge',
        correctFeedback: (name, type) => `✓ Correct\u00a0— ${name} est un ${type}\u00a0!`,
        wrongFeedback:   (name, type) => `✗ Faux\u00a0— ${name} est en fait un ${type}.`,
        outOf10:        'sur 10 corrects',
        verdicts: [
            [10, 'Parfait\u00a0! Vous êtes un vrai sommelier. 🏆'],
            [9,  'Excellent\u00a0! Presque parfait.'],
            [7,  'Très bien\u00a0! Vous connaissez vos cépages.'],
            [5,  'Pas mal\u00a0— quelques cépages vous ont trompé.'],
            [3,  'Difficile, n\'est-ce pas\u00a0? Encore une dégustation\u00a0!'],
            [0,  'Les raisins vous ont eu\u00a0! Continuez à déguster.'],
        ],
        btnRestart:     '↺ Rejouer',
        aboutTitle:     'À propos de Blanc ou Rouge\u00a0?',
        faq: [
            {
                q: 'Qu\'est-ce qui rend ce quiz difficile\u00a0?',
                a: 'Les noms de cépages viennent de nombreuses langues et régions différentes — italien, français, allemand, espagnol, grec et plus encore. Sans connaissances préalables, il est presque impossible de deviner, rien qu\'au nom, si un cépage donne du vin blanc ou rouge. <em>Roussanne</em> semble rousse en français — et pourtant c\'est un cépage blanc. <em>Grüner Veltliner</em> (« vert » en allemand) est également blanc.',
            },
            {
                q: 'Tous les noms de vins sont-ils de vrais cépages\u00a0?',
                a: 'Oui. Chaque nom dans le jeu est un véritable cépage utilisé dans la production vinicole mondiale — de la <em>Falanghina</em> campanienne au <em>Zweigelt</em> autrichien.',
            },
            {
                q: 'Combien de questions y a-t-il dans le jeu\u00a0?',
                a: 'Chaque manche tire 10 questions aléatoires d\'un pool de 36 cépages (18 blancs + 18 rouges). Le pool change selon la langue choisie\u00a0— en français, il met en avant les cépages français, corses et du Sud-Ouest.',
            },
            {
                q: 'Quel cépage trompe le plus de joueurs\u00a0?',
                a: '<em>Roussanne</em> (blanc) et <em>Blaufränkisch</em> (rouge) sont parmi les plus mal devinés — leurs noms suggèrent fortement la couleur opposée. En revanche, <em>Nero d\'Avola</em> (« noir d\'Avola ») est presque toujours identifié comme rouge\u00a0!',
            },
            {
                q: 'Que signifient les niveaux de difficulté\u00a0?',
                a: 'Chaque cépage des pools allemand, français et italien est associé à une superficie cultivée (ha) issue de statistiques officielles (Destatis, FranceAgriMer, ISTAT). Les valeurs ha suivent une distribution statistique en trois parties\u00a0: cépages avec une superficie <em>connue et supérieure à la médiane</em> (\u2265\u00a0médiane), cépages avec une superficie <em>connue mais inférieure à la médiane</em> (0\u00a0&lt;\u00a0ha\u00a0&lt;\u00a0médiane), et cépages <em>sans superficie enregistrée</em> (ha\u00a0=\u00a00) \u2014 de véritables valeurs aberrantes, soit trop rares pour figurer dans les statistiques officielles, soit abandonnées commercialement. Les trois niveaux correspondent directement à cette répartition\u00a0: <em>Normal</em> \u2014 à partir de la médiane, les grands classiques\u00a0; <em>Difficile</em> \u2014 sous la médiane, mais recensés\u00a0; <em>Expert</em> \u2014 les valeurs censurées sans donnée. La médiane est recalculée dynamiquement pour chaque pool. Le mode <em>Classique</em> sélectionne les 10 cépages blancs et rouges les plus cultivés dans chacun des trois pays et les réunit en un pool transnational des cépages les plus emblématiques.',
            },
        ],
        catDeApproved:  'Vins Allemands',
        catFrApproved:  'Vins Français',
        catItApproved:  'Vins Italiens',
        catClassic:     'Classiques',
        catWorldApproved: 'Vins Européens',
        mapTitle:       'Régions viticoles d’Europe',
        mapSubtitle:    'Cliquez sur la France, l’Allemagne ou l’Italie pour lancer le quiz',
        moreQuizzes:    'Plus de quiz ↗',
        imprintLink:    'Mentions légales',
        privacyLink:    'Politique de confidentialité',
        madeBy:         'Créé par',
        diffAll:        'Tous',
        diffNormal:     'Normal',
        diffHard:       'Difficile',
        diffExpert:     'Expert',
    },
};
