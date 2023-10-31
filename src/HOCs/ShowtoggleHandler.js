import React , {useState} from 'react'

export default function ShowtoggleHandler(OriginalComponent) {

    function NewComponet(prop) {

        const [showInfo, setShowInfo] = useState(false);

        const showDataHandler = () => {
            setShowInfo(!showInfo)
        }


        return (<OriginalComponent showInfo={showInfo} showDataHandler={showDataHandler} {...prop}/>)
    }

    return  NewComponet;
}
