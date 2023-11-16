import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/p1.png"
import IMG2 from "../../assets/p2.png"
import IMG3 from "../../assets/p3.png"
import IMG4 from "../../assets/p4.png"
import IMG5 from "../../assets/p5.png"
import IMG6 from "../../assets/p6.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Real time currency exchanhe checker with accurate exchange',
    github: 'https://github.com/Hasnain-ansari',
    demo: "https://hasnain-ansari.github.io/currencyRate/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Random pokemon card generator built using pokemon api and javascript',
    github: 'https://github.com/Hasnain-ansari',
    demo: " https://hasnain-ansari.github.io/pokemon-card/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Simple Dice game which toss two dice randomly built using javascript',
    github: 'https://github.com/Hasnain-ansari',
    demo: "https://hasnain-ansari.github.io/dice-game/"
  },
  {
    id: 4,
    image: IMG4,
    title: 'TicTacToe game with all the features where two player play with sound effects',
    github: 'https://github.com/Hasnain-ansari',
    demo: " https://hasnain-ansari.github.io/ticTacToe/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'A todo web app where you can create a task , delete, update. also saves the data in the local storage',
    github: 'https://github.com/Hasnain-ansari',
    demo: " https://hasnain-ansari.github.io/todo-web-app/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'A simple api fetching project to fetch any country data',
    github: 'https://github.com/Hasnain-ansari',
    demo: "https://hasnain-ansari.github.io/CountryData/"
  },
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio