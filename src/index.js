import "./styles.css";
import Typed from 'typed.js';

var typed = new Typed('#typed', {
  strings: ['Développeur front-end'],
  typeSpeed: Math.floor(Math.random() * (300 - 50) + 50),
  backSpeed: 50,
  loop: true,
}),

var intro = new Typed('#typedintro', {
  strings: ['Je suis actuellement en première année à EPITECH Lyon PGE promo 2025, je suis passioné par le développement front-end mobile et web.'],
  typeSpeed: 10,
  showCursor: false,
}),

var epitech = new Typed('#typedepi', {
  strings: ['Excellence, solidarité et courage sont les valeurs d’Epitech, nous formons les dirigeant·e·s de demain, reconnu·e·s pour leur singularité, leur adaptabilité et leur capacité à faire grandir les autres.'],
  typeSpeed: 10,
  showCursor: false,
}),

var projet = new Typed('#typedprojet', {
  strings: ['Cliquez pour plus d&aposninfo'],
  typeSpeed: Math.floor(Math.random() * (300 - 50) + 50),
  backSpeed: Math.floor(Math.random() * (300 - 50) + 50),
  loop: true,
  showCursor: false,
}),
