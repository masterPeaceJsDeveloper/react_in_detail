import React, {useState} from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue }/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <OnOff on={switchOn} onChange={(on)=> { setSwitchOn(on) }} />
            <UncontrolledOnOff onChange={setSwitchOn}/>
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            <UncontrolledRating/>
            <UncontrolledRating/>
            {/*<PageTitle title={'This is APP component'}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string,
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
