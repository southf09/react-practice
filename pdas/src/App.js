import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
    <div>
        
        <section class="hero is-primary">
            <div class="hero-body">
            <p class="title">
            Personal Digital Assistants
            </p>
        </div>
</section>   
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa is made by Amazon."/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@Cortana32" image={CortanaImage} description="Cortana is made by Microsoft."/>   
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri is made by Apple."/>   
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;