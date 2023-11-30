//id = useId()
import { useState } from 'react'
import { InputBox } from './components'
import useCurrency from './currencyHook'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currInfo = useCurrency(from)

  const options = Object.keys(currInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = ()=>{
    setConvertedAmt(amount*currInfo[to])
  }

  let BackgroundImage = 'https://img.freepik.com/free-photo/coins-paper-money-globe-white-statistic-form-background_1387-296.jpg'
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currOptions={options}
                            onCurrChange={(currency)=>setFrom(currency)}
                            onAmtChange={(amount)=>setAmount(amount)}
                            selCurr={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmt}
                            currOptions={options}
                            onCurrChange={(currency)=>setTo(currency)}
                            selCurr={to}
                            amtDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
