import React from 'react';
import { Layout } from "antd";

const LayoutAdmin = ({headerChildren, contentChildren, footerChildren}) => {
    return (
        <Layout>
        <Layout.Header style={{backgroundColor:"white"}}>{headerChildren}</Layout.Header>
        <Layout.Content style={{backgroundColor:"white"}}>{contentChildren}</Layout.Content>
        <Layout.Footer style={{backgroundColor:"white", justifyContent:"center"}}>{footerChildren}</Layout.Footer>
      </Layout>
    );
};

export default LayoutAdmin;