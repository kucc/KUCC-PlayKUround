import React from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useMemo, useRef, useState } from 'react';

const { SubMenu } = Menu;

const NavBar = () => {
  const style = useMemo(() => ({ margin: 'auto' }));
  const [state, setState] = useState('');
  const handleClick = e => {
    setState({ current: e.key });
  };

  const { current } = useRef(state);
  return (
    <div style={style}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          첫 번째 메뉴
        </Menu.Item>
        <Menu.Item key='app' icon={<AppstoreOutlined />}>
          두 번째 메뉴
        </Menu.Item>
        <SubMenu
          key='SubMenu'
          icon={<SettingOutlined />}
          title='세 번째 메뉴 - 서브 메뉴'
        >
          <Menu.ItemGroup title='Item 1'>
            <Menu.Item key='setting:1'>옵션 1</Menu.Item>
            <Menu.Item key='setting:2'>옵션 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Item 2'>
            <Menu.Item key='setting:3'>옵션 3</Menu.Item>
            <Menu.Item key='setting:4'>옵션 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key='alipay'>
          <a
            href='https://ant.design'
            target='_blank'
            rel='noopener noreferrer'
          >
            네 번째 메뉴 - 링크
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
