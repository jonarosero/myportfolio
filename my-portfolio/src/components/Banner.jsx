import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState } from "react";

function Banner() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeliting, setIsDeliting] = useState(false);
  const toRotate = ["Web Developer", "Backend Developer"];
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
                    <span className='tagline'>Bienvenido a mi página Web</span>
                    <h1>{`I'm Jonathan Rosero`}<br></br><span className='wrap'>{text}</span></h1>
                    <p>Ingeniero en Sistemas, estudiante del Master de Ingeniería de Software y Dungeon Master. Me apasiona el desarrollo Backend aunque también tengo experiencia en desarrollo web, como docente universitario de desarrollo de aplicaciones nativas en nube. Como desarrollador, me enorgullece trabajar en colaboración con otros para contribuir a soluciones innovadoras que satisfagan las necesidades del cliente.</p>
                    <a href="https://wa.link/md4vzs"> 
                    <button >Escríbeme<ArrowRightCircle size={25}/></button></a>
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