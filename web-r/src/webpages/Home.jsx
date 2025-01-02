import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppData from '../data/cache';
import { notifyMessage } from '../utils/notify'; // Adjust the import path as necessary

import "./components.css"


const Home = (props) => {
  // const [data, setData] = useState(null);

  const context = useContext(AppData.Context);
  const build = props.build;

  

  useEffect(() => {
    context.ready.then(() => {
      console.log(context.versions);
    }, error => {
      notifyMessage(`Error loading data: ${error}`, "error");
    });    

    return () => {
      // cleanup
    }
  }, [context]);

  if (build && !context.hasData(build)) {
    notifyMessage(`No data for ${build}`, "warning");
    return <Navigate to="/"/>;
  }
  //if (!data) return <div>Loading data...</div>;

  return (
    <>
      <div className="text-black bg-white w-full">
          <div className="grid grid-rows-2 md:grid-cols-[4fr,5fr] md:grid-rows-1 gap-4 h-screen relative">
              <div className="hidden md:block relative h-full">
                  {/* <img src={AW} alt="" className='absolute bottom-[70px] md:left-0 ml-[100px] w-full max-h-[300px] md:max-h-[600px] object-contain'/> */}
              </div>
              <div className="">
                  <div className="bg-white w-[250px] h-[160px] sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[380px] mx-auto px-auto my-[150px] md:my-[200px] rounded-2xl flex overflow-hidden">
                      <div className="m-auto">
                          <p className="home-text">Hello, I am</p>
                          <p className="home-text">Abdul Wafi,</p>
                          <p className="home-text text-blue-300">a programmer.</p>
                      </div>
                  </div>

              </div>

              <div className="block md:hidden relative h-full">
                  {/* <img src={AW} alt="" className='absolute bottom-[50px] md:left-0 sm:ml-[50px] w-full max-h-[250px] sm:max-h-[350px] md:max-h-[600px] object-contain'/> */}
              </div>

          </div>
      </div>
    </>
  );
};
  
Home.propTypes = {
  build: PropTypes.string,
};
export default Home