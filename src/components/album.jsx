

import { useState, useEffect } from 'react'
import {Col,Row, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const  Albums = ({match}) => {
   
    const [album,setAlbum] = useState({})
   
    useEffect(()=>{
        const getAlbum = async ()=>{
            let id= match.params.id
            if(id){
                let response= await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
                let data= await response.json()
                setAlbum(data)
            }
        }
        getAlbum()
    },[match.params.id])
      
        return(
        <>
        <Container style={{marginLeft:'17rem'}}>
               <h1 className="text-light">{album.title}</h1>
                 <Row>
                     {
                        <Container className='d-flex justify-content-center'>
                        <Card style={{ height:'44rem' ,objectFit:'cover'}}>
                        <Card.Img variant="top" style={{ height:'35rem' ,objectFit:'cover'}} src={album.cover_medium} alt="album-cover"/>
                        <Card.Body>
                        <Card.Title>{album.title}</Card.Title>
                        
                     
                        </Card.Body>
                        </Card>
                        </Container>
                
               
                 }
               </Row>
        </Container>
           
        </>
        )

    }

export default Albums