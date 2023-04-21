import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState } from "react";

function Banner() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeliting, setIsDeliting] = useState(false);
  const toRotate = ["Web Developer", "Backend Developer", "Scrum Master"];
  const [delta, setDelta] = useState(300-Math.random()*100);
  const [text, setText] = useState('');
  const period = 2000;
  
  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick();
    }, delta)

    return ()=>{clearInterval(ticker)}
  },[text]);

  const tick=()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeliting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeliting){
      setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeliting && updatedText === fullText){
      setIsDeliting(true);
      setDelta(period);
    }else if(isDeliting && updatedText === ''){
      setIsDeliting(false);
      setLoopNum(loopNum+1);
      setDelta(500);
    }
  }


  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Jonathan `}<span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed elementum justo. Nulla ac luctus ipsum, at fermentum magna. Praesent commodo, dui sit amet ultrices malesuada, lacus nisl sodales felis, sit amet porttitor augue eros a lorem. Aliquam dictum augue ut justo tempor viverra. Pellentesque elit velit, ultrices et turpis in, accumsan ultricies lorem.</p>
                    <a href="https://wa.link/md4vzs">
                    <button >Let's connect<ArrowRightCircle size={25}/></button></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt='Headder Img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner