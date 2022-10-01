import React from 'react';
import ProfilePic from '../../assets/images/image01.png';

function About() {
    return (
        <section>
            <div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={ProfilePic}
					alt="about-me"
					className="photo"
				/>
			</div>
            <div className="about-me">
                <p>
                    Hi I'm Daniel - an aspiring full-stack web developer based out of Bakersfield, CA. My journey into tech started at the end of 2021, I took the opportunity to reinvent myself and pursue a new and challenging career in web development.
                </p>
                <p>
                    I'm leveraging my communications background to build a more intuitive user experience on the web. With newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on the MERN technology stack. I’m excited to apply my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                </p>
                <p>
                    When I'm not coding I enjoy cooking, spending time with my family and keeping fit. 
                </p>
            </div>
        </section>
    );
}

export default About;