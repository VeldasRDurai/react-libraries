import React from 'react';
import styled from 'styled-components';
import CountUp, { useCountUp } from 'react-countup';
   
const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ReactCountUp = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 100,
    startOnMount: false
  })
  return (
    <Div>
        <h1>{countUp}</h1>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause/Resume</button>
            <button onClick={() => update(2000)}>Update to 2000</button>
        </div>
        <CountUp start={500} end={1000} duration={5} prefix='PRE ' suffix=' SUF' decimals={2} />
    </Div>
  )
}

export default ReactCountUp;