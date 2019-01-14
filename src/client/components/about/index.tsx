import * as React from 'react';
import Section from '../shared/section';
require('./styles/style.scss');

class About extends React.Component{
  render(){
    return (
      <Section height={600}>
        <h1>О духовном центре</h1>
        <div className="bg_pict">
          <div className="about">
            Духовный центр - это сообщество мастеров из разных частей нашей страны. Еще нас называют колдунами, магами, экстрасенсами, ведьмами... Наша профессиональная 
            область - магия, окультные знания и духовные практики. 
            Мы помогаем людям в решении самых разнообразных проблем - наладить личную жизнь, востановить здоровье, раскрыть таланты... И обучаем. Делимся знаниями, навыками и опытом.
            <br />
            Мы не имеем никакого отношения к "Битве 'экстрасенсов'"!
          </div>
        </div>
    </Section>
    );
  }
}

export default About;