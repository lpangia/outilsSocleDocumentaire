// Définir l'arbre décisionnel
const decisionTree = {
  question: "Quel scénario correspond le mieux à votre situation ?",
  answers: {
    "Je fais de l'archivage numérique sans SAE": {
      question: "Quel est votre objectif principal ?",
      answers: {
        "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
          result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
          additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation."
        },
        "Assurer la meilleure conservation en dépit de l'absence de SAE": {
          result: "Le document qu'il vous faut est la politique de pérennisation.",
          additionalInfo: "Ce document vous permettra de définir les recommandations relatives à la pérennisation des métadonnées, formats et supports."
        },
        "Cadrer les relations avec les services": {
          question: "Quel aspect souhaitez-vous cadrer ?",
          answers: {
            "Cadrer le versement d'une typologie documentaire": {
              result: "Le document qu'il vous faut est le contrat de versement."
            },
            "Cadrer les versements d'un service": {
              result: "Le document qu'il vous faut est le contrat de service."
            }
          }
        }
      }
    },
    "Je fais de l'archivage numérique avec un SAE internalisé": {
      question: "Quel est votre objectif principal ?",
      answers: {
        "Conformité interne": {
          help: {
            text: "Cadrer les actions d'archivage dans une démarche de qualité interne, sans aller jusqu'à une certification",
            image: "https://static.wikia.nocookie.net/the-scrappy/images/c/cb/Clippy.png/revision/latest?cb=20231027172058"  // Clippy !!!! <3
          },
          question: "Quel est votre besoin spécifique ?",
          answers: {
            "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
              result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
              additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation."
            },
            "Cadrer les relations avec les services": {
              question: "Quel aspect souhaitez-vous cadrer ?",
              answers: {
                "Cadrer le versement d'une typologie documentaire": {
                  result: "Le document qu'il vous faut est le contrat de versement."
                },
                "Cadrer les versements d'un service": {
                  result: "Le document qu'il vous faut est le contrat de service."
                }
              }
            }
          }
        },
        "Je propose un service mutualisé": {
          result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offres de service.",
          additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation et la déclaration des pratiques d'archivage."
        }
      }
    },
    "Je fais de l'archivage numérique avec un SAE partiellement ou totalement externalisé": {
      question: "Quel est votre objectif principal ?",
      answers: {
        "Conformité interne": {
          help: {
            text: "Cadrer les actions d'archivage dans une démarche de qualité interne, sans aller jusqu'à une certification",
          },
          question: "Quel est votre besoin spécifique ?",
          answers: {
            "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
              result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
              additionalInfo: "Pour aller plus loin ou si vous avez déjà rédigé une politique d'archivage, pensez à la politique de pérennisation."
            },
            "Cadrer les relations avec les services": {
              question: "Quel aspect souhaitez-vous cadrer ?",
              answers: {
                "Cadrer le versement d'une typologie documentaire": {
                  result: "Le document qu'il vous faut est le contrat de versement."
                },
                "Cadrer les versements d'un service": {
                  result: "Le document qu'il vous faut est le contrat de service."
                }
              }
            }
          }
        },
        "Tiers-archivage": {
          result: "Il vous faut une convention d'archivage. Pour la mise en place d'un SAE externalisé, vous devez également établir un cahier des charges et vous assurer que le prestataire est agréé."
        },
        "Tiers-hébergement": {
          result: "Il vous faut un cahier des charges. Pour la mise en place d'un SAE externalisé, vous devez également vous assurer que le prestataire est agréé."
        },
        "Mutualisation": {
          question: "Quelle est votre situation ?",
          answers: {
            "Je veux adhérer à un service mutualisé": {
              result: "Il vous faut une convention d'archivage."
            },
            "Je propose un service mutualisé": {
              result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offres de service.",
              additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation et la déclaration des pratiques d'archivage."
            }
          }
        },
        "Dépôt auprès des AD ou groupement de collectivités territoriales": {
          result: "Il vous faut une convention de dépôt."
        }
      }
    },
    "Je mets en place un SAE": {
      question: "Quel est votre besoin principal ?",
      answers: {
        "Conformité interne": {
          help: {
            text: "Cadrer les actions d'archivage dans une démarche de qualité interne, sans aller jusqu'à une certification",
          },
          question: "Quel est votre besoin spécifique ?",
          answers: {
            "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
              result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
              additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation."
            },
            "Cadrer les relations avec les services": {
              question: "Quel aspect souhaitez-vous cadrer ?",
              answers: {
                "Cadrer le versement d'une typologie documentaire": {
                  result: "Le document qu'il vous faut est le contrat de versement."
                },
                "Cadrer les versements d'un service": {
                  result: "Le document qu'il vous faut est le contrat de service."
                }
              }
            }
          }
        },
        "Tiers-archivage": {
          result: "Il vous faut une convention d'archivage. Pour la mise en place d'un SAE externalisé, vous devez également établir un cahier des charges et vous assurer que le prestataire est agréé."
        },
        "Tiers-hébergement": {
          result: "Il vous faut un cahier des charges. Pour la mise en place d'un SAE externalisé, vous devez également vous assurer que le prestataire est agréé."
        },
        "Mutualisation": {
          question: "Quelle est votre situation ?",
          answers: {
            "Je veux adhérer à un service mutualisé": {
              result: "Il vous faut une convention d'archivage."
            },
            "Je propose un service mutualisé": {
              result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offres de service.",
              additionalInfo: "Pour aller plus loin ou si vous avez déjà rédigé une politique d'archivage, pensez à la politique de pérennisation et la déclaration des pratiques d'archivage."
            }
          }
        },
        "Certification (NF 461)": {
          result: "Il faut constituer la Documentation Générale et Technique du Système (DGTS)."
        }
      }
    }
  }
};
// Variables globales
let atRoot = true; // Variable qui vérifie si on est à la racine
let currentNode = decisionTree;
const historyStack = []; // Pile pour garder une trace des nœuds précédents

// Afficher la question ou le résultat
function showQuestion() {
  const container = document.getElementById('question-container');
  container.innerHTML = ''; // Effacer l'ancien contenu

  // Supprimer le bouton "Retour en arrière" si on est à la racine ou sur un résultat
  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.remove();
  }

  // Ajouter la question
  if (currentNode.question) {
    atRoot = false; // On n'est plus à la racine après la première question

    const questionElement = document.createElement('p');
    questionElement.textContent = currentNode.question;
    container.appendChild(questionElement);

    // Ajouter les réponses sous forme de boutons
    for (const answer in currentNode.answers) {
      const button = document.createElement('button');
      button.className = "btn";
      button.textContent = answer;

      // Ajouter une bulle d'aide pour "Conformité interne"
      if (currentNode.answers[answer].help) {
        const helpIcon = document.createElement('span');
        helpIcon.className = "help-icon";
        helpIcon.textContent = "?";  // Point d'interrogation pour la bulle d'aide

        button.appendChild(helpIcon);

        helpIcon.onmouseover = () => {
          const tooltip = document.createElement('div');
          tooltip.className = "tooltip";
          tooltip.innerHTML = `<img src="${currentNode.answers[answer].help.image}" alt="Bulle d'aide" class="tooltip-image">
                               <span>${currentNode.answers[answer].help.text}</span>`;
          helpIcon.appendChild(tooltip);

          helpIcon.onmouseout = () => {
            tooltip.remove();
          };
        };
      }

      button.onclick = () => handleAnswer(answer);
      container.appendChild(button);
    }

    // Ajouter le bouton "Retour en arrière" uniquement si nécessaire
    if (historyStack.length > 0 && !document.querySelector('.back-button')) {
      const backButton = document.createElement('button');
      backButton.className = "btn back-button";
      backButton.textContent = "Retour en arrière";
      backButton.onclick = goBackInTree;
      container.appendChild(backButton);
    }
  } else if (currentNode.result) {
    console.log('Affichage du résultat :', currentNode.result);  // Debugging : afficher le résultat dans la console

    // Afficher le résultat principal
    const resultElement = document.createElement('p');
    // Remplacer les termes par des spans avec tooltip
    let resultText = currentNode.result;
    
    // Définitions des termes
    const definitions = {
      'politique d\'archivage électronique': 'Politique d\'archivage électronique (PAE) : Fixe le cadre de référence du processus d\'archivage électronique, énonce les principes et règles sur lequel est fondé le SAE : principes réglementaires et normatifs, principes organisationnels, principes de mise en œuvre. Niveau fonctionnel.',
      'contrat de service': 'Contrat de service (CS) : Fixe les engagements des intervenants dans le processus d\'archivage. Conclu entre un service versant, producteur, éventuellement un opérateur de versement et le service d\'archives responsable du SAE. Précise les conditions de fourniture du SAE par le SA à un SV/SP identifié.',
      'contrat de versement': 'Contrat de versement (CV) : Précise les conditions archivistiques et techniques dans lesquelles les informations sont échangées entre un SV et un SA au cours du processus de versement d\'archives identifiées. Décrit les procédures et règles pour le transfert.',
      'déclaration des pratiques d\'archivage': 'Déclaration des pratiques d\'archivage (DPA) : Complément de la politique d\'archivage. Document détaillant, pour chaque engagement de la Politique d\'Archivage, les éléments mis en œuvre pour y parvenir. Décrit les moyens techniques et organisationnels mis en œuvre.',
      'politique de pérennisation': 'Politique de pérennisation (PP) : Document de gouvernance qui peut faire partie de la PA ou non et définit les recommandations relatives à la pérennisation des métadonnées, formats, supports… Elle inclut la classification des formats.',
      'convention d\'archivage': 'Convention d\'archivage : Engagement entre un service d\'archives et un propriétaire d\'archives définissant les caractéristiques du service d\'archivage électronique en réponse à la politique d\'archivage du propriétaire d\'archives.',
      'cahier des charges': 'Cahier des charges : Document détaillant les spécifications techniques et fonctionnelles du SAE à mettre en place.',
      'convention de dépôt': 'Convention de dépôt : Vise à définir les modalités d\'archivage, de paramétrages du SAE et de réalisation des opérations de transfert des archives numériques produites par un service producteur/Collectivité.',
      'documentation générale et technique du système': 'Documentation Générale et Technique du Système (DGTS) : Ensemble organisé de documentations de référence, décrivant l\'organisation, l\'architecture fonctionnelle et technique, les environnements système et réseau, permettant l\'exploitation du SAE.',
      'offres de services': 'Offres de services (OS) : Définit, pour chacun des clients du service et au regard de la PA et de la PP, les niveaux de services qui peuvent être proposés par le service d\'archivage numérique.',
      'politique d\'archivage': 'Politique d\'archivage (PA) : La pierre angulaire du dispositif documentaire du SAE. Elle se situe au niveau fonctionnel et est indépendante des choix et implémentations techniques. Elle doit donc décrire le cadre général du service.'
    };

    // Trier les termes par longueur décroissante pour traiter d'abord les termes les plus longs
    const sortedTerms = Object.keys(definitions).sort((a, b) => b.length - a.length);

    // Traiter d'abord les cas spéciaux (termes avec parenthèses)
    if (resultText.includes('politique d\'archivage (ou politique d\'archivage électronique)')) {
      resultText = resultText.replace(
        'politique d\'archivage (ou politique d\'archivage électronique)',
        '<span class="tooltip">politique d\'archivage<span class="tooltiptext">Politique d\'archivage (PA) : La pierre angulaire du dispositif documentaire du SAE. Elle se situe au niveau fonctionnel et est indépendante des choix et implémentations techniques. Elle doit donc décrire le cadre général du service.</span></span> (ou <span class="tooltip">politique d\'archivage électronique<span class="tooltiptext">Politique d\'archivage électronique (PAE) : Fixe le cadre de référence du processus d\'archivage électronique, énonce les principes et règles sur lequel est fondé le SAE : principes réglementaires et normatifs, principes organisationnels, principes de mise en œuvre. Niveau fonctionnel.</span></span>)'
      );
    } else {
      // Remplacer les autres termes par leurs infobulles
      for (const term of sortedTerms) {
        const regex = new RegExp(`\\b${term}\\b(?![^<]*>|[^<>]*</)`, 'gi');
        resultText = resultText.replace(regex, `<span class="tooltip">${term}<span class="tooltiptext">${definitions[term]}</span></span>`);
      }
    }

    resultElement.innerHTML = resultText;
    const resultBlock = document.createElement('div');
    resultBlock.className = "result-block";
    resultBlock.appendChild(resultElement);
    container.appendChild(resultBlock);

    // Vérifier et afficher additionalInfo si présent
    if (currentNode.additionalInfo) {  // Utilisation de currentNode.additionalInfo
      const additionalInfoElement = document.createElement('div');
      additionalInfoElement.className = "additional-info"; // Classe pour styliser
      additionalInfoElement.textContent = currentNode.additionalInfo;  // Affichage du texte
      container.appendChild(additionalInfoElement);
    }

    // Bloc informatif (optionnel)
    const informativeBlock = document.createElement('div');
    informativeBlock.className = "informative-block";

    const linkText = document.createElement('p');
    linkText.textContent = "Pour vous aider à visualiser les documents :";
    informativeBlock.appendChild(linkText);

    // Créer un conteneur pour les images
    const imagesContainer = document.createElement('div');
    imagesContainer.className = "images-container";
    imagesContainer.style.display = "flex";
    imagesContainer.style.flexDirection = "column";
    imagesContainer.style.alignItems = "center";
    imagesContainer.style.gap = "30px";
    imagesContainer.style.marginTop = "20px";

    // Fonction pour créer la modal
    function createModal(imageSrc) {
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.zIndex = '1000';
      modal.style.cursor = 'pointer';

      const modalImg = document.createElement('img');
      modalImg.src = imageSrc;
      modalImg.style.maxWidth = '90%';
      modalImg.style.maxHeight = '90%';
      modalImg.style.objectFit = 'contain';

      modal.appendChild(modalImg);
      document.body.appendChild(modal);

      modal.onclick = () => {
        modal.remove();
      };
    }

    // Première cartographie
    const cartoContainer1 = document.createElement('div');
    cartoContainer1.style.textAlign = "center";
    const title1 = document.createElement('h3');
    title1.textContent = "Vue d'ensemble des documents du socle documentaire";
    title1.style.marginBottom = "10px";
    const image1 = document.createElement('img');
    image1.src = "carto_politique_archivage_V5.pptx.png";
    image1.alt = "Vue d'ensemble des documents du socle documentaire";
    image1.style.maxWidth = "45%";
    image1.style.cursor = "pointer";
    image1.style.transition = "transform 0.2s";
    image1.onclick = () => createModal(image1.src);
    image1.onmouseover = () => image1.style.transform = "scale(1.05)";
    image1.onmouseout = () => image1.style.transform = "scale(1)";
    cartoContainer1.appendChild(title1);
    cartoContainer1.appendChild(image1);

    // Deuxième cartographie
    const cartoContainer2 = document.createElement('div');
    cartoContainer2.style.textAlign = "center";
    const title2 = document.createElement('h3');
    title2.textContent = "Relations entre les différents documents";
    title2.style.marginBottom = "10px";
    const image2 = document.createElement('img');
    image2.src = "carto_politique_archivage_V5.pptx (1).png";
    image2.alt = "Relations entre les différents documents";
    image2.style.maxWidth = "45%";
    image2.style.cursor = "pointer";
    image2.style.transition = "transform 0.2s";
    image2.onclick = () => createModal(image2.src);
    image2.onmouseover = () => image2.style.transform = "scale(1.05)";
    image2.onmouseout = () => image2.style.transform = "scale(1)";
    cartoContainer2.appendChild(title2);
    cartoContainer2.appendChild(image2);

    imagesContainer.appendChild(cartoContainer1);
    imagesContainer.appendChild(cartoContainer2);
    informativeBlock.appendChild(imagesContainer);
    container.appendChild(informativeBlock);

    // Ajouter le bouton "Recommencer le questionnaire" uniquement au niveau du résultat
    const restartButton = document.createElement('button');
    restartButton.className = "btn";
    restartButton.textContent = "Recommencer le questionnaire";
    restartButton.onclick = restart;

    const restartBlock = document.createElement('div');
    restartBlock.className = "restart-block";
    restartBlock.appendChild(restartButton);
    container.appendChild(restartBlock);
  }
}

// Gérer la réponse choisie
function handleAnswer(answer) {
  console.log('Réponse choisie :', answer); // Debugging : afficher la réponse choisie
  if (currentNode.answers && currentNode.answers[answer]) {
    historyStack.push(currentNode); // Sauvegarder le nœud actuel dans l'historique
    currentNode = currentNode.answers[answer]; // Naviguer dans l'arbre
    showQuestion(); // Mettre à jour l'affichage
  } else {
    console.log('Aucune réponse trouvée pour cette option.');
  }
}

// Retour en arrière dans l'arbre de décision
function goBackInTree() {
  if (historyStack.length > 0) {
    currentNode = historyStack.pop();
    showQuestion();
  }
}

// Recommencer le questionnaire
function restart() {
  currentNode = decisionTree;
  historyStack.length = 0;
  showQuestion();
}

// Démarrer le questionnaire
function startQuestionnaire() {
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    showQuestion();
}