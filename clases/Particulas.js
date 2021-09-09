import { Component } from 'react'
import Particles from "react-tsparticles";

class Particulas extends Component {

    constructor(props) {
        super(props);
    
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container) {
        console.log(container);
    }

    render() {
        return (

            <Particles 
                id="tsparticles"
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={{
                    background: {
                      color: {
                        value: "#1C8FE8",
                      },
                    },
                    fpsLimit: 60,
                    interactivity: {
                      detectsOn: "canvas",
                      events: {
                        onClick: {
                          enable: false,
                          mode: "push",
                        },
                        onHover: {
                          enable: false,
                          mode: "repulse",
                        },
                        resize: true,
                      },
                      modes: {
                        bubble: {
                          distance: 400,
                          duration: 2,
                          opacity: 0.8,
                          size: 40,
                        },
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4,
                        },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                      },
                      collisions: {
                        enable: true,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: .4,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          value_area: 800,
                        },
                        value: 200,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 8,
                      },
                    },
                    detectRetina: true,
                  }}
            />

        )
    }

}

export default Particulas