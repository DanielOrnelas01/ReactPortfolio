import React from 'react';
import BarkDate from '../../assets/images/barkdate.png';
import GenderGuesser from '../../assets/images/chuck.png';
import Horiseon from '../../assets/images/horiseon.png';
import FirstPort from '../../assets/images/Port-project.png';
import RunBuddy from '../../assets/images/run buddy.png';
import BudgetTracker from '../../assets/images/budget-tracker.png';

function Portfolio() {
    return (
        <section className="portfolio">
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="card">
                    <img
                        src={BarkDate}
                        alt="BarkDate"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Bark Date</p>
                        <a href="https://github.com/dylanokum8/bark-date" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://barkdate.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={GenderGuesser}
                        alt="GenderGuesser"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Gender Guesser</p>
                        <a href="https://github.com/DanielOrnelas01/project-1" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://danielornelas01.github.io/project-1/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={Horiseon}
                        alt="Horiseon"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Horiseon</p>
                        <a href="https://github.com/DanielOrnelas01/urban-octo-telegram" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://danielornelas01.github.io/urban-octo-telegram/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={FirstPort}
                        alt="FirstPort"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">First Portfolio</p>
                        <a href="https://github.com/DanielOrnelas01/dans-portfolio" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://danielornelas01.github.io/dans-portfolio/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={RunBuddy}
                        alt="RunBuddy"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Run Buddy</p>
                        <a href="https://github.com/DanielOrnelas01/run-buddy" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://danielornelas01.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={BudgetTracker}
                        alt="Budget Tracker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">BudgetTracker</p>
                        <a href="https://github.com/DanielOrnelas01/BudgetTracker" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://morning-taiga-47061.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>



        </div>
    </section>
    )
}

export default Portfolio;