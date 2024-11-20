import { Component } from "react";
import './footer.css'
class Footer extends Component{
    render(){
        return(
            <div>
                <div id="footer">
                    <h2 id="con">Contact</h2>
                    <div className="form">
                        <form className="detail">
                            <label>Name </label>
                            <input
                                className="name"
                                type="text"
                                placeholder="your name *"
                                name="name"
                                required
                            /><br/><br/>
                            <label>Phone  </label>
                            <input
                                className="name"
                                type="text"
                                placeholder="your phone *"
                                name="phone"
                                required
                            /><br /><br />
                            <label>Email  </label>
                            <input
                                className="name"
                                type="text"
                                placeholder="your email *"
                                name="email"
                                required
                            />
                            <br /><br /><br />
                            <button class="smn">
                                SEND <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            <div className="footer">
                <p className="copy">
                    Copyright © 2024 Portfolio Co., Ltd. - Design: TemplateMo
                </p>
            </div>
                    
        </div>
           
        )
    }
}
export default Footer