import React from 'react';
import './project.css'
class Projects extends React.Component{
    render(){
        return(
            <div>
            <h1 id="head">Projects</h1>
            <div id="pr">
            <div className='pr1'>
                <h2 className='proname'>Book Store</h2>
                    <div className='img1'>
                        <img className='img1' src={require('../asserts/images/book_img.png')} alt=""/>
                    </div>
                    <div className='btn'>
                            <button className='btn1'><a href="https://github.com/Vishnusodinapalli939/book-store" alt="gitlink">GitHub</a></button>
                            <button className='btn2'><a href="https://vishnusodinapalli939.github.io/book-store/" alt="gitlink">Live Link</a></button>
                        </div>
                </div>

            <div className='pr1'>
                <h2 className='proname'>Breezed Template</h2>
                    <div className='img1'>
                        <img className='img1' src={require('../asserts/images/breeze_img.png')} alt=""/>
                    </div>
                    <div className='btn'>
                            <button className='btn1'><a href="https://github.com/Vishnusodinapalli939/project" alt="gitlink">GitHub</a></button>
                            <button className='btn2'><a href="https://vishnusodinapalli939.github.io/project/" alt="gitlink">Live Link</a></button>
                        </div>
                </div>
                
            <div className='pr1'>
                <h2 className='proname'>Weather App</h2>
                    <div className='img1'>
                        <img className='img1' src={require('../asserts/images/wea_img.png')} alt=""/>
                    </div>
                    <div className='btn'>
                            <button className='btn1'><a href="https://github.com/Vishnusodinapalli939/projects" alt="gitlink">GitHub</a></button>
                            <button className='btn2'><a href="https://vishnusodinapalli939.github.io/projects/" alt="gitlink">Live Link</a></button>
                        </div>
                </div>
                <div className='pr1'>
                <h2 className='proname'>Green Template</h2>
                    <div className='img1'>
                        <img className='img1' src={require('../asserts/images/green_img.png')} alt=""/>
                    </div>
                    <div className='btn'>
                            <button className='btn1'><a href="https://github.com/Vishnusodinapalli939/green-template" alt="gitlink">GitHub</a></button>
                            <button className='btn2'><a href="https://vishnusodinapalli939.github.io/green-template/" alt="gitlink">Live Link</a></button>
                        </div>
                </div>
                <div className='pr1'>
                <h2 className='proname'>Food Web</h2>
                    <div className='img1'>
                        <img className='img1' src={require('../asserts/images/food_img.png')} alt=""/>
                    </div>
                    <div className='btn'>
                            <button className='btn1'><a href="https://github.com/Vishnusodinapalli939/food-web" alt="gitlink">GitHub</a></button>
                            <button className='btn2'><a href="https://vishnusodinapalli939.github.io/food-web/" alt="gitlink">Live Link</a></button>
                        </div>
                </div>
                <div className='pr1'>
                    <h2 className='proname'>Calculator</h2>
                    <div className='img1'>
                        <img className='img1' src={require('../asserts/images/cal_img.png')} alt=""/>
                    </div>
                    <div className='btn'>
                            <button className='btn1'><a href="https://github.com/Vishnusodinapalli939/calculator" alt="gitlink">GitHub</a></button>
                            <button className='btn2'><a href="https://vishnusodinapalli939.github.io/calculator/" alt="gitlink">Live Link</a></button>
                        </div>
                </div>

            </div>
           
        </div>
        )
    }
}
export default Projects