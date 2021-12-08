import { Link } from "react-router-dom";
import './home.css';
import logo from '/Users/biancacharlotin/Development/code/React-App/task-manager-frontend/src/images/logo3.png'
export default function Home() {
    return (
        <div>
          
                <div class="card-wrap">
                    <div class="card border-0 shadow card--welcome is-show" id="welcome">
                        
                        <div class="card-body">
                        <img alt="logo" src={logo}/>
                            <h2 class="card-title">Task Manager App</h2>
                            <div class="btn-wrap">
                                <Link to='/signup' class="btn btn-lg btn-register js-btn">REGISTER</ Link>
                            <Link to='/login' class="btn btn-lg btn-login js-btn">LOGIN</ Link></div>
                        </div>

    
                </div>
            </div>


        </div>
    )
}

