import React from 'react';
import coverImage from "../../assets/img/natasha.jpg"


function About() {
    return (
        <section className="my-5">

            <div className="my-2">
                <div className="profile-img my-5">
                    <i scr={coverImage} className="my-2" style={{ fontSize: "96px" }}></i>
                </div>
                <p>Hello! I'm Natasha. I live in Las Vegas, NV. I am Willing to move anywhere.
                I can also work remotely. I just recently changed careers. I was a Cosmetologist for 14 years. Hair
                is my
                passion. I fell in love
                with the happiness of the job. How a visit with your stylist can change your whole day. I want to
                bring
                that love into coding.
                I love the artistic side to coding. Making something from scratch and seeing it come to life is very
                rewarding
                to me. I strive for the "happy face" reaction. I aim to please above all else. Your wants and
                desires
                for your work will be my #1 focus.
                My goal is to make the vision in your head a reality! Come, sit with me. Let's discuss how I can
                help
                make you more successful!
                    </p>
            </div>

        </section>
    )
}



export default About;
