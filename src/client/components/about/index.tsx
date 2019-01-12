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
            Духовный центр - это сообщество мастеров из разных мест нашей страны и не только. Наша профессиональная 
            область - эзотерика, магия и духовные практики.
            Мы помогаем людям в решении самых разнообразных проблем различной сложности, а так же проводим обучение. 
            Помощь всегда индивидуальна и возможна только при личной встрече. 
          </div>
        </div>
    </Section>
    );
  }
}

export default About;