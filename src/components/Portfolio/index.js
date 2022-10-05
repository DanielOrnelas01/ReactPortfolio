import React from 'react';
import BarkDate from '../../assets/images/barkdate.png';
import GenderGuesser from '../../assets/images/chuck.png';
import PlentyofPups from '../../assets/images/project3.png';
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

                        <p className="center">(BarkDate) is an app where a dog owner can easily plan meetups with other dog owners.</p>
                        <p className="center">JAVASCRIPT/CSS/HANDLEBARS</p>
                     
                        <a href="https://github.com/dylanokum8/bark-date" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary"
                            >GitHub</button>
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
                        <p className="center">(Gender Guesser) guesses your gender based on your name</p>
                        <p className="center">HTML/CSS/JAVASCRIPT</p>
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
                        src={PlentyofPups}
                        alt="PlentyofPups"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">(PlentyofPups) PlentyofPups is a place where our dog users can find their true love match with other dogs</p>
                        <p className='center'> REACT/CSS/JAVASCRIPT</p>
                        <a href="https://github.com/mleone13/project-3" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://thawing-brook-13054.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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
                        <p className="center">(First Portfolio) For this challenge I wrote in HTML and CSS for a sample professional portfolio </p>
                        <p className='center'> CCS/HTML</p>
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
                        <p className="center">(Run Buddy) a website that offers fitness training services.</p>
                        <p className='center'> CCS/HTML</p>
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
                        <p className="center">(BudgetTracker)this application enables users to add expenses and deposits to their budget with or without an online connection.</p>
                        <p className='center'> CCS/HTML/JAVASCRIPT</p>
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