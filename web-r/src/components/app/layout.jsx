import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
// import { fontSans } from "@/lib/fonts"
import { Container } from "@/components/ui";
import { EditorComponent } from "@/components/app";

export function RootLayout() {

  return (
    <Container className="flex-col flex-1">
      <EditorComponent/>
    </Container>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};