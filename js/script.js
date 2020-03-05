const record = document.getElementById('record'),
  shot = document.getElementById('shot'),
  hit = document.getElementById('hit'),
  dead = document.getElementById('dead'),
  enemy = document.getElementById('enemy'),
  again = document.getElementById('again');

const game = {
  ships: [
    {
      location: ['00', '01', '02', '03'],
      hit: ['', '', '', '']
    },
    {
      location: ['68', '78', '88'],
      hit: ['', '', '']
    },
    {
      location: ['43', '44'],
      hit: ['', '']
    },
    {
      location: ['90'],
      hit: ['']
    }
  ]
};

const play = {
  record: 0,
  shot: 0,
  hit: 0,
  dead: 0,
  set updateData (data) {
    this[data] += 1;
    this.render();
  },
  render() {
    record.textContent = this.record;
    shot.textContent = this.shot;
    hit.textContent = this.hit;
    dead.textContent = this.dead;
  }
};

const show = {
  hit(elem) {
    this.changeClass(elem, 'hit');
  },
  miss(elem) {
    this.changeClass(elem, 'miss');
  },
  dead(elem) {
    this.changeClass(elem, 'dead');
  },
  changeClass(elem, value) {
    elem.className = value;
  }
};

const fire = (e) => {
  let target = e.target;
  if (target.className.length > 0 || target.tagName !== "TD") return;
  show.miss(target);
  play.updateData = 'shot';
  for (let i = 0; i < game.ships.length; i++) {
    const ship = game.ships[i];
    const index = ship.location.indexOf(target.id);
    if (index >= 0) {
      show.hit(target);
      play.updateData = 'hit';
    }
  }
};

const init = () => {
  enemy.addEventListener('click', fire);
};

init();