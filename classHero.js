class Hero {
  constructor(name, age, heroClass) {
    this.name = name;
    this.age = age;

  //Checking if the hero class is one of the available options.
  if (["warrior", "wizard", "monk", "ninja", "shooter"].includes(heroClass)) {
      this.heroClass = heroClass;
//Creating association between attackType-heroClass
      const attackAssociation = {
        warrior: "sword",
        wizard: "magic",
        monk: "martial arts",
        ninja: "shuriken",
        shooter: "gun"
      };
      this.attackType = attackAssociation[heroClass];

      const heroTitle = {
        warrior: "'the Mighty'",
        wizard: "'the Master of Magicians'",
        monk: "'the Dalai Lama'",
        ninja: "'the Shadow Master'",
        shooter: "the Headshot"
      };
      this.heroTitle = heroTitle[heroClass];
    } else {
      console.log("Classe de herói inválida");
    }
  }

  // Attack Method
  attack() {console.log(`${this.name}, ${this.heroTitle} is a ${this.heroClass} and performed an attack using ${this.attackType}`);
  }
}

let  top = new Hero("Garen", "28", "warrior");
let jungler = new Hero("Lee Sin", "28", "monk");
let mid = new Hero("Zed", "28", "ninja");
let adc = new Hero("Miss Fortune", "28", "shooter");
let support = new Hero("Veigar", "28", "wizard");

top.attack();
jungler.attack();
mid.attack();
adc.attack();
support.attack();