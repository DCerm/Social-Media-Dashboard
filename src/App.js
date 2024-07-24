import { SummaryData, OverviewData } from './data.js';
import { useState } from 'react';
import './css/app.css';
import Toggle from './toggle.js';

function Info(props) {
  return (
    <div className=''>
      <div className='card1 bg-cd vcenter vflex grid20'>
        <div className='grid5 vcenter mflex'>
          <img src={props.icon} alt='fb logo' className=""/>
          <span className='username'>{props.username}</span>
        </div>
        <div>
          <div className='bigNum center tx-black'>{props.number}</div>
          <p className='followers center'>{props.param}</p>
        </div>
        <div className='grid5 vcenter mflex'>
          <img src={props.caret} />
          <span className='change green'>{props.figure + ' Today'}</span>
        </div>
      </div>
    </div>
  )
}
function InfoRed({icon, username, number, param, caret, figure}) {
  return (
    <div className='card1 bg-cd'>
      <div className='vcenter vflex grid20'>
        <div className='grid5 vcenter mflex'>
          <img src={icon} alt='fb logo' className=""/>
          <span className='username'>{username}</span>
        </div>
        <div>
          <div className='bigNum center tx-black'>{number}</div>
          <p className='followers center'>{param}</p>
        </div>
        <div className='grid5 vcenter mflex'>
          <img src={caret} />
          <span className='change red'>{figure + ' Today'}</span>
        </div>
      </div>
    </div>
  )
}

function Today({param, icon, number, caret, figure}) {
  return (
    <div className='card2 bg-cd'>
      <div className='vflex grid30'>
        <div className='mflex edges'>
          <span className='param wt700'>{param}</span>
          <img src={icon} alt='fb logo' />
        </div>
        <div className='mflex edges'>
          <div className='tx-black num'>{number}</div>
          <div className='mflex change vcenter grid5'>
            <img src={caret} />
            <span className='green'>{figure + '%'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function TodayRed({param, icon, number, caret, figure}) {
  return (
    <div className='card2 bg-cd'>
      <div className='vflex grid30'>
        <div className='mflex edges'>
          <span className='param wt700'>{param}</span>
          <img src={icon} alt='fb logo' />
        </div>
        <div className='mflex edges'>
          <div className='tx-black num'>{number}</div>
          <div className='mflex change vcenter grid5'>
            <img src={caret} />
            <span className='red'>{figure + '%'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function Summary() {
  return (
    <div className='flex grid50 columns100'>
      <div className='wrapper columns25'>
        <div className='topbar bg-fb'></div>
        <Info
          icon={SummaryData[0].icon}
          username={SummaryData[0].username}
          number={SummaryData[0].number}
          param={SummaryData[0].param}
          caret={SummaryData[0].caret}
          figure={SummaryData[0].figure}
        />
      </div>
      <div className='wrapper columns25'>
        <div className='topbar bg-tw'></div>
        <Info {...SummaryData[1]}/>
      </div>
      <div className='wrapper columns25'>
        <div className='topbar bg-ig'></div>
        <Info {...SummaryData[2]}/>
      </div>
      <div className='wrapper columns25'>
        <div className='topbar bg-yt'></div>
        <InfoRed {...SummaryData[3]}/>
      </div>

    </div>
  ); 
}

function Overview() {
  return (
  <div className='vflex grid30'>
    <div className='flex grid50'>
      <div className='columns25'>
        <Today  {...OverviewData[0]} />
      </div>
      <div className='columns25'>
        <TodayRed  {...OverviewData[1]} />
      </div>
      <div className='columns25'>
        <Today {...OverviewData[2]} />
      </div>
      <div className='columns25'>
        <Today {...OverviewData[3]} />
      </div>
    </div>
    <div className='flex grid50'> 
      <div className='columns25'>
        <Today {...OverviewData[4]} />
      </div>
      <div className='columns25'>
        <Today {...OverviewData[5]} />
      </div>
      <div className='columns25'>
        <TodayRed {...OverviewData[6]} />
      </div>
      <div className='columns25'>
        <TodayRed {...OverviewData[7]} />
      </div>
    </div>
  </div>
  ); 
}


function App() {
  const [isDark, setIsDark] = useState(true);
  
  return (
  <div className="app tx-grey" data-theme={isDark ? "dark" : "light"}>
    <div className='hero'>
      <header className='box flex edges'>
        <div className='app-title'>
          <h1 className='tx-black f30 m-b0'>Social Media Dashboard</h1>
          <p className='param wt700 m0 p-t10'>Total Followers: 23,0004</p>
        </div>
        <div className='flex grid20 vcenter change tx-grey'>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        </div>
      </header>
    </div>
    <div className='box spacer50 m-t-50'>
        <Summary />
    </div>
    <div className='box spacer50 f20'>
        <h3>Overview - Today</h3>
        <div className='spacer20'></div>
        <Overview />
    </div>
  </div>
  );
}

export default App