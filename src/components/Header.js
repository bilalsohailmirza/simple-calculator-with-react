import React, { useEffect, useRef } from "react";
import './Header.css'

function Header() {

  const resultRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView({behavior: "smooth"});
  },[])

    return(
        <div className="Header CustomScrollbar">
          <div className="HeaderHistory">
            <p>43244+34</p>
            <p>423-24-25</p>
            <p>25*342-34</p>
            <p>43244+34</p>
            <p>423-24-25</p>
            <p>25*342-34</p>
            <p>43244+34</p>
            <p>423-24-25</p>
            <p>25*342-34</p>
            <p>43244+34</p>
            <p>423-24-25</p>
            <p>25*342-34</p>
            <p>43244+34</p>
            <p>423-24-25</p>
            <p>25*342-34</p>
          </div>

          <div className="HeaderExpression CustomScrollbar">
            <p>10+45-56+</p>
          </div>
          <p ref={resultRef} className="HeaderResult">250</p>
        </div>
    )
}

export default Header;