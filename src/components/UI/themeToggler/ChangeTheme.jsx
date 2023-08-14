import React from "react"
import classes from './changeTheme.module.css'

const ChangeTheme = (props) => {

    function ChangeTheme (event){
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.removeItem('theme');
        }
        else {
            localStorage.setItem('theme', 'dark')
        }
        addlightClassToHTML()
    };

    function addlightClassToHTML() {
        try {
            if (localStorage.getItem('theme') === 'dark') {
                document.querySelector('html').classList.add('dark');
            }
            else {
                document.querySelector('html').classList.remove('dark');
            }
        } catch (err) { }
    }
        
    addlightClassToHTML();

    return (
        <div className={classes.themetoggle} > 
            <label className={classes.theme__toggle} >
                <input type="checkbox" onClick={ChangeTheme}/>
                <span className={classes.theme__toggle__switch}></span>
            </label>
        </div>
    )
};

export default ChangeTheme;
