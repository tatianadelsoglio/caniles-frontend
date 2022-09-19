import React, { useState } from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import LayoutAdmin from './LayoutAdmin';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Admin = () => {
    const [cols, setCols] = useState(3);
    return (
        <ResponsiveReactGridLayout
        isResizable={true}
        className="layout"
        autoSize
        cols={{ lg: cols, md: cols, sm: cols - 1, xs: cols - 1, xxs: 1 }}
        onDragStop={(l, itemFrom, itemTo) => console.log(l, itemFrom, itemTo)}
        onLayoutChange={(l, itemFrom, itemTo) => {
          console.log(l, itemFrom, itemTo);
        }}
        rowHeight={15}
      >
        <div
          style={{ backgroundColor: "white", display: "flex" }}
          data-grid={{
            h: 10,
            maxW: cols,
            minW: 1,
            static: false,
            w: 1,
            x: 0,
            y: 0,
            
          }}
          key={1}
        >
          <LayoutAdmin
            headerChildren={
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                Header
              </h1>
            }
            // contentChildren={<GraficoLinea />}
            footerChildren={
              <h4 style={{ display: "flex", justifyContent: "center" }}>
                Footer
              </h4>
            }
          />
        </div>
  
        {/* <div
          style={{ backgroundColor: "white" }}
          key="1"
          data-grid={{
            h: 10,
            maxW: cols,
            minW: 1,
            static: false,
            w: 1,
            x: 0,
            y: 0,
          }}
        >
          1
        </div>
        <div
          style={{ backgroundColor: "white" }}
          key="2"
          data-grid={{
            h: 10,
            maxW: cols,
            minW: 1,
            static: false,
            w: 1,
            x: 1,
            y: 0,
          }}
        >
          2
        </div>
        <div
          style={{ backgroundColor: "white" }}
          key="3"
          data-grid={{
            h: 10,
            maxW: cols,
            minW: 1,
            static: false,
            w: 1,
            x: 0,
            y: 0,
          }}
        >
          3
        </div>
  
        <div
          style={{ backgroundColor: "white" }}
          key="4"
          data-grid={{
            isResizable: false,
            static: false,
            h: 10,
            maxW: 1,
            minW: 1,
            w: 1,
            x: 3,
            y: 0,
          }}
        >
          Agregar
        </div> */}
      </ResponsiveReactGridLayout>
    );
};

export default Admin;