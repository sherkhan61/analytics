import React from 'react';
import { Tabs } from 'antd';
import SystemsColumnFirstPart from "../systems-column/SystemsColumnFirstPart";
import SystemsColumnSecondPart from "../systems-column/SystemsColumnSecondPart";
import SystemsColumnYear from "../systems-column/SystemsColumnYear";



const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const SystemsColumnTabs = () => (
    <Tabs defaultActiveKey="1" onChange={onChange} style={{width: '66.67%'}}>
        <TabPane tab="1 полугодие" key="1">
            <SystemsColumnFirstPart />
        </TabPane>
        <TabPane tab="2 полугодие" key="2">
            <SystemsColumnSecondPart />
        </TabPane>
        <TabPane tab="Год" key="3">
            <SystemsColumnYear />
        </TabPane>
    </Tabs>
);

export default SystemsColumnTabs;
