export default function (category, number) {
  switch(category) {
    case(0):
      const namesMario = ["Mario", "Luigi", "Princess Peach", "Bowser", "Mushroom"]
      return namesMario.slice(0, number)

    case(1):
      const namesPacMan = ["Blinky", "Pinky", "PacMan", "Inky", "Clide"]
      return namesPacMan.slice(0, number)

    case(2):
      const namesZelda = ["Link", "Princess Zelda", "Sheik", "Navi", "Ganondorf"]
      return namesZelda.slice(0, number)

    case(3):
      const namesSonic = ["Charmy", "Tails", "sonic", "Espio", "Knuckles"]
      return namesSonic.slice(0, number)

    case(3):
      const namesDonkeyKong = ["Donkey Kong", "Diddy Kong", "Cranky Kong", "Candy Kong", "Dixie Kong"]
      return namesDonkeyKong.slice(0, number)
  }
}
