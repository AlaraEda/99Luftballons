# Inleverdocument CMTTHE01-4 - GAME

Dit is de game die ik gemaakt heb voor het vak Programmeren van Periode 4, leerjaar 1

## Speelbare game

Link naar de online speelbare game. X

## Checklist

- [x] De game heeft een startscherm en een eindscherm.
- [x] Er zijn geen bugs.

## Toelichting OOP 

Licht toe waar en waarom je deze OOP principes hebt toegepast

 - **Classes**
   - *Waarom toegepast?*
   
   Een "Class" is een uitrekbaar programmeer-code-template voor het creeeren van objecten. In classes worden beginwaardes gecreeerd die de status van het object aangeven. Ook kun je in een class implementaties van het gedrag van het object aangeven. 
   
      Mijn hele document staat vol met classes. Ik gebruik classes om functies die met het object te maken hebben te bewaren. De functies die ik dan in een bepaalde class heb gemaakt roep ik dan via een andere class aan, door dit te doen zijn al mijn classes met elkaar verbonden. 
      
   - *Waar toegepast?*
Één van mijn meest grootste voorbeelden van waar ik classes heb toegepast is "playscreen.ts"
class Playscreen {

    private screen : Screens 
    private timer : Timer
    private score : Score
    private balloon:Balloon[] = []
   

    constructor(s:Screens) {
        //Screen moet een waarde hebben
        this.screen = s
    
        this.timer = new Timer()                //Maak Timer aan van Timer class.
        
        this.score = new Score()                //Maakt een nieuw Scoreboard aan.

        //Push aantal Balloon
        for (let i = 0; i < 30; i++) {
            
           this.balloon.push(new Balloon(this.score))
        }

 - **Encapsulation**
   - *Waarom toegepast?*
   - *Waar toegepast?*
   
 - **Composition**
   - *Waarom toegepast?*
   - *Waar toegepast?*
   
 - **Inheritance**
   - *Waarom toegepast?*
   - *Waar toegepast?*


## Klassendiagram

Een klassendiagram van de game.

## Peer review
Dit is de peer-review die ik een aantal weken geleden heb geschreven voor Nienke Overmeer;
https://github.com/Artemiss0/Game/issues/3

## Extra uitdaging

Licht toe welke extra uitdaging uit de modulewijzer je hebt toegepast.
