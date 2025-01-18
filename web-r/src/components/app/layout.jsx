import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { setBuild } from "@/store/store";
// import { fontSans } from "@/lib/fonts"
import { MainHeader } from "@/components/main-header";
import { Container } from "@/components/ui";
import { Home, EditorComponent } from "@/components/app";

export function RootLayout({ build }) {

  const dispatch = useDispatch();
  dispatch(setBuild(build));

  return (
    <Container className="flex-col flex-1 p-0">
      <MainHeader/>
      {build ? 
        <div></div>
        : <Home></Home>

      }
      {/* <EditorComponent/> */}
    </Container>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};