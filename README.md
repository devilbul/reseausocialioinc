# reseausocialioinc

##### _cours android M1_ 

### __Partie I : Création et configuration du projet__

**a.** 
**b.** installation de ionic (npm, cordava, ionic), puis saisie de commande dans la console
```bash
ionic start myApp tabs
```

**c.** démarrage avec du serveur ionic,
```bash
ionic serve --lab
```

**d.** lecture des fichiers et dossiers composant le projet créé plutôt

### __Partie II : Modification du template et réalisation de la page article__

**a.** modification des fichiers du projet (avec le template Tab)

**b.** utilisation de ngForm, réalisation de :

![intégration](https://i.imgur.com/zq8ygy8.png)

**c.** création d'un fichier json et dans provider, afin de lire ce fichier
```json
{
  "feed": [
    {
      "id_feed": 0,
      "user_img": "https://ionicframework.com/img/docs/mcfly.jpg",
      "user_firstname": "Marc",
      "user_lastname": "Mollinari",
      "date_publication": "23/01/2018 9h30",
      "title": "Titre de mon article",
      "description": "La description de mon article",
      "img": "https://ionicframework.com/img/docs/delorean.jpg",
      "nb_comment": 3
    }
  ]
}

```

**d.** création d'une page detail, qui sera appélé en fonction de la cellule cliquée, par l'utilisateur
```java
openDetail(article: Article) {
    this.navCtrl.push(DetailPage, {article: article});
  }
```

### __Partie III : Page création d’article__

**a.** modification des fichiers du projet (avec le template Tab)

**b.** 
**c.** 
**d.** utilisation de ngForm, réalisation de :

![intégration](https://i.imgur.com/QW7J2ne.png)

**e.** utilisation de IonicStorage, avec les méthodes set et get, pour intéragir avec la base de donnée de device

### __Partie IV : Utilisation de firebase et de l'agenda__

**a.** installation et paramètrage des plugins pour firebase (angularfire2@4.0.0-rc.1 et firebase@4.2.0)

**b.** création d'un provider, afin de récupérer les données
```java 
return this.db.list('/events');
```

**c.** réalisation de :

![intégration](https://i.imgur.com/By4X3le.png)

**d.** j'ai commencé, en utilisant le module Calendar, de @ionic-natives, mais j'ai pas pu tester, il faut pour cela créer une apk pour tester sur un smartphone

fin du projet, je me suis arrêté ici !
