// ═══════════════════════════════════════════════════════════════
// SECUR-QUIZ | Données Catastrophe / IMV
// Protocoles : START, METHANE, TRACER, PMA, ORCA Canton
// Format : chaque cas = { id, title, situation:{}, questions[] }
// ─────────────────────────────────────────────────────────────
// AJOUT D'UN CAS :
//   1. Copier un bloc existant (CAT-01 ou CAT-02)
//   2. Incrémenter l'id : CAT-03, CAT-04, etc.
//   3. Chaque cas a 15 questions (12 normales + 3 EVASAN en fin)
//   4. Pour les questions à choix multiples : ajouter multiSelect:true
//      et définir plusieurs choices avec correct:true
//   5. Sauvegarder — le moteur charge les cas aléatoirement
// ═══════════════════════════════════════════════════════════════

const CAT_CASES = [

    // ────────────────────────────────────────────────────────────────
    // CAT-01 : Accident de car scolaire — Route du Grand-Saint-Bernard
    // ────────────────────────────────────────────────────────────────
    {
      id: "CAT-01",
      title: "Carambolage car scolaire — Route du Grand-Saint-Bernard",
      situation: {
        meteo: "Neige légère, visibilité 200m, route verglacée",
        incident: "Car scolaire 52 passagers percuté par camion, sortie de route, falaise de 4m",
        victimes_estimees: "~40 victimes dont 35 enfants (8-14 ans)",
        time: "T0 + 3 min",
        description: "Vous êtes la première ambulance sur les lieux. Le car est couché sur le flanc. Des enfants sortent seuls, d'autres restent coincés. Fumée visible côté moteur.",
        visual: "🚌💥🏔️"
      },
      questions: [
        {
          phase: "ambulance",
          patient: null,
          text: "METHANE : vous êtes 1er arrivé. Première transmission à la centrale ?",
          choices: [
            { text: "M: Zone sécurisée non / E: Car scolaire vs camion, falaise / T: ~40 victimes / H: 1 ambulance / A: Route du GSB, km 12 / N: Triage START en cours / E: Renfort SMUR x3, pompiers, hélico", correct: true },
            { text: "Appeler le nombre exact de blessés avant transmission — précision avant tout", correct: false },
            { text: "Commencer les soins et transmettre METHANE plus tard quand on a une idée précise", correct: false }
          ],
          feedback: {
            correct: "✅ METHANE = outil de transmission IMV. La précision n'est pas possible à T0. L'estimation rapide et la demande de renforts adaptés sont plus importantes que l'exactitude. La centrale a besoin des infos pour déclencher le plan ORCA (Suisse).",
            incorrect: "❌ Attendre d'avoir toutes les informations = retarder les renforts. METHANE se transmet incomplet si nécessaire — le 'H' (ressources) et le 'E' (secours demandés) sont critiques pour déclencher le plan ORCA.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          multiSelect: true,
          text: "Zone de danger : fumée au moteur, risque incendie. Parmi ces actions, lesquelles sont CORRECTES pour sécuriser la zone ? (plusieurs réponses possibles)",
          choices: [
            { text: "Établir 3 zones concentriques (chaude/tiède/froide) et baliser le périmètre", correct: true },
            { text: "Reculer toutes les victimes valides à >50m du véhicule incendié", correct: true },
            { text: "Ne pas entrer dans le car sans équipement de protection incendie — attendre les pompiers pour la zone chaude", correct: true },
            { text: "Entrer immédiatement dans le car pour traiter les victimes — l'urgence prime sur la sécurité personnelle", correct: false },
            { text: "Une zone de sécurité de 10m suffit pour une fumée légère sans flamme visible", correct: false }
          ],
          feedback: {
            correct: "Correct. Les 3 zones IMV, l'éloignement des victimes valides et le respect de la zone chaude sont les trois piliers de la sécurisation. Créer de nouvelles victimes dans l'équipe est la pire erreur.",
            incorrect: "Incomplet ou incorrect. Sur un véhicule avec fumée moteur, le risque d'incendie et d'explosion est réel. Les 3 zones, l'éloignement à >50m et l'attente des pompiers pour la zone chaude sont non-négociables.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Vous devez trier 38 victimes seul pendant 8 min avant renfort. Quel algorithme utilisez-vous ?",
          choices: [
            { text: "Triage START : Marche → Rouge/Jaune/Vert/Noir. Pas de soin pendant le triage sauf ouverture des voies aériennes", correct: true },
            { text: "Trier par ordre de découverte des victimes, traiter chaque blessé complètement avant de passer au suivant", correct: false },
            { text: "Trier uniquement les enfants d'abord, puis les adultes", correct: false }
          ],
          feedback: {
            correct: "✅ START (Simple Triage And Rapid Treatment) : 1) Victimes qui marchent = VERT. Sur les autres : 2) Respiration ? 3) FR >30 = ROUGE. 4) Pouls radial ? 5) État de conscience ? Seule manœuvre autorisée = sublimaze voies aériennes. Temps par victime : <30 secondes.",
            incorrect: "❌ Traiter complètement chaque victime en IMV = erreur stratégique. On ne soigne pas pendant le triage START. L'âge ne modifie pas le triage START (même algorithme enfants/adultes).",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 140, spo2: null, bp: null, rr: 36, gcs: 10, ecg: null, state: "obnubilé" },
          text: "Victime A : enfant 10 ans, FR 36/min, pouls radial filant, GCS 10. Triage START ?",
          choices: [
            { text: "ROUGE — FR >30 + pouls filant + GCS altéré = détresse vitale immédiate", correct: true },
            { text: "JAUNE — conscient, peut attendre", correct: false },
            { text: "NOIR — trop instable pour survie", correct: false }
          ],
          feedback: {
            correct: "✅ ROUGE = urgence absolue. FR >30 suffit pour classer ROUGE en START. Ici : FR 36 + pouls filant + GCS 10 = triple critère rouge. Balise rouge posée, victime laissée sur place en attendant la phase soins.",
            incorrect: "❌ JAUNE = urgence relative (stable, peut attendre). NOIR = décédé ou survie improbable. FR 36/min seule classe déjà en ROUGE dans le triage START.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: null, spo2: null, bp: null, rr: 0, gcs: 3, ecg: null, state: "apnée" },
          text: "Victime B : adulte, apnée après ouverture des voies aériennes. Triage START ?",
          choices: [
            { text: "NOIR — victime en apnée malgré libération des voies aériennes en IMV = non-prioritaire", correct: true },
            { text: "ROUGE — commencer RCP immédiate", correct: false },
            { text: "JAUNE — inconscient mais peut se révéler", correct: false }
          ],
          feedback: {
            correct: "✅ En IMV avec ressources limitées : victime apnéique malgré libération des VAS = NOIR. La RCP monopolise 2 secouristes pour 1 victime à pronostic incertain quand d'autres ROUGE peuvent être sauvés. Décision difficile mais éthiquement défendable.",
            incorrect: "❌ En IMV, la RCP immédiate sur chaque arrêt est impossible — elle utiliserait toutes les ressources pour une victime. Le triage START classe cette victime NOIR. Cette décision sera réévaluée si renforts suffisants.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 88, spo2: null, bp: null, rr: 16, gcs: 15, ecg: null, state: "conscient" },
          text: "30 enfants marchent et pleurent. Triage ?",
          choices: [
            { text: "VERT — victimes ambulatoires en IMV START. Les diriger vers zone froide sans examen individuel complet", correct: true },
            { text: "Examiner chaque enfant individuellement malgré le nombre — les enfants peuvent masquer des lésions", correct: false },
            { text: "Jaune — les enfants sont fragiles, prudence systématique", correct: false }
          ],
          feedback: {
            correct: "✅ Marchent = VERT dans le triage START. Zone froide, comptage, surveil global. La contre-intuitivité de ne pas s'arrêter sur chaque enfant est réelle mais nécessaire pour sauver les ROUGE. Un 2ème triage (SIEVE) sera fait plus tard.",
            incorrect: "❌ Examiner 30 enfants individuellement = 30-45 minutes pendant lesquelles les ROUGE ne sont pas traités. Le triage START est conçu précisément pour cette situation.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Le PMA (Poste Médical Avancé) doit être établi. Où le positionnez-vous ?",
          choices: [
            { text: "Zone tiède, vent dans le dos par rapport au véhicule (fumée), accessible aux ambulances, signal visible, à l'abri des intempéries si possible", correct: true },
            { text: "Le plus près du car pour réduire les distances de transport des victimes", correct: false },
            { text: "Sur la route principale pour être visible des renforts", correct: false }
          ],
          feedback: {
            correct: "✅ PMA : zone tiède (ni dans le danger, ni trop loin), protection du vent toxique, accès ambulances pour évacuation, signalisation (drapeau blanc-rouge). La proximité du danger est un risque, la route principale est dangereuse pour les secouristes.",
            incorrect: "❌ PMA trop proche = exposition au danger (fumée, incendie). PMA sur route = risque de sur-accident. La position doit équilibrer accès et sécurité.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "La gendarmerie veut passer la zone pour récupérer des témoins. Que faites-vous ?",
          choices: [
            { text: "Coordonner avec le responsable gendarmerie : accès zone tiède autorisé, zone chaude réservée pompiers et SMUR. Désigner un point de rencontre gendarmerie en zone froide.", correct: true },
            { text: "Interdire tout accès à la zone — les secouristes sont seuls responsables", correct: false },
            { text: "Laisser passer la gendarmerie librement, chacun fait son travail", correct: false }
          ],
          feedback: {
            correct: "✅ Gestion multi-agences : la police, pompiers, SMUR et ambulanciers ont des rôles complémentaires. Coordination et délimitation des zones selon compétences. Un officier de liaison inter-services améliore l'efficacité.",
            incorrect: "❌ Interdire tout accès perturbe la coordination. Laisser passer sans coordination crée la confusion. La gestion de l'espace IMV nécessite une coordination active.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { name: "Enfant A", hr: 134, spo2: 88, bp: "82/48", rr: 38, gcs: 9, ecg: "sinusal_tachy", state: "semi-conscient" },
          multiSelect: true,
          text: "Premier ROUGE au PMA : enfant 10 ans, FR 38, SpO₂ 88%, TA 82/48, GCS 9. Quelles sont vos TROIS premières actions ? (plusieurs réponses possibles)",
          choices: [
            { text: "Ouvrir une fiche TRACER et identifier le patient (bracelet couleur rouge)", correct: true },
            { text: "O₂ 15L/min masque HC + scope cardiaque + monitoring SpO₂ continu", correct: true },
            { text: "Poser 2 VVP larges calibre (≥16G) et prélever un bilan sanguin si disponible", correct: true },
            { text: "Commencer la réanimation sans fiche TRACER — la paperasse peut attendre", correct: false },
            { text: "Attendre le médecin PMA avant d'initier tout soin — hors compétence IAS3", correct: false }
          ],
          feedback: {
            correct: "Excellent. TRACER + O₂/monitoring + VVP sont les 3 piliers d'accueil au PMA. La fiche TRACER est une exigence légalo-médicale — elle permet la traçabilité des soins et l'évacuation coordonnée.",
            incorrect: "Incomplet. Au PMA, toute action doit être tracée, l'O₂ et le monitoring sont immédiats, et la VVP prépare toute thérapeutique médicale. Ces 3 actions sont simultanées, pas séquentielles.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 144, spo2: 88, bp: "80/46", rr: 38, gcs: 9, ecg: "sinusal_tachy", state: "obnubilé", name: "Patient A" },
          text: "Enfant A — choc hémorragique suspecté (trauma abdominal, abdomen tendu). Remplissage vasculaire ?",
          choices: [
            { text: "NaCl 0.9% ou Ringer lactate 10-20 mL/kg en bolus, réévaluation après chaque bolus, objectif TA systolique >80 mmHg sur trauma hémorragique", correct: true },
            { text: "500 mL rapidement sans réévaluation pour restaurer la volémie vite", correct: false },
            { text: "Éviter tout remplissage — risque de dilution des facteurs coagulation", correct: false }
          ],
          feedback: {
            correct: "✅ Réanimation permissive : TA systolique cible 80-90 mmHg sur trauma hémorragique non contrôlé (éviter HTA qui aggrave le saignement). Bolus 10-20 mL/kg avec réévaluation. Chez l'enfant : 10 mL/kg pour limiter surcharge.",
            incorrect: "❌ 500 mL d'emblée sans réévaluation = risque d'hémodilution et d'aggravation du saignement (hypertension artérielle sur trauma hémorragique non contrôlé). Pas de remplissage du tout = inadéquat sur TA 80 mmHg.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 118, spo2: 92, bp: "88/56", rr: 32, gcs: 10, ecg: "sinusal_tachy", state: "obnubilé", name: "Patient B — Adulte, brûlures 35%" },
          text: "Patient B : adulte 35 ans, brûlures 35% (abdomen, cuisses), conscient. Soins brûlés au PMA ?",
          choices: [
            { text: "Refroidissement eau 15°C localisé <20 min, pansement non adhérent, ne pas percer les phlyctènes, VVP + remplissage Parkland, antalgique, orientation CHUV brûlés", correct: true },
            { text: "Refroidir avec la neige disponible sur place — eau fraiche naturelle idéale", correct: false },
            { text: "Percer les phlyctènes pour réduire les tensions cutanées", correct: false }
          ],
          feedback: {
            correct: "✅ Protocole BSC brûlés PMA : eau 15°C, pas neige (trop froide <5°C), <20 min (hypothermie sur 35%!), pansement non-adhérent, phlyctènes intacts (protection contre infection), formule Parkland VVP. Orientation centre brûlés CHUV obligatoire.",
            incorrect: "❌ La neige (<5°C) aggrave les lésions par vasoconstriction et risque hypothermie sur 35% SCB. Percer les phlyctènes en urgence pré-hospitalière augmente le risque infectieux sans bénéfice.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 68, spo2: 97, bp: "118/74", rr: 14, gcs: 15, ecg: "sinusal", state: "conscient", name: "Patient C — Vert, choc émotionnel" },
          text: "Patient C : adolescente 14 ans, physiquement indemne, mais état de panique, hyperventilation, pleurs incontrôlables. Prise en charge ?",
          choices: [
            { text: "Zone psychologique (cellule de crise), soutien UPCPP ou bénévoles formés, contact physique si consenti, respiration guidée, informer sur les proches", correct: true },
            { text: "Sédation légère (midazolam 2mg) pour calmer la crise — efficacité immédiate", correct: false },
            { text: "Ignorer pour l'instant — les ROUGE sont prioritaires, elle est VERTE", correct: false }
          ],
          feedback: {
            correct: "✅ Les VERT ont besoin de soutien psychologique structuré. L'hyperventilation peut se compliquer (tétanie, malaise). Zone psy dédiée, présence humaine, respiration guidée (4-7-8). Appel UPCPP (Unité de crise) si disponible.",
            incorrect: "❌ Sédation d'un VERT sans indication médicale = surdosage de ressources et risque iatrogène. Ignorer les VERT génère des complications psychologiques (PTSD) et peut évoluer vers une crise ROUGE (malaise vagal).",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 88, spo2: 95, bp: "108/68", rr: 18, gcs: 14, ecg: "sinusal", state: "conscient", name: "Patient A — 2ème évaluation" },
          text: "Réévaluation Patient A (enfant) après 15 min : amélioration — TA 108/68, HR 88. Comment reclassez-vous ce patient ?",
          choices: [
            { text: "Réévaluation triage : JAUNE si stable, aucune urgence vitale immédiate — modifier la fiche TRACER et réorganiser l'évacuation", correct: true },
            { text: "Garder ROUGE — le triage initial ne change jamais", correct: false },
            { text: "Reclasser VERT si TA normalisée — évacuation non urgente", correct: false }
          ],
          feedback: {
            correct: "✅ Le triage est dynamique en IMV. Un patient stabilisé peut être reclassé. ROUGE → JAUNE = optimisation des ressources. La fiche TRACER documente l'évolution. L'évacuation est réorganisée selon la nouvelle priorité.",
            incorrect: "❌ Le triage fixe est une erreur. Un patient qui s'améliore libère des ressources ROUGE pour d'autres. Reclasser VERT trop tôt est prématuré — l'enfant a un trauma abdominal non encore exploré.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Hélicoptère REGA disponible pour 1 évacuation. Qui priorisez-vous parmi : Enfant A (JAUNE, abdomen), Patient B (ROUGE, brûlures 35%), adolescente C (VERT) ?",
          choices: [
            { text: "Patient B (ROUGE, brûlures 35%) : urgence absolue, nécessite centre brûlés CHUV, stabilité relative permettant transport héliporté", correct: true },
            { text: "Enfant A : les enfants sont toujours prioritaires en évacuation", correct: false },
            { text: "Adolescente C : la plus légère, transport plus facile en hélico", correct: false }
          ],
          feedback: {
            correct: "✅ L'évacuation héliportée est réservée au patient le plus grave nécessitant un centre spécialisé. Patient B = ROUGE + brûlures >20% + nécessité centre brûlés. L'hélico permet atteindre CHUV en 20 min vs 2h de route.",
            incorrect: "❌ L'âge ne détermine pas la priorité d'évacuation. La criticité clinique + la nécessité d'un centre spécialisé + la fenêtre thérapeutique orientent le choix. L'adolescente VERTE n'a pas d'indication héliportée.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          multiSelect: true,
          text: "Fin d'intervention. Le responsable SMUR demande votre bilan IMV pour le rapport ORCA. Quels éléments sont OBLIGATOIRES dans ce bilan ? (plusieurs réponses possibles)",
          choices: [
            { text: "Nombre total de victimes et répartition triage (ROUGE / JAUNE / VERT / NOIR)", correct: true },
            { text: "Soins administrés au PMA par catégorie et évacuations avec destinations hospitalières", correct: true },
            { text: "Heure de déclenchement du plan, ressources engagées et heure de levée du dispositif", correct: true },
            { text: "Uniquement les noms et prénoms des victimes hospitalisées — les autres ne comptent pas", correct: false },
            { text: "Les erreurs de triage — usage interne uniquement, à exclure du rapport officiel", correct: false }
          ],
          feedback: {
            correct: "Complet. Le rapport ORCA exige : répartition triage, soins et évacuations, chronologie et ressources. C'est un document médico-légal transmis au Canton. Les erreurs font l'objet d'un RETEX séparé.",
            incorrect: "Incomplet. Le bilan ORCA est un document structuré exigé par les autorités cantonales. Il comprend la chronologie, les effectifs victimes par triage, les soins et les évacuations.",
            naca: null
          }
        }
      ]
    },

    // ────────────────────────────────────────────────────────────────
    // CAT-02 : Explosion de gaz — Immeuble résidentiel, Bern
    // ────────────────────────────────────────────────────────────────
    {
      id: "CAT-02",
      title: "Explosion de gaz — Immeuble 4 étages, Berne",
      situation: {
        meteo: "Nuit, 3°C, pluie fine",
        incident: "Explosion gaz naturel rez-de-chaussée, effondrement partiel escaliers central",
        victimes_estimees: "~25 victimes, 12 personnes encore dans le bâtiment",
        time: "T0 + 5 min",
        description: "Immeuble de 20 appartements. Escalier central effondré, accès impossible aux étages supérieurs. Odeur de gaz persistante. Certains résidents se jettent depuis les fenêtres (2ème étage).",
        visual: "🏢💥🔥"
      },
      questions: [
        {
          phase: "ambulance",
          patient: null,
          multiSelect: true,
          text: "Odeur de gaz persistante dans un immeuble. Vous arrivez en premier. Lesquelles de ces actions sont CORRECTES avant toute intervention ? (plusieurs réponses possibles)",
          choices: [
            { text: "Ne pas entrer dans le bâtiment — risque d'explosion par étincelle ou allumage accidentel", correct: true },
            { text: "Couper le courant électrique depuis le tableau extérieur si accessible et sécurisé", correct: true },
            { text: "Éloigner toutes les personnes à >100m et établir un périmètre de sécurité", correct: true },
            { text: "Utiliser la radio dans la zone pour alerter la centrale — l'urgence prime sur tout", correct: false },
            { text: "Entrer rapidement pour extraire les victimes — l'odeur de gaz se disperse vite à l'air libre", correct: false }
          ],
          feedback: {
            correct: "Exact. Ne pas entrer, couper le courant depuis l'extérieur et éloigner à >100m sont les 3 réflexes obligatoires. La radio dans une zone de gaz peut déclencher l'explosion par étincelle électronique — utiliser le téléphone depuis l'extérieur.",
            incorrect: "Incorrect ou insuffisant. La radio dans la zone de gaz est une cause fréquente d'explosion. Entrer sans équipement spécialisé est interdit. Attendre les pompiers HAZCHEM avant toute pénétration.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 0, spo2: 0, bp: "—", rr: 0, gcs: 3, ecg: null, state: "arrêt" },
          text: "Victime extraite par pompiers : homme adulte, brûlures >70% surface, GCS 3, apnée, pas de pouls. Triage ?",
          choices: [
            { text: "NOIR — brûlures >70%, apnée sans réponse = non survivable en contexte IMV. Pas de RCP.", correct: true },
            { text: "ROUGE — commencer RCP, brûlures ne contre-indiquent pas la réanimation", correct: false },
            { text: "JAUNE — attendre SMUR pour décision médicale", correct: false }
          ],
          feedback: {
            correct: "✅ Brûlures >70% de la surface corporelle + ACR = pronostic quasi-nul même en milieu hospitalier spécialisé. En IMV avec ressources limitées, la RCP est contre-indiquée. NOIR = décision médicale validée par triage IMV.",
            incorrect: "❌ En IMV, la RCP sur une victime à mortalité >98% monopolise 2 secouristes et des ressources pour une chance quasi-nulle. La règle IMV est : utiliser les ressources où elles peuvent changer le pronostic.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 118, spo2: 90, bp: "128/82", rr: 24, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
          text: "Victime sautée du 2ème étage (~5 mètres) : femme 32 ans, consciente, douleur cheville et dos. Triage et suspicion lésionnelle ?",
          choices: [
            { text: "JAUNE — trauma mécanisme hauteur >4m, suspicion rachis thoracolombaire, stabilisation cervicale, transport médicalisé. FR/FC/TA/GCS normaux.", correct: true },
            { text: "VERT — elle marche, trauma mineur", correct: false },
            { text: "ROUGE — tout trauma de hauteur = rouge par défaut", correct: false }
          ],
          feedback: {
            correct: "✅ Chute >4m = mécanisme à énergie significative. Douleur dorsale = suspicion fracture rachidienne jusqu'à preuve du contraire. JAUNE : stable mais nécessite transport médicalisé et immobilisation. Pas VERT malgré déambulation (fractures de Peterson non évoluées).",
            incorrect: "❌ Marcher après une chute de 5m ne garantit pas l'absence de fracture rachidienne instable. ROUGE requiert une instabilité vitale — ici absente. JAUNE est le triage adapté.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "8 personnes sont encore aux étages supérieurs, criantes aux fenêtres. Les pompiers sont en cours d'installation d'une grande échelle. Que transmettez-vous au responsable PMA ?",
          choices: [
            { text: "Nombre estimé, étages concernés, fenêtres actives, état apparent (panique vs blessés), accès pompiers en cours, ETA grande échelle", correct: true },
            { text: "Attendre que les pompiers aient sorti tout le monde avant de transmettre — pas d'info partielle", correct: false },
            { text: "Leur crier de sauter — la grande échelle prendra trop de temps", correct: false }
          ],
          feedback: {
            correct: "✅ Transmission continue et progressive au PMA permet l'anticipation : 8 victimes potentielles supplémentaires → ressources ajustées. L'information partielle est toujours meilleure que l'absence d'information.",
            incorrect: "❌ Encourager des personnes à sauter depuis le 2ème ou 3ème étage = lésions graves prévisibles. L'info partielle transmise est plus utile qu'une info retardée parfaite.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { name: "Victime CO", hr: 108, spo2: 88, bp: "138/88", rr: 20, gcs: 14, ecg: "sinusal_tachy", state: "céphalée sévère" },
          multiSelect: true,
          text: "Victime extraite : homme 58 ans, intoxication CO confirmée. Lesquelles de ces actions sont CORRECTES ? (plusieurs réponses possibles)",
          choices: [
            { text: "O₂ 100% masque HC 15L/min en continu — même si SpO₂ affiche 88% (le CO fausse l'oxymétrie)", correct: true },
            { text: "Scope cardiaque et ECG 12 dérivations si disponible (risque de troubles du rythme sur CO)", correct: true },
            { text: "VVP + signalement au centre de régulation pour caisson hyperbare si COHb >25% ou signes neuro", correct: true },
            { text: "O₂ lunettes nasales 2L/min — suffisant pour une intoxication légère à modérée", correct: false },
            { text: "Ventiler au BAVU immédiatement car SpO₂ 88% indique une insuffisance respiratoire sévère", correct: false }
          ],
          feedback: {
            correct: "Correct. Sur intoxication CO : O₂ 100% HC est le traitement de base même si le SpO₂ paraît normal — le capteur ne distingue pas HbO₂ et HbCO. Le scope détecte les arythmies. Le caisson hyperbare est indiqué si COHb >25%.",
            incorrect: "Incomplet ou incorrect. L'oxymètre de pouls ne distingue pas HbCO — le SpO₂ affiché est faux sur intoxication CO. O₂ HC 15L/min est le traitement de choix. Le BAVU n'est pas indiqué si le patient ventile spontanément.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Une journaliste et un caméraman franchissent le cordon pour filmer. Que faites-vous ?",
          choices: [
            { text: "Les rediriger fermement vers la zone presse en zone froide, sans violence. Informer le responsable sécurité.", correct: true },
            { text: "Les laisser filmer — liberté de la presse, et ils peuvent documenter les secours", correct: false },
            { text: "Appeler immédiatement la police pour arrestation", correct: false }
          ],
          feedback: {
            correct: "✅ Zone tiède = accès restreint pour des raisons de sécurité et de soins. La presse a accès à la zone froide. Redirection ferme sans violence. Le responsable sécurité gère les relations médias.",
            incorrect: "❌ Les médias dans la zone tiède = risque sécurité + perturbation des soins + violation confidentialité des victimes filmées. L'arrestation est disproportionnée pour une redirection ferme.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 148, spo2: 86, bp: "78/44", rr: 36, gcs: 9, ecg: "sinusal_tachy", state: "obnubilé", name: "Patient A — ROUGE, brûlures 25% + CO" },
          text: "PMA. Patient A : ROUGE, brûlures 25%, CO suspecté, TA 78, FR 36. Simultanément, Patient B (ROUGE, pneumothorax) vient d'arriver. Vous êtes seul au poste de soins. Que faites-vous ?",
          choices: [
            { text: "Patient A : O₂ HC en cours, VVP posée, stabilisé partiellement → aide-ambulancier prend le relais. Vous évaluez Patient B (pneumothorax = risque plus immédiat). Appeler renfort.", correct: true },
            { text: "Finir complètement Patient A avant de toucher Patient B", correct: false },
            { text: "Évaluer les 2 simultanément sans priorisation", correct: false }
          ],
          feedback: {
            correct: "✅ Priorisation dynamique au sein des ROUGE : le pneumothorax sous tension évolue en minutes vers l'arrêt cardiaque. Patient A partiellement stabilisé peut être délégué à l'aide-ambulancier le temps d'évaluer Patient B.",
            incorrect: "❌ Finir complètement un patient avant de voir l'autre ROUGE peut laisser mourir Patient B d'un pneumothorax sous tension. L'évaluation simultanée sans priorisation est inefficace.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 56, spo2: 84, bp: "86/60", rr: 10, gcs: 12, ecg: "sinusal_brady", state: "obnubilé", name: "Patient B — Pneumothorax sous tension" },
          text: "Patient B : trachée déviée à droite, silence auscultatoire gauche, TA chute. Diagnostic et transmission ?",
          choices: [
            { text: "Pneumothorax sous tension — urgence vitale absolue. Transmission SMUR immédiate pour exsufflation à l'aiguille (2ème EIC, ligne médioclaviculaire gauche). Hors compétence IAS 3.", correct: true },
            { text: "Commencer vous-même l'exsufflation à l'aiguille — urgence vitale justifie l'acte", correct: false },
            { text: "Attendre la radio thorax pour confirmer avant d'appeler", correct: false }
          ],
          feedback: {
            correct: "✅ PTx sous tension : trachée déviée + silence auscultatoire + choc = diagnostic clinique, pas radiologique. Délai d'exsufflation = mort. L'IAS 3 reconnaît, signale, prépare matériel. L'acte est médical. Transmission SMUR en urgence absolue.",
            incorrect: "❌ L'exsufflation à l'aiguille sans formation spécifique et délégation = acte illégal et risque iatrogène. La radio est inutile — le diagnostic est clinique et l'urgence ne permet pas d'attendre.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 102, spo2: 92, bp: "108/68", rr: 22, gcs: 14, ecg: "sinusal", state: "conscient", name: "Patient C — JAUNE, fracture rachis suspectée" },
          text: "Patient C (chute 5m, douleur dos) : immobilisée, mais veut retirer le collier cervical 'trop inconfortable'. Que faites-vous ?",
          choices: [
            { text: "Expliquer le risque de lésion médullaire irréversible, proposer ajustement du collier si mal positionné, maintenir l'immobilisation jusqu'à confirmation radiologique", correct: true },
            { text: "Retirer le collier : elle est consciente et le confort est important", correct: false },
            { text: "Attacher le collier plus serré pour qu'elle ne puisse pas le retirer", correct: false }
          ],
          feedback: {
            correct: "✅ La fracture rachidienne instable peut être asymptomatique au repos. L'inconfort du collier vs la paralysie permanente = explication efficace. Vérifier l'ajustement du collier (taille, position) peut améliorer le confort sans compromettre l'immobilisation.",
            incorrect: "❌ Retirer le collier sur suspicion rachidienne = risque de paraplégie si fracture instable. Serrer plus fort = douleur et pression vasculaire. L'éducation et l'ajustement sont la réponse.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 78, spo2: 97, bp: "118/74", rr: 16, gcs: 15, ecg: "sinusal", state: "conscient", name: "Patient D — VERT, intoxication CO légère" },
          text: "Patient D : intoxication CO légère, traité par O₂ HC, céphalée résiduelle. Il vous demande si sa femme (non retrouvée) est dans la liste des victimes. Que répondez-vous ?",
          choices: [
            { text: "Exprimer de l'empathie, lui expliquer qu'un responsable de l'identification des victimes gère cette information, lui donner un contact (police/cellule psychologique)", correct: true },
            { text: "Lui dire qu'elle n'est pas dans la liste des blessés — pour le rassurer", correct: false },
            { text: "Ignorer la question, concentrez-vous sur ses soins", correct: false }
          ],
          feedback: {
            correct: "✅ L'IAS 3 ne gère pas l'identification des victimes — c'est la police et la cellule de crise. Mentir 'pour rassurer' peut causer un choc ultérieur. L'orientation vers le bon interlocuteur est professionnelle et honnête.",
            incorrect: "❌ Inventer une information (la femme n'est pas blessée) est un mensonge avec des conséquences émotionnelles sévères si faux. Ignorer la question d'un patient anxieux nuit à la relation thérapeutique.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Fin d'intervention. Un des secouristes de votre équipe est très affecté (il a vu un enfant décédé). Comment gérez-vous cela ?",
          choices: [
            { text: "Valider ses émotions en privé, l'exclure temporairement des soins si nécessaire, informer le responsable pour débriefing psychologique (CIST), ne pas minimiser", correct: true },
            { text: "Lui dire 'c'est le boulot, pas le temps de craquer ici' et continuer", correct: false },
            { text: "Garder le secret pour protéger sa réputation professionnelle", correct: false }
          ],
          feedback: {
            correct: "✅ La santé mentale des secouristes est une priorité opérationnelle. Un secouriste en état de choc est un risque pour lui-même et les patients. CIST (Critical Incident Stress Team) ou debriefing post-IMV sont des ressources formelles.",
            incorrect: "❌ Minimiser le stress post-traumatique d'un collègue augmente le risque de PTSD et de burn-out. Le 'ça passe' n'est pas une stratégie de gestion du stress post-critique.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Bilan à T0+30min : 18 victimes triées (4 ROUGE, 7 JAUNE, 5 VERT, 2 NOIR). 3 ambulances disponibles. Ordre d'évacuation ?",
          choices: [
            { text: "ROUGE en premier (2 par ambulance si stable, sinon 1 + SMUR), puis JAUNE, VERT derniers. NOIR restent sur zone sous surveillance.", correct: true },
            { text: "Charger le maximum de patients par ambulance quelle que soit la priorité", correct: false },
            { text: "Évacuer les VERT d'abord pour libérer de l'espace au PMA", correct: false }
          ],
          feedback: {
            correct: "✅ Ordre d'évacuation IMV : ROUGE > JAUNE > VERT. Un ROUGE peut partager une ambulance avec un ROUGE stable. Les NOIR restent au PMA — ils ne sont pas abandonnés mais ne sont pas prioritarisés pour évacuation.",
            incorrect: "❌ Charger sans tri = désorganisation et risque de délaisser les plus graves. Évacuer les VERT d'abord = erreur stratégique — les hôpitaux sont alertés pour les ROUGE, pas les VERT.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          multiSelect: true,
          text: "L'hôpital récepteur vous contacte avant l'arrivée du premier ROUGE. Quels éléments DEVEZ-VOUS transmettre ? (plusieurs réponses possibles)",
          choices: [
            { text: "ETA estimé (temps de transport restant jusqu'à l'hôpital)", correct: true },
            { text: "Nombre de patients par catégorie triage attendus (ROUGE / JAUNE / VERT)", correct: true },
            { text: "Mécanisme principal et types de lésions dominantes (explosion, CO, trauma, brûlures)", correct: true },
            { text: "Uniquement le nombre total — les détails s'évaluent à l'arrivée du patient", correct: false },
            { text: "Ne rien transmettre — la transmission hôpital est exclusivement du ressort du médecin SMUR", correct: false }
          ],
          feedback: {
            correct: "Parfait. La pré-alerte hospitalière (ETA + triage + mécanisme) permet d'activer : salle de déchocage, chirurgien, brûlologue, caisson hyperbare. Sans cette info, l'accueil est réactif au lieu d'être proactif.",
            incorrect: "Insuffisant. L'IAS3 en transfert transmet toujours l'ETA, le bilan triage et le mécanisme. Ce n'est pas réservé au SMUR. Le délai de préparation hospitalière coûte des vies.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Le plan hospitalier est saturé : tous les ROUGE sont dirigés vers l'HUG uniquement. Le responsable PMA décide d'envoyer un ROUGE vers l'hôpital de campagne (distance supérieure). Que pensez-vous de cette décision ?",
          choices: [
            { text: "Décision du médecin responsable PMA à respecter. L'hôpital de campagne peut être plus adapté sur certains profils. Soutenir la décision et préparer le transport.", correct: true },
            { text: "Refuser catégoriquement : les ROUGE vont à l'hôpital le plus proche, toujours", correct: false },
            { text: "Appeler l'HUG vous-même pour contredire la décision du responsable PMA", correct: false }
          ],
          feedback: {
            correct: "✅ En IMV, le médecin responsable PMA coordonne les évacuations selon la capacité hospitalière globale. Surcharger un seul hôpital = mortalité accrue pour tous. La hiérarchie de commandement IMV doit être respectée.",
            incorrect: "❌ La règle 'hôpital le plus proche' s'applique en intervention normale. En IMV avec plan hospitalier activé, c'est la régulation globale qui décide. Contredire le responsable PMA crée une confusion de commandement.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Rapport d'intervention : vous devez documenter une décision de triage NOIR sur une victime qui avait encore un pouls faible lors du triage. Comment formulez-vous cela ?",
          choices: [
            { text: "Documenter factuellement : heure, pouls estimé, FR, état de conscience, ressources disponibles à l'instant, classification IMV selon protocole START, décision collégiale si possible", correct: true },
            { text: "Ne pas documenter la décision NOIR — risque légal pour l'équipe", correct: false },
            { text: "Indiquer que la victime était déjà décédée à l'arrivée", correct: false }
          ],
          feedback: {
            correct: "✅ La documentation factuelle et honnête des décisions difficiles est une obligation éthique et légale. Le protocole IMV (START) justifie la décision. La traçabilité honnête protège légalement l'équipe.",
            incorrect: "❌ Ne pas documenter ou falsifier un document médical est une faute grave. La documentation honnête protège l'équipe juridiquement en démontrant que la décision était basée sur un protocole reconnu.",
            naca: null
          }
        }
      ]
    }

    ,
    {
      id: "CAT-03",
      title: "Mouvement de foule — Paléo Festival, Nyon",
      category: "catastrophe",
      difficulty: "hard",
      location: "Nyon, Canton de Vaud (VD) — frontalier Haute-Savoie (F)",
      scenario: `Samedi soir, 23h15. La scène principale du Paléo Festival de Nyon (VD) vient d'accueillir 50 000 spectateurs pour le concert de clôture. À la sortie, une bousculade éclate dans le goulet d'étranglement de la porte Nord (passage de 4 m de large pour 12 000 personnes). Des cris, des chutes en cascade, des personnes piétinées et comprimées contre les barrières métalliques. Votre équipe SMUR 144 Vaud est la première à arriver sur les lieux, 8 minutes après l'appel. La Centrale CECAL 144 signale plusieurs dizaines de victimes au sol. La gendarmerie vaudoise (117) et les sapeurs-pompiers de Nyon (118) sont en route. Des spectateurs français (Haute-Savoie) font partie des victimes — la frontière est à 5 km.`,
      questions: [
        {
          id: "CAT-03-Q01",
          phase: 'ambulance',
          patient: null,
          text: "Vous êtes le premier équipier SMUR sur zone. Quelle est votre PREMIÈRE action avant toute prise en charge de victime ?",
          choices: [
            { text: "Sécuriser votre propre équipe, évaluer les dangers (foule encore en mouvement, barrières instables, accès véhicules) et baliser un périmètre de sécurité avant toute action médicale", correct: true },
            { text: "Commencer immédiatement le triage START sur les victimes les plus proches", correct: false },
            { text: "Contacter la famille des victimes visibles", correct: false }
          ],
          feedback: {
            correct: "✅ La règle d'or : ne pas faire de nouvelle victime. En IMV mouvement de foule, la foule résiduelle, les barrières et les accès représentent des dangers actifs. L'équipe SMUR ne s'engage qu'après sécurisation minimale du périmètre.",
            incorrect: "❌ Engager une équipe SMUR sans sécurisation préalable est une faute tactique. En mouvement de foule, la foule peut encore être en mouvement, les barrières instables. Une équipe blessée aggrave le bilan.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q02",
          phase: 'ambulance',
          patient: null,
          text: "Vous activez le message METHANE. Que signifie chaque lettre dans ce contexte ?",
          choices: [
            { text: "M=Major incident (IMV confirmé), E=Exact location (Paléo Festival Porte Nord, Nyon VD), T=Type of incident (mouvement de foule, piétinement), H=Hazards (foule, barrières, nuit), A=Access (route de St-Cergue, côté scène Nord), N=Number of casualties (estimé 25-35), E=Emergency services (SMUR, police, pompiers)", correct: true },
            { text: "M=Médical, E=Équipe, T=Triage, H=Hôpital, A=Alerte, N=Nombre, E=Évacuation", correct: false },
            { text: "METHANE est un protocole français non utilisé en Suisse romande", correct: false }
          ],
          feedback: {
            correct: "✅ METHANE est le standard international de compte-rendu d'incident majeur, utilisé en Suisse romande et en coordination transfrontalière avec la France. Il permet à la Centrale 144 de dimensionner la réponse.",
            incorrect: "❌ METHANE (Major incident / Exact location / Type / Hazards / Access / Number / Emergency services) est utilisé en Suisse romande. C'est le format attendu par la Centrale CECAL 144 pour déclencher les ressources complémentaires.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q03",
          phase: 'ambulance',
          patient: null,
          text: "Combien de zones de sécurité définissez-vous et quelle est leur logique sur ce site festivalier ?",
          choices: [
            { text: "Zone rouge (chaud) = zone de triage immédiat au pied des barrières ; zone orange (tiède) = PMA à 50 m en espace dégagé ; zone verte (froide) = PRV parking Est pour victimes autonomes et familles", correct: true },
            { text: "Une seule zone de triage centralisée pour maintenir la cohésion des équipes", correct: false },
            { text: "Deux zones : urgence et non-urgence, délimitées par la sécurité du festival", correct: false }
          ],
          feedback: {
            correct: "✅ Les 3 zones (chaude/tiède/froide) sont le standard IMV suisse. En contexte festivalier, la topographie du site impose leur adaptation : espace scénique dégagé pour le PMA, parking pour le PRV, accès pompiers réservé côté Est.",
            incorrect: "❌ Sans zonage strict, les équipes se mélangent, les véhicules bloquent les accès et les victimes valides perturbent les prises en charge critiques. Le tri en 3 zones est impératif.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q04",
          phase: 'pma',
          patient: { description: "Femme, 24 ans. Au sol, inconsciente. Ventilation : absente après bascule de tête. Pouls carotidien : absent.", vitals: "FC: 0 — Sat: non mesurable — GCS: 3" },
          text: "Triage START : quelle est la classification de cette victime et justifiez la décision en contexte IMV ?",
          choices: [
            { text: "NOIR (décédée ou survivabilité nulle en contexte IMV) — en IMV, l'absence de ventilation après LVA et l'absence de pouls impose la classification NOIR pour préserver les ressources pour les victimes sauvables", correct: true },
            { text: "ROUGE — débuter RCP immédiatement", correct: false },
            { text: "ORANGE — attendre des ressources supplémentaires pour tenter la RCP", correct: false }
          ],
          feedback: {
            correct: "✅ En contexte IMV, la RCP sur un arrêt cardiaque primaire non traumatique sans ressources disponibles est classé NOIR selon START. La RCP mobilise 2 personnes pendant 30 minutes — en IMV avec 30 victimes, c'est inacceptable. L'exception : ACR traumatique direct chez enfant.",
            incorrect: "❌ En situation normale hors IMV, la RCP serait initiée. En IMV avec ressources limitées, le protocole START classe NOIR tout arrêt cardio-respiratoire sans ventilation spontanée après LVA, afin de sauver le maximum de victimes sauvables.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q05",
          phase: 'pma',
          patient: { description: "Homme, 29 ans, agité. Respiration difficile et superficielle. Confusion. TA 85/50 mmHg — FC 140/min — Sat 85% — GCS 13", vitals: "TA: 85/50 — FC: 140 — Sat: 85% — GCS: 13" },
          text: "Triage START : quelle classification et quelle action prioritaire ?",
          choices: [
            { text: "ROUGE — détresse respiratoire + état de choc (TA<90, FC>120) + Sat 85% + GCS altéré. Libération des voies aériennes, oxygénothérapie haute concentration, pose d'une VVP, transfert PMA immédiat", correct: true },
            { text: "ORANGE — état stable pour l'instant, surveillance", correct: false },
            { text: "VERT — victime consciente et marchante", correct: false }
          ],
          feedback: {
            correct: "✅ Critères ROUGE réunis : FR altérée, TA<90, FC>120, Sat<90%, GCS<15. En compression thoracique (crush syndrome), l'hypoxie et le choc sont liés. L'oxygène haute concentration et la VVP sont les premières actions au PMA.",
            incorrect: "❌ Ne pas sous-estimer une Sat à 85% avec FC à 140 et TA à 85. Ces chiffres signent un état de choc compensé avec détresse respiratoire — classification ROUGE impérative.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q06",
          phase: 'pma',
          patient: { description: "Adolescent, 16 ans. Fracture fermée tibiale droite évidente, douleur 8/10, mais marche possible avec aide. Conscient, orienté, respiratoire normal, hémodynamique stable.", vitals: "FC: 95 — Sat: 98% — GCS: 15" },
          text: "Triage START et orientation : comment gérez-vous cette victime ?",
          choices: [
            { text: "JAUNE (retardé) — fracture isolée stable, orientation vers PRV (zone verte) avec immobilisation provisoire et antalgique. Réorientation vers Hôpital de la Tour ou HUG pédiatrie secondairement.", correct: true },
            { text: "ROUGE — douleur intense, priorité absolue", correct: false },
            { text: "VERT — victime marchante, pas de prise en charge nécessaire", correct: false }
          ],
          feedback: {
            correct: "✅ Fracture isolée sans critère de gravité = JAUNE. L'immobilisation provisoire (attelle) et l'antalgique suffisent en première intention. Les ressources PMA sont préservées pour les ROUGE. Mineur : contact avec les parents et signalement au Médecin Directeur de l'Intervention.",
            incorrect: "❌ La douleur seule ne classe pas en ROUGE. Sans instabilité hémodynamique ni atteinte vitale, une fracture isolée est JAUNE. Les ROUGE sont les urgences vitales immédiates.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q07",
          phase: 'ambulance',
          patient: null,
          text: "Coordination transfrontalière : plusieurs victimes sont des ressortissants français de Haute-Savoie. Le SAMU 74 (Annemasse) demande à envoyer des renforts. Quelle est la procédure correcte ?",
          choices: [
            { text: "Informer la Centrale CECAL 144 qui active les accords bilatéraux franco-suisses (Accord de Karlsruhe). Le SAMU 74 peut envoyer des SMUR en renfort sous coordination du Médecin Directeur d'Intervention suisse. Les victimes françaises peuvent être redirigées vers l'Hôpital d'Annemasse si saturation des HUG/CHUV.", correct: true },
            { text: "Refuser les renforts français — les ressources suisses sont suffisantes", correct: false },
            { text: "Transférer immédiatement toutes les victimes françaises au SAMU 74 sans tri préalable", correct: false }
          ],
          feedback: {
            correct: "✅ L'Accord de Karlsruhe (1996) organise la coopération transfrontalière entre France et Suisse pour les secours. En IMV à Nyon (5 km de la frontière), les SMUR de Haute-Savoie peuvent renforcer sous commandement unifié 144. Les victimes françaises stables peuvent être évacuées vers Annemasse/Annecy pour désaturer les hôpitaux vaudois.",
            incorrect: "❌ En IMV transfrontalier, le refus des renforts ou le transfert non coordonné sont des erreurs graves. L'Accord de Karlsruhe prévoit exactement ce type de coopération — la Centrale 144 est le point de coordination.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q08",
          phase: 'ambulance',
          patient: null,
          text: "Vous devez établir un PMA (Poste Médical Avancé). Quels sont les critères de positionnement idéal dans ce contexte festivalier ?",
          choices: [
            { text: "Zone sécurisée hors couloir d'évacuation foule, accessible ambulances (≥2 voies entrée/sortie), à couvert si possible (tente festival disponible), éclairage suffisant, espace pour triage/traitement/évacuation séparés, loin des médias", correct: true },
            { text: "Le plus proche possible des victimes pour réduire les temps de transport", correct: false },
            { text: "Dans le poste de sécurité du festival déjà équipé", correct: false }
          ],
          feedback: {
            correct: "✅ Le PMA doit être accessible, sécurisé, spacieux et organisé en flux unidirectionnel (arrivée triage → traitement → évacuation). En festival, les tentes VIP ou espaces logistiques offrent souvent des infrastructures adaptables. L'éloignement des médias protège les victimes.",
            incorrect: "❌ Un PMA trop proche de la zone chaude est dangereux. Un PMA dans le poste de sécurité est trop petit et nuit à la gestion du site. Le PMA doit être en zone tiède, accessible ambulances.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q09",
          phase: 'pma',
          patient: { description: "Femme, 45 ans. Compression thoracique prolongée (~15 min). Douleur thoracique bilatérale, dyspnée, hémoptysie. TA 100/70 — FC 115 — Sat 91% — GCS 15", vitals: "TA: 100/70 — FC: 115 — Sat: 91% — GCS: 15" },
          text: "Vous suspectez un syndrome de compression thoracique (traumatisme de Perthes). Quelle est votre prise en charge au PMA ?",
          choices: [
            { text: "O2 haute concentration (15L/min), position demi-assise, deux VVP, analgésie IV titrée (morphine), surveillance Sat/FC/TA continue, ECG 12 dérivations, transport médicalisé SMUR vers centre de traumatologie (HUG ou CHUV), alerte préalable du service receveur", correct: true },
            { text: "Antalgiques per os et retour à domicile si amélioration", correct: false },
            { text: "Intubation orotrachéale immédiate sur le terrain", correct: false }
          ],
          feedback: {
            correct: "✅ Le syndrome de Perthes (compression thoracique prolongée) associe contusions pulmonaires, risque de pneumothorax et choc. O2 + demi-assise + analgésie IV + transport médicalisé sont les piliers. L'alerte préalable au centre receveur est impérative en IMV.",
            incorrect: "❌ Le syndrome de compression thoracique est potentiellement grave avec risque évolutif rapide. Les antalgiques seuls sont insuffisants. L'IOT d'emblée sans détresse respiratoire franche est disproportionnée et dangereuse sur le terrain.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q10",
          phase: 'ambulance',
          patient: null,
          text: "Gestion des familles et des témoins : plusieurs centaines de personnes cherchent leurs proches sur zone. Que mettez-vous en place ?",
          choices: [
            { text: "Point Regroupement Victimes (PRV) éloigné de la zone de soins avec personnel dédié (CRS/protection civile), liste nominative tenue à jour, coordination avec la police (117) pour identification, cellule psychologique (UMSPC) activée, numéro d'information famille communiqué via haut-parleurs du festival", correct: true },
            { text: "Laisser les familles accéder librement à la zone de triage pour identifier leurs proches", correct: false },
            { text: "Ne pas gérer les familles — c'est le rôle de la sécurité privée du festival", correct: false }
          ],
          feedback: {
            correct: "✅ Le PRV est une composante essentielle de la gestion IMV. En Suisse, la Protection Civile et la Croix-Rouge Suisse (CRS) appuient la gestion des victimes non blessées. L'UMSPC (Unité Mobile de Soutien Psychologique Cantonal) intervient pour les témoins traumatisés et les familles.",
            incorrect: "❌ Les familles non encadrées entrent dans la zone de soins, gênent les équipes et peuvent être traumatisées. La gestion des familles est une responsabilité médicale et sécuritaire intégrée au dispositif IMV.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q11",
          phase: 'pma',
          patient: { description: "Homme, 67 ans. Piétinement. Douleur dorsale intense, paresthésies membres inférieurs, absence de motricité des jambes. TA 130/80 — FC 88 — Sat 97% — GCS 15", vitals: "TA: 130/80 — FC: 88 — Sat: 97% — GCS: 15" },
          text: "Vous suspectez un traumatisme du rachis avec signe neurologique. Comment procédez-vous au triage et à la prise en charge ?",
          choices: [
            { text: "Classification ROUGE — signes neurologiques déficitaires. Immobilisation rachidienne stricte (collier cervical + matelas coquille), manœuvres de déplacement à 4 mains minimum, transport SMUR vers centre neurochirurgical (CHUV Lausanne ou HUG Genève) avec alerte préalable", correct: true },
            { text: "Classification JAUNE — victime consciente et hémodynamique stable", correct: false },
            { text: "Mobilisation rapide sans immobilisation pour libérer la place au PMA", correct: false }
          ],
          feedback: {
            correct: "✅ Tout déficit neurologique sous-lésionnel (paraplégie) en traumatisme rachidien = ROUGE et immobilisation stricte. En IMV, même sous pression, le rachis ne se mobilise pas sans protection. Transport médicalisé vers neurochirurgie impératif.",
            incorrect: "❌ La mobilisation sans immobilisation rachidienne peut transformer une lésion incomplète en lésion complète définitive. Les signes neurologiques déficitaires classent en ROUGE malgré une hémodynamique stable.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q12",
          phase: 'ambulance',
          patient: null,
          text: "Régulation médicale : la Centrale CECAL 144 vous demande le bilan de situation après 30 minutes. Quel format utilisez-vous ?",
          choices: [
            { text: "Bilan IMV standardisé : nombre total victimes triées (ROUGE/JAUNE/VERT/NOIR), ressources engagées sur place, PMA opérationnel (oui/non), évacuations en cours (nombre/destination), besoins supplémentaires (sang, SMUR, hélicoptère Rega), estimation heure de fin d'intervention", correct: true },
            { text: "Rapport verbal libre sans structure particulière", correct: false },
            { text: "Attendre la fin de l'intervention pour faire un bilan global", correct: false }
          ],
          feedback: {
            correct: "✅ Le bilan intermédiaire structuré toutes les 20-30 minutes est obligatoire en IMV. Il permet à la Centrale 144 de moduler les ressources, de pré-alerter les hôpitaux et d'organiser les EVASAN héliportées (Rega Base de Lausanne ou Genève).",
            incorrect: "❌ Sans bilan structuré régulier, la Centrale 144 ne peut pas anticiper les besoins. Le bilan verbal libre perd des informations critiques. Attendre la fin est inacceptable — la régulation se fait en temps réel.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q13",
          phase: 'ambulance',
          patient: null,
          text: "EVASAN héliportée : la Rega envoie deux hélicoptères. Quelles sont vos responsabilités pour sécuriser l'hélitreuillage ou l'atterrissage ?",
          choices: [
            { text: "Désigner une zone LZ (Landing Zone) dégagée (min. 30×30 m), balisée avec feux de balisage ou torches, libre de câbles aériens et obstacles, communiquer les coordonnées GPS à la Centrale 144, désigner un guide sol, éloigner les curieux à 100 m minimum, couper les éclairages fixes dirigés vers la LZ", correct: true },
            { text: "Laisser les pilotes Rega choisir leur zone d'atterrissage seuls", correct: false },
            { text: "Utiliser le parking central du festival éclairé — plus simple pour les hélicoptères", correct: false }
          ],
          feedback: {
            correct: "✅ La sécurisation de la LZ est une responsabilité de l'équipe sol. Les pilotes Rega coordonnent avec la Centrale mais les équipes terrestres balisent et sécurisent. Le parking éclairé peut être utilisé si dégagé de câbles et d'obstacles verticaux.",
            incorrect: "❌ Un atterrissage non préparé en milieu festivalier (câbles, structures scéniques, foule) est extrêmement dangereux. La LZ doit être préparée par les équipes sol avant l'arrivée des hélicoptères.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q14",
          phase: 'ambulance',
          patient: null,
          text: "Répartition hospitalière : vous avez 8 victimes ROUGE à évacuer. Les HUG (Genève) signalent être en tension. Quelle est votre stratégie de répartition ?",
          choices: [
            { text: "Contactez la Centrale CECAL 144 qui coordonne avec les hôpitaux de la région : CHUV Lausanne, Hôpital de la Tour (Meyrin), EHC Morges, et si accord transfrontalier activé : Centre Hospitalier Annecy-Genevois (CHANGE). Répartir selon capacité déclarée et spécialité requise (neurochirurgie, thoracique, trauma).", correct: true },
            { text: "Envoyer toutes les victimes au centre le plus proche — Hôpital de Nyon — par défaut", correct: false },
            { text: "Attendre l'accord de chaque service avant d'évacuer", correct: false }
          ],
          feedback: {
            correct: "✅ La régulation médicale multi-sites est le rôle de la Centrale CECAL 144. En tension hospitalière, la répartition géographique sur plusieurs établissements (CHUV, Hôpital de la Tour, EHC Morges, CHANGE Annecy si accord transfrontalier) est la solution. L'hôpital de Nyon n'a pas de plateau technique pour les ROUGE complexes.",
            incorrect: "❌ Saturer un seul hôpital déjà en tension aggrave la situation. L'hôpital de Nyon n'a pas les ressources pour 8 polytraumatisés. Attendre les accords avant évacuation retarde des soins vitaux.",
            naca: null
          }
        },
        {
          id: "CAT-03-Q15",
          phase: 'ambulance',
          patient: null,
          text: "Débriefing post-intervention : 2 heures après, l'intervention est levée. Bilan : 2 décès (NOIR), 6 ROUGE évacués, 11 JAUNE traités, 14 VERT pris en charge. Quelle est la priorité immédiate pour votre équipe ?",
          choices: [
            { text: "Débriefing opérationnel immédiat (hot debrief) : reconstitution chronologique, identification des points critiques, soutien émotionnel de l'équipe, activation de l'UMSPC si besoin, transmission du rapport d'intervention à la Centrale 144 et documentation des décisions de triage NOIR", correct: true },
            { text: "Retourner immédiatement en service normal sans débriefing — l'équipe est rodée", correct: false },
            { text: "Signaler uniquement les décès aux autorités et oublier le reste", correct: false }
          ],
          feedback: {
            correct: "✅ Le débriefing post-IMV (hot debrief dans les 2h, cold debrief sous 72h) est obligatoire en médecine de catastrophe suisse. Il combine analyse opérationnelle et soutien psychologique. La documentation des décisions de triage NOIR a une valeur médico-légale. L'UMSPC est disponible pour les équipes.",
            incorrect: "❌ Les interventions IMV avec décès génèrent un stress aigu dans les équipes. L'absence de débriefing favorise le syndrome de stress post-traumatique. La documentation des décisions protège légalement les intervenants.",
            naca: null
          }
        }
      ]
    }
    ,
    {
      id: "CAT-04",
      title: "Évacuation hospitalière — HUG Genève (REA/USC/MCO/Néonat)",
      category: "catastrophe",
      difficulty: "expert",
      location: "Hôpitaux Universitaires de Genève (HUG), Canton de Genève (GE)",
      scenario: `Lundi matin, 06h45. Un incendie se déclare dans le local technique du sous-sol du bâtiment A des HUG (Hôpitaux Universitaires de Genève). La fumée envahit les circuits de ventilation. Le plan PEGASE (Plan d'Évacuation Générale et de Sécurité des HUG) est déclenché par le Directeur Médical de Piquet. 100 patients sont identifiés comme prioritaires à évacuer : REA adulte (P1 intubés sous amines), USC/USIC (P2 semi-critiques), Néonatologie (P1-P2 prématurés en incubateur), et MCO (P3-P4). Les SIS Genève (118) sont sur place. La Centrale 144 coordonne la répartition vers CHUV Lausanne, Hôpital Riviera-Chablais, Hôpital de la Tour et HFR Fribourg.`,
      questions: [
        {
          id: "CAT-04-Q01",
          phase: 'ambulance',
          patient: null,
          text: "Le plan PEGASE est déclenché. Qui prend le commandement médical de l'évacuation et quelles sont ses premières actions ?",
          choices: [
            { text: "Le Médecin Chef de Piquet (MCP) HUG prend le commandement médical, en coordination avec le Directeur des Soins et les SIS Genève. Premières actions : activer la cellule de crise HUG, inventaire des patients par catégorie de priorité (P1/P2/P3/P4), mobilisation des renforts internes (médecins, infirmiers des étages non sinistrés), contact Centrale 144 pour répartition inter-hospitalière.", correct: true },
            { text: "Le chef des pompiers (SIS) prend le commandement médical de l'évacuation", correct: false },
            { text: "Chaque chef de service gère l'évacuation de son unité de façon autonome", correct: false }
          ],
          feedback: {
            correct: "✅ Le plan PEGASE des HUG désigne clairement un commandement médical unifié. La coordination médicale-sécurité incendie (SIS) est assurée par une cellule de crise conjointe. Sans coordination centrale, les ressources de transport (ambulances, SMUR) sont mal allouées et les patients P1 peuvent être évacués après des P3.",
            incorrect: "❌ Le commandement incendie (SIS) gère la sécurité du bâtiment, pas les priorités médicales. La gestion autonome par service crée des conflits de ressources — plusieurs services peuvent réclamer simultanément les mêmes ambulances médicalisées.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q02",
          phase: 'pma',
          patient: { description: "REA unité 1 — Homme, 54 ans. Choc septique, sédaté, intubé-ventilé sous noradrénaline 0,8 mcg/kg/min + dobutamine 5 mcg/kg/min. GCS sous sédation 3T. Deux VVC. CVVH en cours.", vitals: "FC: 102 — TA: 88/55 sous amines — Sat: 96% sous VM" },
          text: "Ce patient REA P1 doit être évacué. Quelle est la condition minimale pour un transport sécurisé ?",
          choices: [
            { text: "SMUR médicalisé obligatoire : médecin + infirmier IARI, ventilateur de transport avec batterie ≥4h, pousse-seringues portables (amines, sédation), scope de transport, O2 portable, arrêt temporaire CVVH avec rinçage circuit. Destination : centre REA de niveau identique (CHUV ou HFR Fribourg).", correct: true },
            { text: "Ambulance de base avec infirmier — le patient est stable sous traitement", correct: false },
            { text: "Reporter l'évacuation — ce patient est trop instable pour être transporté", correct: false }
          ],
          feedback: {
            correct: "✅ Un patient sous double amine + VM invasive = transport médicalisé SMUR obligatoire. La CVVH est interrompue pour le transport (rinçage anticoagulant du circuit). Le ventilateur de transport doit reproduire les mêmes paramètres. La destination doit avoir une REA de niveau équivalent avec place disponible confirmée.",
            incorrect: "❌ Ce patient est instable — toute interruption des amines ou de la ventilation peut être fatale en minutes. L'ambulance non médicalisée n'a pas les équipements nécessaires. Reporter l'évacuation n'est pas une option face à la fumée.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q03",
          phase: 'pma',
          patient: { description: "REA Néonatologie — Préma 26 SA, 850g. Ventilation haute fréquence oscillatoire (VHFO) + oxyde nitrique (NO) inhalé. Sédaté, instable. Infection KTC. Temperature incubateur 36.8°C.", vitals: "FC: 168 — Sat: 89% sous VHFO+NO — T°: 36.8°C" },
          text: "Ce prématuré P1 de 850g sous VHFO et NO est le patient le plus complexe à évacuer. Quelle est votre stratégie ?",
          choices: [
            { text: "Évacuation en dernière priorité P1 néonatal avec équipe spécialisée (néonatologiste + infirmier néonatal expérimenté) : incubateur de transport chauffant, VHFO portable ou switch vers ventilation conventionnelle si VHFO portable indisponible, NO portable si disponible sinon FiO2 compensatoire temporaire, transport vers NICU de niveau III (CHUV Lausanne ou HU Bern en accord intercantonal). Briefing équipe recevante au préalable.", correct: true },
            { text: "Évacuer immédiatement sans attendre l'équipe néonatale spécialisée — la fumée est prioritaire", correct: false },
            { text: "Maintenir le prématuré en place et sécuriser l'alimentation électrique de l'incubateur", correct: false }
          ],
          feedback: {
            correct: "✅ Le transport d'un prématuré extrême sous VHFO+NO est une des situations les plus critiques en néonatologie d'urgence. L'équipe doit être spécialisée, le matériel de transport adapté. Si le NO portable est indisponible, une oxygénothérapie à haute FiO2 est une mesure temporaire de quelques minutes. Le CHUV est le centre de référence NICU de niveau III en Suisse romande.",
            incorrect: "❌ Évacuer sans équipe spécialisée un prématuré instable sous VHFO risque une décompensation rapide. Maintenir sur place n'est possible que si la zone est réellement sécurisée — avec de la fumée dans les circuits de ventilation, aucune zone n'est sûre.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q04",
          phase: 'pma',
          patient: { description: "USC — Femme, 72 ans. Insuffisance cardiaque décompensée sous dobutamine 5 mcg/kg/min. Consciente, orientée. VNI nocturne terminée. O2 lunettes 3L/min. Edèmes membres inférieurs.", vitals: "FC: 88 — TA: 105/65 — Sat: 94% sous O2 3L/min" },
          text: "Catégorie P2. Quel vecteur de transport et quelle destination pour ce patient USC ?",
          choices: [
            { text: "Ambulance médicalisée (IAS3/infirmier IARI) avec scope, pousse-seringue dobutamine portable, O2 portable. Destination : service cardiologie d'un hôpital receveur confirmé par la Centrale 144 (Hôpital de la Tour, Hôpital Riviera-Chablais, ou HFR Fribourg selon disponibilité).", correct: true },
            { text: "Transport en véhicule sanitaire léger (VSL) — patient conscient et marchant", correct: false },
            { text: "Garder en USC avec monitoring fixe pendant que les P1 sont évacués", correct: false }
          ],
          feedback: {
            correct: "✅ Patient P2 sous amine = transport paramédical minimum avec monitoring et pousse-seringue portable. Le VSL est insuffisant. La garde en USC n'est acceptable que si la zone est réellement hors danger, ce qui n'est pas le cas avec fumée dans les circuits de ventilation.",
            incorrect: "❌ Un patient sous dobutamine ne peut pas être transporté en VSL sans monitoring ni continuité des amines. La conscience du patient ne détermine pas le niveau de transport — c'est la dépendance aux traitements qui compte.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q05",
          phase: 'ambulance',
          patient: null,
          text: "Priorisation globale : vous avez 8 patients REA P1 (dont 3 sous VHFO néonat), 6 patients USC P2 sous amines, 15 patients USIC/USINV P2, et 71 patients MCO P3-P4. Vous disposez de 3 SMUR, 8 ambulances IAS3, et 4 VSL. Par où commencez-vous ?",
          choices: [
            { text: "Phase 1 (simultanée) : 3 SMUR pour les 3 patients REA adulte les plus instables + coordination néonat avec équipe spécialisée pour les 3 prématurés P1. Phase 2 : 8 ambulances IAS3 pour USC/USIC P2 sous amines. Phase 3 : 4 VSL pour P3-P4 autonomes. En parallèle : Protection Civile et renforts CRS pour P3-P4 valides.", correct: true },
            { text: "Commencer par les P3-P4 — ils sont les plus nombreux et libèrent rapidement les lits", correct: false },
            { text: "Attendre que tous les SMUR soient disponibles avant d'évacuer les P2", correct: false }
          ],
          feedback: {
            correct: "✅ La logique IMV hospitalière est inverse à l'intuition : les P1 partent en premier avec les ressources les plus lourdes, en parallèle avec la préparation des P2. Les P3-P4 peuvent être acheminés vers des zones d'attente sécurisées dans l'hôpital en attendant les VSL. La simultanéité des phases est possible avec coordination cellule de crise.",
            incorrect: "❌ Commencer par les P3-P4 mobilise les ressources de transport légères sur des patients non critiques pendant que les P1 attendent. Attendre la disponibilité de tous les SMUR retarde dangereusement les P1 les plus instables.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q06",
          phase: 'pma',
          patient: { description: "USINV — Homme, 68 ans. AVC ischémique J+1, hémiplégie gauche dense. Conscient, dysphasique. Déglutition à évaluer. Pas d'amines. O2 lunettes 2L/min. SNG en place.", vitals: "FC: 78 — TA: 158/92 — Sat: 96% — GCS: 12" },
          text: "Patient P2 AVC. Son transport nécessite-t-il un SMUR médicalisé ?",
          choices: [
            { text: "Non — ambulance IAS3/infirmier IARI suffisante. Pas d'amines, pas de ventilation mécanique. SNG sécurisée, scope de transport, O2 portable. Transmission orale détaillée à l'équipe recevante avec dossier médical complet. Destination : service neurologie avec unité neuro-vasculaire (CHUV ou HFR).", correct: true },
            { text: "Oui — SMUR médecin obligatoire pour tout patient neurologique grave", correct: false },
            { text: "Ce patient peut être transporté en VSL — il est conscient", correct: false }
          ],
          feedback: {
            correct: "✅ AVC avec hémiplégie sans dépendance respiratoire ni amines = transport paramédical (IAS3/IARI) suffisant avec monitoring et dossier complet. Le SMUR est réservé aux P1 intubés instables. Le VSL est insuffisant car le patient nécessite monitoring et peut se dégrader (risque convulsif, déglutition).",
            incorrect: "❌ Le niveau de transport est basé sur la dépendance technologique, pas sur le diagnostic. Sans ventilation mécanique ni amines, le SMUR médecin n'est pas nécessaire pour ce patient. Un patient dysphasique avec GCS 12 ne peut pas voyager en VSL.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q07",
          phase: 'pma',
          patient: { description: "Maternité — Femme, 29 ans. 30 SA. Pyélonéphrite compliquée. Sous antibiotiques IV. Consciente. Monitoring fœtal positif (BCF 140/min stables). Pas de contractions.", vitals: "FC: 98 — TA: 122/78 — T°: 38.6°C — BCF: 140/min" },
          text: "Patiente enceinte de 30 SA lors de l'évacuation. Quelles précautions spécifiques prenez-vous ?",
          choices: [
            { text: "Transport en ambulance IAS3 avec monitoring fœtal portable (CTG portable), décubitus latéral gauche en transport, antibiotiques IV en cours pendant le transport, destination : maternité de niveau IIb minimum avec NICU (CHUV ou HFR Fribourg si accord), informer l'équipe obstétricale recevante de la grossesse à 30 SA + infection active.", correct: true },
            { text: "Transport VSL en position assise — grossesse non compliquée à terme", correct: false },
            { text: "Reporter l'évacuation jusqu'à l'accouchement pour éviter le stress du transport", correct: false }
          ],
          feedback: {
            correct: "✅ Une grossesse à 30 SA avec infection compliquée nécessite : monitoring fœtal en continu, décubitus latéral gauche (compression aorto-cave), antibiotiques maintenus, et destination maternité avec NICU adapté si accouchement prématuré. La maternité recevante doit être préalertée.",
            incorrect: "❌ 30 SA = prématurité potentielle si le stress ou l'infection déclenchent le travail. Le VSL sans monitoring est insuffisant. Reporter l'évacuation avec fumée dans les circuits met en danger la mère et l'enfant.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q08",
          phase: 'ambulance',
          patient: null,
          text: "Gestion documentaire d'urgence : en quittant les HUG, quel document médical MINIMUM doit accompagner chaque patient ?",
          choices: [
            { text: "Fiche de transfert d'urgence standardisée : identité + date de naissance, diagnostic principal, niveau de priorité (P1/P2/P3/P4), traitements en cours (dose + heure dernière administration), paramètres vitaux de départ, vecteur de transport, hôpital destination, contact médecin référent HUG", correct: true },
            { text: "Le dossier médical électronique complet imprimé — toutes les informations en cas de besoin", correct: false },
            { text: "Aucun document n'est nécessaire en urgence — les soignants transmettent oralement", correct: false }
          ],
          feedback: {
            correct: "✅ La fiche de transfert d'urgence standardisée (format ISBAR adapté) est le minimum légal et clinique. Le dossier complet imprimé prend trop de temps en urgence. La transmission orale seule crée des erreurs médicamenteuses. En Suisse, la continuité des soins est une obligation légale même en urgence.",
            incorrect: "❌ Imprimer un dossier complet en situation d'évacuation d'urgence est impossible et prend trop de temps. La transmission orale seule est insuffisante — les équipes recevantes reçoivent 20-30 patients en peu de temps et ne peuvent pas mémoriser tous les traitements.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q09",
          phase: 'ambulance',
          patient: null,
          text: "Coordination inter-hospitalière : le CHUV Lausanne confirme 4 places REA adulte, mais signale qu'il ne peut pas recevoir de néonatologie. HFR Fribourg a 2 places REA et 3 NICU. L'Hôpital de la Tour a 6 places médecine. Comment organisez-vous la répartition ?",
          choices: [
            { text: "CHUV : 4 patients REA adulte P1 (prioriser les chocs septiques + polytrauma). HFR Fribourg : 2 patients REA adulte P1 + 3 prématurés P1 NICU. Hôpital de la Tour : 6 patients P2 cardiologie/médecine. Reste MCO P3-P4 : Hôpital Riviera-Chablais + structures ambulatoires proches. Coordination via Centrale 144.", correct: true },
            { text: "Envoyer tous les patients P1 au CHUV — c'est le centre de référence cantonal", correct: false },
            { text: "Attendre que le CHUV libère des places pour tous les patients critiques avant d'évacuer", correct: false }
          ],
          feedback: {
            correct: "✅ La répartition multi-sites selon les spécialités disponibles est le principe fondamental de la régulation en IMV hospitalier. La Centrale 144 centralise les disponibilités en temps réel. Le CHUV ne peut pas absorber tous les P1 — la répartition géographique protège les capacités de chaque hôpital receveur.",
            incorrect: "❌ Saturer le CHUV avec tous les P1 dégrade la qualité des soins pour tous. L'HFR Fribourg dispose de NICU de niveau III, idéal pour les prématurés. Attendre des places libres expose les P1 à la fumée.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q10",
          phase: 'pma',
          patient: { description: "MCO Pédiatrie — Garçon, 4 ans. Bronchiolite VRS, oxygène lunettes 2L/min. Conscient, pleure. Sat 95% sous O2. Parents présents dans la chambre.", vitals: "FC: 128 — Sat: 95% sous O2 2L/min — FR: 36/min" },
          text: "Patient pédiatrique P3. Ses parents sont présents et refusent l'évacuation sans lui. Comment gérez-vous cette situation ?",
          choices: [
            { text: "Intégrer les parents au transport — leur présence réduit le stress de l'enfant et facilite la coopération. Transport ambulance IAS3 avec O2 portable, parents installés aux côtés de l'enfant. Informer les parents simplement de la destination. Valider les droits parentaux en notant leur présence dans la fiche de transfert.", correct: true },
            { text: "Séparer l'enfant des parents pour respecter le protocole de transport", correct: false },
            { text: "Reporter l'évacuation de cet enfant jusqu'à ce que les parents acceptent le protocole", correct: false }
          ],
          feedback: {
            correct: "✅ En pédiatrie d'urgence, la présence des parents est un bénéfice thérapeutique. Les séparer crée un stress supplémentaire inutile. Les parents n'ont pas de droit de blocage en situation d'urgence vitale, mais leur coopération est obtenue par l'information et l'intégration au transport.",
            incorrect: "❌ Séparer un enfant de ses parents dans une situation d'urgence est psychologiquement traumatisant et cliniquement contre-productif. Reporter l'évacuation n'est pas possible face à la fumée. La présence parentale est encouragée en transport pédiatrique.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q11",
          phase: 'pma',
          patient: { description: "REA unité 2 — Homme, 78 ans. État de mal épileptique réfractaire. Sédaté, intubé-ventilé. Midazolam + Propofol en IVSE. Pas d'amines actuellement mais épisodes hypotensifs récents.", vitals: "FC: 88 — TA: 118/72 sous sédation — Sat: 98% sous VM" },
          text: "Ce patient a eu des épisodes hypotensifs récents mais est actuellement stable. Comment classiez-vous son niveau de transport ?",
          choices: [
            { text: "P1 — transport SMUR médecin obligatoire. Les épisodes hypotensifs récents signifient une instabilité potentielle. En cas d'hypotension pendant le transport, le médecin SMUR doit être présent pour initier les amines. La préparation d'un bolus de cristalloïdes et d'éphédrine est impérative.", correct: true },
            { text: "P2 — actuellement stable, ambulance IAS3 suffisante", correct: false },
            { text: "Attendre la stabilisation complète avant d'évacuer", correct: false }
          ],
          feedback: {
            correct: "✅ Un patient avec épisodes hypotensifs récents est à risque imminent de décompensation — la stabilité actuelle est fragile. Le transport en SMUR permet d'initier des amines si nécessaire. La règle : en cas de doute sur la stabilité, classer P1. La fumée ne permet pas d'attendre la stabilisation.",
            incorrect: "❌ 'Actuellement stable' ne signifie pas 'stable pour le transport'. Un état de mal épileptique réfractaire avec hypotensions récentes peut décompenser en 2 minutes pendant le transport sans médecin. L'ambulance IAS3 sans médecin ne peut pas initier les amines.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q12",
          phase: 'ambulance',
          patient: null,
          text: "Fin de vie : un patient MCO bénéficie d'une sédation palliative (PCA morphine, directives anticipées NO-RCP, projet de soins palliatifs établi). Ses proches sont présents. Comment gérez-vous son évacuation ?",
          choices: [
            { text: "Évaluation individuelle : si transport réalisable sans aggraver la souffrance, évacuation vers structure de soins palliatifs ou EMS adapté avec maintien de la PCA. Si le transport est inenvisageable (aggravation des souffrances), la décision de maintien sur place dans une zone sécurisée peut être prise collégialement avec les proches et un médecin senior, en documentant la décision.", correct: true },
            { text: "Évacuer comme tout autre patient — pas de prise en compte du projet de soins palliatifs en urgence", correct: false },
            { text: "Ne pas évacuer et ne pas intervenir — directives anticipées signifient pas de soins actifs", correct: false }
          ],
          feedback: {
            correct: "✅ Les directives anticipées NO-RCP ne signifient pas abandon des soins de confort. En évacuation d'urgence, le projet de soins palliatifs est maintenu. Si le transport aggrave réellement la souffrance (douleur, dyspnée terminale), une décision collégiale documentée de maintien dans une zone sécurisée est éthiquement défendable et légalement encadrée en Suisse.",
            incorrect: "❌ Ignorer le projet de soins palliatifs en urgence méconnaît les droits du patient. Les directives anticipées s'appliquent aussi en situation d'urgence. Un patient en fin de vie mérite une décision individualisée, pas une procédure uniforme.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q13",
          phase: 'ambulance',
          patient: null,
          text: "Communication de crise : les médias sont présents devant les HUG et des images circulent sur les réseaux sociaux. Qui communique officiellement et que dit-on ?",
          choices: [
            { text: "La Direction des HUG via son responsable communication institutionnel, en coordination avec le Canton de Genève (DGS). Message : confirmation de l'activation du plan d'urgence, absence de victime à ce stade, évacuation préventive en cours, numéro d'information famille activé. Strict respect du secret médical — aucun nom de patient, aucun diagnostic.", correct: true },
            { text: "Le médecin chef de l'intervention répond aux questions des journalistes entre deux évacuations", correct: false },
            { text: "Ne faire aucune communication — éviter d'amplifier la panique", correct: false }
          ],
          feedback: {
            correct: "✅ La communication de crise institutionnelle est le rôle de la direction, pas des équipes médicales opérationnelles. En Suisse, la Loi sur la santé (LsanS GE) impose le secret médical absolu. Un numéro d'information famille réduit les appels désorganisés sur les lignes de secours. Le silence total amplifie les rumeurs.",
            incorrect: "❌ Le médecin chef opérationnel ne doit pas être distrait par les médias pendant l'intervention. L'absence totale de communication crée un vide que les réseaux sociaux remplissent avec des informations fausses — parfois plus dangereuses que la réalité.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q14",
          phase: 'ambulance',
          patient: null,
          text: "Retour à la normale : l'incendie est éteint après 3 heures. Les SIS autorisent la réintégration partielle du bâtiment. Quelle est la procédure de réintégration des patients ?",
          choices: [
            { text: "Évaluation technique de salubrité (qualité air, réseaux électriques/médicaux opérationnels) par les services techniques HUG + SIS avant toute réintégration. Rapatriement par ordre inverse d'évacuation (P3-P4 en premier car moins de matériel). Debriefing institutionnel sous 24h. Rapport d'incident transmis au Département de la santé GE.", correct: true },
            { text: "Réintégration immédiate de tous les patients dès l'autorisation SIS — l'hôpital est opérationnel", correct: false },
            { text: "Maintenir tous les patients dans les structures d'accueil pendant 48h par précaution", correct: false }
          ],
          feedback: {
            correct: "✅ La réintégration requiert une validation technique préalable (air, électricité, gaz médicaux) avant de ramener des patients critiques. L'ordre inverse logique : P4 d'abord (lits simples), P1 en dernier (REA avec équipements complexes à revérifier). Le rapport d'incident alimente l'amélioration du plan PEGASE.",
            incorrect: "❌ Réintégrer sans validation technique expose les patients à des risques résiduels (CO, circuits endommagés). Maintenir 48h en dehors crée une saturation prolongée inutile des structures d'accueil.",
            naca: null
          }
        },
        {
          id: "CAT-04-Q15",
          phase: 'ambulance',
          patient: null,
          text: "Bilan de l'exercice : 98 patients évacués en 3h15, 2 patients décédés en REA non liés à l'évacuation. Quel est l'enseignement clé d'une évacuation hospitalière réussie selon les principes PEGASE ?",
          choices: [
            { text: "La réussite repose sur : 1) un plan PEGASE connu et entraîné régulièrement par TOUT le personnel, 2) des fiches de transfert standardisées préparées à l'avance pour chaque patient critique, 3) des accords inter-hospitaliers régionaux activables en moins de 30 minutes, 4) une chaîne de commandement médicale claire, 5) des exercices annuels avec les partenaires (SIS, 144, hôpitaux receveurs)", correct: true },
            { text: "L'improvisation est suffisante si le personnel est expérimenté — les plans sont trop rigides", correct: false },
            { text: "La clé est d'avoir le maximum d'ambulances disponibles le jour J", correct: false }
          ],
          feedback: {
            correct: "✅ L'évacuation hospitalière réussie repose sur la PRÉPARATION, pas sur l'improvisation. Les accords inter-hospitaliers (CHUV, HFR, Riviera-Chablais, Hôpital de la Tour) doivent être formalisés et testés. Les exercices PEGASE annuels sont obligatoires dans les hôpitaux de niveau III en Suisse. La compétence individuelle ne compense pas l'absence de plan.",
            incorrect: "❌ L'improvisation en évacuation d'un hôpital de 2000 lits avec des patients ventilés est une recette pour le désastre. Le nombre d'ambulances est important mais secondaire sans coordination et sans fiches de transfert prépréparées.",
            naca: null
          }
        }
      ]
    }


  ];
