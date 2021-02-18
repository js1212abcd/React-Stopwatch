import React from "react"
import './App.css';

function App() {
  const [time, setTime] = React.useState(0)
  const [timerOn, setTimeOn] = React.useState(false)

  React.useEffect(() => {
    let interval = null;
      
    // если таймер вкл. то работает интервал 1 сек
    if(timerOn) { 
      interval = setInterval(() => {
        // увеличиваю значение на 1 через 1сек
        setTime(prevTime => prevTime + 1)
      }, 1000)
      // в ином случае интервал остановлен
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])

  return (
    <div className="App">
      <div>
        {/* значение для часов */}
        <span>{("0" + Math.floor((time / 3600) % 60)).slice(-2)}:</span>
        {/* значение для минут */}
        <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</span>
        {/* значение для секунд */}
        <span>{("0" + Math.floor((time) % 60)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && (
          // счетчик запускается по клику на кн. Старт
           <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {timerOn && (
          // событие по клику на кн. Стоп состоит из 2х действий: остановка времени, обнуление
        <button onClick={() => { setTimeOn(false); setTime(0)}}>Stop</button>
        )}
        {/* счетчик останавливается по клику на Вэйт */}
        <button onDoubleClick={() => setTimeOn(false)}>Wait</button>
        {/* счетчик обнуляется по клику на кн. Ресет */}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
