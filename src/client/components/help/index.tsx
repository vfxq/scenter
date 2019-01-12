import * as React from 'react';
import Section from '../shared/section';
import HelpItem from './helpItem';
require('./styles/style.scss');

class Help extends React.Component{
  
  render(){
    const data = [
      {
        "id": "search",
        "title": "Поиск второй половинки",
        "extended": "Быстро решить такую проблему можно с помощью приворота - магического ритуала, подавляющего волю. Но счастья это не принесет. Последствием будут скандалы в семье, практически всегда привороженный становится алкоголиком. Создать счастливую семью можно только с родной душой - человеком, с которым у Вас есть совместные реинкарнации. С которым вы УЖЕ создавали семью и растили детей. Этот опыт Вашей души по прежнему с Вами. Осталось только найти родную душу. Это не проблема. :)"
      },
      {
        "id": "magic",
        "title": "Снятие магических воздействий",
        "extended": "Поиск спутника жизни в наше время - самая большая проблема. Быстро решить ее можно с помощью приворота - магического ритуала, подавляющего волю. "
      },
      {
        "id": "dreams",
        "title": "Толкование сновидений",
        "extended": "Поиск спутника жизни в наше время - самая большая проблема. Быстро решить ее можно с помощью приворота - магического ритуала, подавляющего волю. "
      },
      {
        "id": "request",
        "title": "Работа по индивидуальному запросу",
        "extended": "Поиск спутника жизни в наше время - самая большая проблема. Быстро решить ее можно с помощью приворота - магического ритуала, подавляющего волю. "
      },
      {
        "id": "routine",
        "title": "Апатия. Безразличие. Рутина. День сурка.",
        "extended": "Поиск спутника жизни в наше время - самая большая проблема. Быстро решить ее можно с помощью приворота - магического ритуала, подавляющего волю. "
      },
      {
        "id": "scared",
        "title": "Избавление от страхов, обид, чувства вины",
        "extended": "Поиск спутника жизни в наше время - самая большая проблема. Быстро решить ее можно с помощью приворота - магического ритуала, подавляющего волю. "
      },
      {
        "id": "talant",
        "title": "Раскрытие талантов",
        "extended": "Поиск спутника жизни в наше время - самая большая проблема. Быстро решить ее можно с помощью приворота - магического ритуала, подавляющего волю. "
      },
      {
        "id": "thinking",
        "title": "Избавление от навязчивых мыслей",
        "extended": "Поиск спутника жизни в наше время - самая большая проблема. Быстро решить ее можно с помощью приворота - магического ритуала, подавляющего волю. "
      }
    ];
    const body = data.map(item => <div key={item.id} className="helpItem"><HelpItem data={item} /></div>)

    return(
      <Section>
        <h1>Помощь</h1>
        <div className="flex-container">
          {body}
        </div>    
      </Section>
    )
  }
}

export default Help