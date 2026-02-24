import { useState } from "react"
import "./App.css"
import cat from "./assets/images/loading_cat.png"


const App = () => {

  const [scroll, scrollSet] = useState(0)
  // const [inMid, setInMid] = useState(false)


  let oldScroll = 0



  document.addEventListener("scroll", () => {
    scrollSet(window.scrollY)
    if (scroll > 5000) {
      // setInMid(true)
      oldScroll = 10000
      console.log("oldscroll: " + oldScroll);

      let afterMid: string = `translate(${scroll / 10}px , ${oldScroll / 10 - scroll / 10}px ) rotate(${scroll}deg)`
      setCurrent(afterMid)

      if (scroll > 10000) {

        oldScroll = 10000
        let afterMid: string = `translate(${scroll / 10}px , ${-oldScroll / 10 + scroll / 10}px ) rotate(${scroll/1}deg)`
        setCurrent(afterMid)
      }


    }
    else {
      setCurrent(beforeMid)
    }
  })

  let beforeMid: string = `translate(${scroll / 10}px , ${scroll / 10}px ) rotate(${scroll}deg)`
  // let current: string = beforeMid

  const [current, setCurrent] = useState(beforeMid)

  return (


    <>
      <main>
        <h1>{scroll}</h1>
        <img src={cat}
          className="cat"

          style={{ transform: current }} />
        {/* <h1>{scroll}</h1> */}

      </main>

      <button onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

      }}>Scroll To Top</button>
    </>
  )

}

export default App