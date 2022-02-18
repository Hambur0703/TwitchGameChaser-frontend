import React, {Component} from 'react';
import { Menu, Button, Drawer } from 'antd';
import { EyeOutlined, YoutubeOutlined, VideoCameraOutlined, StarFilled } from '@ant-design/icons';

const { SubMenu } = Menu;
const MenuKey = {
    Streams: 'streams',
    Videos: 'videos',
    Clips: 'clips'
}

class Favorites extends Component {
    state = {
        displayDrawer: false,
        // data: {
        //     VIDEO: [],
        //     STREAM: [],
        //     CLIP: [],
        // }
    }

    onDrawerClose = () => {
        this.setState({
            displayDrawer: false,
        })
    }

    onFavoriteClick = () => {
        // step1: get favorite items
        // step2: set displayDrawer to be true
        // getFavoriteItem()
        //     .then((data) => {
        //         this.setState({
        //             data,
        //             displayDrawer: true,
        //         })
        //     })
        //     .catch((err) => {
        //         message.error(err.message);
        //     })
        this.setState({
            displayDrawer: true,
        })
    }

    render() {
        const { VIDEO, STREAM, CLIP } = this.props.data;

        return (
            <div>
                <Button type="primary" shape="round" onClick={this.onFavoriteClick} icon={<StarFilled />}>
                    My Favorites</Button>
                <Drawer
                    title="My Favorites"
                    placement="right"
                    width={720}
                    visible={this.state.displayDrawer}
                    onClose={this.onDrawerClose}
                >
                    <Menu
                        mode="inline"
                        defaultOpenKeys={[MenuKey.Streams]}
                        style={{ height: '100%', borderRight: 0 }}
                        selectable={false}
                    >
                        <SubMenu key={MenuKey.Streams} icon={<EyeOutlined />} title="Streams">
                            {
                                STREAM.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                {`${item.broadcaster_name} - ${item.title}`}
                                            </a>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <SubMenu key={MenuKey.Videos} icon={<YoutubeOutlined />} title="Videos">
                            {
                                VIDEO.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                {`${item.broadcaster_name} - ${item.title}`}
                                            </a>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <SubMenu key={MenuKey.Clips} icon={<VideoCameraOutlined />} title="Clips">
                            {
                                CLIP.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                {`${item.broadcaster_name} - ${item.title}`}
                                            </a>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                    </Menu>
                </Drawer>
            </div>
        );
    }
}

export default Favorites;