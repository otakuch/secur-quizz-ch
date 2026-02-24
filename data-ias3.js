// ═══════════════════════════════════════════════════════════════
// SECUR-QUIZ | Données IAS 3 — Scénarios cliniques individuels
// Niveau : Secouriste avancé — sans actes médicaux professionnels
// Actes médicaux uniquement sur délégation / supervision médicale
// ─────────────────────────────────────────────────────────────
// Compétences testées : ABCDE, O2, positionnement, DAE/RCP,
// garrot, immobilisation, glucogel, surveillance, transmission
// ═══════════════════════════════════════════════════════════════

const IAS3_CASES = [

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-01 : Douleur thoracique — Homme 58 ans
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-01",
    title: "Douleur thoracique — Homme 58 ans",
    context: "Genève, rue de Berne. 08h42. Homme de 58 ans effondré sur un banc. Douleur thoracique irradiant vers l'épaule gauche depuis 20 minutes. Pâle, sueurs froides. Conscient, parle.",
    questions: [
      {
        patient: { hr: 98, spo2: 93, bp: "162/98", rr: 22, gcs: 15, ecg: "sinusal_tachy", state: "conscient" },
        text: "Premier contact : homme pâle, sudorifère, douleur thoracique. Quelle est votre première priorité dans la démarche ABCDE ?",
        choices: [
          { text: "Vérifier que les voies aériennes sont libres (A), puis évaluer la respiration et apposer l'O₂ HC 15 L/min (B), puis évaluer la circulation et alerter le 144 avec les données précises (C)", correct: true },
          { text: "Allonger le patient à plat et prendre son pouls pendant 60 secondes avant de faire quoi que ce soit d'autre", correct: false },
          { text: "Installer directement les électrodes du DAE pour avoir un tracé cardiaque avant d'appeler le 144", correct: false }
        ],
        feedback: {
          correct: "ABCDE respecté : Airway libre → O₂ HC immédiat sur SpO₂ 93% → alerte 144 avec données cliniques précises. La demi-assise réduit le travail respiratoire et la précharge. L'O₂ HC à 15 L/min est dans les compétences du secouriste avancé sans prescription médicale.",
          incorrect: "Le décubitus dorsal sur suspicion cardiaque augmente la précharge et l'essoufflement. Prendre le pouls 60 secondes retarde l'alerte. Le DAE est réservé à l'arrêt cardiaque — l'appliquer sur un patient conscient est inapproprié.",
          naca: "NACA IV – Urgence vitale potentielle (SCA probable)"
        }
      },
      {
        patient: { hr: 104, spo2: 92, bp: "158/96", rr: 24, gcs: 15, ecg: "supra_st", state: "conscient" },
        text: "Le scope du SMUR révèle un sus-décalage ST. Le patient mentionne prendre du Plavix. Quel est votre rôle concernant les médicaments ?",
        choices: [
          { text: "Transmettre le nom du médicament et l'heure de la dernière prise au médecin régulateur, n'administrer aucun médicament sans ordre médical explicite", correct: true },
          { text: "Donner une aspirine à croquer — c'est le protocole SCA standard que tout secouriste peut appliquer", correct: false },
          { text: "Ne pas mentionner le Plavix — c'est au patient de le dire lui-même au médecin", correct: false }
        ],
        feedback: {
          correct: "L'administration de médicaments (même l'aspirine) n'est pas dans les compétences autonomes du secouriste avancé. Transmettre l'anamnèse médicamenteuse complète au médecin est votre responsabilité. Le Plavix peut contre-indiquer certaines stratégies thérapeutiques — cette information est critique.",
          incorrect: "L'aspirine est un médicament soumis à prescription en contexte d'urgence préhospitalière — son administration sans ordre médical dépasse le cadre du secouriste avancé. Le Plavix est une information clinique que vous devez collecter et transmettre activement.",
          naca: "NACA V – Risque vital immédiat (STEMI probable)"
        }
      },
      {
        patient: { hr: 48, spo2: 91, bp: "88/60", rr: 18, gcs: 14, ecg: "bav3", state: "obnubilé" },
        text: "Brutalement : FC 48/min, TA 88/60, patient obnubilé, sueurs froides. Que faites-vous en attendant le SMUR ?",
        choices: [
          { text: "Position allongée jambes légèrement surélevées (Trendelenburg modéré), maintenir O₂ HC, scope en continu, alerter le 144 en urgence absolue, DAE à portée de main", correct: true },
          { text: "Administrer du sérum physiologique en perfusion rapide pour corriger la pression artérielle basse", correct: false },
          { text: "Laisser le patient en demi-assise — la chute de TA est liée à la douleur uniquement", correct: false }
        ],
        feedback: {
          correct: "Trendelenburg modéré optimise le retour veineux sans médicament — dans vos compétences. Le DAE doit être prêt : risque d'asystolie ou FV sur BAV complet. L'alerte urgente au 144 permet au SMUR d'anticiper. Toute correction pharmacologique (atropine) est médicale — votre rôle est monitoring et transmission.",
          incorrect: "La perfusion intraveineuse de médicaments dépasse le cadre autonome du secouriste avancé. Maintenir la demi-assise en choc est inadapté — le retour veineux doit être optimisé par la position.",
          naca: "NACA V – Choc cardiogénique sur BAV complet"
        }
      },
      {
        patient: { hr: 0, spo2: 0, bp: "—", rr: 0, gcs: 3, ecg: "fv", state: "arrêt" },
        text: "Le patient perd connaissance. Absence de pouls carotidien confirmée. Le scope montre une FV. Quelle est votre action immédiate ?",
        choices: [
          { text: "RCP 30:2 immédiate (100-120/min, 5-6 cm), allumer le DAE dès disponible, 1er choc sans délai si conseillé, reprendre RCP 2 min entre chaque analyse", correct: true },
          { text: "Attendre le médecin SMUR pour commencer la RCP — la FV est un rythme complexe réservé aux professionnels", correct: false },
          { text: "Ventiler au masque seul en attendant le DAE — l'oxygénation est prioritaire sur les compressions", correct: false }
        ],
        feedback: {
          correct: "La RCP et le DAE sont au cœur des compétences du secouriste avancé. Sur FV, chaque minute sans défibrillation réduit la survie de 10%. Algorithme SRC 2021 : RCP immédiate + DAE le plus tôt possible. Suivre les instructions vocales du DAE, ne pas prolonger les interruptions de RCP.",
          incorrect: "La RCP et la défibrillation DAE ne nécessitent pas de supervision médicale — ce sont précisément les compétences du secouriste avancé. Attendre le SMUR coûte des minutes de survie cérébrale. La ventilation seule sans compressions est insuffisante.",
          naca: "NACA VII – Arrêt cardiorespiratoire"
        }
      },
      {
        patient: { hr: 72, spo2: 97, bp: "118/78", rr: 16, gcs: 15, ecg: "sinusal", state: "conscient" },
        text: "RACS après 2 chocs DAE. Patient reprend conscience. Quels soins post-réanimation pouvez-vous assurer avant l'arrivée du SMUR ?",
        choices: [
          { text: "Maintenir O₂ HC, scope en continu, PLS si trouble de conscience, noter heure du RACS + nombre de chocs + rythme initial, éviter toute stimulation inutile", correct: true },
          { text: "Asseoir le patient pour le rassurer — il est conscient, la position assise est plus confortable", correct: false },
          { text: "Arrêter le scope — le RACS confirme la stabilité, continuer à surveiller est inutile", correct: false }
        ],
        feedback: {
          correct: "Après RACS : stabilité fragile, risque de re-fibrillation dans les premières minutes. O₂ et scope restent actifs. La transmission précise (heure ACR, rythme initial, durée RCP, nombre de chocs, heure RACS) est dans vos compétences et est cliniquement cruciale pour le médecin.",
          incorrect: "Après un RACS, le patient peut re-fibriller immédiatement. Arrêter le scope supprime la surveillance critique. La stimulation inutile peut déclencher une récidive.",
          naca: "NACA VI – Post-ACR stabilisé"
        }
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-02 : Traumatisme crânien — Chute de vélo
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-02",
    title: "Traumatisme crânien — Cycliste 34 ans",
    context: "Lausanne. 15h10. Cycliste sans casque, choc frontal contre un poteau à environ 30 km/h. Inconscient à votre arrivée. Plaie frontale saignante active. Témoin a maintenu la tête.",
    questions: [
      {
        patient: { hr: 58, spo2: 96, bp: "178/102", rr: 12, gcs: 9, ecg: "sinusal_brady", state: "obnubilé" },
        text: "GCS 9, mécanisme à haute énergie, pas de casque. Quel est votre PREMIER geste physique avant toute autre action ?",
        choices: [
          { text: "Stabilisation cervicale manuelle bimanuelle immédiate : placer les deux mains de chaque côté de la tête en maintenant l'axe tête-cou-tronc strict", correct: true },
          { text: "Retourner le patient en position latérale de sécurité pour libérer les voies aériennes", correct: false },
          { text: "Stimuler fermement le sternum pour préciser le score GCS avant de poser le collier cervical", correct: false }
        ],
        feedback: {
          correct: "Sur tout TC avec mécanisme violent, la fracture cervicale instable est à suspecter systématiquement. La stabilisation bimanuelle est le premier geste — avant même d'évaluer les voies aériennes. Une mobilisation non contrôlée sur fracture instable peut provoquer une tétraplégie.",
          incorrect: "La PLS sans maintien de l'axe tête-cou-tronc est contre-indiquée sur trauma à haute cinétique. Stimuler un patient avec HTIC probable aggrave la pression intracrânienne. Stabiliser d'abord, évaluer ensuite.",
          naca: "NACA V – TC grave avec HTIC probable"
        }
      },
      {
        patient: { hr: 55, spo2: 94, bp: "185/108", rr: 10, gcs: 8, ecg: "sinusal_brady", state: "semi-comateux" },
        text: "GCS descend à 8. Vous observez une pupille gauche large (5 mm) peu réactive et une droite normale (3 mm). Que faites-vous ?",
        choices: [
          { text: "Transmettre immédiatement ce signe au 144 : anisocorie = engagement cérébral probable, urgence neurochirurgicale. Maintenir l'axe, O₂ HC, ne pas perdre de temps.", correct: true },
          { text: "Eclairer les deux yeux à la lampe torche plusieurs fois pour confirmer le réflexe photomoteur avant d'alerter", correct: false },
          { text: "Hyperventiler le patient à 30 insufflations/min pour réduire la pression intracrânienne", correct: false }
        ],
        feedback: {
          correct: "Anisocorie avec aggravation du GCS sur TC = engagement temporal (herniation uncale) jusqu'à preuve contraire. C'est une urgence neurochirurgicale absolue. Votre rôle : transmettre ce signe précis au 144 immédiatement. Ce que vous observez guide la décision du médecin.",
          incorrect: "L'hyperventilation à fréquence précise est un acte médical encadré — pas applicable en autonomie. Retarder l'alerte pour confirmer le réflexe fait perdre des minutes critiques. Ce signe seul suffit à déclencher une alerte urgente.",
          naca: "NACA VI – Engagement temporal imminent"
        }
      },
      {
        patient: { hr: 60, spo2: 95, bp: "180/104", rr: 14, gcs: 9, ecg: "sinusal_brady", state: "obnubilé" },
        text: "Plaie frontale avec saignement actif important. Le patient est stabilisé en axe. Comment contrôlez-vous l'hémorragie ?",
        choices: [
          { text: "Compression directe ferme avec compresse stérile. Si os enfoncé suspecté : compression annulaire autour de la plaie sans appuyer sur la zone fracturée", correct: true },
          { text: "Poser un garrot hémostatique autour du crâne — même principe que pour un membre", correct: false },
          { text: "Laisser saigner pour réduire la pression intracrânienne par drainage naturel", correct: false }
        ],
        feedback: {
          correct: "La compression directe est la seule technique hémostatique applicable sur le scalp. Si vous suspectez une fracture ouverte (os mobile, crépitation), la compression en anneau évite d'aggraver la lésion osseuse. Le scalp saigne abondamment — la compression est toujours indiquée.",
          incorrect: "Le garrot est inapplicable sur la tête — anatomiquement impossible. Laisser saigner est dangereux (scalp très vascularisé) et n'a aucun effet bénéfique sur la PIC. La compression directe reste votre unique outil.",
          naca: "NACA V"
        }
      },
      {
        patient: { hr: 62, spo2: 96, bp: "176/100", rr: 14, gcs: 9, ecg: "sinusal", state: "obnubilé" },
        text: "Comment évaluez-vous le GCS de façon correcte et communicable pour votre transmission ?",
        choices: [
          { text: "Évaluer les 3 composantes séparément : Yeux (Y), Verbal (V), Moteur (M). Exemple : Y2 V2 M5 = 9. Horodater et répéter toutes les 5 minutes.", correct: true },
          { text: "Résumer par 'conscient' ou 'inconscient' — le GCS chiffré est réservé au médecin", correct: false },
          { text: "Évaluer une seule fois à l'arrivée — le GCS ne change pas significativement en quelques minutes", correct: false }
        ],
        feedback: {
          correct: "Le GCS doit être transmis avec ses 3 composantes (Y2V2M5=9), pas uniquement le total. L'évolution dans le temps est l'indicateur le plus important : GCS 11→9→8 oriente vers l'aggravation. Chaque évaluation est horodatée. Le secouriste avancé maîtrise et utilise le GCS.",
          incorrect: "'Conscient/inconscient' est cliniquement insuffisant. Le GCS chiffré n'est pas réservé au médecin — c'est votre outil de communication. Sur TC, l'évolution est plus informative que la valeur absolue.",
          naca: "NACA V"
        }
      },
      {
        patient: { hr: 64, spo2: 97, bp: "172/98", rr: 14, gcs: 10, ecg: "sinusal", state: "obnubilé" },
        text: "Le SMUR arrive. Quelle transmission faites-vous ? Quel format et quels éléments sont essentiels ?",
        choices: [
          { text: "Format SBAR/MIST : mécanisme (30 km/h, sans casque), GCS initial et évolution (9→8 avec anisocorie→10), gestes réalisés (stabilisation axe, O₂, compression), constantes horodatées", correct: true },
          { text: "Donner uniquement les constantes actuelles — c'est ce que le médecin demande en priorité", correct: false },
          { text: "La transmission orale suffit — une fiche écrite n'est pas obligatoire pour un secouriste", correct: false }
        ],
        feedback: {
          correct: "La transmission SBAR (Situation, Background, Assessment, Recommendation) ou MIST est le standard. Le médecin a besoin de savoir que le GCS est passé par 8 avec anisocorie avant de remonter à 10 — sans cette information, la décision neurochirurgicale peut être compromise. La fiche écrite horodatée est obligatoire.",
          incorrect: "Les constantes actuelles sans l'évolution temporelle sont incomplètes. Un GCS 10 stable et un GCS qui est passé par 8 avec anisocorie ne déclenchent pas la même réponse médicale. La fiche écrite engage votre responsabilité professionnelle.",
          naca: "NACA V"
        }
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-03 : Détresse respiratoire — Asthme aigu grave
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-03",
    title: "Asthme aigu grave — Femme 27 ans",
    context: "Carouge. 23h05. Jeune femme asthmatique connue. Sibilances audibles à distance, impossible de parler en phrases complètes. Salbutamol utilisé 8x dans la dernière heure sans effet.",
    questions: [
      {
        patient: { hr: 128, spo2: 86, bp: "138/88", rr: 34, gcs: 15, ecg: "sinusal_tachy", state: "consciente" },
        text: "SpO₂ 86%, FR 34/min, tirage sus-sternal, parle mot par mot. Positionnement et oxygénation ?",
        choices: [
          { text: "Laisser la patiente dans sa position de confort spontanée (souvent trépied : assise penchée en avant, appui sur les bras), O₂ masque haute concentration 15 L/min", correct: true },
          { text: "Allonger en décubitus dorsal pour faciliter la respiration diaphragmatique, O₂ lunettes nasales 2 L/min", correct: false },
          { text: "Position demi-assise 45°, O₂ 4 L/min — le masque HC peut aggraver l'anxiété et le bronchospasme", correct: false }
        ],
        feedback: {
          correct: "La position trépied est instinctivement adoptée par les patients en crise : elle recrute les muscles accessoires et maximise les volumes pulmonaires. Ne jamais forcer une autre position. Sur SpO₂ 86%, l'O₂ HC à 15 L/min est obligatoire — cible minimum 95%. Totalement dans vos compétences.",
          incorrect: "Le décubitus réduit la capacité résiduelle fonctionnelle et aggrave la détresse respiratoire. L'O₂ bas débit est insuffisant sur SpO₂ 86%. Sans BPCO documentée, l'O₂ HC ne présente aucun risque.",
          naca: "NACA V – Asthme aigu grave"
        }
      },
      {
        patient: { hr: 132, spo2: 84, bp: "142/90", rr: 36, gcs: 14, ecg: "sinusal_tachy", state: "épuisée" },
        text: "Les sibilances disparaissent soudainement. Le thorax semble bloqué. SpO₂ 84%. Que signifie ce silence auscultatoire ?",
        choices: [
          { text: "Signe de catastrophe : 'poumon silencieux' = asphyxie imminente, plus assez d'air pour créer des sibilances. Alerter le 144 en urgence maximale, préparer le BAVU.", correct: true },
          { text: "Amélioration de la crise : les bronchospasmes se lèvent progressivement, les sibilances s'arrêtent. Réduire l'O₂.", correct: false },
          { text: "Pause respiratoire normale en fin de crise asthmatique. Observer 2 minutes avant de réagir.", correct: false }
        ],
        feedback: {
          correct: "Poumon silencieux sur asthme = signe pré-asphyxique le plus grave. L'air ne passe plus assez pour créer des sibilances. L'arrêt respiratoire est imminent. Alerter immédiatement le 144, préparer le BAVU. Ne jamais interpréter le silence comme une amélioration.",
          incorrect: "La disparition des sibilances sur asthme aigu grave N'EST JAMAIS une bonne nouvelle. Réduire l'O₂ sur SpO₂ 84% serait une erreur critique. Ce silence est le signal d'alarme le plus grave que vous puissiez observer.",
          naca: "NACA VI – Asphyxie imminente"
        }
      },
      {
        patient: { hr: 58, spo2: 72, bp: "88/60", rr: 6, gcs: 10, ecg: "sinusal_brady", state: "épuisée" },
        text: "FR chute à 6/min, GCS 10. Le médecin SMUR par téléphone donne l'ordre de ventiler au BAVU. Comment procédez-vous ?",
        choices: [
          { text: "BAVU O₂ 15 L/min, 10-12 insufflations/min, insufflations LENTES (2 secondes), laisser l'expiration se terminer complètement (ratio I:E 1:3), 2 sauveteurs si possible", correct: true },
          { text: "Ventiler à 30 insufflations/min pour corriger rapidement la SpO₂ à 72%", correct: false },
          { text: "Ne pas ventiler sans médecin physiquement présent — l'ordre téléphonique n'est pas suffisant", correct: false }
        ],
        feedback: {
          correct: "Sur bronchospasme sévère, la ventilation LENTE est impérative. L'hyperventilation crée un piégeage aérique (auto-PEEP) et risque le pneumothorax sous tension fatal. L'ordre téléphonique médical est une délégation valide. 2 sauveteurs : un maintient le masque (prise C-E), l'autre actionne le ballon lentement.",
          incorrect: "30 insufflations/min sur bronchospasme = barotraumatisme et pneumothorax sous tension. L'ordre médical téléphonique est légalement valide pour déclencher l'acte sous délégation.",
          naca: "NACA VI"
        }
      },
      {
        patient: { hr: 102, spo2: 91, bp: "118/74", rr: 18, gcs: 15, ecg: "sinusal_tachy", state: "consciente" },
        text: "Le médecin SMUR présent administre du salbutamol en nébulisation. Quel est votre rôle pendant cet acte médical ?",
        choices: [
          { text: "Surveillance active : FC (tachycardie attendue avec salbutamol), SpO₂, FR, état de conscience, réponse clinique (réduction du tirage, des sibilances), documenter heure et réponse", correct: true },
          { text: "Surveiller uniquement la SpO₂ : c'est le paramètre le plus fiable sur asthme", correct: false },
          { text: "Laisser le médecin gérer seul pendant l'acte médical — votre rôle est suspendu", correct: false }
        ],
        feedback: {
          correct: "Pendant un acte médical sous supervision, le secouriste avancé maintient une surveillance multi-paramétrique active. Le salbutamol provoque une tachycardie attendue (normal). La réponse clinique (réduction du tirage, réapparition puis diminution des sibilances) guide le médecin pour ajuster le traitement.",
          incorrect: "La SpO₂ seule est insuffisante. Votre rôle ne s'arrête pas pendant les actes médicaux — il devient surveillance et assistance. Observer passivement est contraire à votre fonction.",
          naca: "NACA IV"
        }
      },
      {
        patient: { hr: 98, spo2: 95, bp: "122/76", rr: 18, gcs: 15, ecg: "sinusal", state: "consciente" },
        text: "Après traitement, la patiente consciente refuse l'hospitalisation. Quelle procédure appliquez-vous ?",
        choices: [
          { text: "Informer clairement des risques de rebond dans les 4-6h, faire signer une décharge de refus de transport, informer le médecin régulateur, documenter l'heure et les informations transmises", correct: true },
          { text: "Contraindre la patiente — elle vient de faire une crise sévère et n'est pas en état de décider", correct: false },
          { text: "Partir sans document — c'est sa décision d'adulte, vous n'avez aucune responsabilité", correct: false }
        ],
        feedback: {
          correct: "Tout patient adulte conscient et compétent a le droit de refuser un transport. Vos obligations : informer clairement des risques (rebond asthmatique documenté surtout sous corticoïdes), faire signer la décharge, transmettre au médecin régulateur, documenter. La traçabilité vous protège légalement.",
          incorrect: "La contrainte physique n'est légale que sur patient non compétent ou danger grave pour autrui. Partir sans documentation expose l'équipe. L'information du risque et la décharge sont obligatoires.",
          naca: "NACA III stabilisé"
        }
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-04 : Hypoglycémie — Diabétique type 1
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-04",
    title: "Hypoglycémie sévère — Homme 44 ans",
    context: "Nyon, parking. 12h35. Homme retrouvé dans sa voiture, agité puis prostré. Badge 'diabétique type 1' visible. Dernier repas inconnu. Pas de réponse verbale cohérente.",
    questions: [
      {
        patient: { hr: 112, spo2: 98, bp: "148/86", rr: 18, gcs: 12, ecg: "sinusal_tachy", state: "confus" },
        text: "Patient confus, agité, sudorifère, badge diabétique. Quel est le premier geste diagnostique ?",
        choices: [
          { text: "Mesure de la glycémie capillaire au glucomètre avant toute intervention — résultat en 5 secondes et guide tout le reste", correct: true },
          { text: "Donner du sucre immédiatement sans mesure — la clinique suffit à confirmer l'hypoglycémie", correct: false },
          { text: "Attendre que le patient soit plus calme pour coopérer à la mesure du doigt", correct: false }
        ],
        feedback: {
          correct: "Le glucomètre confirme l'hypoglycémie en 5 secondes. Sans mesure, vous risquez d'aggraver un coma hyperosmolaire hyperglycémique en ajoutant du sucre. GCS 12 : évaluer la déglutition avant toute administration orale. La mesure glycémique est dans les compétences du secouriste avancé.",
          incorrect: "La clinique d'hypoglycémie ressemble à d'autres urgences (hypoglycémie vs hyperglycémie, AVC, intoxication). Une mesure prend 5 secondes et évite une erreur thérapeutique grave. Ne jamais administrer sans mesure.",
          naca: "NACA IV"
        }
      },
      {
        patient: { hr: 116, spo2: 97, bp: "144/88", rr: 18, gcs: 10, ecg: "sinusal_tachy", state: "semi-conscient" },
        text: "Glycémie : 1.8 mmol/L. GCS 10. Quelle voie d'administration du glucose choisissez-vous ?",
        choices: [
          { text: "Glucogel en application gingivale/sublinguale : absorption par la muqueuse buccale sans nécessiter de déglutition — adapté au GCS 10", correct: true },
          { text: "Faire boire du jus d'orange : solution rapide, efficace et disponible partout", correct: false },
          { text: "Ne rien administrer et attendre le SMUR pour la décision thérapeutique", correct: false }
        ],
        feedback: {
          correct: "Le Glucogel en sublingual/gingival est la solution adaptée au GCS 10 : absorption muqueuse directe sans déglutition nécessaire. C'est dans les compétences autonomes du secouriste avancé. GCS < 12 = risque d'inhalation si voie orale — ne jamais faire boire.",
          incorrect: "Donner à boire à un patient avec GCS 10 expose à un risque d'inhalation grave. Attendre sans agir laisse l'hypoglycémie progresser vers des lésions neurologiques. Le Glucogel gingival est la solution dans vos compétences.",
          naca: "NACA IV"
        }
      },
      {
        patient: { hr: 104, spo2: 98, bp: "138/82", rr: 16, gcs: 14, ecg: "sinusal", state: "conscient" },
        text: "Après Glucogel, glycémie remonte à 3.9 mmol/L. GCS 14. Le patient veut repartir conduire immédiatement. Votre réponse ?",
        choices: [
          { text: "Refuser et expliquer : risque de rebond hypoglycémique documenté dans l'heure sur insuline. La conduite après trouble de conscience est interdite. Recommander un repas et consultation médicale.", correct: true },
          { text: "Autoriser : la glycémie est normalisée, le danger est écarté", correct: false },
          { text: "Laisser le patient décider seul : adulte majeur, vous n'avez pas d'autorité légale", correct: false }
        ],
        feedback: {
          correct: "3.9 mmol/L est une valeur limite avec risque de rebond dans l'heure, surtout sur insuline lente. La conduite après épisode hypoglycémique avec perte de conscience est interdite par le Code de la route suisse. Informer de façon claire et documentée protège le patient et l'équipe.",
          incorrect: "La normalisation glycémique ne garantit pas la stabilité à 1 heure. Le rebond est documenté sur insuline retard. Conduire représente un danger pour le patient et pour autrui — vous avez le devoir d'informer.",
          naca: "NACA III"
        }
      },
      {
        patient: { hr: 100, spo2: 98, bp: "134/80", rr: 16, gcs: 15, ecg: "sinusal", state: "conscient" },
        text: "Quels signes cliniques permettent de distinguer une hypoglycémie d'une hyperglycémie sans glucomètre ?",
        choices: [
          { text: "Hypoglycémie : début brutal, sueur froide, pâleur, tachycardie, agitation. Hyperglycémie : installation sur heures/jours, peau sèche, haleine acétonée, soif intense, polyurie", correct: true },
          { text: "Impossible de différencier cliniquement — seul le glucomètre permet le diagnostic", correct: false },
          { text: "Hyperglycémie : toujours coma profond. Hypoglycémie : toujours agitation. Règle absolue.", correct: false }
        ],
        feedback: {
          correct: "La distinction clinique existe et est utile. Hypoglycémie (réponse sympathique) : début brutal, sueurs froides, pâleur, tachycardie, agitation. Cétoacidose diabétique : début progressif (heures), peau sèche, haleine acétonée (pomme reinette), respiration de Kussmaul (ample et profonde). Le glucomètre confirme toujours.",
          incorrect: "La différenciation clinique est réelle et enseignée. Les présentations atypiques existent mais les signes sympathiques de l'hypoglycémie sont suffisamment caractéristiques pour guider l'action. Le glucomètre reste indispensable pour confirmer.",
          naca: "NACA III"
        }
      },
      {
        patient: { hr: 96, spo2: 98, bp: "130/78", rr: 14, gcs: 15, ecg: "sinusal", state: "conscient" },
        text: "Le patient révèle ne pas avoir mangé depuis 18h et avoir modifié sa dose d'insuline seul. Comment gérez-vous cette information ?",
        choices: [
          { text: "Écoute ouverte sans jugement, questions sur les raisons du changement de dose, transmettre le contexte complet au médecin — comportement et contexte social sont des données cliniques", correct: true },
          { text: "Rappeler fermement qu'il ne doit jamais modifier ses doses sans son médecin — prévenir la récidive", correct: false },
          { text: "Ne pas mentionner ce détail dans la transmission — cela ne concerne pas l'équipe médicale des urgences", correct: false }
        ],
        feedback: {
          correct: "Les modifications de traitement révèlent souvent des difficultés d'accès aux soins, des incompréhensions ou des contraintes sociales. L'écoute sans jugement favorise l'information complète. Le contexte comportemental est cliniquement pertinent pour l'éducation thérapeutique.",
          incorrect: "La réprimande à chaud nuit à la relation de confiance et à l'information. Omettre le contexte médicamenteux prive le médecin d'éléments essentiels pour l'ajustement thérapeutique.",
          naca: "NACA III"
        }
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-05 : Noyade — Enfant 6 ans
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-05",
    title: "Noyade — Enfant 6 ans",
    context: "Morges, piscine privée. 14h22. Enfant retrouvé immergé 2 minutes, sorti par le père. Inconscient, cyanosé, en apnée. Le père est en panique.",
    questions: [
      {
        patient: { hr: 40, spo2: 72, bp: "70/40", rr: 0, gcs: 3, ecg: "sinusal_brady", state: "inconscient" },
        text: "Enfant 6 ans, apnée, pouls fémoral 40/min. Quelle est la spécificité de la réanimation de la noyade par rapport à un ACR cardiaque ?",
        choices: [
          { text: "Sur noyade : 5 insufflations de sauvetage initiales AVANT les compressions — cause hypoxique. Sur ACR cardiaque adulte : compressions en premier. RCP ensuite 15:2 pédiatrique.", correct: true },
          { text: "Même algorithme que l'ACR adulte : compressions 30:2 immédiatement, le DAE en priorité absolue", correct: false },
          { text: "Retourner l'enfant pour vider les poumons d'eau, puis ventiler au BAVU", correct: false }
        ],
        feedback: {
          correct: "Algorithme noyade SRC 2021 : cause hypoxique = 5 insufflations AVANT les compressions. Chez l'enfant : RCP 15:2. Le retournement pour vider les poumons est inutile (eau dans les poumons est minime et résorbée) et retarde la réanimation. Si pouls > 60/min et enfant, insufflations seules initialement.",
          incorrect: "La noyade est une asphyxie primaire — pas une mort subite cardiaque. La ventilation prime. Le retournement est une idée reçue dangereuse. L'algorithme pédiatrique diffère de l'adulte.",
          naca: "NACA VII – Pré-ACR"
        }
      },
      {
        patient: { hr: 0, spo2: 0, bp: "—", rr: 0, gcs: 3, ecg: "asystolie", state: "arrêt" },
        text: "Après 2 min de RCP, le DAE indique 'pas de choc conseillé' (asystolie). Que faites-vous ?",
        choices: [
          { text: "Continuer la RCP sans interruption — asystolie sur noyade pédiatrique en eau froide ne signifie pas mort irréversible. Continuer jusqu'à l'arrivée du SMUR.", correct: true },
          { text: "Arrêter la RCP — le DAE confirme l'absence de choc = décès électrique confirmé", correct: false },
          { text: "Attendre le médecin pour décider de poursuivre — décision trop complexe pour un secouriste", correct: false }
        ],
        feedback: {
          correct: "'Pas mort tant que pas chaud et mort.' L'eau froide protège le cerveau par hypothermie — des enfants ont survécu après 30-40 minutes en eau froide. L'asystolie n'est pas un rythme choquable (DAE correct). RCP continue jusqu'au SMUR, sans interruption. La décision d'arrêt appartient au médecin.",
          incorrect: "L'asystolie sur noyade pédiatrique froide ne justifie JAMAIS l'arrêt de la RCP par un secouriste. L'absence de choc DAE signifie rythme non choquable — pas que la réanimation est inutile.",
          naca: "NACA VII – ACR"
        }
      },
      {
        patient: { hr: 62, spo2: 88, bp: "78/52", rr: 12, gcs: 6, ecg: "sinusal_brady", state: "RACS" },
        text: "RACS après 12 min. Enfant hypotherme (T° 31°C). Comment gérez-vous l'hypothermie en pré-hospitalier ?",
        choices: [
          { text: "Réchauffement passif progressif : retirer vêtements mouillés, couverture aluminisée côté réflecteur vers la peau, couverture chaude par-dessus, transport urgent", correct: true },
          { text: "Bain d'eau chaude immédiat — réchauffement rapide pour prévenir la re-fibrillation", correct: false },
          { text: "L'hypothermie est secondaire après RACS — retirer les vêtements mouillés suffit pour l'instant", correct: false }
        ],
        feedback: {
          correct: "Réchauffement PASSIF PROGRESSIF uniquement en pré-hospitalier. Vêtements mouillés retirés, couverture aluminisée (réflecteur vers la peau), couverture chaude. Le réchauffement rapide provoque un 'afterdrop' vasculaire qui peut déclencher une re-fibrillation ventriculaire.",
          incorrect: "Le bain chaud provoque une vasodilatation périphérique brutale → afterdrop → FV. L'hypothermie reste une urgence médicale après RACS — réchauffement actif uniquement en milieu hospitalier contrôlé.",
          naca: "NACA VI – Post-ACR hypothermie"
        }
      },
      {
        patient: { hr: 70, spo2: 92, bp: "84/56", rr: 14, gcs: 6, ecg: "sinusal", state: "semi-comateux" },
        text: "Le père en panique veut emmener son fils à l'hôpital lui-même en voiture. Comment gérez-vous la situation ?",
        choices: [
          { text: "Communication calme et empathique : valider l'inquiétude, expliquer simplement le risque vital et proposer d'accompagner son fils dans l'ambulance", correct: true },
          { text: "Laisser partir — le père a la responsabilité parentale légale, vous ne pouvez pas l'en empêcher", correct: false },
          { text: "Appeler immédiatement la police pour bloquer physiquement le départ", correct: false }
        ],
        feedback: {
          correct: "Un parent paniqué n'est pas irrationnel — il est paralysé par la peur. Ton calme, validation de son inquiétude, explication courte du risque (re-fibrillation possible), offre d'accompagnement dans l'ambulance : cette approche résout 90% des situations. La police est un dernier recours disproportionné.",
          incorrect: "Un enfant post-ACR en voiture sans équipement de réanimation = mise en danger de la vie. Le droit parental ne s'exerce pas au détriment de la survie de l'enfant. La police peut aggraver la situation.",
          naca: "NACA VI"
        }
      },
      {
        patient: { hr: 74, spo2: 94, bp: "88/58", rr: 16, gcs: 7, ecg: "sinusal", state: "semi-comateux" },
        text: "Transmission aux urgences pédiatriques : quels éléments spécifiques à la noyade ne doivent pas être omis ?",
        choices: [
          { text: "Durée d'immersion estimée, température de l'eau (froide/chaude/tiède), eau douce ou salée, délai avant les premières insufflations, durée RCP, température corporelle mesurée", correct: true },
          { text: "GCS actuel et constantes à l'arrivée — les urgences ont le reste du dossier", correct: false },
          { text: "La transmission noyade est identique à tout autre ACR pédiatrique", correct: false }
        ],
        feedback: {
          correct: "Ces éléments orientent des décisions spécifiques : eau froide + durée immersion guident la décision de prolonger la réanimation ou d'envisager l'ECMO. Eau douce vs salée = gestion électrolytique différente. Délai avant ventilation = évaluation du dommage hypoxique. Ces informations n'existent que dans votre fiche.",
          incorrect: "La noyade a des spécificités pronostiques utilisées pour décider l'hypothermie thérapeutique ou l'ECMO. Ces données ne figurent nulle part ailleurs que dans votre transmission.",
          naca: "NACA VI"
        }
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-06 : AVP — Polytraumatisé haute énergie
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-06",
    title: "AVP — Moto vs. camion, Homme 31 ans",
    context: "Fribourg, route cantonale. 19h45. Motard éjecté à ~80 km/h. Casque fragmenté. Inconscient sur la chaussée. Déformation membre inférieur gauche, saignement actif.",
    questions: [
      {
        patient: { hr: 130, spo2: 89, bp: "86/50", rr: 28, gcs: 8, ecg: "sinusal_tachy", state: "semi-conscient" },
        text: "Mécanisme à haute énergie. Dans la démarche <C>ABCDE, quel est le premier élément à évaluer et pourquoi ?",
        choices: [
          { text: "<C> Catastrophic bleeding : contrôler toute hémorragie externe massive AVANT d'évaluer l'airway — une hémorragie artérielle tue en 2-3 minutes", correct: true },
          { text: "A Airway : les voies aériennes restent la priorité absolue sur tout patient, même traumatisé", correct: false },
          { text: "D Disability : le GCS 8 est l'indicateur le plus urgent sur un trauma à haute énergie", correct: false }
        ],
        feedback: {
          correct: "<C>ABCDE place le contrôle hémorragique AVANT l'airway car une hémorragie externe artérielle est la cause de mort la plus rapidement évitable. Un garrot ou une compression posé en 30 secondes peut sauver une vie là où gérer l'airway prend plusieurs minutes.",
          incorrect: "Sur trauma à haute énergie, l'hémorragie externe massive tue avant l'obstruction des voies aériennes. L'algorithme <C>ABCDE (et non ABCDE) est le standard moderne pour le traumatisme.",
          naca: "NACA V-VI"
        }
      },
      {
        patient: { hr: 136, spo2: 88, bp: "82/48", rr: 30, gcs: 8, ecg: "sinusal_tachy", state: "semi-conscient" },
        text: "Fracture du fémur gauche ouverte, saignement artériel pulsatile. La compression directe ne contrôle pas. Quelle action ?",
        choices: [
          { text: "Garrot tourniquet à la racine de la cuisse gauche, noter l'heure de pose sur le garrot ET sur la fiche, signaler l'heure exacte au 144", correct: true },
          { text: "Pansement compressif et surélever le membre — plus respectueux de la vascularisation distale", correct: false },
          { text: "Attendre le SMUR pour poser le garrot — risque de nécrose sans supervision médicale", correct: false }
        ],
        feedback: {
          correct: "Le garrot tourniquet sur hémorragie artérielle fémorale est une compétence autonome du secouriste avancé — aucune supervision médicale requise. L'heure de pose sur le garrot ET la fiche est OBLIGATOIRE : l'ischémie est irréversible après 2h. Pas de garrot = décès probable en minutes.",
          incorrect: "Sur hémorragie artérielle, compression et surélévation sont insuffisantes. Attendre le médecin coûte la vie du patient. Le garrot est précisément dans vos compétences autonomes pour cette raison.",
          naca: "NACA VI"
        }
      },
      {
        patient: { hr: 140, spo2: 87, bp: "78/44", rr: 32, gcs: 7, ecg: "sinusal_tachy", state: "semi-conscient" },
        text: "Vous suspectez un pneumothorax ou hémothorax sans imagerie disponible. Quels signes cliniques recherchez-vous ?",
        choices: [
          { text: "Percussion : matité (hémothorax) ou tympanisme (pneumothorax). Auscultation : silence unilatéral. Déviation trachéale (pneumothorax sous tension). Transmettre la suspicion précise au 144.", correct: true },
          { text: "Impossible sans imagerie — noter uniquement 'thorax traumatisé' dans la transmission", correct: false },
          { text: "Ponctionner le 2ème espace intercostal gauche si vous suspectez un pneumothorax sous tension", correct: false }
        ],
        feedback: {
          correct: "L'examen clinique guide la suspicion : percussion mate (liquide = hémothorax), tympanisme (air = pneumothorax), silence auscultatoire unilatéral, trachée déviée (pneumothorax sous tension). Votre suspicion précise transmise au 144 permet au médecin SMUR d'agir dès son arrivée.",
          incorrect: "La ponction pleurale est un acte médical hors compétences autonomes du secouriste avancé. 'Thorax traumatisé' est trop vague. Votre examen clinique structuré fournit une suspicion précise et exploitable.",
          naca: "NACA VI"
        }
      },
      {
        patient: { hr: 118, spo2: 92, bp: "92/58", rr: 26, gcs: 7, ecg: "sinusal_tachy", state: "semi-conscient" },
        text: "Le casque intégral doit être retiré pour évaluer et sécuriser les voies aériennes. Comment procédez-vous ?",
        choices: [
          { text: "Technique à 2 sauveteurs obligatoire : 1er maintient l'axe tête-cou-tronc en dessous, 2ème défait la jugulaire, écarte les joues du casque et extrait dans l'axe", correct: true },
          { text: "Retirer seul rapidement — l'airway est une urgence qui prime sur la protection cervicale", correct: false },
          { text: "Ne jamais retirer le casque en pré-hospitalier — toujours attendre les urgences", correct: false }
        ],
        feedback: {
          correct: "Le retrait à 2 sauveteurs est la technique standard IAS 3. Op1 maintient l'axe tête-cou-tronc par en dessous. Op2 défait la jugulaire, écarte latéralement les joues du casque, extrait dans l'axe strict. Indispensable pour libérer les voies aériennes tout en protégeant le rachis.",
          incorrect: "Le retrait à 1 sauveteur risque une mobilisation cervicale sur fracture instable. Attendre les urgences sur airway compromis n'est pas une option. La technique à 2 est précisément dans vos compétences pour cette situation.",
          naca: "NACA V-VI"
        }
      },
      {
        patient: { hr: 110, spo2: 97, bp: "102/64", rr: 14, gcs: 7, ecg: "sinusal_tachy", state: "stabilisé" },
        text: "Pour le transport vers le trauma center, quelle immobilisation choisissez-vous et pourquoi ?",
        choices: [
          { text: "Matelas coquille aspiratif : immobilise tout l'axe tête-cou-tronc-membres en position anatomique — standard polytraumatisme", correct: true },
          { text: "Collier cervical seul : rapide, suffisant sur patient hémodynamiquement stable", correct: false },
          { text: "Plan dur (spine board) seul : adapté au transport et permet les radios sans mobilisation", correct: false }
        ],
        feedback: {
          correct: "Matelas coquille = référence pour le polytraumatisme. Il immobilise tout l'axe (cervical, dorsal, lombaire + membres) dans une coque anatomique épousant le patient. Le collier seul ne protège pas le rachis thoracolombaire. La spine board est un outil de relevage — pas d'immobilisation de transport.",
          incorrect: "Le collier cervical n'immobilise que la charnière cervicale supérieure. Sur AVP à haute énergie, les lésions thoracolombaires sont fréquentes. La spine board rigide expose aux escarres lors de transports longs.",
          naca: "NACA V-VI"
        }
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-07 : AVC — Femme 72 ans
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-07",
    title: "Suspicion AVC — Femme 72 ans",
    context: "Lausanne, domicile. 10h15. Femme de 72 ans a soudainement perdu la parole et ne peut plus lever le bras droit en préparant le petit-déjeuner. ATCD : HTA, fibrillation auriculaire sous Xarelto.",
    questions: [
      {
        patient: { hr: 88, spo2: 97, bp: "188/112", rr: 18, gcs: 13, ecg: "sinusal_tachy", state: "consciente" },
        text: "Vous arrivez 8 minutes après le début des symptômes. Comment évaluez-vous rapidement la suspicion d'AVC ?",
        choices: [
          { text: "Score FAST : Face (asymétrie faciale ?), Arms (déficit moteur bras ?), Speech (trouble du langage ?), Time (heure exacte du début des symptômes ?)", correct: true },
          { text: "GCS < 15 = AVC confirmé, orienter vers les urgences sans délai", correct: false },
          { text: "Attendre le résultat du scope cardiaque pour confirmer l'origine embolique avant d'alerter le 144", correct: false }
        ],
        feedback: {
          correct: "Le score FAST est l'outil de dépistage rapide validé pour le secouriste. L'heure exacte du début des symptômes est CRUCIALE : la thrombolyse est possible jusqu'à 4h30, la thrombectomie jusqu'à 24h. Chaque minute perdue = 1,9 million de neurones détruits. Alerter le 144 immédiatement avec ces données.",
          incorrect: "Le GCS peut être 15 sur un AVC avec déficit moteur isolé. Attendre le scope retarde une alerte critique. Le FAST + heure de début sont vos outils de première ligne.",
          naca: "NACA IV-V – AVC probable"
        }
      },
      {
        patient: { hr: 90, spo2: 96, bp: "192/114", rr: 18, gcs: 13, ecg: "sinusal_tachy", state: "consciente" },
        text: "FAST positif. TA 192/114 mmHg. Que faites-vous concernant cette hypertension artérielle ?",
        choices: [
          { text: "Ne pas traiter l'HTA sans ordre médical : sur AVC ischémique aigu, l'HTA est une réponse protectrice pour maintenir la perfusion cérébrale — la baisser peut aggraver les lésions", correct: true },
          { text: "Demander à la patiente si elle a son traitement antihypertenseur pour qu'elle prenne une dose supplémentaire", correct: false },
          { text: "Allonger à plat pour abaisser la TA par réflexe vasomoteur et améliorer la perfusion cérébrale", correct: false }
        ],
        feedback: {
          correct: "Sur AVC ischémique aigu, l'HTA est compensatrice — elle maintient la perfusion de la zone pénombre (tissu encore viable). Toute réduction de TA en pré-hospitalier risque d'étendre l'infarctus. La gestion antihypertensive sur AVC est une décision médicale strictement encadrée, jamais autonome.",
          incorrect: "Administrer ou faire prendre un antihypertenseur sur AVC sans ordre médical est contre-indiqué. La position à plat augmente le risque d'inhalation si dysphagie et n'a pas d'effet significatif sur la TA.",
          naca: "NACA IV-V"
        }
      },
      {
        patient: { hr: 88, spo2: 96, bp: "190/112", rr: 18, gcs: 13, ecg: "sinusal_tachy", state: "consciente" },
        text: "La patiente prend du Xarelto (anticoagulant). Quelle information transmettez-vous en priorité absolue et pourquoi ?",
        choices: [
          { text: "Nom du médicament, dosage, heure de la dernière prise + heure exacte du début des symptômes — la thrombolyse est contre-indiquée sous anticoagulant actif", correct: true },
          { text: "Uniquement l'heure du début des symptômes — le traitement anticoagulant est une information secondaire gérée à l'hôpital", correct: false },
          { text: "Ne pas mentionner le Xarelto pour ne pas biaiser la décision de thrombolyse en centre AVC", correct: false }
        ],
        feedback: {
          correct: "La thrombolyse (tPA) est contre-indiquée sous anticoagulant actif — son administration pourrait être fatale. L'heure de la dernière prise de Xarelto + heure de début des symptômes permettent au médecin d'évaluer l'anticoagulation résiduelle et de choisir la stratégie (thrombectomie seule). Information vitale.",
          incorrect: "Omettre le traitement anticoagulant peut conduire à une thrombolyse fatalement contre-indiquée. Votre transmission médicamenteuse complète est une responsabilité fondamentale du secouriste avancé.",
          naca: "NACA IV-V"
        }
      },
      {
        patient: { hr: 86, spo2: 95, bp: "186/110", rr: 16, gcs: 13, ecg: "sinusal_tachy", state: "consciente" },
        text: "La patiente salive abondamment et a du mal à avaler. Quelle position adoptez-vous et quelle précaution s'impose ?",
        choices: [
          { text: "Position demi-assise 30-45°, tête inclinée légèrement du côté atteint, aucune prise orale, aspiration buccale douce prête", correct: true },
          { text: "Décubitus dorsal strict pour maximiser la perfusion cérébrale", correct: false },
          { text: "Donner de petites gorgées d'eau pour tester la déglutition et maintenir l'hydratation", correct: false }
        ],
        feedback: {
          correct: "Dysphagie sur AVC = risque majeur de pneumonie d'inhalation. Position demi-assise avec légère inclinaison vers le côté paralysé facilite le drainage. Aucune prise orale sans évaluation médicale de la déglutition. L'aspiration buccale douce prévient l'accumulation de sécrétions.",
          incorrect: "Le décubitus favorise l'inhalation de sécrétions et augmente l'œdème cérébral. Tester la déglutition avec de l'eau sur AVC = risque de pneumonie d'inhalation immédiate.",
          naca: "NACA IV-V"
        }
      },
      {
        patient: { hr: 86, spo2: 95, bp: "184/108", rr: 16, gcs: 13, ecg: "sinusal_tachy", state: "consciente" },
        text: "Le mari paniqué demande 'c'est grave ?' et veut tout de suite lui donner son médicament pour la tension. Comment répondez-vous ?",
        choices: [
          { text: "Communication honnête et calme : 'suspicion d'AVC, traitement possible si on arrive vite'. Refuser le médicament antihypertenseur et expliquer pourquoi. Lui demander l'heure exacte du début des symptômes.", correct: true },
          { text: "Le rassurer complètement : 'ce n'est probablement rien de grave, nous gérons'", correct: false },
          { text: "Laisser le mari donner le médicament — il connaît le traitement habituel de sa femme", correct: false }
        ],
        feedback: {
          correct: "Communication honnête sans catastrophisme. Mentionner la possibilité de traitement motive la coopération et réduit l'anxiété. Le mari peut confirmer l'heure exacte de début — information clinique précieuse. Refuser le médicament antihypertenseur en expliquant protège la patiente et informe la famille.",
          incorrect: "Minimiser un AVC est une erreur éthique. Laisser donner un antihypertenseur sur AVC ischémique peut aggraver les lésions. La famille est un partenaire d'information — pas un obstacle.",
          naca: "NACA IV-V"
        }
      }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // CAS IAS3-08 : Brûlures — Incendie appartement
  // ────────────────────────────────────────────────────────────────
  {
    id: "IAS3-08",
    title: "Brûlures — Homme 52 ans, incendie",
    context: "Genève. 03h30. Incendie cuisine. Homme sorti par les pompiers. Brûlures visage, cou, deux membres supérieurs. Cheveux roussis, suie autour de la bouche. Voix rauque.",
    questions: [
      {
        patient: { hr: 118, spo2: 91, bp: "136/88", rr: 24, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
        text: "Voix rauque, suie autour de la bouche, poils nasaux roussis. Quelle est la menace vitale n°1 à identifier et signaler en urgence ?",
        choices: [
          { text: "Inhalation de fumée avec œdème laryngé évolutif : les voies aériennes peuvent s'obstruer complètement en 15-30 minutes. Alerter le 144 pour intubation médicale urgente.", correct: true },
          { text: "Les brûlures cutanées étendues sont la priorité : calculer la surface brûlée en premier", correct: false },
          { text: "SpO₂ 91% acceptable sur brûlé — surveiller à distance sans alerter en urgence", correct: false }
        ],
        feedback: {
          correct: "Voix rauque + suie buccale + poils nasaux roussis = triade de l'inhalation de fumée. L'œdème laryngé peut obstruer totalement les voies aériennes en 15-30 minutes. La fenêtre d'intubation se ferme rapidement. La SpO₂ est faussée par le CO — 91% peut cacher une intoxication grave.",
          incorrect: "Les brûlures cutanées ne tuent pas en quelques minutes. L'obstruction laryngée sur inhalation, oui. La SpO₂ est faussée par la carboxyhémoglobine. La reconnaissance de cette triade et l'alerte immédiate sont votre premier rôle.",
          naca: "NACA V – Inhalation fumée + brûlures étendues"
        }
      },
      {
        patient: { hr: 120, spo2: 92, bp: "132/84", rr: 22, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
        text: "Estimez la surface corporelle brûlée (Règle des 9 de Wallace) : face (4,5%), cou (1%), deux membres supérieurs (9% chacun).",
        choices: [
          { text: "Environ 23-24% de la surface corporelle totale (4,5 + 1 + 9 + 9 = 23,5%)", correct: true },
          { text: "9% — la tête entière équivaut à 9%, pas seulement la face", correct: false },
          { text: "Plus de 40% — les membres supérieurs représentent 18% chacun", correct: false }
        ],
        feedback: {
          correct: "Règle des 9 : tête+cou = 9% total (face ≈ 4,5%, cou ≈ 1%), chaque membre supérieur = 9% → total 23-24%. Surface > 20% = critère de transfert en centre brûlés spécialisé (CHUV Lausanne). Ce calcul guide la régulation médicale et la réanimation que le médecin prescrira.",
          incorrect: "La tête entière = 9% (face avant ≈ 4,5%). Chaque membre supérieur = 9% (pas 18%). Règle mémo : tête 9, bras 9, thorax ant/post 9 chacun, abdomen 9, cuisse 9, jambe 7, périnée 1.",
          naca: "NACA V"
        }
      },
      {
        patient: { hr: 122, spo2: 92, bp: "130/82", rr: 22, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
        text: "Vous devez refroidir les brûlures. Quelle technique appliquez-vous selon le protocole BSC Genève ?",
        choices: [
          { text: "Eau à 15°C pendant 20 minutes maximum. Si surface > 20% : refroidissement localisé uniquement pour éviter l'hypothermie systémique.", correct: true },
          { text: "Eau la plus froide possible (glace, eau glacée) le plus longtemps possible pour stopper la brûlure en profondeur", correct: false },
          { text: "Ne pas refroidir — la vasoconstriction aggrave les lésions tissulaires profondes", correct: false }
        ],
        feedback: {
          correct: "Protocole BSC Genève : eau à 15°C, 20 minutes maximum. Eau trop froide (<10°C) = vasoconstriction aggravante + risque d'hypothermie. Sur surface > 20%, refroidissement total expose à l'hypothermie systémique — refroidissement localisé uniquement. Efficace dans les 30 premières minutes.",
          incorrect: "L'eau glacée aggrave les lésions par vasoconstriction intense et provoque une hypothermie systémique. L'absence totale de refroidissement est également une erreur. La température de 15°C est un paramètre précis du protocole.",
          naca: "NACA V"
        }
      },
      {
        patient: { hr: 124, spo2: 92, bp: "128/80", rr: 22, gcs: 13, ecg: "sinusal_tachy", state: "conscient" },
        text: "Le patient évalue sa douleur à 8/10. Vous n'avez pas d'antalgique dans votre matériel. Que faites-vous ?",
        choices: [
          { text: "Maintenir le refroidissement actif (analgésiant intrinsèque), couverture de survie sur zones non brûlées, position de confort, communication rassurante, alerter pour antalgésie médicale urgente", correct: true },
          { text: "Donner du paracétamol oral — c'est dans votre trousse et sans risque sur brûlures", correct: false },
          { text: "Attendre l'arrivée du médecin sans rien faire — l'analgésie est exclusivement médicale", correct: false }
        ],
        feedback: {
          correct: "Sans antalgique disponible en autonomie, vous pouvez : continuer le refroidissement (qui a un effet analgésique), protéger les zones non brûlées du froid, communiquer de façon rassurante (analgésie psychologique), et alerter le 144 en signalant la douleur pour accélérer l'arrivée médicale. Ce n'est pas ne rien faire.",
          incorrect: "Le paracétamol oral est généralement insuffisant sur brûlures graves (EVA 8). Le refroidissement actif est lui-même analgésiant. Signaler la douleur au 144 permet au médecin régulateur d'anticiper l'antalgésie à son arrivée.",
          naca: "NACA V"
        }
      },
      {
        patient: { hr: 116, spo2: 93, bp: "126/78", rr: 20, gcs: 14, ecg: "sinusal", state: "conscient" },
        text: "Vers quel établissement orientez-vous ce patient et sur quels critères ?",
        choices: [
          { text: "Centre spécialisé brûlés (CHUV Lausanne ou USZ Zurich) : surface > 20% + localisation critique (face, cou, mains) + inhalation de fumée suspectée. Selon régulation médicale.", correct: true },
          { text: "HUG Genève : proximité géographique prioritaire, traumatologie générale suffit", correct: false },
          { text: "N'importe quel service d'urgences : le centre brûlés n'est nécessaire qu'au-delà de 50% de surface", correct: false }
        ],
        feedback: {
          correct: "Critères de transfert centre brûlés suisse : surface > 20%, localisation critique (face, mains, périnée), inhalation de fumée, brûlures électriques ou chimiques, âges extrêmes. Ce patient cumule 3 critères. La régulation médicale décide selon disponibilité des lits. CHUV et USZ sont les 2 centres de référence.",
          incorrect: "HUG ne dispose pas d'unité brûlés spécialisée. Le seuil de 50% est obsolète — les critères actuels de transfert spécialisé sont bien plus précoces. Ce patient cumule plusieurs critères indépendants.",
          naca: "NACA V"
        }
      }
    ]
  }

];
