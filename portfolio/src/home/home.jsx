import './home.css'
function Home(){
    return(
        <div>
            
            <div id="div">
                <h1 id="wel">Welcome</h1>
                <h1 id="name">SODINAPALLI VISHNU VARDHAN REDDY</h1>
                <h3 id="cou">Full Stack Developer</h3>     
            </div>
            <h2 id="head">About me</h2>
            <div id="self">
                <div id="img">
                    <img id="img1" src={require('../asserts/images/vis_img.jpg')} alt="profile"/>
                </div>
                <div id="info">
                    <p>I'm <b>vishnu vardhan reddy</b> i am from kadapa.I completed my Bachelor's of technology in the stram of <b>computer science and engineering</b> at sv college of engineering.</p>
                    <p>I'm passionate about coding and programming solving.And profociency in <b>Python,c ,SQL,HTMl,CSS,Bootstrap,Javascript and React jS</b> my hobbies are playing cricket and watching movies.my strengths are quick learning,versatile to any environment of technology and flexible.
                    </p>
                </div>
            </div>

        </div>
    )

}
export default Home;