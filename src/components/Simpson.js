import './Simpson.css'

function Simpson(props) { // props destructurize ({name, pic, styleClass})
   let  {name, sername,age,info, photo}=props;


    return(
        <div >
            <h2>{name} {sername}; {age} year old</h2>
            <img src={photo} alt={'name'} />
            <p>{info}</p>
        </div>
    )
}
export default Simpson;