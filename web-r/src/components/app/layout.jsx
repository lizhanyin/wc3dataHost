import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
// import { fontSans } from "@/lib/fonts"
import { Container } from "@/components/ui";
import { EditorComponent } from "@/components/app";
import { useAppCache } from "@/hooks/use-cache";

export function RootLayout() {
  const { versions } = useAppCache();
  if (Object.keys(versions).length === 0){
    return;
  }
  console.log(versions);

  return (
    <Container className="flex-col flex-1">
      <EditorComponent/>
    </Container>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};