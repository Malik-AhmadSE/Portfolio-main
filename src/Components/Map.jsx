import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const marks= [
  {name:"UK", coordinate:[3.4360, 35.3781]},
   {name:"China", coordinate: [ 95.7129 , 37.0902]},
  {name:"US", coordinate: [84.1954 , 99.8617]},
]

const Map = () => {
  const [content, setContent]=useState("");
  return (
    <div className="w-full h-fit  md:h-screen flex flex-col justify-center items-center mx-auto max-w-[100rem] ">
      
      <ComposableMap
       projection="geoConicEqualArea"
  projectionConfig={{
    rotate: [-25.0, -52.0, 0],
    center: [-5, 25],
   scale: 310
  }}
      className=" w-full"
    >  
      <Geographies
        geography="./features.json"
        fillOpacity={0.2}
        fill="	#100e8f"
        stroke="#0093E9"
        strokeWidth={1.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}
            title={geo.properties.name} 
            onMouseEnter={()=>(setContent(geo.properties.name))}
            onMouseLeave={()=>setContent("")}
            style={{hover:{fill:"#3e627d", outline: "none"}}}
          />
          ))
        }

      </Geographies>
     {marks.map(({name, coordinate})=>(
      <React.Fragment key={name}>
      <Marker  coordinates={coordinate}>
      <circle r={10} fill="#b113b1" stroke="#fff" strokeWidth={2}/>
    </Marker>
    <Annotation
      subject={coordinate}
      dx={-90}
      dy={-30}
      curve={3}
      connectorProps={{
        stroke: "white",
        strokeWidth: 2,
      }}
    >
      <text x="-8" textAnchor="end" alignmentBaseline="middle"  fill="#F53">
        {name}
      </text>
    </Annotation>
    </React.Fragment>
     ))
    }
    </ComposableMap>
    </div>
  );
};

export default Map
