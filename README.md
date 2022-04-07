# React + The Movie Database
## Test technique pour Entourage
Voici quelques infos autour de mon projet créé pour le test technique de l\'[association Entourage](https://www.entourage.social/), et quelques explications sur les choix réalisés. Vous pouvez retrouver la version déployée [ici](https://wonderful-rugelach-1edc48.netlify.app/).

L\'interface permet aux utilisateurs de voir les films les plus populaires parmis ceux récemment sortis. Ils peuvent choisir de les trier par ordre de sortie. Un premier tri est effectué lors du call api, la requête filtre uniquement les films sortis au cinéma, en Europe, ayant un score supérieure à 1.

En cliquant sur l\'affiche d\'un film, on arrive sur une page descriptive où l\'on retrouve le synopsis du film, son affiche, son score, le réalisateur, la durée, le budget et les bénéfices du film. En descendant, on retrouve également les films recommandés s\'il y en a.

## Infos Technique

Le projet a été lancé avec [create-react-app](https://create-react-app.dev/) et utilise les packages suivants:

### [React.js](https://fr.reactjs.org/)

J\'ai choisi une approche moderne de React et JavaScript en créant des functional components plutôt que des class components, et en utilisant au maximum les capacités d\'ES6 (destructuring, fonctions fléchées, template literals...). Cette approche permet à mon sens d\'obtenir un code plus lisible et mieux organisé. J\'ai également utilisé [prop-types](https://www.npmjs.com/package/prop-types) pour faire une vérification très basique des types de props.

### [styled-components](https://styled-components.com/)

Styled components est une librairie permettant de combiner CSS et littéraux de gabarit pour styliser ses composants React. Je m\'en sers parincipalement pour une question de workflow, j\'aime particulièrement la structure que la librairie apporte tout en conservant une syntaxe de CSS classique (contrairement à d\'autres librairies comme Tailwind ou Bootstrap par exemple).

### [React Router](https://reactrouterdotcom.fly.dev/)

J\'ai utilisé React Router pour constituer mes routes et créer une navigation simplement. Son utilisation a été relativement limitée, l\'app étant plutôt simple, je m\'en suis servi pour créer la route \"home\" et la \"view\" de chaque film, ainsi qu\'un \"not found\" pour les routes non-existantes.
