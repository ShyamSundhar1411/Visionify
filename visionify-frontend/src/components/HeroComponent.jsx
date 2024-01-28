import React from "react";
import { GradientText } from "../styles/Typography";
import { Typography } from "@mui/material";

const HeroComponent = () => {
    return (
        <section className="hero">
          <div className="content">
            <GradientText variant="h1">Visionify</GradientText>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum mi sit amet tellus maximus ultrices. Nulla facilisi.
              Maecenas eget efficitur lacus, eget pretium nunc. Vivamus a eros
              vel augue ultricies fringilla. Duis nec efficitur lacus, vel
              dignissim velit. Curabitur auctor libero sed augue consequat
              aliquet.
            </Typography>
            <div className="field">
              <div className="mouse"></div>
            </div>
          </div>
        </section>
    )
}

export default HeroComponent;