import { useEffect } from 'react'
import './customCheckBox.css'

const CustomCheckBox = ({options}) => {
    
    const optionList = Object.keys(options)

    useEffect(()=>{
        optionList.map((option)=> {
            const group = document.getElementsByName(option)
            group[0].checked = true
        })
    }, [])
    
    const handleOnChange = (event, optionType) => {
        const group = document.getElementsByName(optionType);
        for(let item of group) {
            item.checked = false
        }
        event.currentTarget.checked = true
    }

    return (
        optionList.map((option) => {
            return (
                <div className="options">
                    <h3>{option}</h3>
                    <div className="option">
                        {
                            options[option].map((opt) => {
                                return (
                                    <label className="option-box">
                                        <input 
                                            type="checkbox" 
                                            class="checkbox" 
                                            name={option}
                                            value={opt}
                                            onChange={(e)=> handleOnChange(e, option)}
                                        />
                                        <span className="checkmark"></span>
                                        {
                                            option==="Color" 
                                            ? <span className="option-value" style={{background: `${opt}`, backgroundClip: 'content-box'}}></span> 
                                            : <span className="option-value">{opt}</span>
                                        }
                                    </label>
                                // (/^#[0-9a-fA-F]{3,6}/).test(opt) ? <span style={{background: `${opt}`, backgroundClip: 'content-box'}}></span> : <span>{opt}</span>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
    )
}

export default CustomCheckBox