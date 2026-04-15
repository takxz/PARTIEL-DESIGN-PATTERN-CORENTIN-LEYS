Corentin LEYS

J'ai choisi le pattern Observer car il permet de notifier plusieurs composants de manière efficace lorsqu'un événement se produit, en l'occurence ici le service de notification qui envoie des mails, sms ou autres.

J'ai également choisi le pattern Factory pour créer les différentes notifications et pouvoir en ajouter par la suite facilement, en devant modifier le code que très peu.