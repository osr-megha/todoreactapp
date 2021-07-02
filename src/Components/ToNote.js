import React, {useState} from 'react'

const ToNote = () => {

    const [inputData, setInputData] = useState('');

    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData){
            alert("add your data");
        } else {
        setItems([...items, inputData]);
        setInputData('')
        }
    }
 // for deleting individual items
    const deleItem = (id) => {
            const updatedItems = items.filter((elem,ind) => {
                return ind !== id;
            });

            setItems(updatedItems);
    }

    //remove all
    const removeAll = () => {
        setItems([]);
    }

    return (
        <React.Fragment>
        <div className="main_div">

        <div className="center_div">

        {/*<figure>
            <img src ="" alt="" />
        
        </figure>*/}

        <figure>
        <figcaption> Add your list here 🗒️</figcaption>
        </figure>

        <div className= "addItems">
        <input type="text" placeholder="Add here ✍️" id=""
        value= {inputData}
        onChange= {(e) => setInputData(e.target.value)}/>
        <i className="fas fa-plus add-btn" title="Add here" onClick={addItem}></i>    
        </div>

        <div className= "showItems">
        {
            items.map((elem,ind)=> {
                return(
                    <div className="eachItem" key={ind}>
                        <h3> {elem}</h3>
                        <i className="far fa-trash-alt dele-btn" title="delete here" onClick={() => deleItem(ind)}></i> 
                        
                    </div> 
                )
            })
        }

        </div>
        
        <div className="showItems">

        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}> <span> Checklist</span></button>
        
        </div>
        </div>

            
        </div>

        </React.Fragment>
    )
}

export default ToNote



