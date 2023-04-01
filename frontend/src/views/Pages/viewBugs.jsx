import React, {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getBugs} from '../../controllers/redux/bugSlice'
import BugCard from '../Components/Bug Card/bugCard'
import BugView from '../Components/BugView/bugView'
import bugView from '../Components/BugView/bugView'

export default()=>{
    const [displayBug, setDisplayBug]= useState({
        name:"",
        isDisplayed:false,
    })
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    useEffect(()=>{
        dispatch(getBugs());
    },[bugs.length < 1])

    function BugClicked(name){
        setDisplayBug({
            isDisplayed:!displayBug.isDisplayed,
            name: name
        })
    }

    return(
        <div className='page-container'>
            {bugs.map((bug,key)=>(
                <BugCard key={key} bug={bug} clicked={BugClicked} />
            ))}
            {displayBug.isDisplayed && <BugView bug={bugs.filter((bug)=>{return bug.name === displayBug.name}
            )} />}
        </div>
    )
}