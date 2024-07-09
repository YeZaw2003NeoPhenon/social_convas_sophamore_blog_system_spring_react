import { useState,useEffect } from "react"
import { Alert , Container , Row } from "react-bootstrap"
export const AlertDialog = ({alertMessage , alertVariant }) => {
    const[showAlert , setShowAlert ] = useState(false)
    
    useEffect(() => {
        if(alertMessage){
            setShowAlert(true)
           const timeHandler = setTimeout(() => {
            setShowAlert(false)
        },1500)
        return () => clearTimeout(timeHandler)
       }
    },[alertMessage])

    return(
        <Container>
        <Row>
            { showAlert && (
             <Alert className = "d-flex align-items-center" onClose={() => setShowAlert(false)} variant={alertVariant} dismissible style={{ display: 'block' , minWidth:'119.8vh'}}>
              {alertMessage}
             </Alert>
            )}
            </Row>
        </Container>
    )
}