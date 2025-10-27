# carrousel
carrousel sans bibliothèque

HTML :
La classe "carrousel-container" englobe entièrement le carrousel.
Les boutons "backward" et "forward" sont les flèches permettant de changer ce qui est affiché ( possibilité de remplacer les boutons par autre chose, tant qu'ils ont les classes "backward" et "forward".
La classe "carrousel" contient le carrousel, c'est-à-dire le contenu qui change, il porte un "overflow:hidden" qui affiche uniquement le contenu choisit.
Chaque div avec la classe "slide" correspond au contenu du carrousel ( si vous souhaitez rajouter une slide, mettez une div avec la classe "slide" et rajoutez votre contenu à l'intérieur.
La classe "active" est à placer sur la slide principale, celle qui s'affichera en première. 
Les classes "image-box" et "text-box" sont des exemples de contenu, libre à vous de les réutiliser ou non.

CSS : 
.carrousel-container : "display :flex" et "align-items: center" sont nécessaires.
.carrousel : "overflow: hidden" est nécessaire.
.carrousel-contenu : "display : flex" est nécessaire.
.slide : tout est nécessaire sauf le gap et le padding.
.backward, .forward : à voir selon vos boutons
Tout le reste est uniquement du style, libre à vous de l'enlever ou de le modifier.

JS : 

Les "const" sélectionnent les éléments afin de pouvoir intéragir avec eux.
La fonction showSlide() permet de changer le contenu selon l'appui sur les boutons
"forward.addEventListener" et "backward.addEventListener" regarde quel bouton a été cliqué et agit en conséquence.
La fonction setInterval() règle un changement automatique de contenu toutes les 5 secondes ( valeur à modifier pour changer le temps : "5000" )
