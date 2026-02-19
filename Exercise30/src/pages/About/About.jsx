import React, { useContext } from 'react'
import { CallApi, API_INSTANCE } from '../../Repository/API/Api';

const About = () => {

  let api_data = useContext(API_INSTANCE)
  console.log("Aboutdaki data: ", api_data);


  return (
    <div><h1> Salam Men Jafar Yad Planetden, duz 7 saata yaxindir ki bos bos islerle mesgulam, ciddi sekilde API cagirma problemlerim var ve artiq stresden eziyyet cekirem OFFF BU api cagirmaq ne qeder qeliz ola bilerdi ki? Kas vaxtinda Redux toolkit kecerdik, 7 saatdi ellesirem Context movzusu ile, geberdim daha</h1></div>
  )
}

export default About